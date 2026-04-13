/**
 * 粤出行城际巴士 API 重放脚本
 * 逆向自 wxapkg 反编译源码
 *
 * 安全机制:
 *   1. PoW (Proof of Work) 挑战 — SHA256(challenge + nonce) 前缀匹配 difficulty
 *   2. SM4 加密请求体 (部分接口豁免)
 *   3. SM3 签名
 *
 * 本脚本实现了 PoW 求解 + 免加密接口的完整请求链，可直接 node 运行。
 */

const crypto = require("crypto");

// ============================================================
// 配置 (从反编译 ext config 中提取)
// ============================================================
const CONFIG = {
  host: "https://15676888-api.ylxweb.com",
  corpID: "ycx",
  appid: "wx44d254291f27af7c",
  version: "2.15.255",
  defaultRequestUrl: "/api/wg.do",
};

// ============================================================
// PoW Challenge 求解器
// ============================================================

function sha256hex(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

function returnXCANonce(corpid) {
  const rand = Math.floor(1e4 + 9e4 * Math.random());
  const randStr = Math.random().toString(36).substring(2);
  return Date.now() + rand + randStr + corpid;
}

async function fetchNewChallenge(count = 1) {
  const url = `${CONFIG.host}/api/newChallengeV3`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-Ca-Nonce": returnXCANonce(CONFIG.corpID),
      corpid: CONFIG.corpID,
      v: CONFIG.version,
    },
    body: `countString=${count}`,
  });

  const data = await resp.json();
  if (!data.success || !data.data) {
    throw new Error("获取 challenge 失败: " + JSON.stringify(data));
  }

  const raw = typeof data.data === "string" ? data.data : "";
  const parts = raw.split(",").filter(Boolean);
  const challenges = [];
  for (const part of parts) {
    const [challenge, difficulty] = part.split("_");
    if (challenge && difficulty) {
      challenges.push({ challenge, difficulty, originalKey: part, nonce: 0 });
    }
  }
  return challenges;
}

function solveChallenge(item) {
  let { challenge, difficulty, nonce } = item;
  const diffLen = difficulty.length;
  while (true) {
    const hash = sha256hex(challenge + nonce);
    if (hash.substring(0, diffLen) === difficulty) {
      item.nonce = nonce;
      return item;
    }
    nonce++;
  }
}

async function getChallengeHeaders() {
  const items = await fetchNewChallenge(1);
  if (!items.length) throw new Error("无可用 challenge");
  const solved = solveChallenge(items[0]);
  return {
    "X-Ca-Nonce": solved.challenge + solved.nonce,
    challenge: solved.originalKey,
    bucket: String(solved.nonce),
  };
}

// ============================================================
// 通用请求函数
// ============================================================

async function requestPOST(params, path) {
  const url = path || CONFIG.defaultRequestUrl;
  const challengeHeaders = await getChallengeHeaders();
  const body = {
    ...params,
    corpid: CONFIG.corpID,
    subAppid: CONFIG.appid,
    appid: CONFIG.appid,
  };

  const resp = await fetch(CONFIG.host + url, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      ...challengeHeaders,
    },
    body: new URLSearchParams(body).toString(),
  });
  return resp.json();
}

async function requestPOSTV3(actionParams, opts = {}) {
  const challengeHeaders = await getChallengeHeaders();
  const url = `${CONFIG.host}${CONFIG.defaultRequestUrl}?v3=1&corpid=${CONFIG.corpID}`;

  const payload = {
    corpid: CONFIG.corpID,
    appid: CONFIG.appid,
    action: actionParams.action || "",
    object: { ...actionParams, subAppid: CONFIG.appid },
  };
  delete payload.object.action;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...challengeHeaders,
    },
    body: JSON.stringify(payload),
  });
  return resp.json();
}

/**
 * 免加密接口 POST (如线路查询)
 * 部分接口不需要 SM4 加密, 只需要 PoW challenge
 */
async function requestPOSTNoEncrypt(data, apiPath) {
  const challengeHeaders = await getChallengeHeaders();
  const ts = Math.floor(Date.now() / 1000);

  const resp = await fetch(CONFIG.host + apiPath, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...challengeHeaders,
      corpid: CONFIG.corpID,
      "request-time": String(ts),
      appid: CONFIG.appid,
    },
    body: JSON.stringify(data),
  });
  return resp.json();
}

// ============================================================
// V1 RESTful 接口 (requestFetch 方式, 只需 PoW, 无需 SM4)
// 路径格式: /api/v1/{corpID}/{appid}/{module}/{action}
// ============================================================

const API_V1_BASE = `/api/v1/${CONFIG.corpID}/${CONFIG.appid}`;

async function requestGETv1(path, params = {}) {
  const challengeHeaders = await getChallengeHeaders();
  const baseParams = {
    corpid: CONFIG.corpID,
    subAppid: CONFIG.appid,
    appid: CONFIG.appid,
  };
  const allParams = { ...baseParams, ...params };
  const qs = new URLSearchParams(allParams).toString();
  const url = `${CONFIG.host}${API_V1_BASE}${path}${qs ? "?" + qs : ""}`;
  console.log(`  GET ${url}`);
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      ...challengeHeaders,
      corpid: CONFIG.corpID,
    },
  });
  return resp.json();
}

/** 查询出发城市列表 */
async function queryStartCity(lineType = "bus") {
  console.log("\n=== 查询出发城市 ===");
  const result = await requestGETv1("/line/queryStartCity", {
    line_type: lineType,
    account: CONFIG.corpID,
  });
  console.log(JSON.stringify(result, null, 2).slice(0, 3000));
  return result;
}

/** 查询到达城市列表 */
async function getEndCityList(startCityId, lineType = "all") {
  console.log(`\n=== 查询到达城市 (出发: ${startCityId}) ===`);
  const result = await requestGETv1("/line/getEndCityList", {
    startCityId,
    lineType,
  });
  console.log(JSON.stringify(result, null, 2).slice(0, 3000));
  return result;
}

/** 查询班次列表 V2 */
async function queryIntervalListV2({ startCityId, endCityId, tripDate, start = 0, limit = 20 }) {
  console.log(`\n=== 查询班次 V2: cityId ${startCityId} → ${endCityId}, ${tripDate} ===`);
  const result = await requestGETv1("/interval/intervalListV2", {
    tripDate,
    startCityId,
    endCityId,
    start,
    limit,
    startAreaId: "",
    endAreaId: "",
  });
  console.log(JSON.stringify(result, null, 2).slice(0, 5000));
  return result;
}

/** 查询日历 (动态, 按城市) */
async function queryCalendarDynamic(startCityId, endCityId) {
  console.log(`\n=== 查询日历: ${startCityId} → ${endCityId} ===`);
  const result = await requestGETv1("/date/calendarDynamic", {
    startCityId,
    endCityId,
  });
  console.log(JSON.stringify(result, null, 2).slice(0, 2000));
  return result;
}

// ============================================================
// 主流程
// ============================================================

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

async function main() {
  console.log("粤出行城际巴士 API 重放");
  console.log("Host:", CONFIG.host);
  console.log("CorpID:", CONFIG.corpID);
  console.log("");

  try {
    // Step 1: 获取出发城市列表
    console.log("[1/4] 查询出发城市...");
    const startCities = await queryStartCity();

    if (!startCities?.data?.length) {
      console.log("未获取到城市列表，退出");
      return;
    }

    // 找深圳和广州
    const szCity = startCities.data.find((c) => c.city === "深圳") || startCities.data[0];
    const gzCityId = "020"; // 广州

    // Step 2: 查询到达城市
    console.log(`\n[2/4] 查询到达城市 (出发: ${szCity.city}, id=${szCity.cityId})...`);
    const endCities = await getEndCityList(szCity.cityId, "bus");

    if (endCities?.data?.length) {
      console.log(`  共 ${endCities.data.length} 个到达城市`);
    }

    // Step 3: 查询日历
    console.log(`\n[3/4] 查询日历: ${szCity.city} → 广州...`);
    await queryCalendarDynamic(szCity.cityId, gzCityId);

    // Step 4: 查询班次
    console.log(`\n[4/4] 查询班次: ${szCity.city} → 广州, ${tomorrow()}...`);
    await queryIntervalListV2({
      startCityId: szCity.cityId,
      endCityId: gzCityId,
      tripDate: tomorrow(),
    });

    console.log("\n=== 全部接口测试完成 ===");
  } catch (err) {
    console.error("请求失败:", err.message);
    console.error(err.stack);
  }
}

main();

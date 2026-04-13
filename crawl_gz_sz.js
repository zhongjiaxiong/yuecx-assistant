/**
 * 粤出行 — 广州→深圳 未来15天全部班次数据抓取
 * 输出: yuecx/data/gz_to_sz_YYYYMMDD.json (按天分文件)
 *       yuecx/data/gz_to_sz_all.json      (汇总)
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

// ============================================================
// 配置
// ============================================================
const CONFIG = {
  host: "https://15676888-api.ylxweb.com",
  corpID: "ycx",
  appid: "wx44d254291f27af7c",
  version: "2.15.255",
};

const API_V1_BASE = `/api/v1/${CONFIG.corpID}/${CONFIG.appid}`;
const GZ_CITY_ID = "020";
const SZ_CITY_ID = "440300";
const DAYS = 15;
const PAGE_SIZE = 100;
const DATA_DIR = path.join(__dirname, "data");

// ============================================================
// PoW
// ============================================================
function sha256hex(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

function returnXCANonce() {
  return (
    Date.now() +
    Math.floor(1e4 + 9e4 * Math.random()) +
    Math.random().toString(36).substring(2) +
    CONFIG.corpID
  );
}

async function fetchNewChallenge(count = 1) {
  const resp = await fetch(`${CONFIG.host}/api/newChallengeV3`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-Ca-Nonce": String(returnXCANonce()),
      corpid: CONFIG.corpID,
      v: CONFIG.version,
    },
    body: `countString=${count}`,
  });
  const data = await resp.json();
  if (!data.success || !data.data) {
    throw new Error("获取 challenge 失败: " + JSON.stringify(data));
  }
  const parts = data.data.split(",").filter(Boolean);
  return parts.map((p) => {
    const [challenge, difficulty] = p.split("_");
    return { challenge, difficulty, originalKey: p, nonce: 0 };
  });
}

function solveChallenge(item) {
  let { challenge, difficulty } = item;
  const diffLen = difficulty.length;
  let nonce = 0;
  while (true) {
    if (sha256hex(challenge + nonce).substring(0, diffLen) === difficulty) {
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
// 请求
// ============================================================
async function requestGETv1(apiPath, params = {}) {
  const challengeHeaders = await getChallengeHeaders();
  const allParams = {
    corpid: CONFIG.corpID,
    subAppid: CONFIG.appid,
    appid: CONFIG.appid,
    ...params,
  };
  const qs = new URLSearchParams(allParams).toString();
  const url = `${CONFIG.host}${API_V1_BASE}${apiPath}?${qs}`;
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

// ============================================================
// 业务
// ============================================================

async function fetchIntervalPage(tripDate, start = 0, limit = PAGE_SIZE) {
  return requestGETv1("/interval/intervalListV2", {
    tripDate,
    startCityId: GZ_CITY_ID,
    endCityId: SZ_CITY_ID,
    start,
    limit,
    startAreaId: "",
    endAreaId: "",
  });
}

/**
 * 抓取某天的全部班次（自动翻页）
 */
async function fetchAllIntervalsForDate(tripDate) {
  let start = 0;
  let allIntervals = [];
  let filterGroup = null;
  let page = 1;

  while (true) {
    const result = await fetchIntervalPage(tripDate, start, PAGE_SIZE);

    if (!result.success) {
      console.log(`    [!] 请求失败: ${result.message || "unknown"}`);
      break;
    }

    const data = result.data;
    if (!data) break;

    if (!filterGroup && data.filterGroup) {
      filterGroup = data.filterGroup;
    }

    const intervals = data.intervalList || [];
    if (intervals.length === 0) break;

    allIntervals = allIntervals.concat(intervals);
    console.log(`    第${page}页: ${intervals.length} 条班次`);

    if (intervals.length < PAGE_SIZE) break;

    start += PAGE_SIZE;
    page++;
    await sleep(300);
  }

  return { intervals: allIntervals, filterGroup };
}

// ============================================================
// 工具
// ============================================================

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function generateDateList(days) {
  const dates = [];
  const now = new Date();
  for (let i = 0; i < days; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    dates.push(formatDate(d));
  }
  return dates;
}

// ============================================================
// 主流程
// ============================================================

async function main() {
  console.log("========================================");
  console.log("  粤出行 广州→深圳 未来15天班次数据抓取");
  console.log("========================================\n");

  fs.mkdirSync(DATA_DIR, { recursive: true });

  const dates = generateDateList(DAYS);
  console.log(`抓取日期: ${dates[0]} ~ ${dates[dates.length - 1]} (共${dates.length}天)\n`);

  const allData = {
    crawlTime: new Date().toISOString(),
    route: "广州→深圳",
    startCityId: GZ_CITY_ID,
    endCityId: SZ_CITY_ID,
    days: [],
  };

  let totalIntervals = 0;

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    console.log(`[${i + 1}/${dates.length}] ${date}...`);

    try {
      const { intervals, filterGroup } = await fetchAllIntervalsForDate(date);

      const dayData = {
        date,
        intervalCount: intervals.length,
        intervals,
        filterGroup,
      };

      totalIntervals += intervals.length;
      allData.days.push(dayData);

      // 保存每天的文件
      const dayFile = path.join(DATA_DIR, `gz_to_sz_${date}.json`);
      fs.writeFileSync(dayFile, JSON.stringify(dayData, null, 2), "utf-8");
      console.log(`    ✓ ${intervals.length} 条班次 → ${path.basename(dayFile)}`);
    } catch (err) {
      console.error(`    ✗ 抓取失败: ${err.message}`);
      allData.days.push({ date, error: err.message, intervalCount: 0, intervals: [] });
    }

    // 请求间隔，避免频率过高
    if (i < dates.length - 1) {
      await sleep(500);
    }
  }

  // 保存汇总文件
  allData.totalIntervals = totalIntervals;
  const allFile = path.join(DATA_DIR, "gz_to_sz_all.json");
  fs.writeFileSync(allFile, JSON.stringify(allData, null, 2), "utf-8");

  console.log("\n========================================");
  console.log(`  抓取完成!`);
  console.log(`  日期范围: ${dates[0]} ~ ${dates[dates.length - 1]}`);
  console.log(`  总班次数: ${totalIntervals}`);
  console.log(`  汇总文件: ${allFile}`);
  console.log("========================================");
}

main().catch(console.error);

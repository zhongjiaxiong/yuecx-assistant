/**
 * 数据源 API 层 — 实时查询 + 元数据同步
 * 仅保留按需实时查询和城市/路线元数据同步。
 */

require("dotenv/config");
const crypto = require("crypto");
const db = require("./db");

const HOST = process.env.YUECX_HOST || "https://15676888-api.ylxweb.com";
const CORP_ID = process.env.YUECX_CORP_ID || "ycx";
const APPID = process.env.YUECX_APPID || "wx44d254291f27af7c";
const VERSION = "2.15.255";
const API_V1_BASE = `/api/v1/${CORP_ID}/${APPID}`;
const PAGE_SIZE = 100;

// ── PoW ─────────────────────────────────────────────────────

function sha256hex(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

function returnXCANonce() {
  return (
    Date.now() +
    Math.floor(1e4 + 9e4 * Math.random()) +
    Math.random().toString(36).substring(2) +
    CORP_ID
  );
}

async function fetchNewChallenge(count = 1) {
  const resp = await fetch(`${HOST}/api/newChallengeV3`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-Ca-Nonce": String(returnXCANonce()),
      corpid: CORP_ID,
      v: VERSION,
    },
    body: `countString=${count}`,
  });
  const data = await resp.json();
  if (!data.success || !data.data) throw new Error("PoW challenge failed");
  return data.data.split(",").filter(Boolean).map((p) => {
    const [challenge, difficulty] = p.split("_");
    return { challenge, difficulty, originalKey: p, nonce: 0 };
  });
}

function solveChallenge(item) {
  const { challenge, difficulty } = item;
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
  if (!items.length) throw new Error("No challenge");
  const solved = solveChallenge(items[0]);
  return {
    "X-Ca-Nonce": solved.challenge + solved.nonce,
    challenge: solved.originalKey,
    bucket: String(solved.nonce),
  };
}

// ── HTTP ────────────────────────────────────────────────────

async function requestGETv1(apiPath, params = {}) {
  const challengeHeaders = await getChallengeHeaders();
  const allParams = { corpid: CORP_ID, subAppid: APPID, appid: APPID, ...params };
  const qs = new URLSearchParams(allParams).toString();
  const url = `${HOST}${API_V1_BASE}${apiPath}?${qs}`;
  const resp = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json", ...challengeHeaders, corpid: CORP_ID },
  });
  return resp.json();
}

// ── Helpers ─────────────────────────────────────────────────

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ── 元数据同步 ──────────────────────────────────────────────

async function syncMeta() {
  console.log("[meta] 同步城市列表...");
  const startResult = await requestGETv1("/line/queryStartCity", { line_type: "bus", account: CORP_ID });
  if (!startResult.success || !startResult.data) throw new Error("queryStartCity failed");

  const cities = startResult.data;
  for (const c of cities) {
    await db.upsertCity(c.cityId, c.city || c.cityName);
  }
  console.log(`[meta] ${cities.length} 个城市已同步`);

  console.log("[meta] 同步路线...");
  let routeCount = 0;
  for (let i = 0; i < cities.length; i++) {
    const c = cities[i];
    const endResult = await requestGETv1("/line/getEndCityList", {
      startCityId: c.cityId,
      lineType: "bus",
    });
    if (endResult.success && endResult.data) {
      for (const dest of endResult.data) {
        await db.upsertCity(dest.cityId, dest.cityName);
        await db.upsertRoute(c.cityId, dest.cityId);
        routeCount++;
      }
    }
    if (i % 10 === 0) console.log(`  [${i + 1}/${cities.length}] ${c.city || c.cityName}...`);
    await sleep(200);
  }
  console.log(`[meta] ${routeCount} 条路线已同步`);
}

// ── 按需实时查询单路线单日 ───────────────────────────────────

async function fetchRouteDay(routeId, startCityId, endCityId, tripDate) {
  let start = 0;
  const all = [];
  const crawlTime = new Date().toISOString();

  while (true) {
    const result = await requestGETv1("/interval/intervalListV2", {
      tripDate, startCityId, endCityId, start, limit: PAGE_SIZE,
      startAreaId: "", endAreaId: "",
    });
    if (!result.success || !result.data) break;
    const list = result.data.intervalList || [];
    if (list.length === 0) break;

    for (const raw of list) {
      all.push({
        interval_id: raw.id,
        route_id: routeId,
        take_date: tripDate,
        from_time: raw.fromTime || "",
        interval_name: raw.intervalName || "",
        price_fen: raw.bottomPriceFen || 0,
        residue: raw.residue ?? 0,
        status: raw.status ?? 0,
        line_id: raw.lineId || "",
        boarding_stations: (raw.addressList || []).map((s) => ({
          name: s.name, arriveTime: s.arriveTime || "", adcode: s.adcode || "",
          code: s.code || "", id: s.id || "",
        })),
        dropoff_stations: (raw.getOffAddressList || []).map((s) => ({
          name: s.name, arriveTime: s.arriveTime || "", adcode: s.adcode || "",
          code: s.code || "", id: s.id || "",
        })),
        raw_data: raw,
        crawl_time: crawlTime,
      });
    }

    if (list.length < PAGE_SIZE) break;
    start += PAGE_SIZE;
    await sleep(300);
  }

  if (all.length > 0) {
    await db.upsertIntervals(all);
  }
  return all.length;
}

async function crawlOnDemand(startCityId, endCityId, date) {
  const routeId = await db.getRouteId(startCityId, endCityId);
  if (!routeId) return 0;
  const count = await fetchRouteDay(routeId, startCityId, endCityId, date);
  await db.updateRouteLastCrawl(routeId);
  return count;
}

module.exports = { requestGETv1, getChallengeHeaders, crawlOnDemand, syncMeta };

// ── CLI ─────────────────────────────────────────────────────

if (require.main === module) {
  (async () => {
    try {
      await syncMeta();
      await db.cleanExpired();
    } catch (err) {
      console.error("Sync failed:", err);
      process.exit(1);
    } finally {
      await db.close();
    }
  })();
}

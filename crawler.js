/**
 * 粤出行城际巴士数据爬虫 — 全城市版
 * 支持三种模式:
 *   --mode meta   同步城市+路线元数据
 *   --mode full   全量爬取所有路线（未来 N 天）
 *   --mode hot    只爬热门路线（今天+明天）
 *
 * 数据写入 PostgreSQL (DATABASE_URL)。
 */

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

module.exports = { requestGETv1, getChallengeHeaders };

// ── Helpers ─────────────────────────────────────────────────

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

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

// ── Mode: meta — 同步城市和路线 ─────────────────────────────

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

// ── 爬取单条路线单日 ────────────────────────────────────────

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

// ── Mode: full — 全量爬取 ───────────────────────────────────

async function crawlFull(days = 7, chunk = null, totalChunks = null) {
  const routes = await db.getAllRoutes();
  const dates = generateDateList(days);

  let filtered = routes;
  if (chunk !== null && totalChunks !== null) {
    filtered = routes.filter((r) => r.id % totalChunks === chunk);
    console.log(`[full] Chunk ${chunk}/${totalChunks}: ${filtered.length} / ${routes.length} 条路线`);
  }

  console.log(`[full] ${filtered.length} 条路线 x ${dates.length} 天`);
  let totalIntervals = 0;

  for (let i = 0; i < filtered.length; i++) {
    const r = filtered[i];
    let routeTotal = 0;
    for (const date of dates) {
      try {
        const count = await fetchRouteDay(r.id, r.start_city_id, r.end_city_id, date);
        routeTotal += count;
      } catch (err) {
        console.error(`  ✗ ${r.start_name}→${r.end_name} ${date}: ${err.message}`);
      }
      await sleep(200);
    }
    totalIntervals += routeTotal;
    await db.updateRouteLastCrawl(r.id);
    if (i % 20 === 0 || routeTotal > 0) {
      console.log(`  [${i + 1}/${filtered.length}] ${r.start_name}→${r.end_name}: ${routeTotal} 条`);
    }
  }

  console.log(`[full] 完成: ${totalIntervals} 条班次`);
  return totalIntervals;
}

// ── Mode: hot — 热门路线 ────────────────────────────────────

async function crawlHot() {
  const routes = await db.getHotRoutes();
  if (routes.length === 0) {
    console.log("[hot] 无热门路线。请先在 routes 表中设置 is_hot = TRUE。");
    return 0;
  }
  const dates = generateDateList(2); // today + tomorrow
  console.log(`[hot] ${routes.length} 条热门路线 x ${dates.length} 天`);

  let total = 0;
  for (const r of routes) {
    for (const date of dates) {
      try {
        const count = await fetchRouteDay(r.id, r.start_city_id, r.end_city_id, date);
        total += count;
      } catch (err) {
        console.error(`  ✗ ${r.start_name}→${r.end_name} ${date}: ${err.message}`);
      }
      await sleep(200);
    }
    await db.updateRouteLastCrawl(r.id);
    console.log(`  ${r.start_name}→${r.end_name} done`);
  }

  console.log(`[hot] 完成: ${total} 条班次`);
  return total;
}

// ── 按需爬取单路线（API 服务器调用） ────────────────────────

async function crawlOnDemand(startCityId, endCityId, date) {
  const routeId = await db.getRouteId(startCityId, endCityId);
  if (!routeId) return 0;
  const count = await fetchRouteDay(routeId, startCityId, endCityId, date);
  await db.updateRouteLastCrawl(routeId);
  return count;
}

module.exports.crawlOnDemand = crawlOnDemand;
module.exports.syncMeta = syncMeta;

// ── CLI ─────────────────────────────────────────────────────

if (require.main === module) {
  const args = process.argv.slice(2);
  const modeIdx = args.indexOf("--mode");
  const mode = modeIdx >= 0 ? args[modeIdx + 1] : "full";
  const chunkIdx = args.indexOf("--chunk");
  const chunk = chunkIdx >= 0 ? parseInt(args[chunkIdx + 1], 10) : null;
  const chunksIdx = args.indexOf("--total-chunks");
  const totalChunks = chunksIdx >= 0 ? parseInt(args[chunksIdx + 1], 10) : null;
  const daysIdx = args.indexOf("--days");
  const days = daysIdx >= 0 ? parseInt(args[daysIdx + 1], 10) : 7;

  (async () => {
    try {
      if (mode === "meta") {
        await syncMeta();
      } else if (mode === "hot") {
        await crawlHot();
      } else {
        await crawlFull(days, chunk, totalChunks);
      }
      await db.cleanExpired();
    } catch (err) {
      console.error("Crawl failed:", err);
      process.exit(1);
    } finally {
      await db.close();
    }
  })();
}

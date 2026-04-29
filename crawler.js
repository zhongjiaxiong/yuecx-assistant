/**
 * 数据源 API 层 — 实时查询 + 元数据同步
 * 仅保留按需实时查询和城市/路线元数据同步。
 */

require("dotenv/config");
const crypto = require("crypto");
const db = require("./db");
const gaodeMap = require("./gaode-map");

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
    signal: AbortSignal.timeout(10000),
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
    signal: AbortSignal.timeout(15000),
  });
  return resp.json();
}

/**
 * POST 到 /api/wg.do —— 用于 action 型接口（area.query_by_start_end 等）。
 * 免加密接口，只需 PoW。
 */
async function requestActionPOST(params) {
  const challengeHeaders = await getChallengeHeaders();
  const body = new URLSearchParams({ corpid: CORP_ID, subAppid: APPID, appid: APPID, ...params }).toString();
  const resp = await fetch(`${HOST}/api/wg.do`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", ...challengeHeaders },
    body,
    signal: AbortSignal.timeout(15000),
  });
  return resp.json();
}

// ── 路线可选上下车点 —— 粤出行 interval 页的 LocationId 就是从这里来的 ──
// 缓存避免重复打后端（同一路线短时间内稳定）
const locationCache = new Map(); // key: `${startCityId}_${endCityId}` → { at: ms, boarding: [], dropoff: [] }
const LOCATION_TTL_MS = 30 * 60 * 1000; // 30 分钟

/**
 * 返回 { boarding: [{id, name, lat, lng, city}], dropoff: [...] }
 * id 就是粤出行 interval.getListByCityIdAndLocationId 要求的 locationId
 */
async function queryRouteLocations(startCityId, endCityId) {
  const key = `${startCityId}_${endCityId}`;
  const hit = locationCache.get(key);
  if (hit && Date.now() - hit.at < LOCATION_TTL_MS) return hit;

  const result = await requestActionPOST({
    action: "area.query_by_start_end",
    start_id: startCityId,
    end_id: endCityId,
  });
  if (!result?.data?.location) {
    const empty = { at: Date.now(), boarding: [], dropoff: [] };
    locationCache.set(key, empty);
    return empty;
  }
  const boarding = [];
  const dropoff = [];
  for (const loc of result.data.location) {
    const rec = {
      id: String(loc.ID),
      name: loc.address || loc.station_addr || "",
      lat: parseFloat(loc.y) || null, // note: API swaps (x=lng, y=lat)
      lng: parseFloat(loc.x) || null,
      city: loc.city || "",
    };
    if (loc.locationType === 0 || loc.locationType === "0") boarding.push(rec);
    else if (loc.locationType === 2 || loc.locationType === "2") dropoff.push(rec);
  }
  const entry = { at: Date.now(), boarding, dropoff };
  locationCache.set(key, entry);
  return entry;
}

/**
 * 按站名模糊匹配真实 locationId。
 * 粤出行 area.query_by_start_end 的同名站点可能有多条（如"大剧院地铁站E出口"
 * 和"大剧院地铁站E出口（直达花都）"），后者是特定子线路，前者是通用主线。
 * 策略：先做 exact-clean 匹配；再做去括号后 prefix 匹配；同时**惩罚**带
 * "（直达X）""（往X方向）"等子线路标记的候选，避免误跳到冷门线路。
 *
 * @param {Array} locList queryRouteLocations 返回的 boarding 或 dropoff 数组
 * @param {string} stationName 我们 DB 里班次站点的 name
 * @returns {string|null} 命中的 locationId 或 null
 */
function matchRealLocationId(locList, stationName) {
  if (!stationName || !locList?.length) return null;

  const stripParen = (s) => String(s).replace(/[（(][^）)]*[）)]/g, "").replace(/\s+/g, "");
  const isSubroute = (name) => /[（(](直达|开往|往|经|转)/.test(String(name || ""));
  const needle = stripParen(stationName);
  if (!needle) return null;

  // 打分：exact > double-contains > prefix。子线路标记的候选统一减分。
  const candidates = [];
  for (const l of locList) {
    const hay = stripParen(l.name);
    let score = 0;
    if (hay === needle) score = 100;
    else if (hay.includes(needle) || needle.includes(hay)) {
      // 选最接近长度的那个
      score = 60 - Math.abs(hay.length - needle.length);
    } else if (needle.length >= 4 && hay.includes(needle.slice(0, Math.min(6, needle.length - 1)))) {
      score = 30 - Math.abs(hay.length - needle.length);
    }
    if (score <= 0) continue;
    if (isSubroute(l.name)) score -= 25;
    candidates.push({ id: l.id, name: l.name, score });
  }
  if (!candidates.length) return null;
  candidates.sort((a, b) => b.score - a.score);
  return candidates[0].id;
}

// ── Helpers ─────────────────────────────────────────────────

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ── 元数据同步 ──────────────────────────────────────────────

async function syncMeta(trigger = "auto") {
  const logId = await db.startCrawlLog("yuecx_sync_meta", trigger).catch(() => null);
  let cityCount = 0;
  let routeCount = 0;
  try {
    console.log("[meta] 同步城市列表...");
    const startResult = await requestGETv1("/line/queryStartCity", { line_type: "bus", account: CORP_ID });
    if (!startResult.success || !startResult.data) throw new Error("queryStartCity failed");

    const cities = startResult.data;
    cityCount = cities.length;
    for (const c of cities) {
      await db.upsertCity(c.cityId, c.city || c.cityName);
    }
    console.log(`[meta] ${cities.length} 个城市已同步`);

    console.log("[meta] 同步路线...");
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
    if (logId) await db.finishCrawlLog(logId, routeCount, { cities: cityCount }).catch(() => {});
  } catch (err) {
    if (logId) await db.failCrawlLog(logId, err.message).catch(() => {});
    throw err;
  }
}

// ── 按需实时查询单路线单日 ───────────────────────────────────

function parseRawInterval(raw, routeId, tripDate, crawlTime) {
  return {
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
  };
}

/**
 * 直接从 API 抓取并返回格式化数据。
 * 不做任何 DB 操作，由调用方负责后台写入。
 */
async function fetchRouteDayDirect(routeId, startCityId, endCityId, tripDate) {
  let start = 0;
  const all = [];
  const crawlTime = new Date().toISOString();

  while (true) {
    const result = await requestGETv1("/interval/intervalListV2", {
      tripDate, startCityId, endCityId, start, limit: PAGE_SIZE,
      startAreaId: "", endAreaId: "",
    });
    if (!result.success || !result.data) {
      console.warn("[crawl] API fail:", result.success, result.message || "no data");
      break;
    }
    const list = result.data.intervalList || [];
    if (list.length === 0) break;
    for (const raw of list) all.push(parseRawInterval(raw, routeId, tripDate, crawlTime));
    console.log(`[crawl] page ${Math.floor(start/PAGE_SIZE)+1}: ${list.length} intervals`);
    if (list.length < PAGE_SIZE) break;
    start += PAGE_SIZE;
  }

  return all;
}

const routeIdCache = new Map();

async function resolveRouteId(startCityId, endCityId) {
  const rKey = `${startCityId}:${endCityId}`;
  let routeId = routeIdCache.get(rKey);
  if (!routeId) {
    routeId = await db.getRouteId(startCityId, endCityId);
    if (routeId) routeIdCache.set(rKey, routeId);
  }
  return routeId;
}

async function crawlOnDemand(startCityId, endCityId, date) {
  const routeIdPromise = resolveRouteId(startCityId, endCityId);
  const intervals = await fetchRouteDayDirect(null, startCityId, endCityId, date);
  routeIdPromise.then((routeId) => {
    if (routeId) {
      for (const iv of intervals) iv.route_id = routeId;
      db.upsertIntervals(intervals).catch((e) => console.error("[crawl] bg upsert:", e.message));
      db.updateRouteLastCrawl(routeId).catch(() => {});
    }
  }).catch(() => {});
  return intervals;
}

// ── 全量路线定时抓取 ──────────────────────────────────────────

const CRAWL_DAYS = 15;
const CONCURRENCY = 5;

function formatDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function nowBeijing() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
}

async function crawlAllRoutes(trigger = "auto") {
  const logId = await db.startCrawlLog("yuecx_all_routes", trigger).catch(() => null);
  const today = nowBeijing();

  try {
    const routes = await db.getRoutesBySource("yuecx");
    console.log(`[yuecx-crawl] 开始抓取全部 ${routes.length} 条粤程路线 × ${CRAWL_DAYS} 天`);

    const tasks = [];
    for (const route of routes) {
      for (let i = 0; i < CRAWL_DAYS; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        tasks.push({ route, date: formatDate(d) });
      }
    }

    let totalCount = 0;
    let completed = 0;
    const total = tasks.length;

    async function worker(queue) {
      while (queue.length > 0) {
        const task = queue.shift();
        if (!task) break;
        try {
          const intervals = await fetchRouteDayDirect(
            task.route.id, task.route.start_city_id, task.route.end_city_id, task.date
          );
          if (intervals.length > 0) {
            for (const iv of intervals) iv.route_id = task.route.id;
            await db.upsertIntervals(intervals);
            totalCount += intervals.length;
          }
        } catch (err) {
          // skip individual failures
        }
        completed++;
        if (completed % 100 === 0 || completed === total) {
          console.log(`[yuecx-crawl] ${completed}/${total} (${Math.round(completed / total * 100)}%) — ${totalCount} 班次`);
        }
        await sleep(300);
      }
    }

    const workers = Array.from({ length: CONCURRENCY }, () => worker(tasks));
    await Promise.all(workers);

    await db.cleanExpired().catch(() => {});
    await geocodeMissingStations().catch((e) => console.error("[yuecx-crawl] geocode失败:", e.message));

    console.log(`[yuecx-crawl] 完成: ${routes.length} 路线, ${totalCount} 班次`);
    if (logId) await db.finishCrawlLog(logId, totalCount, { routeCount: routes.length }).catch(() => {});
    return totalCount;
  } catch (err) {
    if (logId) await db.failCrawlLog(logId, err.message).catch(() => {});
    throw err;
  }
}

/**
 * 从 intervals 表提取所有站点名，对缺少坐标的用高德 geocode 并写入 DB。
 */
async function geocodeMissingStations() {
  if (!gaodeMap.isConfigured()) {
    console.warn("[geocode] AMAP_KEY 未配置，跳过站点坐标同步");
    return;
  }
  const { rows } = await db.pool.query(
    `SELECT DISTINCT station_name, city FROM (
       SELECT jsonb_array_elements(boarding_stations)->>'name' AS station_name,
              c1.city_name AS city
       FROM intervals i
       JOIN routes r ON i.route_id = r.id
       JOIN cities c1 ON r.start_city_id = c1.city_id
       WHERE i.take_date >= CURRENT_DATE
       UNION
       SELECT jsonb_array_elements(dropoff_stations)->>'name' AS station_name,
              c2.city_name AS city
       FROM intervals i
       JOIN routes r ON i.route_id = r.id
       JOIN cities c2 ON r.end_city_id = c2.city_id
       WHERE i.take_date >= CURRENT_DATE
     ) sub WHERE station_name IS NOT NULL AND station_name <> ''`
  );
  if (!rows.length) return;

  const existing = await db.getAllStationNames();
  const missing = rows.filter((r) => !existing.has(r.station_name));
  if (!missing.length) {
    console.log("[geocode] 所有站点已有坐标");
    return;
  }
  console.log(`[geocode] ${missing.length} 个站点需要查坐标`);

  const toInsert = [];
  for (const { station_name, city } of missing) {
    try {
      const coord = await gaodeMap.searchStationCoord(station_name, city);
      if (coord) {
        toInsert.push({ name: station_name, lat: coord.lat, lng: coord.lng, city });
        console.log(`[geocode] ${station_name} → ${coord.lat},${coord.lng}`);
      } else {
        console.warn(`[geocode] ${station_name} 未找到坐标`);
      }
    } catch (e) {
      console.warn(`[geocode] ${station_name} 查询失败:`, e.message);
    }
    await sleep(200);
  }

  if (toInsert.length) {
    await db.upsertStationCoordsBatch(toInsert);
    console.log(`[geocode] 写入 ${toInsert.length} 个站点坐标`);
  }
}

/**
 * 调 interval.getListByCityIdAndLocationId —— 粤出行用户点"查询"后看到的班次列表的 API。
 * 返回的每个班次含 fillorder 页需要的全部字段（addressId/getOffAddressId/currentDateId/line）。
 * 无需 SM4 加密（实测）。
 *
 * @param opts {startCityId, endCityId, takeDate, startLocationIds, endLocationIds}
 *        locationIds 可用逗号分隔传多个候选
 * @returns 班次数组（空数组 = 后端无班次）
 */
async function queryBookableIntervals({ startCityId, endCityId, takeDate, startLocationIds, endLocationIds }) {
  const challengeHeaders = await getChallengeHeaders();
  const body = new URLSearchParams({
    corpid: CORP_ID, subAppid: APPID, appid: APPID,
    action: "interval.getListByCityIdAndLocationId",
    takeDate, startCityId, endCityId,
    startLocationIds, endLocationIds,
  }).toString();
  const resp = await fetch(`${HOST}/api/wg.do`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", ...challengeHeaders },
    body,
    signal: AbortSignal.timeout(15000),
  });
  const j = await resp.json();
  if (j.success && Array.isArray(j.data?.intervalList)) return j.data.intervalList;
  return [];
}

module.exports = { requestGETv1, getChallengeHeaders, crawlOnDemand, syncMeta, crawlAllRoutes, queryRouteLocations, matchRealLocationId, queryBookableIntervals };

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

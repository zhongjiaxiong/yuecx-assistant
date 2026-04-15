/**
 * 车盈网 (busboss) 数据源适配器
 * 与 crawler.js (亿路行) 对等的接口:
 *   - syncBusbossMeta()       — 同步城市+路线到 DB (source='busboss')
 *   - crawlBusbossOnDemand()  — 按需查询班次并写入 intervals 表
 *
 * API 响应格式: { success: boolean, total?: number, msg?: string, data: [] }
 * 班次查询端点: API_LineClassDayLineSaleQuery_V2
 * 参数名均为 PascalCase: StartCityCode, ArrivalCityCode, ClassDate, PageNumber, PageSize
 */

const db = require("./db");
const { getBusbossRequestConfig } = require("./token_manager");

const SOURCE = "busboss";
const PAGE_SIZE = 50;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ── HTTP helpers ─────────────────────────────────────────────

async function busbossGet(apiPath, params = {}) {
  const rc = await getBusbossRequestConfig();
  if (!rc) throw new Error("busboss token 不可用");

  const qs = new URLSearchParams({ appid: rc.appid, ...params }).toString();
  const url = `${rc.host}${apiPath}?${qs}`;

  const resp = await fetch(url, {
    method: "GET",
    headers: rc.headers,
    signal: AbortSignal.timeout(15000),
  });
  return resp.json();
}

// ── 数据格式转换 ────────────────────────────────────────────

function parseGeocoder(geocoderStr) {
  if (!geocoderStr) return { lat: 0, lng: 0 };
  const parts = geocoderStr.split(",");
  return { lng: parseFloat(parts[0]) || 0, lat: parseFloat(parts[1]) || 0 };
}

function parseBusbossInterval(raw, routeId, tripDate, crawlTime) {
  const priceYuan = parseFloat(raw.LineClassDayPrice || raw.TicketPrice || 0);
  const priceFen = Math.round(priceYuan * 100);

  const boardingStations = (raw.StartNodeList || []).map((n) => ({
    name: n.NodeName || "",
    arriveTime: n.ClassTime || "",
    adcode: n.DistrictCode || "",
    code: n.NodeGID || n.GID || "",
    id: n.NodeGID || n.GID || "",
    lat: parseGeocoder(n.Geocoder).lat,
    lng: parseGeocoder(n.Geocoder).lng,
  }));

  const dropoffStations = (raw.ArrivalNodeList || []).map((n) => ({
    name: n.NodeName || "",
    arriveTime: n.ClassTime || "",
    adcode: n.DistrictCode || "",
    code: n.NodeGID || n.GID || "",
    id: n.NodeGID || n.GID || "",
    lat: parseGeocoder(n.Geocoder).lat,
    lng: parseGeocoder(n.Geocoder).lng,
  }));

  const intervalId = `bb_${raw.GID || ""}`;

  return {
    interval_id: intervalId,
    route_id: routeId,
    take_date: tripDate,
    from_time: raw.ClassTime || "",
    interval_name: raw.LineName || "",
    price_fen: priceFen,
    residue: raw.CanSaleCount ?? 0,
    status: raw.CanSaleCount > 0 ? 1 : 0,
    line_id: raw.LineGID || "",
    boarding_stations: boardingStations,
    dropoff_stations: dropoffStations,
    raw_data: raw,
    crawl_time: crawlTime,
    source: SOURCE,
  };
}

// ── 元数据同步 ──────────────────────────────────────────────

async function syncBusbossMeta(trigger = "auto") {
  const logId = await db.startCrawlLog("busboss_sync_meta", trigger).catch(() => null);
  let cityCount = 0;
  let routeCount = 0;
  try {
    console.log("[busboss-meta] 同步车盈网城市列表...");

    const cityResult = await busbossGet("/BookSeatsApi/WX_StartCityQuery");
    if (!cityResult.success || !cityResult.data) {
      throw new Error(`WX_StartCityQuery failed: ${cityResult.msg || JSON.stringify(cityResult).slice(0, 200)}`);
    }

    const cities = cityResult.data;
    cityCount = cities.length;
    for (const c of cities) {
      const cityId = `bb_${c.CityCode}`;
      await db.upsertCity(cityId, c.CityName, SOURCE);
    }
    console.log(`[busboss-meta] ${cities.length} 个城市已同步`);

    console.log("[busboss-meta] 同步车盈网路线...");
    for (let i = 0; i < cities.length; i++) {
      const c = cities[i];
      const startCityId = `bb_${c.CityCode}`;
      try {
        const endResult = await busbossGet("/BookSeatsApi/WX_ArrivalCityQuery", {
          startCityId: c.CityCode,
        });
        if (endResult.success && endResult.data) {
          for (const dest of endResult.data) {
            const endCityId = `bb_${dest.CityCode}`;
            await db.upsertCity(endCityId, dest.CityName, SOURCE);
            await db.upsertRoute(startCityId, endCityId, SOURCE);
            routeCount++;
          }
        }
      } catch (err) {
        console.warn(`[busboss-meta] ${c.CityName} 路线同步失败:`, err.message);
      }
      if (i % 10 === 0) console.log(`  [${i + 1}/${cities.length}] ${c.CityName}...`);
      await sleep(300);
    }
    console.log(`[busboss-meta] ${routeCount} 条路线已同步`);
    if (logId) await db.finishCrawlLog(logId, routeCount, { cities: cityCount }).catch(() => {});
  } catch (err) {
    if (logId) await db.failCrawlLog(logId, err.message).catch(() => {});
    throw err;
  }
}

// ── 按需实时查询 ────────────────────────────────────────────

/**
 * 根据 busboss 原始城市代码查询班次（带分页）
 * @param {string} startCityCode - busboss 城市代码 (如 "440300")
 * @param {string} endCityCode   - busboss 城市代码 (如 "440100")
 * @param {string} date          - YYYY-MM-DD
 * @returns {Array} 标准化的 intervals 数组
 */
async function fetchBusbossIntervals(startCityCode, endCityCode, date) {
  const crawlTime = new Date().toISOString();
  const all = [];
  let page = 1;

  while (true) {
    const result = await busbossGet("/BookSeatsApi/API_LineClassDayLineSaleQuery_V2", {
      ClassDate: date,
      StartCityCode: startCityCode,
      ArrivalCityCode: endCityCode,
      PageNumber: String(page),
      PageSize: String(PAGE_SIZE),
    });

    if (!result.success || !result.data) {
      if (page === 1) {
        console.warn("[busboss-crawl] API fail:", result.msg || "no data");
      }
      break;
    }

    const list = result.data;
    for (const raw of list) {
      all.push(parseBusbossInterval(raw, null, date, crawlTime));
    }

    console.log(`[busboss-crawl] ${startCityCode}→${endCityCode} ${date} page ${page}: ${list.length} 班次`);

    if (list.length < PAGE_SIZE) break;
    page++;
  }

  return all;
}

/**
 * 按需查询 busboss 班次（与 crawler.js 的 crawlOnDemand 对等）
 * @param {string} bbStartCityId - DB 中 busboss 城市ID (如 "bb_440300")
 * @param {string} bbEndCityId   - DB 中 busboss 城市ID (如 "bb_440100")
 * @param {string} date          - YYYY-MM-DD
 */
async function crawlBusbossOnDemand(bbStartCityId, bbEndCityId, date) {
  const startCode = bbStartCityId.replace(/^bb_/, "");
  const endCode = bbEndCityId.replace(/^bb_/, "");

  const intervals = await fetchBusbossIntervals(startCode, endCode, date);

  const routeId = await db.getRouteId(bbStartCityId, bbEndCityId, SOURCE);
  if (routeId && intervals.length > 0) {
    for (const iv of intervals) iv.route_id = routeId;
    db.upsertIntervals(intervals).catch((e) =>
      console.error("[busboss-crawl] bg upsert:", e.message)
    );
    db.updateRouteLastCrawl(routeId).catch(() => {});
  }

  return intervals;
}

// ── 全量路线班次抓取 ──────────────────────────────────────────

const CRAWL_DAYS = 15;
const CONCURRENCY = 10;

function formatDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

async function crawlBusbossAllRoutes(trigger = "auto") {
  const logId = await db.startCrawlLog("busboss_all_routes", trigger).catch(() => null);

  try {
    const routes = await db.getRoutesBySource("busboss");
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
    console.log(`[busboss-crawl] 开始抓取全部 ${routes.length} 条车盈网路线 × ${CRAWL_DAYS} 天`);

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
    const startMs = Date.now();

    async function worker(queue) {
      while (queue.length > 0) {
        const task = queue.shift();
        if (!task) break;
        const startCode = task.route.start_city_id.replace(/^bb_/, "");
        const endCode = task.route.end_city_id.replace(/^bb_/, "");
        try {
          const intervals = await fetchBusbossIntervals(startCode, endCode, task.date);
          if (intervals.length > 0) {
            for (const iv of intervals) iv.route_id = task.route.id;
            await db.upsertIntervals(intervals);
            totalCount += intervals.length;
          }
        } catch (err) {
          // skip individual failures
        }
        completed++;
        if (completed % 500 === 0 || completed === total) {
          const elapsedMin = Math.round((Date.now() - startMs) / 60000);
          console.log(`[busboss-crawl] ${completed}/${total} (${Math.round(completed / total * 100)}%) — ${totalCount} 班次, ${elapsedMin}min`);
        }
        await sleep(200);
      }
    }

    const workers = Array.from({ length: CONCURRENCY }, () => worker(tasks));
    await Promise.all(workers);

    const elapsedMin = Math.round((Date.now() - startMs) / 60000);
    console.log(`[busboss-crawl] 完成: ${routes.length} 路线, ${totalCount} 班次, 耗时 ${elapsedMin}min`);
    if (logId) await db.finishCrawlLog(logId, totalCount, { routeCount: routes.length }).catch(() => {});
    return totalCount;
  } catch (err) {
    if (logId) await db.failCrawlLog(logId, err.message).catch(() => {});
    throw err;
  }
}

module.exports = {
  syncBusbossMeta,
  crawlBusbossOnDemand,
  crawlBusbossAllRoutes,
  fetchBusbossIntervals,
  SOURCE,
};

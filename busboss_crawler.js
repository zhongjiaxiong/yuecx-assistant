/**
 * 车盈网 (busboss) 数据源适配器
 * 与 crawler.js (亿路行) 对等的接口:
 *   - syncBusbossMeta()       — 同步城市+路线到 DB (source='busboss')
 *   - crawlBusbossOnDemand()  — 按需查询班次并写入 intervals 表
 */

const db = require("./db");
const { getBusbossRequestConfig } = require("./token_manager");

const SOURCE = "busboss";

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
    name: n.NodeName || n.Name || "",
    arriveTime: "",
    adcode: "",
    code: n.NodeID || n.GID || "",
    id: n.NodeID || n.GID || "",
    lat: parseGeocoder(n.Geocoder).lat,
    lng: parseGeocoder(n.Geocoder).lng,
  }));

  const dropoffStations = (raw.EndNodeList || []).map((n) => ({
    name: n.NodeName || n.Name || "",
    arriveTime: "",
    adcode: "",
    code: n.NodeID || n.GID || "",
    id: n.NodeID || n.GID || "",
    lat: parseGeocoder(n.Geocoder).lat,
    lng: parseGeocoder(n.Geocoder).lng,
  }));

  // busboss GID is a uuid, prefix with 'bb_' to avoid collision with ylxweb interval IDs
  const intervalId = `bb_${raw.GID || raw.LineClassDayGID || ""}`;

  return {
    interval_id: intervalId,
    route_id: routeId,
    take_date: tripDate,
    from_time: raw.ClassTime || "",
    interval_name: raw.LineName || raw.LineClassDayName || "",
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
    if (cityResult.Code !== 200 || !cityResult.Data) {
      throw new Error(`WX_StartCityQuery failed: ${cityResult.Msg || JSON.stringify(cityResult)}`);
    }

    const cities = cityResult.Data;
    cityCount = cities.length;
    for (const c of cities) {
      const cityId = `bb_${c.CityCode || c.CityID}`;
      await db.upsertCity(cityId, c.CityName, SOURCE);
    }
    console.log(`[busboss-meta] ${cities.length} 个城市已同步`);

    console.log("[busboss-meta] 同步车盈网路线...");
    for (let i = 0; i < cities.length; i++) {
      const c = cities[i];
      const startCityId = `bb_${c.CityCode || c.CityID}`;
      try {
        const endResult = await busbossGet("/BookSeatsApi/WX_ArrivalCityQuery", {
          startCityId: c.CityCode || c.CityID,
        });
        if (endResult.Code === 200 && endResult.Data) {
          for (const dest of endResult.Data) {
            const endCityId = `bb_${dest.CityCode || dest.CityID}`;
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
 * 根据 busboss 原始城市代码查询班次
 * @param {string} startCityCode - busboss 城市代码 (如 "440300")
 * @param {string} endCityCode   - busboss 城市代码 (如 "440100")
 * @param {string} date          - YYYY-MM-DD
 * @returns {Array} 标准化的 intervals 数组
 */
async function fetchBusbossIntervals(startCityCode, endCityCode, date) {
  const crawlTime = new Date().toISOString();
  const result = await busbossGet("/BookSeatsApi/API_LineClassDaySaleQuery_V2", {
    startCityId: startCityCode,
    arrivalCityId: endCityCode,
    classDate: date,
    startNodeId: "",
    arrivalNodeId: "",
  });

  if (result.Code !== 200 || !result.Data) {
    console.warn("[busboss-crawl] API fail:", result.Code, result.Msg || "no data");
    return [];
  }

  const list = result.Data || [];
  console.log(`[busboss-crawl] ${startCityCode}→${endCityCode} ${date}: ${list.length} 班次`);
  return list.map((raw) => parseBusbossInterval(raw, null, date, crawlTime));
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

module.exports = {
  syncBusbossMeta,
  crawlBusbossOnDemand,
  fetchBusbossIntervals,
  SOURCE,
};

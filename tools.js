/**
 * LLM Agent 工具函数集 — 多源聚合版
 * 同时查询亿路行 + 车盈网两个数据源，合并结果。
 */

const db = require("./db");
const { scoreAndRank } = require("./scorer");
const { requestGETv1, crawlOnDemand } = require("./crawler");
let busboss;
try { busboss = require("./busboss_crawler"); } catch { busboss = { isAvailable: () => false, queryByNames: async () => [] }; }

const CACHE_MAX_MINUTES = parseInt(process.env.CACHE_MAX_MINUTES || "5", 10);
const CACHE_MAX_MS = CACHE_MAX_MINUTES * 60 * 1000;

const MINIAPP_NAMES = {
  yuecx: "粤出行城际巴士",
  busboss: "如约城际巴士",
};

const memCache = new Map();

// ── 城市名 -> cityId 解析（带内存缓存）────────────────────────

const cityCache = new Map();
let cityCacheWarmed = false;

function warmCityCache() {
  if (cityCacheWarmed) return;
  cityCacheWarmed = true;
  db.getAllCities().then((rows) => {
    for (const r of rows) cityCache.set(r.city_name, r);
    console.log(`[cache] preloaded ${rows.length} cities`);
  }).catch((err) => {
    console.error("[cache] city preload failed:", err.message);
    cityCacheWarmed = false;
  });
}
warmCityCache();

async function resolveCityId(name) {
  if (cityCache.has(name)) return cityCache.get(name);
  const rows = await db.findCityByName(name);
  const result = rows.length === 0 ? null : rows[0];
  if (result) cityCache.set(name, result);
  return result;
}

// ── Tool 1: get_user_location ───────────────────────────────

async function getUserLocation() {
  return { success: false, needAsk: true, source: "user_input" };
}

// ── Tool 2: list_cities ─────────────────────────────────────

async function listCities({ startCity } = {}) {
  if (startCity) {
    const city = await resolveCityId(startCity);
    if (!city) return { success: false, error: `未找到城市: ${startCity}` };
    const dests = await db.getDestinations(city.city_name);
    return {
      success: true,
      city: city.city_name,
      destinations: dests.map((d) => d.city_name),
      count: dests.length,
    };
  }
  const cities = await db.getAllCities();
  return {
    success: true,
    cities: cities.map((c) => c.city_name),
    count: cities.length,
  };
}

// ── Tool 3: search_intervals ────────────────────────────────

async function searchIntervals({ date, startCity, endCity }) {
  const results = await queryAllSources(startCity, endCity, date);
  if (!results.success) return results;
  return {
    success: true,
    data: {
      date,
      route: `${startCity}->${endCity}`,
      startCityName: startCity,
      endCityName: endCity,
      intervalCount: results.intervals.length,
      sources: results.sources,
      intervals: results.intervals,
    },
  };
}

/**
 * 并行查询所有数据源，合并返回归一化班次列表
 */
async function queryAllSources(startCity, endCity, date) {
  const tasks = [];
  const sources = [];

  // 并行解析两个城市名
  const [start, end] = await Promise.all([resolveCityId(startCity), resolveCityId(endCity)]);

  if (start && end) {
    const cacheKey = `yuecx:${start.city_id}:${end.city_id}:${date}`;
    tasks.push(
      (async () => {
        const cached = memCache.get(cacheKey);
        if (cached && Date.now() - cached.ts < CACHE_MAX_MS) {
          console.log(`[yuecx] mem cache hit (${Math.round((Date.now() - cached.ts)/1000)}s)`);
          return cached.data;
        }
        console.log("[yuecx] fetching from API...");
        try {
          const intervals = await crawlOnDemand(start.city_id, end.city_id, date);
          const formatted = intervals.map((r) => ({ ...formatInterval(r), source: "yuecx" }));
          memCache.set(cacheKey, { ts: Date.now(), data: formatted });
          return formatted;
        } catch (err) {
          console.error("[yuecx] crawl failed:", err.message);
          if (cached) return cached.data;
          return [];
        }
      })()
    );
    sources.push("yuecx");
  }

  // 车盈网
  if (busboss.isAvailable()) {
    tasks.push(
      busboss.queryByNames(startCity, endCity, date).then((list) =>
        list.map((iv) => ({
          ...formatInterval(iv),
          source: "busboss",
        }))
      ).catch((err) => {
        console.error("[busboss] query failed:", err.message);
        return [];
      })
    );
    sources.push("busboss");
  }

  if (tasks.length === 0) {
    return { success: false, error: `未找到路线: ${startCity}->${endCity}（两个数据源均无匹配）` };
  }

  const results = await Promise.all(tasks);
  const merged = results.flat();

  return { success: true, intervals: merged, sources };
}

function formatInterval(row) {
  const priceFen = row.price_fen ?? row.priceFen ?? 0;
  return {
    id: row.interval_id,
    intervalName: row.interval_name,
    fromTime: row.from_time,
    from_time: row.from_time,
    priceFen: priceFen,
    priceYuan: (priceFen / 100).toFixed(2),
    residue: row.residue,
    status: row.status,
    lineId: row.line_id,
    boardingStations: row.boarding_stations || [],
    dropoffStations: row.dropoff_stations || [],
    boarding_stations: row.boarding_stations || [],
    dropoff_stations: row.dropoff_stations || [],
    source: row.source || "yuecx",
  };
}

// ── Tool 4: score_and_rank ──────────────────────────────────

async function scoreAndRankTool(params) {
  const { date, startCity, endCity, targetTime, timeMode, preferBoarding, preferDropoff, weights, topN } = params;
  const searchResult = await searchIntervals({ date, startCity, endCity });
  if (!searchResult.success) return { success: false, error: searchResult.error };

  const result = scoreAndRank({
    intervals: searchResult.data.intervals,
    targetTime, timeMode,
    tripDate: date,
    preferBoarding: preferBoarding || [],
    preferDropoff: preferDropoff || [],
    weights, topN: topN || 5,
  });

  return {
    success: true,
    query: { date, startCity, endCity, targetTime, timeMode, preferBoarding, preferDropoff, weights },
    routeInfo: {
      startCityName: searchResult.data.startCityName || startCity,
      endCityName: searchResult.data.endCityName || endCity,
    },
    sources: searchResult.data.sources,
    ...result,
  };
}

// ── Tool 5: verify_realtime ─────────────────────────────────

async function verifyRealtime({ date, startCity, endCity, intervalId }) {
  const start = await resolveCityId(startCity);
  const end = await resolveCityId(endCity);
  if (!start || !end) return { success: false, error: "城市未找到" };

  try {
    const result = await requestGETv1("/interval/intervalListV2", {
      tripDate: date, startCityId: start.city_id, endCityId: end.city_id,
      start: 0, limit: 200, startAreaId: "", endAreaId: "",
    });
    if (!result.success || !result.data) return { success: false, error: "API 请求失败" };

    const found = (result.data.intervalList || []).find((iv) => String(iv.id) === String(intervalId));
    if (!found) return { success: false, error: `未找到班次 ${intervalId}` };

    const live = formatInterval({
      interval_id: found.id, interval_name: found.intervalName,
      from_time: found.fromTime, price_fen: found.bottomPriceFen,
      residue: found.residue, status: found.status, line_id: found.lineId,
      boarding_stations: (found.addressList || []).map((s) => ({ name: s.name, arriveTime: s.arriveTime || "", adcode: s.adcode || "", id: s.id || "" })),
      dropoff_stations: (found.getOffAddressList || []).map((s) => ({ name: s.name, arriveTime: s.arriveTime || "", adcode: s.adcode || "", id: s.id || "" })),
    });

    return {
      success: true,
      data: { ...live, statusText: live.residue <= 0 ? "已售罄" : live.status === 1 ? "正常" : "异常" },
    };
  } catch (err) {
    return { success: false, error: `实时查询失败: ${err.message}` };
  }
}

// ── Tool 6: refresh_cache ───────────────────────────────────

async function refreshCache({ startCity, endCity, days }) {
  const start = await resolveCityId(startCity);
  const end = await resolveCityId(endCity);
  if (!start || !end) return { success: false, error: "城市未找到" };

  const dates = [];
  const now = new Date();
  for (let i = 0; i < (days || 3); i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    dates.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
  }

  let total = 0;
  for (const date of dates) {
    try {
      total += await crawlOnDemand(start.city_id, end.city_id, date);
    } catch (err) {
      console.error(`refresh ${date}: ${err.message}`);
    }
  }

  return { success: true, data: { route: `${start.city_name}->${end.city_name}`, days: dates.length, totalIntervals: total } };
}

// ── Tool 7: book_interval ───────────────────────────────────

async function bookInterval({ date, startCity, endCity, intervalId, boardingStationName, dropoffStationName, source }) {
  const start = await resolveCityId(startCity);
  const end = await resolveCityId(endCity);

  let iv = null;

  if (start && end) {
    const routeId = await db.getRouteId(start.city_id, end.city_id);
    if (routeId) {
      const intervals = await db.queryIntervals(routeId, date);
      iv = intervals.find((r) => String(r.interval_id) === String(intervalId));
    }
  }

  if (!iv && busboss.isAvailable()) {
    const bbResults = await busboss.queryByNames(startCity, endCity, date);
    iv = bbResults.find((r) => String(r.interval_id) === String(intervalId));
    if (iv) source = "busboss";
  }

  if (!iv) return { success: false, error: `未找到班次 ${intervalId}` };

  const bStations = iv.boarding_stations || [];
  const dStations = iv.dropoff_stations || [];
  const boarding = bStations.find(
    (s) => !boardingStationName || s.name.includes(boardingStationName)
  ) || bStations[0];
  const dropoff = dStations.find(
    (s) => !dropoffStationName || s.name.includes(dropoffStationName)
  ) || dStations[0];

  const detectedSource = source || iv.source || "yuecx";
  const miniappName = MINIAPP_NAMES[detectedSource] || MINIAPP_NAMES.yuecx;

  return {
    success: true,
    data: {
      intervalName: iv.interval_name,
      fromTime: iv.from_time,
      boardingTime: boarding?.arriveTime || iv.from_time,
      date,
      route: `${startCity}→${endCity}`,
      boardingStation: boarding?.name || "未知",
      dropoffStation: dropoff?.name || "未知",
      priceYuan: ((iv.price_fen ?? 0) / 100).toFixed(2),
      residue: iv.residue,
      miniappName,
      source: detectedSource,
    },
  };
}

// ── Schema + Registry ───────────────────────────────────────

const TOOL_HANDLERS = {
  get_user_location: getUserLocation,
  list_cities: listCities,
  search_intervals: searchIntervals,
  score_and_rank: scoreAndRankTool,
  verify_realtime: verifyRealtime,
  refresh_cache: refreshCache,
  book_interval: bookInterval,
};

const TOOL_SCHEMAS = [
  { type: "function", function: { name: "get_user_location", description: "尝试获取用户当前位置。返回需要向用户询问。", parameters: { type: "object", properties: {}, required: [] } } },
  { type: "function", function: { name: "list_cities", description: "列出所有支持的出发城市，或查询某个城市可达的目的地列表。", parameters: { type: "object", properties: { startCity: { type: "string", description: "可选。指定出发城市名，查询其可达目的地。不传则返回所有城市。" } }, required: [] } } },
  { type: "function", function: { name: "search_intervals", description: "实时查询指定日期和路线的所有可用班次。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" } }, required: ["date", "startCity", "endCity"] } } },
  { type: "function", function: { name: "score_and_rank", description: "对指定日期路线的班次综合评分排序。基于时间、价格、站点就近、余票四维度。用户说出具体出发/到达时刻（如「明早八点」「下午3点到」）必须用 depart 或 arrive；asap 仅用于「尽快」「不限时间」「下一班」等未指定钟点的场景。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, targetTime: { type: "string", description: "期望时间 HH:MM（asap 时可传 12:00 占位）" }, timeMode: { type: "string", enum: ["depart", "arrive", "asap"], description: "时间模式：depart=希望几点出发，arrive=希望几点前到达，asap=尽快且未指定钟点" }, preferBoarding: { type: "array", items: { type: "string" }, description: "偏好上车站关键词" }, preferDropoff: { type: "array", items: { type: "string" }, description: "偏好下车站关键词" }, weights: { type: "object", properties: { time: { type: "number" }, price: { type: "number" }, station: { type: "number" }, seat: { type: "number" } }, description: "权重" }, topN: { type: "number", description: "返回前 N 个，默认 5" } }, required: ["date", "startCity", "endCity", "targetTime", "timeMode"] } } },
  { type: "function", function: { name: "verify_realtime", description: "实时查询指定班次最新余票和状态。", parameters: { type: "object", properties: { date: { type: "string", description: "日期" }, startCity: { type: "string", description: "出发城市" }, endCity: { type: "string", description: "到达城市" }, intervalId: { type: "string", description: "班次 ID" } }, required: ["date", "startCity", "endCity", "intervalId"] } } },
  { type: "function", function: { name: "refresh_cache", description: "强制刷新指定路线的数据。", parameters: { type: "object", properties: { startCity: { type: "string", description: "出发城市" }, endCity: { type: "string", description: "到达城市" }, days: { type: "number", description: "天数，默认 3" } }, required: ["startCity", "endCity"] } } },
  { type: "function", function: { name: "book_interval", description: "为用户生成指定班次的订票跳转链接。用户可点击链接直接跳转到小程序填单页完成购票。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, intervalId: { type: "string", description: "班次 ID" }, boardingStationName: { type: "string", description: "偏好的上车站名称（可选，模糊匹配）" }, dropoffStationName: { type: "string", description: "偏好的下车站名称（可选，模糊匹配）" }, source: { type: "string", description: "数据来源 yuecx/busboss" } }, required: ["date", "startCity", "endCity", "intervalId"] } } },
];

async function executeTool(name, args) {
  const handler = TOOL_HANDLERS[name];
  if (!handler) return JSON.stringify({ success: false, error: `未知工具: ${name}` });
  console.log(`[tool] ${name}(${JSON.stringify(args)})`);
  try {
    const result = await handler(args);
    if (!result.success) console.log(`[tool] ${name} → error:`, result.error);
    return JSON.stringify(result);
  } catch (err) {
    console.error(`[tool] ${name} threw:`, err.message);
    return JSON.stringify({ success: false, error: err.message });
  }
}

module.exports = { TOOL_SCHEMAS, executeTool };

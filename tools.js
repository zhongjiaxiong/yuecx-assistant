/**
 * LLM Agent 工具函数集 — 实时查询版
 * 7 个 function-calling tool:
 *   get_user_location / list_cities / search_intervals /
 *   score_and_rank / verify_realtime / refresh_cache / book_interval
 */

const db = require("./db");
const { scoreAndRank } = require("./scorer");
const { requestGETv1, crawlOnDemand } = require("./crawler");

const CACHE_MAX_MINUTES = parseInt(process.env.CACHE_MAX_MINUTES || "5", 10);

const MINIAPP_APPID = "wx44d254291f27af7c";
const FILLORDER_PATH = "/package/fillorder/pages/fillorder/fillorder";

// ── 城市名 -> cityId 解析 ───────────────────────────────────

async function resolveCityId(name) {
  const rows = await db.findCityByName(name);
  if (rows.length === 0) return null;
  return rows[0];
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
  const start = await resolveCityId(startCity);
  if (!start) return { success: false, error: `未找到出发城市: ${startCity}` };
  const end = await resolveCityId(endCity);
  if (!end) return { success: false, error: `未找到到达城市: ${endCity}` };

  const routeId = await db.getRouteId(start.city_id, end.city_id);
  if (!routeId) return { success: false, error: `不支持的路线: ${start.city_name}->${end.city_name}` };

  let cacheAge = await db.getCacheAge(routeId, date);
  const expired = cacheAge === null || cacheAge > CACHE_MAX_MINUTES;

  if (expired) {
    try {
      await crawlOnDemand(start.city_id, end.city_id, date);
      cacheAge = 0;
    } catch (err) {
      if (cacheAge === null) {
        return { success: false, error: `实时查询失败: ${err.message}` };
      }
    }
  }

  const intervals = await db.queryIntervals(routeId, date);

  return {
    success: true,
    data: {
      date,
      route: `${start.city_name}->${end.city_name}`,
      startCityId: start.city_id,
      endCityId: end.city_id,
      startCityName: start.city_name,
      endCityName: end.city_name,
      intervalCount: intervals.length,
      cacheAgeMinutes: cacheAge ?? 0,
      intervals: intervals.map(formatInterval),
    },
  };
}

function formatInterval(row) {
  return {
    id: row.interval_id,
    intervalName: row.interval_name,
    fromTime: row.from_time,
    from_time: row.from_time,
    priceFen: row.price_fen,
    priceYuan: (row.price_fen / 100).toFixed(2),
    residue: row.residue,
    status: row.status,
    lineId: row.line_id,
    boardingStations: row.boarding_stations || [],
    dropoffStations: row.dropoff_stations || [],
    boarding_stations: row.boarding_stations || [],
    dropoff_stations: row.dropoff_stations || [],
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
    preferBoarding: preferBoarding || [],
    preferDropoff: preferDropoff || [],
    weights, topN: topN || 5,
  });

  return {
    success: true,
    query: { date, startCity, endCity, targetTime, timeMode, preferBoarding, preferDropoff, weights },
    routeInfo: {
      startCityId: searchResult.data.startCityId,
      endCityId: searchResult.data.endCityId,
      startCityName: searchResult.data.startCityName,
      endCityName: searchResult.data.endCityName,
    },
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

async function bookInterval({ date, startCity, endCity, intervalId, boardingStationName, dropoffStationName }) {
  const start = await resolveCityId(startCity);
  const end = await resolveCityId(endCity);
  if (!start || !end) return { success: false, error: "城市未找到" };

  const routeId = await db.getRouteId(start.city_id, end.city_id);
  if (!routeId) return { success: false, error: "路线不存在" };

  const intervals = await db.queryIntervals(routeId, date);
  const iv = intervals.find((r) => String(r.interval_id) === String(intervalId));
  if (!iv) return { success: false, error: `未找到班次 ${intervalId}` };

  const boarding = (iv.boarding_stations || []).find(
    (s) => !boardingStationName || s.name.includes(boardingStationName)
  ) || (iv.boarding_stations || [])[0];

  const dropoff = (iv.dropoff_stations || []).find(
    (s) => !dropoffStationName || s.name.includes(dropoffStationName)
  ) || (iv.dropoff_stations || [])[0];

  const queryParams = new URLSearchParams({
    intervalID: String(iv.interval_id),
    interval_id: String(iv.interval_id),
    lineID: iv.line_id || "",
    tripDate: date,
    station: iv.from_time || "",
    beginCityCode: start.city_id,
    beginCityName: start.city_name,
    endCityCode: end.city_id,
    endCityName: end.city_name,
    addressID: boarding?.id || "",
    addressName: boarding?.name || "",
    getOffAddressID: dropoff?.id || "",
    getOffAddressName: dropoff?.name || "",
  }).toString();

  const schemeUrl = `weixin://dl/business/?appid=${MINIAPP_APPID}&path=${encodeURIComponent(FILLORDER_PATH)}&query=${encodeURIComponent(queryParams)}`;

  return {
    success: true,
    data: {
      intervalName: iv.interval_name,
      fromTime: iv.from_time,
      date,
      route: `${start.city_name}->${end.city_name}`,
      boardingStation: boarding?.name || "未知",
      dropoffStation: dropoff?.name || "未知",
      priceYuan: (iv.price_fen / 100).toFixed(2),
      residue: iv.residue,
      bookingUrl: schemeUrl,
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
  { type: "function", function: { name: "score_and_rank", description: "对指定日期路线的班次综合评分排序。基于时间、价格、站点就近、余票四维度。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, targetTime: { type: "string", description: "期望时间 HH:MM" }, timeMode: { type: "string", enum: ["depart", "arrive", "asap"], description: "时间模式" }, preferBoarding: { type: "array", items: { type: "string" }, description: "偏好上车站关键词" }, preferDropoff: { type: "array", items: { type: "string" }, description: "偏好下车站关键词" }, weights: { type: "object", properties: { time: { type: "number" }, price: { type: "number" }, station: { type: "number" }, seat: { type: "number" } }, description: "权重" }, topN: { type: "number", description: "返回前 N 个，默认 5" } }, required: ["date", "startCity", "endCity", "targetTime", "timeMode"] } } },
  { type: "function", function: { name: "verify_realtime", description: "实时查询指定班次最新余票和状态。", parameters: { type: "object", properties: { date: { type: "string", description: "日期" }, startCity: { type: "string", description: "出发城市" }, endCity: { type: "string", description: "到达城市" }, intervalId: { type: "string", description: "班次 ID" } }, required: ["date", "startCity", "endCity", "intervalId"] } } },
  { type: "function", function: { name: "refresh_cache", description: "强制刷新指定路线的数据。", parameters: { type: "object", properties: { startCity: { type: "string", description: "出发城市" }, endCity: { type: "string", description: "到达城市" }, days: { type: "number", description: "天数，默认 3" } }, required: ["startCity", "endCity"] } } },
  { type: "function", function: { name: "book_interval", description: "为用户生成指定班次的订票跳转链接。用户可点击链接直接跳转到小程序填单页完成购票。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, intervalId: { type: "string", description: "班次 ID" }, boardingStationName: { type: "string", description: "偏好的上车站名称（可选，模糊匹配）" }, dropoffStationName: { type: "string", description: "偏好的下车站名称（可选，模糊匹配）" } }, required: ["date", "startCity", "endCity", "intervalId"] } } },
];

async function executeTool(name, args) {
  const handler = TOOL_HANDLERS[name];
  if (!handler) return JSON.stringify({ success: false, error: `未知工具: ${name}` });
  try {
    const result = await handler(args);
    return JSON.stringify(result);
  } catch (err) {
    return JSON.stringify({ success: false, error: err.message });
  }
}

module.exports = { TOOL_SCHEMAS, executeTool };

/**
 * LLM Agent 工具函数集 — 实时查询版
 * 8 个 function-calling tool:
 *   get_user_location / list_cities / search_intervals /
 *   score_and_rank / verify_realtime / refresh_cache /
 *   book_interval / suggest_boarding
 */

const db = require("./db");
const { scoreAndRank, ADCODE_DISTRICT } = require("./scorer");
const { requestGETv1, crawlOnDemand } = require("./crawler");
const { crawlBusbossOnDemand } = require("./busboss_crawler");
const { getValidToken } = require("./token_manager");
const gaodeMap = require("./gaode-map");

const CACHE_MAX_MINUTES = parseInt(process.env.CACHE_MAX_MINUTES || "5", 10);

const SOURCE_LABELS = {
  yuecx: "粤出行",
  busboss: "如约城际",
};

const MINIAPP_NAMES = {
  yuecx: "粤出行城际巴士",
  busboss: "如约城际巴士",
};

const MINIAPP_NAME = "粤出行城际巴士";

// ── 城市名 -> cityId 解析 ───────────────────────────────────

async function resolveCityId(name) {
  const rows = await db.findCityByName(name);
  if (rows.length === 0) return null;
  return rows[0];
}

// ── Tool 1: get_user_location ───────────────────────────────

async function getUserLocation(_args, _userId, ctx) {
  const loc = ctx?.location;
  if (!loc || !loc.latitude || !loc.longitude) {
    return { success: false, needAsk: true, source: "user_input" };
  }

  if (!gaodeMap.isConfigured()) {
    return {
      success: true,
      source: "gps_raw",
      latitude: loc.latitude,
      longitude: loc.longitude,
      hint: "GPS 坐标已获取但 AMAP_KEY 未配置，无法解析地址。请直接询问用户所在区域。",
    };
  }

  try {
    const geo = await gaodeMap.reverseGeocode(loc.latitude, loc.longitude);
    return {
      success: true,
      source: "gps",
      latitude: loc.latitude,
      longitude: loc.longitude,
      city: geo.city,
      district: geo.district,
      adcode: geo.adcode,
      street: geo.street,
      description: geo.description,
      formatted: geo.formatted,
      nearbyPois: geo.pois,
    };
  } catch (err) {
    console.error("[get_user_location] reverseGeocode failed:", err.message);
    return {
      success: true,
      source: "gps_raw",
      latitude: loc.latitude,
      longitude: loc.longitude,
      hint: `地址解析失败(${err.message})，但有 GPS 坐标。请询问用户所在区域。`,
    };
  }
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

// ── Tool 3: search_intervals (多源聚合) ─────────────────────

async function searchIntervals({ date, startCity, endCity }) {
  const allCityRows = await db.findCityByName(startCity);
  if (allCityRows.length === 0) return { success: false, error: `未找到出发城市: ${startCity}` };
  const allEndRows = await db.findCityByName(endCity);
  if (allEndRows.length === 0) return { success: false, error: `未找到到达城市: ${endCity}` };

  const ylxStarts = allCityRows.filter((r) => r.source === "yuecx");
  const ylxEnds = allEndRows.filter((r) => r.source === "yuecx");
  const bbStart = allCityRows.find((r) => r.source === "busboss");
  const bbEnd = allEndRows.find((r) => r.source === "busboss");

  const displayStartName = (ylxStarts[0] || bbStart || allCityRows[0]).city_name;
  const displayEndName = (ylxEnds[0] || bbEnd || allEndRows[0]).city_name;

  let ylxIntervals = [];
  if (ylxStarts.length > 0 && ylxEnds.length > 0) {
    for (const s of ylxStarts) {
      for (const e of ylxEnds) {
        try {
          const ivs = await fetchYlxIntervals(s.city_id, e.city_id, date);
          if (ivs.length > 0) {
            ylxIntervals = ivs;
            break;
          }
        } catch (err) {
          console.warn(`[search] ylx ${s.city_id}->${e.city_id} failed:`, err.message);
        }
      }
      if (ylxIntervals.length > 0) break;
    }
  }

  let bbIntervals = [];
  if (bbStart && bbEnd) {
    const token = await getValidToken();
    if (token) {
      try {
        bbIntervals = await fetchBusbossIntervalsSafe(bbStart.city_id, bbEnd.city_id, date);
      } catch (err) {
        console.error(`[search] busboss failed:`, err.message);
      }
    }
  }

  const allIntervals = [...ylxIntervals, ...bbIntervals];
  if (allIntervals.length === 0 && ylxStarts.length === 0 && !bbStart) {
    return { success: false, error: `不支持的路线: ${displayStartName}->${displayEndName}` };
  }

  const sourceStats = {};
  if (ylxIntervals.length > 0) sourceStats.yuecx = ylxIntervals.length;
  if (bbIntervals.length > 0) sourceStats.busboss = bbIntervals.length;

  allIntervals.sort((a, b) => (a.from_time || "").localeCompare(b.from_time || ""));

  return {
    success: true,
    data: {
      date,
      route: `${displayStartName}->${displayEndName}`,
      startCityId: ylxStarts[0]?.city_id || bbStart?.city_id,
      endCityId: ylxEnds[0]?.city_id || bbEnd?.city_id,
      startCityName: displayStartName,
      endCityName: displayEndName,
      intervalCount: allIntervals.length,
      sourceStats,
      intervals: allIntervals.map(formatInterval),
    },
  };
}

async function fetchYlxIntervals(startCityId, endCityId, date) {
  let routeId = await db.getRouteId(startCityId, endCityId, "yuecx");

  if (!routeId) {
    try {
      routeId = await db.upsertRoute(startCityId, endCityId, "yuecx");
    } catch (_) {}
  }

  if (!routeId) {
    const intervals = await crawlOnDemand(startCityId, endCityId, date);
    return intervals.map((r) => ({ ...r, source: "yuecx" }));
  }

  let cacheAge = await db.getCacheAge(routeId, date);
  if (cacheAge === null || cacheAge > CACHE_MAX_MINUTES) {
    try {
      await crawlOnDemand(startCityId, endCityId, date);
    } catch (err) {
      console.error("[search] ylxweb crawl failed:", err.message);
      if (cacheAge === null) return [];
    }
  }

  const rows = await db.queryIntervals(routeId, date);
  return rows.map((r) => ({ ...r, source: "yuecx" }));
}

async function fetchBusbossIntervalsSafe(bbStartCityId, bbEndCityId, date) {
  try {
    const routeId = await db.getRouteId(bbStartCityId, bbEndCityId, "busboss");

    let cacheAge = routeId ? await db.getCacheAge(routeId, date) : null;
    if (cacheAge === null || cacheAge > CACHE_MAX_MINUTES) {
      const ivs = await crawlBusbossOnDemand(bbStartCityId, bbEndCityId, date);
      return ivs.map((r) => ({ ...r, source: "busboss" }));
    }

    const rows = await db.queryIntervals(routeId, date);
    return rows.map((r) => ({ ...r, source: "busboss" }));
  } catch (err) {
    console.error("[search] busboss crawl failed:", err.message);
    return [];
  }
}

function formatInterval(row) {
  const source = row.source || "yuecx";
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
    source,
    sourceName: SOURCE_LABELS[source] || source,
  };
}

// ── Tool 4: score_and_rank ──────────────────────────────────

async function scoreAndRankTool(params, userId, ctx) {
  const { date, startCity, endCity, targetTime, timeMode, preferBoarding, preferDropoff, weights, topN } = params;
  const searchResult = await searchIntervals({ date, startCity, endCity });
  if (!searchResult.success) return { success: false, error: searchResult.error };

  const loc = ctx?.location;
  let userLocation = null;
  if (loc && loc.latitude && loc.longitude) {
    const gcj = gaodeMap.wgs84ToGcj02(loc.latitude, loc.longitude);
    userLocation = { lat: gcj.lat, lng: gcj.lng };
  }

  let destLocation = null;
  if (preferDropoff && preferDropoff.length > 0 && gaodeMap.isConfigured()) {
    const kw = preferDropoff[0];
    const isDistrictOnly = Object.values(ADCODE_DISTRICT).includes(kw);
    if (!isDistrictOnly) {
      try {
        destLocation = await gaodeMap.geocode(kw, endCity);
      } catch (e) {
        console.warn("[score_and_rank] geocode dest failed:", e.message);
      }
    }
  }

  let boardingRefLocation = null;
  if (preferBoarding && preferBoarding.length > 0 && gaodeMap.isConfigured()) {
    const kw = preferBoarding[0];
    const isDistrictOnly = Object.values(ADCODE_DISTRICT).includes(kw);
    if (!isDistrictOnly) {
      try {
        boardingRefLocation = await gaodeMap.geocode(kw, startCity);
      } catch (e) {
        console.warn("[score_and_rank] geocode boarding failed:", e.message);
      }
    }
  }

  const allIntervals = searchResult.data.intervals;
  const allStationNames = new Set();
  for (const iv of allIntervals) {
    for (const s of iv.boardingStations || []) allStationNames.add(s.name);
    for (const s of iv.dropoffStations || []) allStationNames.add(s.name);
  }
  const stationCoords = await db.getStationCoords([...allStationNames]);

  const result = scoreAndRank({
    intervals: allIntervals,
    tripDate: date,
    targetTime, timeMode,
    preferBoarding: preferBoarding || [],
    preferDropoff: preferDropoff || [],
    userLocation,
    destLocation,
    boardingRefLocation,
    stationCoords,
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

  // Search across all sources to find the interval
  const allCityRows = await db.findCityByName(startCity);
  const allEndRows = await db.findCityByName(endCity);
  let iv = null;
  let matchedSource = "yuecx";

  for (const src of ["yuecx", "busboss"]) {
    const sCity = allCityRows.find((r) => r.source === src);
    const eCity = allEndRows.find((r) => r.source === src);
    if (!sCity || !eCity) continue;
    const routeId = await db.getRouteId(sCity.city_id, eCity.city_id, src);
    if (!routeId) continue;
    const intervals = await db.queryIntervals(routeId, date);
    const found = intervals.find((r) => String(r.interval_id) === String(intervalId));
    if (found) {
      iv = found;
      matchedSource = src;
      break;
    }
  }

  if (!iv) return { success: false, error: `未找到班次 ${intervalId}` };

  const boarding = (iv.boarding_stations || []).find(
    (s) => !boardingStationName || s.name.includes(boardingStationName)
  ) || (iv.boarding_stations || [])[0];

  const dropoff = (iv.dropoff_stations || []).find(
    (s) => !dropoffStationName || s.name.includes(dropoffStationName)
  ) || (iv.dropoff_stations || [])[0];

  const miniappName = MINIAPP_NAMES[matchedSource] || MINIAPP_NAME;

  return {
    success: true,
    data: {
      intervalName: iv.interval_name,
      fromTime: iv.from_time,
      boardingTime: boarding?.arriveTime || iv.from_time,
      date,
      route: `${start.city_name}→${end.city_name}`,
      boardingStation: boarding?.name || "未知",
      dropoffStation: dropoff?.name || "未知",
      priceYuan: (iv.price_fen / 100).toFixed(2),
      residue: iv.residue,
      miniappName,
      source: matchedSource,
      sourceName: SOURCE_LABELS[matchedSource] || matchedSource,
    },
  };
}

// ── Tool 8: suggest_boarding ─────────────────────────────────

async function suggestBoarding({ startCity, endCity, date }, _userId, ctx) {
  const loc = ctx?.location;
  if (!loc || !loc.latitude || !loc.longitude) {
    return { success: false, error: "用户未授权定位，无法自动推荐上车站。请直接询问用户偏好的上车区域。" };
  }

  const start = await resolveCityId(startCity);
  const end = await resolveCityId(endCity);
  if (!start || !end) return { success: false, error: "城市未找到" };

  const routeId = await db.getRouteId(start.city_id, end.city_id);
  if (!routeId) return { success: false, error: `不支持的路线: ${startCity}->${endCity}` };

  const intervals = await db.queryIntervals(routeId, date);
  if (intervals.length === 0) return { success: false, error: "该日期暂无班次" };

  const stationMap = new Map();
  for (const iv of intervals) {
    for (const st of iv.boarding_stations || []) {
      if (!stationMap.has(st.name)) {
        stationMap.set(st.name, { name: st.name, adcode: st.adcode || "", intervalCount: 0, timeRange: [] });
      }
      const entry = stationMap.get(st.name);
      entry.intervalCount++;
      if (st.arriveTime) entry.timeRange.push(st.arriveTime);
    }
  }

  const allStations = Array.from(stationMap.values());
  if (allStations.length === 0) return { success: false, error: "该路线暂无上车站数据" };

  const stationNames = allStations.map((s) => s.name);
  const coordsMap = await db.getStationCoords(stationNames);
  const gcj = gaodeMap.wgs84ToGcj02(loc.latitude, loc.longitude);

  for (const st of allStations) {
    const coord = coordsMap.get(st.name);
    if (coord) {
      st.estimatedDistance = Math.round(gaodeMap.haversineMeters(gcj.lat, gcj.lng, coord.lat, coord.lng));
    } else {
      const distName = ADCODE_DISTRICT[st.adcode];
      if (gaodeMap.isConfigured()) {
        try {
          const geo = await gaodeMap.reverseGeocode(loc.latitude, loc.longitude);
          if (distName && distName === geo.district) {
            st.estimatedDistance = 5000;
            st.sameDistrict = true;
          }
        } catch (_) { /* ignore */ }
      }
    }
  }

  const withDist = allStations.filter((s) => s.estimatedDistance != null);
  const noDist = allStations.filter((s) => s.estimatedDistance == null);
  withDist.sort((a, b) => a.estimatedDistance - b.estimatedDistance);
  const recommendations = [...withDist, ...noDist].slice(0, 5);

  return {
    success: true,
    data: {
      userLocation: { latitude: loc.latitude, longitude: loc.longitude },
      route: `${start.city_name}->${end.city_name}`,
      totalStations: allStations.length,
      recommendations: recommendations.map((st) => ({
        name: st.name,
        distanceText: st.estimatedDistance != null
          ? st.estimatedDistance < 1000
            ? `约${st.estimatedDistance}米`
            : `约${(st.estimatedDistance / 1000).toFixed(1)}公里`
          : st.sameDistrict ? "同区" : "距离未知",
        intervalCount: st.intervalCount,
        timeRange: st.timeRange.length > 0
          ? `${st.timeRange.sort()[0]}~${st.timeRange.sort().slice(-1)[0]}`
          : "",
        sameDistrict: st.sameDistrict || false,
      })),
      tip: "以上是根据你的定位推荐的最近上车站，可用作 preferBoarding 关键词。",
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
  suggest_boarding: suggestBoarding,
};

const TOOL_SCHEMAS = [
  { type: "function", function: { name: "get_user_location", description: "获取用户当前 GPS 位置并解析为结构化地址（城市、区、街道、附近地标）。如果用户已授权浏览器定位则返回精确位置，否则返回 needAsk=true 表示需要口头询问。", parameters: { type: "object", properties: {}, required: [] } } },
  { type: "function", function: { name: "list_cities", description: "列出所有支持的出发城市，或查询某个城市可达的目的地列表。", parameters: { type: "object", properties: { startCity: { type: "string", description: "可选。指定出发城市名，查询其可达目的地。不传则返回所有城市。" } }, required: [] } } },
  { type: "function", function: { name: "search_intervals", description: "实时查询指定日期和路线的所有可用班次。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" } }, required: ["date", "startCity", "endCity"] } } },
  { type: "function", function: { name: "score_and_rank", description: "对指定日期路线的班次综合评分排序。有GPS时自动按上车距离排序；如用户说了目的地关键词(如'天河体育中心')，传入preferDropoff会自动geocode并按下车距离排序。六维度: 时间/价格/上车距离/下车距离/站点关键词/余票。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, targetTime: { type: "string", description: "期望时间 HH:MM" }, timeMode: { type: "string", enum: ["depart", "arrive", "asap"], description: "时间模式" }, preferBoarding: { type: "array", items: { type: "string" }, description: "偏好上车站关键词" }, preferDropoff: { type: "array", items: { type: "string" }, description: "偏好下车站关键词或目的地地标(如'天河体育中心')，系统会自动geocode计算距离" }, topN: { type: "number", description: "返回前 N 个，默认 5" } }, required: ["date", "startCity", "endCity", "targetTime", "timeMode"] } } },
  { type: "function", function: { name: "verify_realtime", description: "实时查询指定班次最新余票和状态。", parameters: { type: "object", properties: { date: { type: "string", description: "日期" }, startCity: { type: "string", description: "出发城市" }, endCity: { type: "string", description: "到达城市" }, intervalId: { type: "string", description: "班次 ID" } }, required: ["date", "startCity", "endCity", "intervalId"] } } },
  { type: "function", function: { name: "refresh_cache", description: "强制刷新指定路线的数据。", parameters: { type: "object", properties: { startCity: { type: "string", description: "出发城市" }, endCity: { type: "string", description: "到达城市" }, days: { type: "number", description: "天数，默认 3" } }, required: ["startCity", "endCity"] } } },
  { type: "function", function: { name: "book_interval", description: "为用户生成指定班次的订票跳转链接。用户可点击链接直接跳转到小程序填单页完成购票。", parameters: { type: "object", properties: { date: { type: "string", description: "出行日期 YYYY-MM-DD" }, startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, intervalId: { type: "string", description: "班次 ID" }, boardingStationName: { type: "string", description: "偏好的上车站名称（可选，模糊匹配）" }, dropoffStationName: { type: "string", description: "偏好的下车站名称（可选，模糊匹配）" } }, required: ["date", "startCity", "endCity", "intervalId"] } } },
  { type: "function", function: { name: "suggest_boarding", description: "根据用户 GPS 定位自动推荐最近的上车站点。需要用户已授权浏览器定位。返回按距离排序的候选上车站列表，包含距离、覆盖班次数、时间范围。", parameters: { type: "object", properties: { startCity: { type: "string", description: "出发城市名" }, endCity: { type: "string", description: "到达城市名" }, date: { type: "string", description: "出行日期 YYYY-MM-DD" } }, required: ["startCity", "endCity", "date"] } } },
];

const CONTEXT_TOOLS = new Set(["get_user_location", "suggest_boarding", "score_and_rank"]);

async function executeTool(name, args, userId, ctx) {
  const handler = TOOL_HANDLERS[name];
  if (!handler) return JSON.stringify({ success: false, error: `未知工具: ${name}` });
  console.log(`[tool] ${name}(${JSON.stringify(args)})`);
  try {
    const result = CONTEXT_TOOLS.has(name)
      ? await handler(args, userId, ctx)
      : await handler(args);
    if (!result.success) console.log(`[tool] ${name} → error:`, result.error);
    return JSON.stringify(result);
  } catch (err) {
    console.error(`[tool] ${name} threw:`, err.message);
    return JSON.stringify({ success: false, error: err.message });
  }
}

module.exports = { TOOL_SCHEMAS, executeTool };

/**
 * 百度地图 Web 服务 API 封装
 *
 * 提供逆地理编码、地点检索、距离计算等能力，
 * 用于根据用户 GPS 坐标自动推荐上车站点。
 *
 * 需要环境变量 BAIDU_MAP_AK（服务端 AK，需开通 Web 服务 API 权限）。
 * 申请地址: https://lbsyun.baidu.com/apiconsole/key
 */

const BAIDU_AK = process.env.BAIDU_MAP_AK || "";

const GEOCODER_URL = "https://api.map.baidu.com/reverse_geocoding/v3/";
const PLACE_SEARCH_URL = "https://api.map.baidu.com/place/v2/search";
const SUGGESTION_URL = "https://api.map.baidu.com/place/v2/suggestion";

// WGS-84 → BD-09 坐标转换（浏览器 GPS 是 WGS-84，百度 API 需要 BD-09）
const PI = Math.PI;
const X_PI = (PI * 3000.0) / 180.0;

function wgs84ToGcj02(lng, lat) {
  const a = 6378245.0;
  const ee = 0.00669342162296594323;
  let dLat = transformLat(lng - 105.0, lat - 35.0);
  let dLng = transformLng(lng - 105.0, lat - 35.0);
  const radLat = (lat / 180.0) * PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * PI);
  dLng = (dLng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * PI);
  return { lng: lng + dLng, lat: lat + dLat };
}

function gcj02ToBd09(lng, lat) {
  const z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * X_PI);
  const theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * X_PI);
  return { lng: z * Math.cos(theta) + 0.0065, lat: z * Math.sin(theta) + 0.006 };
}

function wgs84ToBd09(lng, lat) {
  const gcj = wgs84ToGcj02(lng, lat);
  return gcj02ToBd09(gcj.lng, gcj.lat);
}

function transformLat(lng, lat) {
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0;
  ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320.0 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0;
  return ret;
}

function transformLng(lng, lat) {
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) / 3.0;
  ret += ((150.0 * Math.sin((lng / 12.0) * PI) + 300.0 * Math.sin((lng / 30.0) * PI)) * 2.0) / 3.0;
  return ret;
}

// Haversine 距离（米）
function haversineMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function baiduGet(baseUrl, params) {
  if (!BAIDU_AK) throw new Error("BAIDU_MAP_AK 未配置");
  const url = new URL(baseUrl);
  params.ak = BAIDU_AK;
  params.output = "json";
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }
  const resp = await fetch(url.toString(), { signal: AbortSignal.timeout(5000) });
  if (!resp.ok) throw new Error(`Baidu API HTTP ${resp.status}`);
  const data = await resp.json();
  if (data.status !== 0) throw new Error(`Baidu API error ${data.status}: ${data.message || ""}`);
  return data;
}

/**
 * 逆地理编码：GPS 坐标 → 结构化地址
 * @param {number} lat WGS-84 纬度
 * @param {number} lng WGS-84 经度
 */
async function reverseGeocode(lat, lng) {
  const bd = wgs84ToBd09(lng, lat);
  const data = await baiduGet(GEOCODER_URL, {
    location: `${bd.lat},${bd.lng}`,
    extensions_poi: 1,
    poi_types: "交通设施",
    coordtype: "bd09ll",
  });
  const r = data.result;
  return {
    formatted: r.formatted_address,
    province: r.addressComponent?.province,
    city: r.addressComponent?.city?.replace("市", ""),
    district: r.addressComponent?.district?.replace("区", ""),
    adcode: r.addressComponent?.adcode,
    street: r.addressComponent?.street,
    description: r.sematic_description || r.formatted_address,
    pois: (r.pois || []).slice(0, 5).map((p) => ({
      name: p.name,
      tag: p.tag,
      addr: p.addr,
      distance: p.distance ? parseInt(p.distance) : null,
      direction: p.direction,
    })),
    bdLat: bd.lat,
    bdLng: bd.lng,
  };
}

/**
 * 关键词 POI 搜索（圆形区域）
 * @param {string} query 搜索关键词（如 "巴士站" "客运站"）
 * @param {number} lat WGS-84 纬度
 * @param {number} lng WGS-84 经度
 * @param {number} radius 搜索半径（米），默认 5000
 */
async function searchNearby(query, lat, lng, radius = 5000) {
  const bd = wgs84ToBd09(lng, lat);
  const data = await baiduGet(PLACE_SEARCH_URL, {
    query,
    location: `${bd.lat},${bd.lng}`,
    radius,
    scope: 2,
    coord_type: 1,
    page_size: 10,
  });
  return (data.results || []).map((p) => ({
    name: p.name,
    address: p.address,
    lat: p.location?.lat,
    lng: p.location?.lng,
    distance: p.detail_info?.distance ? parseInt(p.detail_info.distance) : null,
    tag: p.detail_info?.tag,
  }));
}

/**
 * 地点输入建议
 * @param {string} query 输入关键词
 * @param {string} region 城市名
 */
async function placeSuggestion(query, region) {
  const data = await baiduGet(SUGGESTION_URL, {
    query,
    region,
    city_limit: "true",
  });
  return (data.result || []).map((p) => ({
    name: p.name,
    city: p.city,
    district: p.district,
    uid: p.uid,
    lat: p.location?.lat,
    lng: p.location?.lng,
  }));
}

/**
 * 核心能力：根据用户 GPS 位置，在候选上车站中推荐最近的
 * @param {number} userLat WGS-84
 * @param {number} userLng WGS-84
 * @param {Array} stations 候选站点 [{name, lat?, lng?, adcode?}]
 * @param {number} topN 返回前 N 个
 */
async function rankStationsByDistance(userLat, userLng, stations, topN = 3) {
  const stationsWithCoords = [];

  for (const st of stations) {
    if (st.lat && st.lng) {
      const dist = haversineMeters(userLat, userLng, st.lat, st.lng);
      stationsWithCoords.push({ ...st, distanceMeters: Math.round(dist) });
    } else {
      stationsWithCoords.push({ ...st, distanceMeters: null });
    }
  }

  const withDist = stationsWithCoords.filter((s) => s.distanceMeters !== null);
  const noDist = stationsWithCoords.filter((s) => s.distanceMeters === null);
  withDist.sort((a, b) => a.distanceMeters - b.distanceMeters);

  return [...withDist, ...noDist].slice(0, topN);
}

function isConfigured() {
  return !!BAIDU_AK;
}

module.exports = {
  reverseGeocode,
  searchNearby,
  placeSuggestion,
  rankStationsByDistance,
  haversineMeters,
  wgs84ToBd09,
  isConfigured,
};

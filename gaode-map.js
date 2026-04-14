/**
 * 高德地图 Web 服务 API 封装
 *
 * 替代 baidu-map.js，提供逆地理编码、正向 geocode、POI 搜索、距离计算。
 * 高德使用 GCJ-02 坐标系（国标），浏览器 GPS 为 WGS-84，需转换。
 *
 * 环境变量: AMAP_KEY（Web 服务 Key）
 * 申请: https://console.amap.com/dev/key/app → 选「Web服务」
 */

const AMAP_KEY = process.env.AMAP_KEY || "";

const REGEO_URL = "https://restapi.amap.com/v3/geocode/regeo";
const GEO_URL = "https://restapi.amap.com/v3/geocode/geo";
const POI_URL = "https://restapi.amap.com/v3/place/around";

const PI = Math.PI;

// ── WGS-84 → GCJ-02 ────────────────────────────────────────

function transformLat(lng, lat) {
  let r = -100 + 2 * lng + 3 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  r += ((20 * Math.sin(6 * lng * PI) + 20 * Math.sin(2 * lng * PI)) * 2) / 3;
  r += ((20 * Math.sin(lat * PI) + 40 * Math.sin((lat / 3) * PI)) * 2) / 3;
  r += ((160 * Math.sin((lat / 12) * PI) + 320 * Math.sin((lat * PI) / 30)) * 2) / 3;
  return r;
}

function transformLng(lng, lat) {
  let r = 300 + lng + 2 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  r += ((20 * Math.sin(6 * lng * PI) + 20 * Math.sin(2 * lng * PI)) * 2) / 3;
  r += ((20 * Math.sin(lng * PI) + 40 * Math.sin((lng / 3) * PI)) * 2) / 3;
  r += ((150 * Math.sin((lng / 12) * PI) + 300 * Math.sin((lng / 30) * PI)) * 2) / 3;
  return r;
}

function wgs84ToGcj02(lat, lng) {
  const a = 6378245.0;
  const ee = 0.00669342162296594323;
  let dLat = transformLat(lng - 105, lat - 35);
  let dLng = transformLng(lng - 105, lat - 35);
  const radLat = (lat / 180) * PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180) / (((a * (1 - ee)) / (magic * sqrtMagic)) * PI);
  dLng = (dLng * 180) / ((a / sqrtMagic) * Math.cos(radLat) * PI);
  return { lat: lat + dLat, lng: lng + dLng };
}

// ── Haversine ───────────────────────────────────────────────

function haversineMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a2 = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
}

// ── HTTP helper ─────────────────────────────────────────────

async function amapGet(baseUrl, params) {
  if (!AMAP_KEY) throw new Error("AMAP_KEY 未配置");
  const url = new URL(baseUrl);
  params.key = AMAP_KEY;
  params.output = "json";
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }
  const resp = await fetch(url.toString(), { signal: AbortSignal.timeout(5000) });
  if (!resp.ok) throw new Error(`AMap API HTTP ${resp.status}`);
  const data = await resp.json();
  if (data.status !== "1" && data.infocode !== "10000") {
    throw new Error(`AMap API error ${data.infocode}: ${data.info || ""}`);
  }
  return data;
}

/**
 * 逆地理编码: GPS → 结构化地址
 * @param {number} lat WGS-84 纬度
 * @param {number} lng WGS-84 经度
 */
async function reverseGeocode(lat, lng) {
  const gcj = wgs84ToGcj02(lat, lng);
  const data = await amapGet(REGEO_URL, {
    location: `${gcj.lng.toFixed(6)},${gcj.lat.toFixed(6)}`,
    extensions: "all",
    radius: 1000,
  });
  const r = data.regeocode || {};
  const ac = r.addressComponent || {};
  const pois = (r.pois || []).slice(0, 5);
  return {
    formatted: r.formatted_address || "",
    province: ac.province || "",
    city: (ac.city || ac.province || "").replace("市", ""),
    district: (ac.district || "").replace("区", ""),
    adcode: ac.adcode || "",
    street: ac.streetNumber?.street || "",
    description: r.formatted_address || "",
    pois: pois.map((p) => ({
      name: p.name,
      tag: p.type,
      addr: p.address,
      distance: p.distance ? parseInt(p.distance) : null,
      direction: p.direction,
    })),
  };
}

/**
 * 正向地理编码: 地址文本 → 坐标
 * @param {string} address 地址或地名（如 "天河体育中心"）
 * @param {string} [city] 限定城市（提高准确性）
 * @returns {{ lat: number, lng: number, formatted: string } | null}
 */
async function geocode(address, city) {
  const params = { address };
  if (city) params.city = city;
  const data = await amapGet(GEO_URL, params);
  const results = data.geocodes || [];
  if (results.length === 0) return null;
  const loc = results[0].location;
  if (!loc) return null;
  const [lngStr, latStr] = loc.split(",");
  return {
    lat: parseFloat(latStr),
    lng: parseFloat(lngStr),
    formatted: results[0].formatted_address || address,
    adcode: results[0].adcode || "",
  };
}

/**
 * POI 周边搜索
 * @param {string} keywords 关键词
 * @param {number} lat WGS-84 纬度
 * @param {number} lng WGS-84 经度
 * @param {number} [radius=5000] 半径（米）
 */
async function searchPOI(keywords, lat, lng, radius = 5000) {
  const gcj = wgs84ToGcj02(lat, lng);
  const data = await amapGet(POI_URL, {
    keywords,
    location: `${gcj.lng.toFixed(6)},${gcj.lat.toFixed(6)}`,
    radius,
    sortrule: "distance",
    offset: 10,
  });
  return (data.pois || []).map((p) => {
    const [pLng, pLat] = (p.location || "0,0").split(",").map(Number);
    return {
      name: p.name,
      address: p.address,
      lat: pLat,
      lng: pLng,
      distance: p.distance ? parseInt(p.distance) : null,
      tag: p.type,
    };
  });
}

/**
 * 根据关键词在指定城市搜索地点坐标（用于查站点坐标）
 * @param {string} name 站点名
 * @param {string} city 城市名
 * @returns {{ lat: number, lng: number } | null} GCJ-02 坐标
 */
async function searchStationCoord(name, city) {
  const geo = await geocode(name, city);
  if (geo) return { lat: geo.lat, lng: geo.lng };
  try {
    const pois = await searchPOI(name, 23.1, 113.3, 50000);
    if (pois.length > 0) return { lat: pois[0].lat, lng: pois[0].lng };
  } catch (_) { /* ignore */ }
  return null;
}

function isConfigured() {
  return !!AMAP_KEY;
}

module.exports = {
  reverseGeocode,
  geocode,
  searchPOI,
  searchStationCoord,
  haversineMeters,
  wgs84ToGcj02,
  isConfigured,
};

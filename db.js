/**
 * PostgreSQL 数据库访问层
 * 支持 Supabase PostgreSQL，通过 DATABASE_URL 环境变量连接。
 * 也可通过 --migrate 命令行参数执行建表。
 */

const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("supabase")
    ? { rejectUnauthorized: false }
    : false,
  max: 5,
  idleTimeoutMillis: 20000,
  connectionTimeoutMillis: 10000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000,
});

pool.on("error", (err) => {
  console.error("[db] pool idle client error (non-fatal):", err.message);
});

const TRANSIENT_RE = /terminated|ECONNRESET|ETIMEDOUT|ENOTFOUND|socket|network|TLS|Connection refused/i;

async function queryRetry(text, params, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await pool.query(text, params);
    } catch (err) {
      if (!TRANSIENT_RE.test(err.message) || attempt === retries) throw err;
      console.warn(`[db] query retry ${attempt}/${retries}: ${err.message}`);
      await new Promise(r => setTimeout(r, 400 * attempt));
    }
  }
}

// ── In-memory city cache (fallback when DB is unreachable) ──

const _cityCache = new Map();

function _cacheCities(rows) {
  for (const r of rows) _cityCache.set(r.city_id, { city_id: r.city_id, city_name: r.city_name, source: r.source });
}

function _searchCityCache(name) {
  const results = [];
  for (const c of _cityCache.values()) {
    if (c.city_name === name || c.city_name.includes(name) || name.includes(c.city_name)) {
      results.push(c);
    }
  }
  results.sort((a, b) => (b.city_name === name ? 1 : 0) - (a.city_name === name ? 1 : 0) || b.city_name.length - a.city_name.length);
  return results.slice(0, 10);
}

// ── Cities ──────────────────────────────────────────────────

async function upsertCity(cityId, cityName, source = "yuecx") {
  _cityCache.set(cityId, { city_id: cityId, city_name: cityName, source });
  await queryRetry(
    `INSERT INTO cities (city_id, city_name, source, updated_at)
     VALUES ($1, $2, $3, NOW())
     ON CONFLICT (city_id) DO UPDATE SET city_name = $2, updated_at = NOW()`,
    [cityId, cityName, source]
  );
}

async function findCityByName(name) {
  try {
    const { rows } = await queryRetry(
      `SELECT city_id, city_name, source FROM cities
       WHERE city_name = $1 OR city_name LIKE $2 OR $1 LIKE city_name || '%'
       ORDER BY (city_name = $1) DESC, length(city_name) DESC
       LIMIT 10`,
      [name, `%${name}%`]
    );
    _cacheCities(rows);
    return rows;
  } catch (err) {
    console.warn(`[db] findCityByName DB failed, using cache: ${err.message}`);
    const cached = _searchCityCache(name);
    if (cached.length > 0) return cached;
    throw err;
  }
}

async function findCityByNameAndSource(name, source) {
  try {
    const { rows } = await queryRetry(
      `SELECT city_id, city_name, source FROM cities
       WHERE (city_name = $1 OR city_name LIKE $2 OR $1 LIKE city_name || '%')
         AND source = $3
       ORDER BY (city_name = $1) DESC, length(city_name) DESC
       LIMIT 5`,
      [name, `%${name}%`, source]
    );
    _cacheCities(rows);
    return rows;
  } catch (err) {
    console.warn(`[db] findCityByNameAndSource DB failed, using cache: ${err.message}`);
    const cached = _searchCityCache(name).filter(c => c.source === source);
    if (cached.length > 0) return cached.slice(0, 5);
    throw err;
  }
}

async function getAllCities() {
  const { rows } = await queryRetry(
    `SELECT city_id, city_name FROM cities ORDER BY city_name`
  );
  return rows;
}

// ── Routes ──────────────────────────────────────────────────

async function upsertRoute(startCityId, endCityId, source = "yuecx") {
  const { rows } = await queryRetry(
    `INSERT INTO routes (start_city_id, end_city_id, source)
     VALUES ($1, $2, $3)
     ON CONFLICT (start_city_id, end_city_id, source) DO NOTHING
     RETURNING id`,
    [startCityId, endCityId, source]
  );
  if (rows.length) return rows[0].id;
  const res = await queryRetry(
    `SELECT id FROM routes WHERE start_city_id=$1 AND end_city_id=$2 AND source=$3`,
    [startCityId, endCityId, source]
  );
  return res.rows[0]?.id;
}

async function getRouteId(startCityId, endCityId, source = "yuecx") {
  const { rows } = await queryRetry(
    `SELECT id FROM routes WHERE start_city_id=$1 AND end_city_id=$2 AND source=$3`,
    [startCityId, endCityId, source]
  );
  return rows[0]?.id;
}

async function getHotRoutes() {
  const { rows } = await queryRetry(
    `SELECT r.id, r.start_city_id, r.end_city_id,
            c1.city_name as start_name, c2.city_name as end_name
     FROM routes r
     JOIN cities c1 ON r.start_city_id = c1.city_id
     JOIN cities c2 ON r.end_city_id = c2.city_id
     WHERE r.is_hot = TRUE`
  );
  return rows;
}

async function getAllRoutes() {
  const { rows } = await queryRetry(
    `SELECT r.id, r.start_city_id, r.end_city_id,
            c1.city_name as start_name, c2.city_name as end_name
     FROM routes r
     JOIN cities c1 ON r.start_city_id = c1.city_id
     JOIN cities c2 ON r.end_city_id = c2.city_id
     ORDER BY r.id`
  );
  return rows;
}

async function getRoutesBySource(source) {
  const { rows } = await queryRetry(
    `SELECT r.id, r.start_city_id, r.end_city_id,
            c1.city_name as start_name, c2.city_name as end_name
     FROM routes r
     JOIN cities c1 ON r.start_city_id = c1.city_id AND r.source = c1.source
     JOIN cities c2 ON r.end_city_id = c2.city_id AND r.source = c2.source
     WHERE r.source = $1
     ORDER BY r.id`,
    [source]
  );
  return rows;
}

async function getLastCrawlTime(crawlerName) {
  const { rows } = await queryRetry(
    `SELECT started_at FROM crawl_logs
     WHERE crawler = $1 AND status = 'success'
     ORDER BY started_at DESC LIMIT 1`,
    [crawlerName]
  );
  return rows[0]?.started_at || null;
}

async function getDestinations(startCityName) {
  const { rows } = await queryRetry(
    `SELECT c2.city_id, c2.city_name
     FROM routes r
     JOIN cities c1 ON r.start_city_id = c1.city_id
     JOIN cities c2 ON r.end_city_id = c2.city_id
     WHERE c1.city_name LIKE $1
     ORDER BY c2.city_name`,
    [`%${startCityName}%`]
  );
  return rows;
}

async function updateRouteLastCrawl(routeId) {
  await queryRetry(
    `UPDATE routes SET last_crawl_at = NOW() WHERE id = $1`,
    [routeId]
  );
}

// ── Intervals ───────────────────────────────────────────────

async function upsertIntervals(intervals) {
  if (!intervals.length) return;
  const BATCH = 20;
  const client = await pool.connect();
  client.on("error", (err) => {
    console.error("[db] upsertIntervals client error (non-fatal):", err.message);
  });
  try {
    await client.query("BEGIN");
    for (let i = 0; i < intervals.length; i += BATCH) {
      const chunk = intervals.slice(i, i + BATCH);
      const values = [];
      const placeholders = [];
      let idx = 1;
      for (const iv of chunk) {
        placeholders.push(`($${idx},$${idx+1},$${idx+2},$${idx+3},$${idx+4},$${idx+5},$${idx+6},$${idx+7},$${idx+8},$${idx+9},$${idx+10},$${idx+11},$${idx+12},$${idx+13})`);
        values.push(
          iv.interval_id, iv.route_id, iv.take_date, iv.from_time,
          iv.interval_name, iv.price_fen, iv.residue, iv.status, iv.line_id,
          JSON.stringify(iv.boarding_stations),
          JSON.stringify(iv.dropoff_stations),
          JSON.stringify(iv.raw_data),
          iv.crawl_time, iv.source || "yuecx",
        );
        idx += 14;
      }
      await client.query(
        `INSERT INTO intervals
           (interval_id, route_id, take_date, from_time, interval_name,
            price_fen, residue, status, line_id,
            boarding_stations, dropoff_stations, raw_data, crawl_time, source)
         VALUES ${placeholders.join(",")}
         ON CONFLICT (interval_id, take_date) DO UPDATE SET
           residue = EXCLUDED.residue, status = EXCLUDED.status,
           price_fen = EXCLUDED.price_fen,
           boarding_stations = EXCLUDED.boarding_stations,
           dropoff_stations = EXCLUDED.dropoff_stations,
           raw_data = EXCLUDED.raw_data,
           crawl_time = EXCLUDED.crawl_time`,
        values
      );
    }
    await client.query("COMMIT");
  } catch (err) {
    try { await client.query("ROLLBACK"); } catch (_) {}
    throw err;
  } finally {
    client.release(true);
  }
}

async function queryIntervals(routeId, takeDate) {
  const { rows } = await queryRetry(
    `SELECT interval_id, from_time, interval_name, price_fen, residue,
            status, line_id, boarding_stations, dropoff_stations, crawl_time, source
     FROM intervals
     WHERE route_id = $1 AND take_date = $2 AND status = 1
     ORDER BY from_time`,
    [routeId, takeDate]
  );
  return rows;
}

/**
 * 跨 source 聚合查询: 按城市名查所有源的班次, 按 from_time 排序
 */
async function queryIntervalsByCity(startCityName, endCityName, takeDate) {
  const { rows } = await queryRetry(
    `SELECT i.interval_id, i.from_time, i.interval_name, i.price_fen, i.residue,
            i.status, i.line_id, i.boarding_stations, i.dropoff_stations,
            i.crawl_time, i.source,
            r.start_city_id, r.end_city_id
     FROM intervals i
     JOIN routes r ON i.route_id = r.id
     JOIN cities c1 ON r.start_city_id = c1.city_id AND r.source = c1.source
     JOIN cities c2 ON r.end_city_id = c2.city_id AND r.source = c2.source
     WHERE (c1.city_name = $1 OR c1.city_name LIKE $4)
       AND (c2.city_name = $2 OR c2.city_name LIKE $5)
       AND i.take_date = $3
       AND i.status = 1
     ORDER BY i.from_time`,
    [startCityName, endCityName, takeDate, `%${startCityName}%`, `%${endCityName}%`]
  );
  return rows;
}

async function getCacheAge(routeId, takeDate) {
  const { rows } = await queryRetry(
    `SELECT MAX(crawl_time) as latest FROM intervals
     WHERE route_id = $1 AND take_date = $2`,
    [routeId, takeDate]
  );
  if (!rows[0]?.latest) return null;
  return Math.round((Date.now() - new Date(rows[0].latest).getTime()) / 60000);
}

async function cleanExpired() {
  const { rowCount } = await queryRetry(
    `DELETE FROM intervals WHERE take_date < CURRENT_DATE - 1`
  );
  return rowCount;
}

// ── Station Coords ──────────────────────────────────────────

async function upsertStationCoord(name, lat, lng, city) {
  await queryRetry(
    `INSERT INTO station_coords (station_name, lat, lng, city, updated_at)
     VALUES ($1, $2, $3, $4, NOW())
     ON CONFLICT (station_name) DO UPDATE SET lat=$2, lng=$3, city=$4, updated_at=NOW()`,
    [name, lat, lng, city || null]
  );
}

async function upsertStationCoordsBatch(coords) {
  if (!coords.length) return;
  const BATCH = 50;
  for (let i = 0; i < coords.length; i += BATCH) {
    const chunk = coords.slice(i, i + BATCH);
    const values = [];
    const phs = [];
    let idx = 1;
    for (const c of chunk) {
      phs.push(`($${idx},$${idx+1},$${idx+2},$${idx+3},NOW())`);
      values.push(c.name, c.lat, c.lng, c.city || null);
      idx += 4;
    }
    await queryRetry(
      `INSERT INTO station_coords (station_name, lat, lng, city, updated_at)
       VALUES ${phs.join(",")}
       ON CONFLICT (station_name) DO UPDATE SET lat=EXCLUDED.lat, lng=EXCLUDED.lng, city=EXCLUDED.city, updated_at=NOW()`,
      values
    );
  }
}

async function getStationCoords(names) {
  if (!names.length) return new Map();
  try {
    const { rows } = await queryRetry(
      `SELECT station_name, lat, lng FROM station_coords WHERE station_name = ANY($1)`,
      [names]
    );
    const map = new Map();
    for (const r of rows) map.set(r.station_name, { lat: r.lat, lng: r.lng });
    return map;
  } catch (err) {
    console.warn(`[db] getStationCoords failed, returning empty: ${err.message}`);
    return new Map();
  }
}

async function getAllStationNames() {
  const { rows } = await queryRetry(`SELECT station_name FROM station_coords`);
  return new Set(rows.map((r) => r.station_name));
}

// ── Migration ───────────────────────────────────────────────

async function migrate() {
  const sql = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf-8");
  await queryRetry(sql);
  console.log("Migration complete.");
}

// ── Orders ──────────────────────────────────────────────────

async function saveOrder(order) {
  try {
    await queryRetry(
      `INSERT INTO orders (
        order_id, source, status, interval_id, date,
        start_city, end_city, boarding_station, dropoff_station,
        from_time, price_yuan, passenger_info, user_id,
        miniapp_name, miniapp_app_id, miniapp_path,
        created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $17)
      ON CONFLICT (order_id) DO UPDATE SET
        status = EXCLUDED.status,
        updated_at = EXCLUDED.updated_at`,
      [
        order.orderId, order.source, order.status, order.intervalId, order.date,
        order.startCity, order.endCity, order.boardingStation, order.dropoffStation,
        order.fromTime, order.priceYuan, JSON.stringify(order.passengerInfo), order.userId,
        order.miniapp?.name, order.miniapp?.appId, order.miniapp?.path,
        order.createdAt,
      ]
    );
    return true;
  } catch (err) {
    console.error("[db] saveOrder error:", err.message);
    return false;
  }
}

async function getOrderById(orderId) {
  const { rows } = await queryRetry(
    `SELECT * FROM orders WHERE order_id = $1`,
    [orderId]
  );
  return rows[0] || null;
}

async function listOrders({ userId, status, page = 1, limit = 20 }) {
  let where = [];
  let params = [];
  let idx = 1;
  
  if (userId && userId !== "anonymous") {
    where.push(`user_id = $${idx}`);
    params.push(userId);
    idx++;
  }
  
  if (status) {
    where.push(`status = $${idx}`);
    params.push(status);
    idx++;
  }
  
  const whereClause = where.length > 0 ? 'WHERE ' + where.join(' AND ') : '';
  const offset = (page - 1) * limit;
  
  params.push(limit);
  params.push(offset);
  
  const { rows } = await queryRetry(
    `SELECT * FROM orders ${whereClause} ORDER BY created_at DESC LIMIT $${idx} OFFSET $${idx+1}`,
    params
  );
  
  return rows.map(row => ({
    orderId: row.order_id,
    source: row.source,
    status: row.status,
    date: row.date,
    startCity: row.start_city,
    endCity: row.end_city,
    boardingStation: row.boarding_station,
    dropoffStation: row.dropoff_station,
    fromTime: row.from_time,
    priceYuan: row.price_yuan,
    passengerInfo: row.passenger_info,
    userId: row.user_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

async function updateOrderStatus(orderId, status, extra = {}) {
  try {
    await queryRetry(
      `UPDATE orders SET status = $2, updated_at = NOW() WHERE order_id = $1`,
      [orderId, status]
    );
    return true;
  } catch (err) {
    console.error("[db] updateOrderStatus error:", err.message);
    return false;
  }
}

// ── Monitor Dashboard ────────────────────────────────────────

async function getMonitorOverview() {
  const { rows } = await queryRetry(`
    SELECT
      (SELECT COUNT(DISTINCT city_id) FROM cities) AS city_count,
      (SELECT COUNT(*) FROM routes) AS total_route_count,
      (SELECT COUNT(DISTINCT route_id) FROM intervals WHERE take_date >= CURRENT_DATE AND take_date < CURRENT_DATE + 15) AS active_route_count,
      (SELECT COUNT(*) FROM intervals WHERE take_date = CURRENT_DATE) AS today_interval_count
  `);
  const overview = rows[0];

  const { rows: srcRows } = await queryRetry(`
    SELECT r.source,
           COUNT(DISTINCT r.id) AS route_count,
           COUNT(i.id) AS interval_count
    FROM routes r
    LEFT JOIN intervals i ON i.route_id = r.id AND i.take_date >= CURRENT_DATE AND i.take_date < CURRENT_DATE + 15
    GROUP BY r.source
  `);
  const sources = {};
  for (const r of srcRows) {
    sources[r.source] = { routes: parseInt(r.route_count), intervals: parseInt(r.interval_count) };
  }

  return {
    cityCount: parseInt(overview.city_count),
    totalRouteCount: parseInt(overview.total_route_count),
    activeRouteCount: parseInt(overview.active_route_count),
    todayIntervalCount: parseInt(overview.today_interval_count),
    sources,
  };
}

async function getDataCoverage() {
  const { rows } = await queryRetry(`
    WITH date_range AS (
      SELECT generate_series(CURRENT_DATE, CURRENT_DATE + 14, '1 day'::interval)::date AS dt
    ),
    route_info AS (
      SELECT r.id, c1.city_name AS start_city, c2.city_name AS end_city,
             r.source, r.is_hot, r.last_crawl_at
      FROM routes r
      JOIN cities c1 ON r.start_city_id = c1.city_id AND r.source = c1.source
      JOIN cities c2 ON r.end_city_id = c2.city_id AND r.source = c2.source
    )
    SELECT ri.id AS route_id, ri.start_city, ri.end_city, ri.source, ri.is_hot,
           ri.last_crawl_at, d.dt AS take_date, COALESCE(cnt.c, 0) AS interval_count
    FROM route_info ri
    CROSS JOIN date_range d
    LEFT JOIN (
      SELECT route_id, take_date, COUNT(*) AS c
      FROM intervals
      WHERE take_date >= CURRENT_DATE AND take_date < CURRENT_DATE + 15
      GROUP BY route_id, take_date
    ) cnt ON cnt.route_id = ri.id AND cnt.take_date = d.dt
    ORDER BY ri.source, ri.start_city, ri.end_city, d.dt
  `);

  const dates = [];
  for (let i = 0; i < 15; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    dates.push(d.toISOString().slice(0, 10));
  }

  const routeMap = new Map();
  for (const r of rows) {
    const key = r.route_id;
    if (!routeMap.has(key)) {
      const hoursAgo = r.last_crawl_at
        ? Math.round((Date.now() - new Date(r.last_crawl_at).getTime()) / 3600000 * 10) / 10
        : null;
      routeMap.set(key, {
        routeId: r.route_id,
        startCity: r.start_city,
        endCity: r.end_city,
        source: r.source,
        isHot: r.is_hot,
        lastCrawlHoursAgo: hoursAgo,
        counts: [],
      });
    }
    routeMap.get(key).counts.push(parseInt(r.interval_count));
  }

  const routes = Array.from(routeMap.values())
    .filter(r => r.counts.some(c => c > 0));

  return { dates, routes };
}

async function getDataAnomalies() {
  const anomalies = [];

  const { rows: zeroResidueRows } = await queryRetry(`
    SELECT r.id AS route_id, c1.city_name AS start_city, c2.city_name AS end_city,
           r.source, i.take_date,
           COUNT(*) AS total, SUM(CASE WHEN i.residue = 0 THEN 1 ELSE 0 END) AS zero_cnt
    FROM intervals i
    JOIN routes r ON i.route_id = r.id
    JOIN cities c1 ON r.start_city_id = c1.city_id AND r.source = c1.source
    JOIN cities c2 ON r.end_city_id = c2.city_id AND r.source = c2.source
    WHERE i.take_date >= CURRENT_DATE AND i.take_date < CURRENT_DATE + 15
    GROUP BY r.id, c1.city_name, c2.city_name, r.source, i.take_date
    HAVING SUM(CASE WHEN i.residue = 0 THEN 1 ELSE 0 END) = COUNT(*) AND COUNT(*) >= 3
  `);
  for (const r of zeroResidueRows) {
    anomalies.push({
      type: "all_zero_residue",
      severity: "warning",
      route: `${r.start_city}→${r.end_city}`,
      source: r.source,
      date: r.take_date,
      detail: `${r.take_date} 所有 ${r.total} 个班次余座为 0`,
    });
  }

  const { rows: priceRows } = await queryRetry(`
    SELECT c1.city_name AS start_city, c2.city_name AS end_city, r.source,
           i.take_date, i.from_time, i.price_fen, i.interval_name
    FROM intervals i
    JOIN routes r ON i.route_id = r.id
    JOIN cities c1 ON r.start_city_id = c1.city_id AND r.source = c1.source
    JOIN cities c2 ON r.end_city_id = c2.city_id AND r.source = c2.source
    WHERE i.take_date >= CURRENT_DATE AND (i.price_fen = 0 OR i.price_fen > 50000)
    LIMIT 20
  `);
  for (const r of priceRows) {
    const yuan = (r.price_fen / 100).toFixed(0);
    anomalies.push({
      type: "abnormal_price",
      severity: r.price_fen === 0 ? "danger" : "warning",
      route: `${r.start_city}→${r.end_city}`,
      source: r.source,
      date: r.take_date,
      detail: `${r.take_date} ${r.from_time} ${r.interval_name || ""} 价格异常: ¥${yuan}`,
    });
  }

  const { rows: staleRows } = await queryRetry(`
    SELECT r.id, c1.city_name AS start_city, c2.city_name AS end_city, r.source, r.last_crawl_at
    FROM routes r
    JOIN cities c1 ON r.start_city_id = c1.city_id AND r.source = c1.source
    JOIN cities c2 ON r.end_city_id = c2.city_id AND r.source = c2.source
    WHERE r.last_crawl_at < NOW() - interval '24 hours'
      AND EXISTS (SELECT 1 FROM intervals WHERE route_id = r.id AND take_date >= CURRENT_DATE)
    ORDER BY r.last_crawl_at ASC
    LIMIT 20
  `);
  for (const r of staleRows) {
    const hoursAgo = Math.round((Date.now() - new Date(r.last_crawl_at).getTime()) / 3600000);
    anomalies.push({
      type: "stale_data",
      severity: hoursAgo > 48 ? "danger" : "warning",
      route: `${r.start_city}→${r.end_city}`,
      source: r.source,
      detail: `已超过 ${hoursAgo} 小时未更新`,
    });
  }

  anomalies.sort((a, b) => {
    const sev = { danger: 0, warning: 1 };
    return (sev[a.severity] ?? 2) - (sev[b.severity] ?? 2);
  });

  return anomalies;
}

async function getCrawlerHealth() {
  const logs = await getCrawlLogs(7);
  const crawlerNames = [...new Set(logs.map(l => l.crawler))];

  const crawlers = crawlerNames.map(name => {
    const myLogs = logs.filter(l => l.crawler === name);
    const lastRun = myLogs[0] || null;

    let consecutiveFailures = 0;
    for (const l of myLogs) {
      if (l.status === "failed") consecutiveFailures++;
      else break;
    }

    const recentDurations = myLogs
      .filter(l => l.status === "success" && l.duration_ms != null)
      .slice(0, 10)
      .map(l => l.duration_ms);

    return {
      name,
      lastRun: lastRun ? {
        status: lastRun.status,
        startedAt: lastRun.started_at,
        finishedAt: lastRun.finished_at,
        durationMs: lastRun.duration_ms,
        recordCount: lastRun.record_count,
        errorMessage: lastRun.error_message,
        triggeredBy: lastRun.triggered_by,
      } : null,
      consecutiveFailures,
      recentDurations,
    };
  });

  const recentLogs = logs.slice(0, 30).map(l => ({
    id: l.id,
    crawler: l.crawler,
    trigger: l.triggered_by,
    status: l.status,
    startedAt: l.started_at,
    finishedAt: l.finished_at,
    durationMs: l.duration_ms,
    recordCount: l.record_count,
    errorMessage: l.error_message,
  }));

  return { crawlers, recentLogs };
}

// ── Crawl Logs ───────────────────────────────────────────────

async function startCrawlLog(crawler, triggeredBy) {
  const { rows } = await queryRetry(
    `INSERT INTO crawl_logs (crawler, triggered_by, status, started_at)
     VALUES ($1, $2, 'running', NOW())
     RETURNING id`,
    [crawler, triggeredBy]
  );
  return rows[0].id;
}

async function finishCrawlLog(logId, recordCount, meta = {}) {
  await queryRetry(
    `UPDATE crawl_logs
     SET status = 'success',
         finished_at = NOW(),
         duration_ms = EXTRACT(EPOCH FROM (NOW() - started_at))::int * 1000,
         record_count = $2,
         meta = $3
     WHERE id = $1`,
    [logId, recordCount, JSON.stringify(meta)]
  );
}

async function failCrawlLog(logId, errorMessage) {
  await queryRetry(
    `UPDATE crawl_logs
     SET status = 'failed',
         finished_at = NOW(),
         duration_ms = EXTRACT(EPOCH FROM (NOW() - started_at))::int * 1000,
         error_message = $2
     WHERE id = $1`,
    [logId, errorMessage]
  );
}

async function getCrawlLogs(days = 14) {
  const { rows } = await queryRetry(
    `SELECT id, crawler, triggered_by, status, started_at, finished_at,
            duration_ms, record_count, error_message, meta
     FROM crawl_logs
     WHERE started_at >= NOW() - interval '1 day' * $1
     ORDER BY started_at DESC`,
    [days]
  );
  return rows;
}

// ── User Profile: Passengers ────────────────────────────────

async function listPassengers(userId) {
  const { rows } = await pool.query(
    `SELECT id, name, id_type, id_number, phone, is_default, created_at, updated_at
     FROM user_passengers WHERE user_id = $1
     ORDER BY is_default DESC, created_at DESC`,
    [userId]
  );
  return rows;
}

async function createPassenger(userId, { name, idType = "id_card", idNumber, phone, isDefault = false }) {
  if (isDefault) {
    await pool.query(`UPDATE user_passengers SET is_default=FALSE WHERE user_id=$1`, [userId]);
  }
  const { rows } = await pool.query(
    `INSERT INTO user_passengers (user_id, name, id_type, id_number, phone, is_default)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [userId, name, idType, idNumber, phone || null, isDefault]
  );
  return rows[0];
}

async function updatePassenger(userId, id, patch) {
  if (patch.isDefault) {
    await pool.query(`UPDATE user_passengers SET is_default=FALSE WHERE user_id=$1`, [userId]);
  }
  const { rows } = await pool.query(
    `UPDATE user_passengers SET
       name      = COALESCE($3, name),
       id_type   = COALESCE($4, id_type),
       id_number = COALESCE($5, id_number),
       phone     = COALESCE($6, phone),
       is_default= COALESCE($7, is_default),
       updated_at= NOW()
     WHERE user_id=$1 AND id=$2 RETURNING *`,
    [userId, id, patch.name ?? null, patch.idType ?? null, patch.idNumber ?? null, patch.phone ?? null, patch.isDefault ?? null]
  );
  return rows[0];
}

async function deletePassenger(userId, id) {
  const { rowCount } = await pool.query(
    `DELETE FROM user_passengers WHERE user_id=$1 AND id=$2`,
    [userId, id]
  );
  return rowCount > 0;
}

// ── User Profile: Addresses ─────────────────────────────────

async function listAddresses(userId) {
  const { rows } = await pool.query(
    `SELECT id, label, city, address, lat, lng, created_at, updated_at
     FROM user_addresses WHERE user_id = $1
     ORDER BY CASE label WHEN 'home' THEN 0 WHEN 'company' THEN 1 ELSE 2 END, created_at DESC`,
    [userId]
  );
  return rows;
}

async function upsertAddress(userId, { id, label, city, address, lat, lng }) {
  if (id) {
    const { rows } = await pool.query(
      `UPDATE user_addresses SET label=$3, city=$4, address=$5, lat=$6, lng=$7, updated_at=NOW()
       WHERE user_id=$1 AND id=$2 RETURNING *`,
      [userId, id, label, city || null, address || null, lat || null, lng || null]
    );
    return rows[0];
  }
  const { rows } = await pool.query(
    `INSERT INTO user_addresses (user_id, label, city, address, lat, lng)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [userId, label, city || null, address || null, lat || null, lng || null]
  );
  return rows[0];
}

async function deleteAddress(userId, id) {
  const { rowCount } = await pool.query(
    `DELETE FROM user_addresses WHERE user_id=$1 AND id=$2`,
    [userId, id]
  );
  return rowCount > 0;
}

// ── User Profile: Favorite Routes ───────────────────────────

async function listFavoriteRoutes(userId, limit = 10) {
  const { rows } = await pool.query(
    `SELECT start_city, end_city, use_count, last_used_at
     FROM user_favorite_routes WHERE user_id=$1
     ORDER BY use_count DESC, last_used_at DESC
     LIMIT $2`,
    [userId, limit]
  );
  return rows;
}

async function recordRouteUse(userId, startCity, endCity) {
  if (!userId || !startCity || !endCity) return;
  await pool.query(
    `INSERT INTO user_favorite_routes (user_id, start_city, end_city, use_count, last_used_at)
     VALUES ($1, $2, $3, 1, NOW())
     ON CONFLICT (user_id, start_city, end_city)
     DO UPDATE SET use_count = user_favorite_routes.use_count + 1, last_used_at = NOW()`,
    [userId, startCity, endCity]
  );
}

// ── User Profile: Boarding Preferences ──────────────────────

async function listBoardingPrefs(userId) {
  const { rows } = await pool.query(
    `SELECT city, station, updated_at FROM user_boarding_prefs WHERE user_id=$1 ORDER BY updated_at DESC`,
    [userId]
  );
  return rows;
}

async function setBoardingPref(userId, city, station) {
  await pool.query(
    `INSERT INTO user_boarding_prefs (user_id, city, station, updated_at)
     VALUES ($1, $2, $3, NOW())
     ON CONFLICT (user_id, city) DO UPDATE SET station=$3, updated_at=NOW()`,
    [userId, city, station]
  );
}

async function deleteBoardingPref(userId, city) {
  await pool.query(
    `DELETE FROM user_boarding_prefs WHERE user_id=$1 AND city=$2`,
    [userId, city]
  );
}

async function close() {
  await pool.end();
}

module.exports = {
  pool,
  upsertCity, findCityByName, findCityByNameAndSource, getAllCities,
  upsertRoute, getRouteId, getHotRoutes, getAllRoutes, getRoutesBySource, getDestinations, updateRouteLastCrawl, getLastCrawlTime,
  upsertIntervals, queryIntervals, queryIntervalsByCity, getCacheAge, cleanExpired,
  upsertStationCoord, upsertStationCoordsBatch, getStationCoords, getAllStationNames,
  saveOrder, getOrderById, listOrders, updateOrderStatus,
  startCrawlLog, finishCrawlLog, failCrawlLog, getCrawlLogs,
  getMonitorOverview, getDataCoverage, getDataAnomalies, getCrawlerHealth,
  listPassengers, createPassenger, updatePassenger, deletePassenger,
  listAddresses, upsertAddress, deleteAddress,
  listFavoriteRoutes, recordRouteUse,
  listBoardingPrefs, setBoardingPref, deleteBoardingPref,
  migrate, close,
};

if (require.main === module && process.argv.includes("--migrate")) {
  migrate().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
}

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
});

// ── Cities ──────────────────────────────────────────────────

async function upsertCity(cityId, cityName, source = "yuecx") {
  await pool.query(
    `INSERT INTO cities (city_id, city_name, source, updated_at)
     VALUES ($1, $2, $3, NOW())
     ON CONFLICT (city_id) DO UPDATE SET city_name = $2, updated_at = NOW()`,
    [cityId, cityName, source]
  );
}

async function findCityByName(name) {
  const { rows } = await pool.query(
    `SELECT city_id, city_name FROM cities
     WHERE city_name = $1 OR city_name LIKE $2
     ORDER BY (city_name = $1) DESC, length(city_name) ASC
     LIMIT 5`,
    [name, `%${name}%`]
  );
  return rows;
}

async function getAllCities() {
  const { rows } = await pool.query(
    `SELECT city_id, city_name FROM cities ORDER BY city_name`
  );
  return rows;
}

// ── Routes ──────────────────────────────────────────────────

async function upsertRoute(startCityId, endCityId, source = "yuecx") {
  const { rows } = await pool.query(
    `INSERT INTO routes (start_city_id, end_city_id, source)
     VALUES ($1, $2, $3)
     ON CONFLICT (start_city_id, end_city_id, source) DO NOTHING
     RETURNING id`,
    [startCityId, endCityId, source]
  );
  if (rows.length) return rows[0].id;
  const res = await pool.query(
    `SELECT id FROM routes WHERE start_city_id=$1 AND end_city_id=$2 AND source=$3`,
    [startCityId, endCityId, source]
  );
  return res.rows[0]?.id;
}

async function getRouteId(startCityId, endCityId, source = "yuecx") {
  const { rows } = await pool.query(
    `SELECT id FROM routes WHERE start_city_id=$1 AND end_city_id=$2 AND source=$3`,
    [startCityId, endCityId, source]
  );
  return rows[0]?.id;
}

async function getHotRoutes() {
  const { rows } = await pool.query(
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
  const { rows } = await pool.query(
    `SELECT r.id, r.start_city_id, r.end_city_id,
            c1.city_name as start_name, c2.city_name as end_name
     FROM routes r
     JOIN cities c1 ON r.start_city_id = c1.city_id
     JOIN cities c2 ON r.end_city_id = c2.city_id
     ORDER BY r.id`
  );
  return rows;
}

async function getDestinations(startCityName) {
  const { rows } = await pool.query(
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
  await pool.query(
    `UPDATE routes SET last_crawl_at = NOW() WHERE id = $1`,
    [routeId]
  );
}

// ── Intervals ───────────────────────────────────────────────

async function upsertIntervals(intervals) {
  if (!intervals.length) return;
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    for (const iv of intervals) {
      await client.query(
        `INSERT INTO intervals
           (interval_id, route_id, take_date, from_time, interval_name,
            price_fen, residue, status, line_id,
            boarding_stations, dropoff_stations, raw_data, crawl_time, source)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
         ON CONFLICT (interval_id, take_date) DO UPDATE SET
           residue = EXCLUDED.residue,
           status = EXCLUDED.status,
           price_fen = EXCLUDED.price_fen,
           boarding_stations = EXCLUDED.boarding_stations,
           dropoff_stations = EXCLUDED.dropoff_stations,
           raw_data = EXCLUDED.raw_data,
           crawl_time = EXCLUDED.crawl_time`,
        [
          iv.interval_id, iv.route_id, iv.take_date, iv.from_time,
          iv.interval_name, iv.price_fen, iv.residue, iv.status, iv.line_id,
          JSON.stringify(iv.boarding_stations),
          JSON.stringify(iv.dropoff_stations),
          JSON.stringify(iv.raw_data),
          iv.crawl_time, iv.source || "yuecx",
        ]
      );
    }
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

async function queryIntervals(routeId, takeDate) {
  const { rows } = await pool.query(
    `SELECT interval_id, from_time, interval_name, price_fen, residue,
            status, line_id, boarding_stations, dropoff_stations, crawl_time
     FROM intervals
     WHERE route_id = $1 AND take_date = $2 AND status = 1
     ORDER BY from_time`,
    [routeId, takeDate]
  );
  return rows;
}

async function getCacheAge(routeId, takeDate) {
  const { rows } = await pool.query(
    `SELECT MAX(crawl_time) as latest FROM intervals
     WHERE route_id = $1 AND take_date = $2`,
    [routeId, takeDate]
  );
  if (!rows[0]?.latest) return null;
  return Math.round((Date.now() - new Date(rows[0].latest).getTime()) / 60000);
}

async function cleanExpired() {
  const { rowCount } = await pool.query(
    `DELETE FROM intervals WHERE take_date < CURRENT_DATE - 1`
  );
  return rowCount;
}

// ── Migration ───────────────────────────────────────────────

async function migrate() {
  const sql = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf-8");
  await pool.query(sql);
  console.log("Migration complete.");
}

async function close() {
  await pool.end();
}

module.exports = {
  pool,
  upsertCity, findCityByName, getAllCities,
  upsertRoute, getRouteId, getHotRoutes, getAllRoutes, getDestinations, updateRouteLastCrawl,
  upsertIntervals, queryIntervals, getCacheAge, cleanExpired,
  migrate, close,
};

if (require.main === module && process.argv.includes("--migrate")) {
  migrate().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
}

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
     WHERE city_name = $1 OR city_name LIKE $2 OR $1 LIKE city_name || '%'
     ORDER BY (city_name = $1) DESC, length(city_name) DESC
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
  const BATCH = 20;
  const client = await pool.connect();
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

// ── Users ────────────────────────────────────────────────────

async function findUserByOpenid(openid) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE openid = $1`, [openid]);
  return rows[0] || null;
}

async function createUser({ openid, unionid, nickname, avatar_url }) {
  const { rows } = await pool.query(
    `INSERT INTO users (openid, unionid, nickname, avatar_url)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (openid) DO UPDATE SET
       nickname = COALESCE(NULLIF($3, ''), users.nickname),
       avatar_url = COALESCE(NULLIF($4, ''), users.avatar_url),
       unionid = COALESCE($2, users.unionid),
       last_login_at = NOW(), updated_at = NOW()
     RETURNING *`,
    [openid, unionid || null, nickname || '', avatar_url || '']
  );
  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return rows[0] || null;
}

async function updateUserLogin(id) {
  await pool.query(`UPDATE users SET last_login_at = NOW() WHERE id = $1`, [id]);
}

// ── Passengers ───────────────────────────────────────────────

async function listPassengers(userId) {
  const { rows } = await pool.query(
    `SELECT * FROM passengers WHERE user_id = $1 ORDER BY is_default DESC, created_at`,
    [userId]
  );
  return rows;
}

async function addPassenger(userId, { name, phone, id_card, is_default }) {
  if (is_default) {
    await pool.query(`UPDATE passengers SET is_default = false WHERE user_id = $1`, [userId]);
  }
  const { rows } = await pool.query(
    `INSERT INTO passengers (user_id, name, phone, id_card, is_default)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [userId, name, phone || '', id_card || '', is_default || false]
  );
  return rows[0];
}

async function deletePassenger(userId, passengerId) {
  const { rowCount } = await pool.query(
    `DELETE FROM passengers WHERE id = $1 AND user_id = $2`,
    [passengerId, userId]
  );
  return rowCount > 0;
}

// ── Search History ───────────────────────────────────────────

async function addSearchHistory(userId, { startCity, endCity, travelDate }) {
  await pool.query(
    `INSERT INTO search_history (user_id, start_city, end_city, travel_date) VALUES ($1, $2, $3, $4)`,
    [userId, startCity, endCity, travelDate || null]
  );
}

async function getSearchHistory(userId, limit = 20) {
  const { rows } = await pool.query(
    `SELECT DISTINCT ON (start_city, end_city) id, start_city, end_city, travel_date, searched_at
     FROM search_history WHERE user_id = $1
     ORDER BY start_city, end_city, searched_at DESC`,
    [userId]
  );
  return rows.sort((a, b) => new Date(b.searched_at) - new Date(a.searched_at)).slice(0, limit);
}

// ── Trips ────────────────────────────────────────────────────

async function addTrip(userId, data) {
  const { rows } = await pool.query(
    `INSERT INTO trips (user_id, interval_id, source, start_city, end_city,
       boarding_station, dropoff_station, travel_date, depart_time, price_yuan, miniapp_path)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
    [userId, data.intervalId || '', data.source || 'yuecx',
     data.startCity, data.endCity, data.boardingStation || '', data.dropoffStation || '',
     data.travelDate, data.departTime || '', data.priceYuan || 0, data.miniappPath || '']
  );
  return rows[0];
}

async function listTrips(userId, { status, limit = 30 } = {}) {
  let sql = `SELECT * FROM trips WHERE user_id = $1`;
  const params = [userId];
  if (status) { sql += ` AND status = $2`; params.push(status); }
  sql += ` ORDER BY travel_date DESC, depart_time DESC LIMIT ${limit}`;
  const { rows } = await pool.query(sql, params);
  return rows;
}

async function updateTripStatus(tripId, userId, status) {
  const { rowCount } = await pool.query(
    `UPDATE trips SET status = $3 WHERE id = $1 AND user_id = $2`,
    [tripId, userId, status]
  );
  return rowCount > 0;
}

async function deleteTrip(tripId, userId) {
  const { rowCount } = await pool.query(
    `DELETE FROM trips WHERE id = $1 AND user_id = $2`, [tripId, userId]
  );
  return rowCount > 0;
}

// ── Migration ───────────────────────────────────────────────

async function migrate() {
  const sql = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf-8");
  await pool.query(sql);
  console.log("Migration complete.");
}

// ── Orders ──────────────────────────────────────────────────

async function saveOrder(order) {
  try {
    await pool.query(
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
  const { rows } = await pool.query(
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
  
  const { rows } = await pool.query(
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
    await pool.query(
      `UPDATE orders SET status = $2, updated_at = NOW() WHERE order_id = $1`,
      [orderId, status]
    );
    return true;
  } catch (err) {
    console.error("[db] updateOrderStatus error:", err.message);
    return false;
  }
}

async function close() {
  await pool.end();
}

module.exports = {
  pool,
  upsertCity, findCityByName, getAllCities,
  upsertRoute, getRouteId, getHotRoutes, getAllRoutes, getDestinations, updateRouteLastCrawl,
  upsertIntervals, queryIntervals, getCacheAge, cleanExpired,
  saveOrder, getOrderById, listOrders, updateOrderStatus,
  findUserByOpenid, createUser, getUserById, updateUserLogin,
  listPassengers, addPassenger, deletePassenger,
  addSearchHistory, getSearchHistory,
  addTrip, listTrips, updateTripStatus, deleteTrip,
  migrate, close,
};

if (require.main === module && process.argv.includes("--migrate")) {
  migrate().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
}

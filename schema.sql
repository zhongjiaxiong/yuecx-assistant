-- 粤程助手 — 数据库 Schema

-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  openid        VARCHAR(64) UNIQUE NOT NULL,
  unionid       VARCHAR(64),
  nickname      VARCHAR(100) DEFAULT '',
  avatar_url    TEXT DEFAULT '',
  phone         VARCHAR(20) DEFAULT '',
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_users_openid ON users(openid);

-- 城市表
CREATE TABLE IF NOT EXISTS cities (
  city_id    VARCHAR PRIMARY KEY,
  city_name  VARCHAR NOT NULL,
  source     VARCHAR DEFAULT 'yuecx',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 路线表
CREATE TABLE IF NOT EXISTS routes (
  id             SERIAL PRIMARY KEY,
  start_city_id  VARCHAR REFERENCES cities(city_id),
  end_city_id    VARCHAR REFERENCES cities(city_id),
  is_hot         BOOLEAN DEFAULT FALSE,
  last_crawl_at  TIMESTAMPTZ,
  source         VARCHAR DEFAULT 'yuecx',
  UNIQUE(start_city_id, end_city_id, source)
);

-- 班次缓存表
CREATE TABLE IF NOT EXISTS intervals (
  id                SERIAL PRIMARY KEY,
  interval_id       VARCHAR NOT NULL,
  route_id          INT REFERENCES routes(id),
  take_date         DATE NOT NULL,
  from_time         VARCHAR NOT NULL,
  interval_name     VARCHAR,
  price_fen         INT,
  residue           INT,
  status            INT,
  line_id           VARCHAR,
  boarding_stations JSONB,
  dropoff_stations  JSONB,
  raw_data          JSONB,
  crawl_time        TIMESTAMPTZ NOT NULL,
  source            VARCHAR DEFAULT 'yuecx',
  UNIQUE(interval_id, take_date)
);
CREATE INDEX IF NOT EXISTS idx_intervals_route_date ON intervals(route_id, take_date);
CREATE INDEX IF NOT EXISTS idx_intervals_date ON intervals(take_date);

-- 常用乘客表
CREATE TABLE IF NOT EXISTS passengers (
  id         SERIAL PRIMARY KEY,
  user_id    INT REFERENCES users(id) ON DELETE CASCADE,
  name       VARCHAR(50) NOT NULL,
  phone      VARCHAR(20) DEFAULT '',
  id_card    VARCHAR(20) DEFAULT '',
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_passengers_user ON passengers(user_id);

-- 搜索历史表
CREATE TABLE IF NOT EXISTS search_history (
  id          SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(id) ON DELETE CASCADE,
  start_city  VARCHAR(50) NOT NULL,
  end_city    VARCHAR(50) NOT NULL,
  travel_date DATE,
  searched_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_search_history_user ON search_history(user_id, searched_at DESC);

-- 行程记录表
CREATE TABLE IF NOT EXISTS trips (
  id               SERIAL PRIMARY KEY,
  user_id          INT REFERENCES users(id) ON DELETE CASCADE,
  interval_id      VARCHAR(100),
  source           VARCHAR(20) DEFAULT 'yuecx',
  start_city       VARCHAR(50) NOT NULL,
  end_city         VARCHAR(50) NOT NULL,
  boarding_station VARCHAR(100) DEFAULT '',
  dropoff_station  VARCHAR(100) DEFAULT '',
  travel_date      DATE NOT NULL,
  depart_time      VARCHAR(10) DEFAULT '',
  price_yuan       DECIMAL(10,2),
  status           VARCHAR(20) DEFAULT 'planned',
  miniapp_path     TEXT DEFAULT '',
  created_at       TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_trips_user ON trips(user_id, travel_date DESC);

-- 聊天日志表
CREATE TABLE IF NOT EXISTS chat_logs (
  id         SERIAL PRIMARY KEY,
  session_id VARCHAR,
  role       VARCHAR,
  content    TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 订单表
CREATE TABLE IF NOT EXISTS orders (
  id                SERIAL PRIMARY KEY,
  order_id          VARCHAR UNIQUE NOT NULL,
  source            VARCHAR NOT NULL,
  status            VARCHAR NOT NULL DEFAULT 'pending',
  interval_id       VARCHAR,
  date              DATE NOT NULL,
  start_city        VARCHAR NOT NULL,
  end_city          VARCHAR NOT NULL,
  boarding_station  VARCHAR,
  dropoff_station   VARCHAR,
  from_time         VARCHAR,
  price_yuan        VARCHAR,
  passenger_info    JSONB DEFAULT '{}',
  user_id           VARCHAR DEFAULT 'anonymous',
  miniapp_name      VARCHAR,
  miniapp_app_id    VARCHAR,
  miniapp_path      VARCHAR,
  payment_info      JSONB DEFAULT '{}',
  raw_data          JSONB DEFAULT '{}',
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);

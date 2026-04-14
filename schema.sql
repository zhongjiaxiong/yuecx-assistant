-- 粤出行通勤助手 — 数据库 Schema

CREATE TABLE IF NOT EXISTS cities (
  city_id    VARCHAR PRIMARY KEY,
  city_name  VARCHAR NOT NULL,
  source     VARCHAR DEFAULT 'yuecx',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS routes (
  id             SERIAL PRIMARY KEY,
  start_city_id  VARCHAR REFERENCES cities(city_id),
  end_city_id    VARCHAR REFERENCES cities(city_id),
  is_hot         BOOLEAN DEFAULT FALSE,
  last_crawl_at  TIMESTAMPTZ,
  source         VARCHAR DEFAULT 'yuecx',
  UNIQUE(start_city_id, end_city_id, source)
);

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
  source            VARCHAR NOT NULL, -- yuecx / busboss
  status            VARCHAR NOT NULL DEFAULT 'pending', -- pending/paid/confirmed/completed/cancelled/refunded
  
  -- 班次信息
  interval_id       VARCHAR,
  date              DATE NOT NULL,
  start_city        VARCHAR NOT NULL,
  end_city          VARCHAR NOT NULL,
  boarding_station  VARCHAR,
  dropoff_station   VARCHAR,
  from_time         VARCHAR,
  price_yuan        VARCHAR,
  
  -- 乘客信息
  passenger_info    JSONB DEFAULT '{}',
  
  -- 用户信息
  user_id           VARCHAR DEFAULT 'anonymous',
  
  -- 小程序信息
  miniapp_name      VARCHAR,
  miniapp_app_id    VARCHAR,
  miniapp_path      VARCHAR,
  
  -- 支付信息
  payment_info      JSONB DEFAULT '{}',
  
  -- 元数据
  raw_data          JSONB DEFAULT '{}',
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);

-- 站点坐标缓存（GCJ-02 坐标系，高德/国标）
CREATE TABLE IF NOT EXISTS station_coords (
  station_name  TEXT PRIMARY KEY,
  lat           DOUBLE PRECISION NOT NULL,
  lng           DOUBLE PRECISION NOT NULL,
  city          TEXT,
  source        TEXT DEFAULT 'gaode',
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

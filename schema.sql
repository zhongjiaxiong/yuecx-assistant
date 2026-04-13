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

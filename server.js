/**
 * 粤程助手 — Express API 服务
 * POST /api/wx-login              — 微信小程序登录
 * POST /api/wx-bindphone          — 绑定手机号
 * POST /api/chat                  — 对话接口
 * POST /api/stt                   — 语音转文字
 * POST /api/nearby-stations       — 地图定位推荐上车站
 * POST /api/cron/crawl            — 手动触发广深爬虫
 * GET  /                          — 聊天页面
 * GET  /api/health                — 健康检查
 * GET  /api/monitor/crawl-status  — 爬虫运行监控
 */

require("dotenv/config");
const express = require("express");
const path = require("path");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const { chat, buildSystemPrompt } = require("./agent");
const { crawlHotRoutes, crawlOnDemand, syncMeta } = require("./crawler");
const { syncBusbossMeta } = require("./busboss_crawler");
const { startAutoRefresh } = require("./token_manager");
const gaodeMap = require("./gaode-map");
const db = require("./db");

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const LLM_BASE_URL = process.env.LLM_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_API_KEY = process.env.LLM_API_KEY || "";
const JWT_SECRET = process.env.JWT_SECRET || "yuecheng-dev-secret-change-me";
const WX_MP_APPID = process.env.WX_MP_APPID || "";
const WX_MP_SECRET = process.env.WX_MP_SECRET || "";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ── JWT 中间件 ─────────────────────────────────────────────────

function parseJwt(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  try {
    return jwt.verify(authHeader.slice(7), JWT_SECRET);
  } catch {
    return null;
  }
}

// ── 微信登录 ───────────────────────────────────────────────────

app.post("/api/wx-login", async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "缺少 code" });

  if (!WX_MP_APPID || !WX_MP_SECRET) {
    const devOpenid = "dev_" + code.slice(0, 8);
    const token = jwt.sign({ openid: devOpenid }, JWT_SECRET, { expiresIn: "7d" });
    return res.json({ token, openid: devOpenid, dev: true });
  }

  try {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${WX_MP_APPID}&secret=${WX_MP_SECRET}&js_code=${code}&grant_type=authorization_code`;
    const wxRes = await fetch(url);
    const wxData = await wxRes.json();

    if (wxData.errcode) {
      console.error("[wx-login] code2session error:", wxData);
      return res.status(400).json({ error: wxData.errmsg || "微信登录失败" });
    }

    const { openid, session_key } = wxData;
    const token = jwt.sign({ openid, sk: session_key }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, openid });
  } catch (err) {
    console.error("[wx-login] error:", err.message);
    res.status(500).json({ error: "登录服务异常" });
  }
});

// ── 绑定手机号 ─────────────────────────────────────────────────

app.post("/api/wx-bindphone", async (req, res) => {
  const { code } = req.body;
  const payload = parseJwt(req);
  if (!payload) return res.status(401).json({ error: "未登录" });
  if (!code) return res.status(400).json({ error: "缺少 code" });

  if (!WX_MP_APPID || !WX_MP_SECRET) {
    return res.json({ phone: "13800000000", dev: true });
  }

  try {
    const tokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${WX_MP_APPID}&secret=${WX_MP_SECRET}`;
    const tokenRes = await fetch(tokenUrl);
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return res.status(500).json({ error: "获取 access_token 失败" });
    }

    const phoneUrl = `https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=${tokenData.access_token}`;
    const phoneRes = await fetch(phoneUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const phoneData = await phoneRes.json();

    if (phoneData.errcode) {
      console.error("[wx-bindphone] error:", phoneData);
      return res.status(400).json({ error: phoneData.errmsg || "获取手机号失败" });
    }

    const phone = phoneData.phone_info?.phoneNumber || "";
    res.json({ phone, openid: payload.openid });
  } catch (err) {
    console.error("[wx-bindphone] error:", err.message);
    res.status(500).json({ error: "服务异常" });
  }
});

// sessionId → messages[]
const sessions = new Map();
const SESSION_TTL = 60 * 60 * 1000; // 1h

function getOrCreateSession(sessionId) {
  if (sessions.has(sessionId)) {
    const s = sessions.get(sessionId);
    s.lastAccess = Date.now();
    return s;
  }
  const session = { messages: [{ role: "system", content: buildSystemPrompt() }], lastAccess: Date.now(), location: null };
  sessions.set(sessionId, session);
  return session;
}

setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.lastAccess > SESSION_TTL) sessions.delete(id);
  }
}, 5 * 60 * 1000);

// ── 对话 ──────────────────────────────────────────────────────

app.post("/api/chat", async (req, res) => {
  const { sessionId: rawSessionId, message, location } = req.body;
  if (!message) {
    return res.status(400).json({ error: "message 必填" });
  }

  const payload = parseJwt(req);
  const sessionId = payload?.openid || rawSessionId || ("anon_" + Date.now());
  const session = getOrCreateSession(sessionId);

  if (location && location.latitude && location.longitude) {
    session.location = { latitude: location.latitude, longitude: location.longitude };

    if (!session.locationResolved && gaodeMap.isConfigured()) {
      try {
        const geo = await gaodeMap.reverseGeocode(location.latitude, location.longitude);
        session.locationResolved = {
          city: geo.city, district: geo.district, street: geo.street,
          formatted: geo.formatted, adcode: geo.adcode,
        };
        const locInfo = `[系统自动定位] 用户当前位置: ${geo.city}${geo.district}${geo.street || ""}（${geo.formatted}）。GPS坐标已注入context，调 score_and_rank 时系统会自动计算上车距离，无需再调 get_user_location。`;
        session.messages.push({ role: "system", content: locInfo });
      } catch (e) {
        console.error("[pre-resolve] reverseGeocode error:", e.message);
      }
    }
  }

  session.messages.push({ role: "user", content: message });

  const wantsSSE = (req.headers.accept || "").includes("text/event-stream");

  if (wantsSSE) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const timeout = setTimeout(() => {
      if (!res.writableEnded) {
        res.write(`data: ${JSON.stringify({ type: "error", error: "请求超时，请重试" })}\n\n`);
        res.end();
      }
    }, 90000);

    let lastStep = "";
    let cardSent = false;
    const onProgress = (step) => {
      if (step !== lastStep && !res.writableEnded) {
        lastStep = step;
        res.write(`data: ${JSON.stringify({ type: "progress", step })}\n\n`);
      }
    };
    const onCardReady = (cardData) => {
      if (!res.writableEnded) {
        cardSent = true;
        res.write(`data: ${JSON.stringify({ type: "card", data: cardData })}\n\n`);
        res.write(`data: ${JSON.stringify({ type: "progress", step: "done" })}\n\n`);
      }
    };

    try {
      const ctx = { location: session.location };
      const reply = await chat(session.messages, null, ctx, onProgress, onCardReady);
      clearTimeout(timeout);
      if (!res.writableEnded) {
        if (cardSent) {
          const cleaned = (reply || "").replace(/\[ROUTE_RESULTS:[^\]]*\]/g, "").trim();
          if (cleaned) {
            res.write(`data: ${JSON.stringify({ type: "supplement", text: cleaned })}\n\n`);
          }
          res.write(`data: ${JSON.stringify({ type: "done" })}\n\n`);
        } else {
          res.write(`data: ${JSON.stringify({ type: "done", reply })}\n\n`);
        }
        res.end();
      }
    } catch (err) {
      clearTimeout(timeout);
      console.error("Chat error:", err);
      if (!res.writableEnded) {
        res.write(`data: ${JSON.stringify({ type: "error", error: "服务异常，请稍后重试" })}\n\n`);
        res.end();
      }
    }
  } else {
    const timeout = setTimeout(() => {
      if (!res.headersSent) {
        res.status(504).json({ error: "请求超时，请重试" });
      }
    }, 60000);

    try {
      const ctx = { location: session.location };
      const reply = await chat(session.messages, null, ctx);
      clearTimeout(timeout);
      if (!res.headersSent) res.json({ reply });
    } catch (err) {
      clearTimeout(timeout);
      console.error("Chat error:", err);
      if (!res.headersSent) res.status(500).json({ error: "服务异常，请稍后重试" });
    }
  }
});

// ── 语音转文字 ────────────────────────────────────────────────

app.post("/api/stt", upload.single("audio"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "缺少音频文件" });

  try {
    const mime = req.file.mimetype || "audio/webm";
    const b64 = req.file.buffer.toString("base64");
    const dataUri = `data:${mime};base64,${b64}`;

    const resp = await fetch(`${LLM_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LLM_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen3-asr-flash",
        messages: [
          {
            role: "user",
            content: [{ type: "input_audio", input_audio: { data: dataUri } }],
          },
        ],
        stream: false,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("STT error:", resp.status, errText);
      return res.status(502).json({ error: "语音识别失败" });
    }

    const data = await resp.json();
    const text = data.choices?.[0]?.message?.content || "";
    res.json({ text });
  } catch (err) {
    console.error("STT error:", err);
    res.status(500).json({ error: "语音识别异常" });
  }
});

// ── 健康检查 ──────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ── 爬虫运行监控 ────────────────────────────────────────────────

const CRAWLER_LABELS = {
  yuecx_hot_routes: "亿路行 · 广深热门路线",
  yuecx_sync_meta: "亿路行 · 元数据同步",
  busboss_sync_meta: "车盈网 · 元数据同步",
};

app.get("/api/monitor/crawl-status", async (req, res) => {
  try {
    const days = Math.min(Math.max(parseInt(req.query.days) || 14, 1), 90);
    const logs = await db.getCrawlLogs(days);

    const crawlerNames = Object.keys(CRAWLER_LABELS);
    const now = new Date();
    const bjNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));

    const dateKeys = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(bjNow);
      d.setDate(bjNow.getDate() - i);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      dateKeys.push(key);
    }

    const crawlers = crawlerNames.map((name) => {
      const myLogs = logs.filter((l) => l.crawler === name);
      const lastRun = myLogs[0] || null;

      const dailySummary = {};
      for (const dk of dateKeys) {
        dailySummary[dk] = { runs: 0, successes: 0, failures: 0, totalRecords: 0 };
      }
      for (const l of myLogs) {
        const bjDate = new Date(new Date(l.started_at).toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
        const dk = `${bjDate.getFullYear()}-${String(bjDate.getMonth() + 1).padStart(2, "0")}-${String(bjDate.getDate()).padStart(2, "0")}`;
        if (!dailySummary[dk]) continue;
        dailySummary[dk].runs++;
        if (l.status === "success") dailySummary[dk].successes++;
        if (l.status === "failed") dailySummary[dk].failures++;
        dailySummary[dk].totalRecords += l.record_count || 0;
      }

      return {
        name,
        label: CRAWLER_LABELS[name],
        lastRun: lastRun ? {
          status: lastRun.status,
          startedAt: lastRun.started_at,
          finishedAt: lastRun.finished_at,
          durationMs: lastRun.duration_ms,
          recordCount: lastRun.record_count,
          errorMessage: lastRun.error_message,
        } : null,
        dailySummary,
      };
    });

    const recentLogs = logs.slice(0, 50).map((l) => ({
      id: l.id,
      crawler: l.crawler,
      label: CRAWLER_LABELS[l.crawler] || l.crawler,
      trigger: l.trigger,
      status: l.status,
      startedAt: l.started_at,
      finishedAt: l.finished_at,
      durationMs: l.duration_ms,
      recordCount: l.record_count,
      errorMessage: l.error_message,
    }));

    res.json({ crawlers, recentLogs, queryDays: days });
  } catch (err) {
    console.error("[monitor] crawl-status error:", err.message);
    res.status(500).json({ error: "查询失败" });
  }
});

// ── 附近上车站（地图定位推荐）─────────────────────────────────

app.post("/api/nearby-stations", async (req, res) => {
  const { latitude, longitude, startCity, endCity, date } = req.body;
  if (!latitude || !longitude || !startCity || !endCity || !date) {
    return res.status(400).json({ error: "缺少参数: latitude, longitude, startCity, endCity, date" });
  }

  try {
    const startRows = await db.findCityByName(startCity);
    const endRows = await db.findCityByName(endCity);
    if (!startRows.length || !endRows.length) {
      return res.json({ success: false, error: "城市未找到" });
    }

    const startCityId = startRows[0].city_id;
    const endCityId = endRows[0].city_id;
    const routeId = await db.getRouteId(startCityId, endCityId);

    let intervals = routeId ? await db.queryIntervals(routeId, date) : [];
    if (intervals.length === 0) {
      intervals = await crawlOnDemand(startCityId, endCityId, date);
    }

    const stationMap = new Map();
    for (const iv of intervals) {
      for (const st of iv.boarding_stations || []) {
        if (!stationMap.has(st.name)) {
          stationMap.set(st.name, { name: st.name, adcode: st.adcode || "", intervalCount: 0, times: [] });
        }
        const entry = stationMap.get(st.name);
        entry.intervalCount++;
        if (st.arriveTime) entry.times.push(st.arriveTime);
      }
    }

    const stations = Array.from(stationMap.values());
    if (stations.length === 0) {
      return res.json({ success: true, data: { stations: [], userAddress: null } });
    }

    const coordsMap = await db.getStationCoords(stations.map((s) => s.name));
    const gcj = gaodeMap.wgs84ToGcj02(latitude, longitude);

    let userAddress = null;
    if (gaodeMap.isConfigured()) {
      try {
        const geo = await gaodeMap.reverseGeocode(latitude, longitude);
        userAddress = { formatted: geo.formatted, district: geo.district };
      } catch (err) {
        console.error("[nearby-stations] reverseGeocode error:", err.message);
      }
    }

    const stationsOut = stations.map((st) => {
      const coord = coordsMap.get(st.name);
      const distMeters = coord
        ? Math.round(gaodeMap.haversineMeters(gcj.lat, gcj.lng, coord.lat, coord.lng))
        : null;
      return {
        name: st.name,
        lat: coord?.lat || null,
        lng: coord?.lng || null,
        distanceMeters: distMeters,
        intervalCount: st.intervalCount,
        timeRange: st.times.length
          ? `${st.times.sort()[0]}~${st.times.sort().slice(-1)[0]}`
          : "",
      };
    });

    stationsOut.sort((a, b) => {
      if (a.distanceMeters == null && b.distanceMeters == null) return 0;
      if (a.distanceMeters == null) return 1;
      if (b.distanceMeters == null) return -1;
      return a.distanceMeters - b.distanceMeters;
    });

    res.json({
      success: true,
      data: { userAddress, userLocation: { latitude, longitude }, stations: stationsOut },
    });
  } catch (err) {
    console.error("[nearby-stations] error:", err);
    res.status(500).json({ error: "查询失败" });
  }
});

// ── 定时爬虫（广深）────────────────────────────────────────────

app.post("/api/cron/crawl", async (req, res) => {
  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(403).json({ error: "forbidden" });
  }
  res.json({ status: "started" });
  crawlHotRoutes("manual_http").catch((e) => console.error("[cron] manual trigger error:", e.message));
});

app.post("/api/cron/sync-meta", async (req, res) => {
  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(403).json({ error: "forbidden" });
  }
  res.json({ status: "started" });
  syncMeta("manual_http").catch((e) => console.error("[sync-meta] error:", e.message));
});

function msUntilBeijing(hour, minute) {
  const now = new Date();
  const bj = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  const target = new Date(bj);
  target.setHours(hour, minute, 0, 0);
  if (target <= bj) target.setDate(target.getDate() + 1);
  return target - bj;
}

function scheduleDailyCrawl() {
  const run = () => {
    crawlHotRoutes("daily_cron").catch((e) => console.error("[cron] daily error:", e.message));
    setTimeout(run, msUntilBeijing(6, 0));
  };
  const delay = msUntilBeijing(6, 0);
  console.log(`[cron] 下次广深定时抓取: ${Math.round(delay / 60000)} 分钟后`);
  setTimeout(run, delay);
}

// ── 启动 ──────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  - POST /api/wx-login         微信小程序登录`);
  console.log(`  - POST /api/wx-bindphone     绑定手机号`);
  console.log(`  - POST /api/chat             对话接口`);
  console.log(`  - POST /api/stt              语音转文字`);
  console.log(`  - POST /api/nearby-stations  地图定位推荐上车站`);
  console.log(`  - POST /api/cron/crawl       手动触发广深爬虫`);
  console.log(`  - GET  /api/health           健康检查`);
  console.log(`  - GET  /api/monitor/crawl-status  爬虫运行监控`);

  console.log("[startup] 同步所有城市和路线元数据...");
  syncMeta("startup")
    .then(() => {
      console.log("[startup] 元数据同步完成，开始预热广深数据...");
      return crawlHotRoutes("startup");
    })
    .catch((e) => console.error("[startup] error:", e.message));

  // 车盈网: 启动 token 自动续期 + 同步元数据
  startAutoRefresh();
  syncBusbossMeta("startup").catch((e) => console.error("[busboss] startup meta sync error:", e.message));

  scheduleDailyCrawl();
});

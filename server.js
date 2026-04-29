/**
 * 粤程助手 — Express API 服务
 * POST /api/wx-login          — 微信小程序登录
 * POST /api/wx-bindphone      — 绑定手机号（返回新 token，payload 含 phone）
 * GET  /api/profile           — 用户画像聚合（乘车人/地址/路线/偏好）
 * CRUD /api/passengers        — 乘车人
 * CRUD /api/addresses         — 常用地址
 * GET  /api/favorite-routes   — 常用路线
 * PUT  /api/boarding-prefs    — 按城市记住常用上车点
 * POST /api/chat              — 对话接口
 * POST /api/stt               — 语音转文字
 * POST /api/nearby-stations   — 地图定位推荐上车站
 * POST /api/cron/crawl        — 手动触发全量爬虫
 * GET  /                      — 聊天页面
 * GET  /api/health            — 健康检查
 */

require("dotenv/config");
const express = require("express");
const path = require("path");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const { chat, buildSystemPrompt } = require("./agent");
const { crawlAllRoutes, crawlOnDemand, syncMeta } = require("./crawler");
const { syncBusbossMeta, crawlBusbossAllRoutes } = require("./busboss_crawler");
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

function getUserId(req) {
  const p = parseJwt(req);
  if (!p) return null;
  if (p.phone) return "p_" + p.phone;
  if (p.openid) return "o_" + p.openid;
  return null;
}

function requireUser(req, res) {
  const userId = getUserId(req);
  if (!userId) {
    res.status(401).json({ error: "未登录" });
    return null;
  }
  return userId;
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
    const phone = "13800000000";
    const newToken = jwt.sign(
      { openid: payload.openid, sk: payload.sk, phone },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({ phone, dev: true, token: newToken });
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
    const newToken = jwt.sign(
      { openid: payload.openid, sk: payload.sk, phone },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ phone, openid: payload.openid, token: newToken });
  } catch (err) {
    console.error("[wx-bindphone] error:", err.message);
    res.status(500).json({ error: "服务异常" });
  }
});

// ── 用户画像（乘车人/地址/路线/偏好）─────────────────────────

function mapPassenger(row) {
  return {
    id: row.id, name: row.name, idType: row.id_type, idNumber: row.id_number,
    phone: row.phone, isDefault: row.is_default,
  };
}

function mapAddress(row) {
  return { id: row.id, label: row.label, city: row.city, address: row.address, lat: row.lat, lng: row.lng };
}

function mapRoute(row) {
  return { startCity: row.start_city, endCity: row.end_city, useCount: row.use_count, lastUsedAt: row.last_used_at };
}

const ID_CARD_RE = /^[0-9]{17}[0-9Xx]$/;
const PHONE_RE = /^1[3-9]\d{9}$/;

function validatePassenger(body) {
  if (!body || typeof body.name !== "string" || !body.name.trim()) return "姓名必填";
  if (!body.idNumber || typeof body.idNumber !== "string") return "证件号必填";
  if ((body.idType || "id_card") === "id_card" && !ID_CARD_RE.test(body.idNumber.trim())) return "身份证号格式错误";
  if (body.phone && !PHONE_RE.test(body.phone)) return "手机号格式错误";
  return null;
}

// GET /api/profile — 聚合摘要
app.get("/api/profile", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  try {
    const [passengers, addresses, routes, prefs] = await Promise.all([
      db.listPassengers(userId),
      db.listAddresses(userId),
      db.listFavoriteRoutes(userId, 5),
      db.listBoardingPrefs(userId),
    ]);
    res.json({
      success: true,
      data: {
        passengers: passengers.map(mapPassenger),
        addresses: addresses.map(mapAddress),
        favoriteRoutes: routes.map(mapRoute),
        boardingPrefs: prefs,
      },
    });
  } catch (err) {
    console.error("[profile] error:", err.message);
    res.status(500).json({ error: "查询失败" });
  }
});

// 乘车人
app.get("/api/passengers", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const rows = await db.listPassengers(userId);
  res.json({ success: true, data: rows.map(mapPassenger) });
});

app.post("/api/passengers", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const err = validatePassenger(req.body);
  if (err) return res.status(400).json({ error: err });
  try {
    const row = await db.createPassenger(userId, req.body);
    res.json({ success: true, data: mapPassenger(row) });
  } catch (e) {
    console.error("[passengers/create]", e.message);
    res.status(500).json({ error: "保存失败" });
  }
});

app.put("/api/passengers/:id", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const id = parseInt(req.params.id, 10);
  if (!id) return res.status(400).json({ error: "id 错误" });
  try {
    const row = await db.updatePassenger(userId, id, req.body || {});
    if (!row) return res.status(404).json({ error: "未找到" });
    res.json({ success: true, data: mapPassenger(row) });
  } catch (e) {
    res.status(500).json({ error: "更新失败" });
  }
});

app.delete("/api/passengers/:id", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const id = parseInt(req.params.id, 10);
  if (!id) return res.status(400).json({ error: "id 错误" });
  const ok = await db.deletePassenger(userId, id);
  res.json({ success: ok });
});

// 地址
app.get("/api/addresses", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const rows = await db.listAddresses(userId);
  res.json({ success: true, data: rows.map(mapAddress) });
});

app.post("/api/addresses", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const { label, city, address, lat, lng, id } = req.body || {};
  if (!label || !["home", "company", "other"].includes(label)) {
    return res.status(400).json({ error: "label 必须为 home/company/other" });
  }
  try {
    const row = await db.upsertAddress(userId, { id, label, city, address, lat, lng });
    res.json({ success: true, data: mapAddress(row) });
  } catch (e) {
    res.status(500).json({ error: "保存失败" });
  }
});

app.put("/api/addresses/:id", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const id = parseInt(req.params.id, 10);
  if (!id) return res.status(400).json({ error: "id 错误" });
  const { label, city, address, lat, lng } = req.body || {};
  if (!label) return res.status(400).json({ error: "label 必填" });
  try {
    const row = await db.upsertAddress(userId, { id, label, city, address, lat, lng });
    res.json({ success: true, data: mapAddress(row) });
  } catch (e) {
    res.status(500).json({ error: "更新失败" });
  }
});

app.delete("/api/addresses/:id", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const id = parseInt(req.params.id, 10);
  if (!id) return res.status(400).json({ error: "id 错误" });
  const ok = await db.deleteAddress(userId, id);
  res.json({ success: ok });
});

// 收藏/常用路线
app.get("/api/favorite-routes", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const limit = Math.min(parseInt(req.query.limit, 10) || 10, 50);
  const rows = await db.listFavoriteRoutes(userId, limit);
  res.json({ success: true, data: rows.map(mapRoute) });
});

app.post("/api/favorite-routes/use", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const { startCity, endCity } = req.body || {};
  if (!startCity || !endCity) return res.status(400).json({ error: "startCity/endCity 必填" });
  try {
    await db.recordRouteUse(userId, startCity, endCity);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "记录失败" });
  }
});

// 按城市的常用上车点
app.get("/api/boarding-prefs", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const rows = await db.listBoardingPrefs(userId);
  res.json({ success: true, data: rows });
});

app.put("/api/boarding-prefs", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  const { city, station } = req.body || {};
  if (!city || !station) return res.status(400).json({ error: "city/station 必填" });
  try {
    await db.setBoardingPref(userId, city, station);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "保存失败" });
  }
});

app.delete("/api/boarding-prefs/:city", async (req, res) => {
  const userId = requireUser(req, res);
  if (!userId) return;
  await db.deleteBoardingPref(userId, decodeURIComponent(req.params.city));
  res.json({ success: true });
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

/**
 * Drop any assistant-with-tool_calls whose tool responses are incomplete.
 * LLM errors mid-loop can leave session.messages in an inconsistent state (half-pushed tool
 * responses, or a tool_calls assistant with nothing after it). Sending that back to DashScope
 * returns 400 "assistant message with tool_calls must be followed by tool messages".
 * Fix by walking tail-to-head, removing the first broken tool_call cluster we find.
 */
function sanitizeSession(session) {
  const msgs = session.messages;
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (m.role !== "assistant" || !Array.isArray(m.tool_calls) || m.tool_calls.length === 0) continue;
    const expected = new Set(m.tool_calls.map((tc) => tc.id));
    const responded = new Set();
    for (let j = i + 1; j < msgs.length; j++) {
      if (msgs[j].role === "tool" && msgs[j].tool_call_id) {
        responded.add(msgs[j].tool_call_id);
      } else if (msgs[j].role !== "tool") {
        break; // hit a non-tool msg → stop counting
      }
    }
    const missing = [...expected].filter((id) => !responded.has(id));
    if (missing.length > 0) {
      // Remove assistant[i] and any subsequent tool-role msgs that belonged to it
      let removeTo = i + 1;
      while (removeTo < msgs.length && msgs[removeTo].role === "tool" && expected.has(msgs[removeTo].tool_call_id)) {
        removeTo++;
      }
      console.log(`[sanitize] dropping incomplete tool_call cluster at [${i}..${removeTo - 1}], missing ids: ${missing.join(",")}`);
      msgs.splice(i, removeTo - i);
    }
  }
}

setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.lastAccess > SESSION_TTL) sessions.delete(id);
  }
}, 5 * 60 * 1000);

// ── 对话 ──────────────────────────────────────────────────────

app.post("/api/chat", async (req, res) => {
  const startMs = Date.now();
  const { sessionId: rawSessionId, message, location } = req.body;
  console.log(`[chat] ← ${message} (session=${rawSessionId}, ip=${req.ip})`);
  if (!message) {
    return res.status(400).json({ error: "message 必填" });
  }

  const payload = parseJwt(req);
  const userId = getUserId(req);
  const sessionId = userId || rawSessionId || ("anon_" + Date.now());
  const session = getOrCreateSession(sessionId);
  sanitizeSession(session);

  if (userId && !session.profileInjected) {
    try {
      const [routes, prefs, addresses] = await Promise.all([
        db.listFavoriteRoutes(userId, 5),
        db.listBoardingPrefs(userId),
        db.listAddresses(userId),
      ]);
      const parts = [];
      if (addresses.length) {
        const fmt = addresses.map((a) => {
          const tag = a.label === "home" ? "家" : a.label === "company" ? "公司" : a.label || "地址";
          return `${tag}=${a.city || ""}${a.address ? "·" + a.address : ""}`;
        }).join("; ");
        parts.push(`常用地址: ${fmt}`);
      }
      if (routes.length) {
        parts.push(`常走路线: ${routes.map((r) => `${r.start_city}→${r.end_city}(${r.use_count}次)`).join("; ")}`);
      }
      if (prefs.length) {
        parts.push(`常用上车点: ${prefs.map((p) => `${p.city}用${p.station}`).join("; ")}`);
      }
      if (parts.length) {
        session.messages.push({
          role: "system",
          content: `[用户画像] ${parts.join(" | ")}。当用户说"回家""去公司""回学校"等，直接用上面的地址作为目的地（把"家"映射到 home 标签、"公司"映射到 company 标签）。用户提问若没指定起点城市/上车点，可参考历史偏好。`,
        });
      }
      session.profileInjected = true;
    } catch (e) {
      console.error("[chat] load profile error:", e.message);
    }
  }

  if (location && location.latitude && location.longitude) {
    session.location = { latitude: location.latitude, longitude: location.longitude };
    console.log(`[chat] GPS in: ${location.latitude.toFixed(4)},${location.longitude.toFixed(4)}`);

    if (!session.locationResolved && gaodeMap.isConfigured()) {
      try {
        const geo = await gaodeMap.reverseGeocode(location.latitude, location.longitude);
        session.locationResolved = {
          city: geo.city, district: geo.district, street: geo.street,
          formatted: geo.formatted, adcode: geo.adcode,
        };
        console.log(`[pre-resolve] → ${geo.city}/${geo.district}/${geo.street}`);
        const locInfo = `[系统自动定位] 用户当前位置: ${geo.city}${geo.district}${geo.street || ""}（${geo.formatted}）。GPS坐标已注入context，调 score_and_rank 时系统会自动计算上车距离，无需再调 get_user_location。`;
        session.messages.push({ role: "system", content: locInfo });
      } catch (e) {
        console.error("[pre-resolve] reverseGeocode error:", e.message);
      }
    }
  } else {
    console.log(`[chat] no GPS in request (location=${JSON.stringify(location)})`);
  }

  session.messages.push({ role: "user", content: message });

  const wantsSSE = (req.headers.accept || "").includes("text/event-stream");

  if (wantsSSE) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      // Disable downstream proxy/WeChat buffering so each event flushes immediately
      "X-Accel-Buffering": "no",
    });
    if (typeof res.flushHeaders === "function") res.flushHeaders();
    // Priming chunk so WeChat's onChunkReceived warms up before the first real event
    res.write(":ok\n\n");

    const heartbeat = setInterval(() => {
      if (!res.writableEnded) res.write(":keepalive\n\n");
    }, 15000);

    const timeout = setTimeout(() => {
      if (!res.writableEnded) {
        res.write(`data: ${JSON.stringify({ type: "error", error: "请求超时，请重试" })}\n\n`);
        res.end();
      }
    }, 90000);

    const cleanup = () => { clearInterval(heartbeat); clearTimeout(timeout); };

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
      const ctx = { location: session.location, lastUserMessage: message, session };
      const reply = await chat(session.messages, userId, ctx, onProgress, onCardReady);
      console.log(`[chat] SSE → replied in ${Date.now() - startMs}ms (${reply?.length || 0} chars) session=${sessionId}`);
      cleanup();
      if (!res.writableEnded) {
        if (cardSent) {
          const cleaned = (reply || "").replace(/\[ROUTE_RESULTS:[\s\S]*?\](?=\s|$)/g, "").trim();
          if (cleaned) {
            // Brief pause so the card visibly lands before the text bubble appears
            await new Promise((r) => setTimeout(r, 400));
            if (!res.writableEnded) {
              res.write(`data: ${JSON.stringify({ type: "supplement", text: cleaned })}\n\n`);
            }
          }
          if (!res.writableEnded) res.write(`data: ${JSON.stringify({ type: "done" })}\n\n`);
        } else {
          res.write(`data: ${JSON.stringify({ type: "done", reply })}\n\n`);
        }
        if (!res.writableEnded) res.end();
      }
    } catch (err) {
      cleanup();
      console.error(`[chat] SSE ERROR session=${sessionId} msg="${message}" in ${Date.now() - startMs}ms:`, err?.stack || err?.message || err);
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
      const ctx = { location: session.location, lastUserMessage: message, session };
      const reply = await chat(session.messages, userId, ctx);
      clearTimeout(timeout);
      console.log(`[chat] → replied in ${Date.now() - startMs}ms (${reply?.length || 0} chars)`);
      if (!res.headersSent) res.json({ reply });
    } catch (err) {
      clearTimeout(timeout);
      console.error(`[chat] ERROR in ${Date.now() - startMs}ms:`, err.message || err);
      if (!res.headersSent) res.status(500).json({ error: "服务异常，请稍后重试" });
    }
  }
});

// ── 语音转文字 ────────────────────────────────────────────────

app.post("/api/stt", upload.single("audio"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "缺少音频文件" });

  const FORMAT_MIME = { mp3: "audio/mpeg", wav: "audio/wav", aac: "audio/aac", m4a: "audio/mp4", webm: "audio/webm", ogg: "audio/ogg" };
  const fmt = req.body && req.body.format;
  const mime = (fmt && FORMAT_MIME[fmt]) || (req.file.mimetype !== "application/octet-stream" ? req.file.mimetype : "audio/webm");
  const b64 = req.file.buffer.toString("base64");
  const dataUri = `data:${mime};base64,${b64}`;
  console.log(`[stt] file=${req.file.originalname || "?"} size=${req.file.size} mime=${mime} fmt=${fmt || "auto"}`);

  const payload = JSON.stringify({
    model: "qwen3-asr-flash",
    messages: [{ role: "user", content: [{ type: "input_audio", input_audio: { data: dataUri } }] }],
    stream: false,
  });

  const MAX_RETRIES = 3;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const resp = await fetch(`${LLM_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: { Authorization: `Bearer ${LLM_API_KEY}`, "Content-Type": "application/json" },
        body: payload,
        signal: AbortSignal.timeout(15000),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        console.error(`[stt] API error (attempt ${attempt}):`, resp.status, errText);
        if (attempt === MAX_RETRIES) return res.status(502).json({ error: "语音识别失败" });
        continue;
      }

      const data = await resp.json();
      const text = data.choices?.[0]?.message?.content || "";
      console.log(`[stt] OK (attempt ${attempt}): "${text.slice(0, 50)}"`);
      return res.json({ text });
    } catch (err) {
      console.error(`[stt] fetch error (attempt ${attempt}/${MAX_RETRIES}):`, err.message);
      if (attempt === MAX_RETRIES) return res.status(500).json({ error: "语音识别异常" });
      await new Promise(r => setTimeout(r, 500 * attempt));
    }
  }
});

// ── 健康检查 ──────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ── 监控仪表盘（聚合接口）───────────────────────────────────

app.get("/api/monitor/dashboard", async (req, res) => {
  try {
    const [overview, coverage, anomalies, crawlerHealth] = await Promise.all([
      db.getMonitorOverview(),
      db.getDataCoverage(),
      db.getDataAnomalies(),
      db.getCrawlerHealth(),
    ]);
    res.json({ overview, coverage, anomalies, crawlerHealth });
  } catch (err) {
    console.error("[monitor] dashboard error:", err.message);
    res.status(500).json({ error: "查询失败: " + err.message });
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

// ── 定时爬虫（全量）────────────────────────────────────────────

app.post("/api/cron/crawl", async (req, res) => {
  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(403).json({ error: "forbidden" });
  }
  res.json({ status: "started" });
  runFullCrawl("http").catch((e) => console.error("[cron] manual trigger error:", e.message));
});

app.post("/api/cron/sync-meta", async (req, res) => {
  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(403).json({ error: "forbidden" });
  }
  res.json({ status: "started" });
  syncMeta().catch((e) => console.error("[sync-meta] error:", e.message));
});

async function runFullCrawl(trigger = "auto") {
  console.log("[crawl] === 开始全量数据抓取 ===");
  const t0 = Date.now();
  try {
    await syncMeta();
    await syncBusbossMeta(trigger);
  } catch (e) {
    console.error("[crawl] 元数据同步失败:", e.message);
  }
  try {
    await crawlAllRoutes(trigger);
  } catch (e) {
    console.error("[crawl] 粤程路线抓取失败:", e.message);
  }
  try {
    await crawlBusbossAllRoutes(trigger);
  } catch (e) {
    console.error("[crawl] 车盈网路线抓取失败:", e.message);
  }
  const min = Math.round((Date.now() - t0) / 60000);
  console.log(`[crawl] === 全量抓取完成, 耗时 ${min} 分钟 ===`);
}

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
    runFullCrawl("cron").catch((e) => console.error("[cron] daily error:", e.message));
    setTimeout(run, msUntilBeijing(6, 0));
  };
  const delay = msUntilBeijing(6, 0);
  console.log(`[cron] 下次全量定时抓取: ${Math.round(delay / 60000)} 分钟后 (北京时间 06:00)`);
  setTimeout(run, delay);
}

// ── 启动 ──────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  await db.migrate().catch((e) => console.error("[startup] migrate error:", e.message));

  startAutoRefresh();

  const lastYuecx = await db.getLastCrawlTime("yuecx_all_routes").catch(() => null);
  const lastBusboss = await db.getLastCrawlTime("busboss_all_routes").catch(() => null);
  const staleHours = 20;
  const yuecxStale = !lastYuecx || (Date.now() - new Date(lastYuecx).getTime()) > staleHours * 3600000;
  const busbossStale = !lastBusboss || (Date.now() - new Date(lastBusboss).getTime()) > staleHours * 3600000;

  if (process.env.SKIP_STARTUP_CRAWL === "1") {
    console.log("[startup] SKIP_STARTUP_CRAWL=1, 跳过抓取");
  } else if (yuecxStale || busbossStale) {
    console.log(`[startup] 数据过期, 启动全量抓取 (yuecx: ${yuecxStale ? '需要' : '跳过'}, busboss: ${busbossStale ? '需要' : '跳过'})`);
    runFullCrawl("startup").catch((e) => console.error("[startup] crawl error:", e.message));
  } else {
    console.log("[startup] 数据新鲜, 跳过抓取");
    syncMeta().catch((e) => console.error("[startup] meta sync error:", e.message));
    syncBusbossMeta("startup").catch((e) => console.error("[startup] busboss meta error:", e.message));
  }

  scheduleDailyCrawl();
});

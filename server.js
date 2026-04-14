/**
 * 粤程助手 — Express API 服务
 * POST /api/chat      — 对话接口
 * GET  /              — 聊天页面
 * GET  /api/health    — 健康检查
 *
 * 订单相关 API:
 * POST /api/orders              — 创建订单
 * GET  /api/orders              — 查询订单列表
 * GET  /api/orders/:orderId     — 查询订单详情
 * POST /api/orders/:orderId/cancel — 取消订单
 * GET  /api/orders/stats        — 订单统计
 *
 * Stripe 支付 API:
 * POST /api/orders/:orderId/pay     — 创建 Stripe Checkout Session
 * GET  /payment/success              — 支付成功回调
 * GET  /payment/cancel               — 支付取消回调
 * POST /webhook/stripe              — Stripe Webhook
 */

require("dotenv/config");
const express = require("express");
const path = require("path");
const multer = require("multer");
const { chat, buildSystemPrompt } = require("./agent");
const { crawlHotRoutes } = require("./crawler");
const order = require("./order");
let busboss;
try { busboss = require("./busboss_crawler"); } catch { busboss = { isAvailable: () => false }; }
const stripePayment = require("./stripe-payment");

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const LLM_BASE_URL = process.env.LLM_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const LLM_API_KEY = process.env.LLM_API_KEY || "";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// sessionId → messages[]
const sessions = new Map();
const SESSION_TTL = 60 * 60 * 1000; // 1h

function getOrCreateSession(sessionId) {
  if (sessions.has(sessionId)) {
    const s = sessions.get(sessionId);
    s.lastAccess = Date.now();
    return s.messages;
  }
  const messages = [{ role: "system", content: buildSystemPrompt() }];
  sessions.set(sessionId, { messages, lastAccess: Date.now() });
  return messages;
}

// Periodic cleanup
setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.lastAccess > SESSION_TTL) sessions.delete(id);
  }
}, 5 * 60 * 1000);

app.post("/api/chat", async (req, res) => {
  const { sessionId, message } = req.body;
  if (!sessionId || !message) {
    return res.status(400).json({ error: "sessionId 和 message 必填" });
  }

  const messages = getOrCreateSession(sessionId);
  messages.push({ role: "user", content: message });

  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({ error: "请求超时，请重试" });
    }
  }, 60000);

  try {
    const reply = await chat(messages);
    clearTimeout(timeout);
    if (!res.headersSent) res.json({ reply });
  } catch (err) {
    clearTimeout(timeout);
    console.error("Chat error:", err);
    if (!res.headersSent) res.status(500).json({ error: "服务异常，请稍后重试" });
  }
});

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

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ── 订单 API 端点 ────────────────────────────────────────────

/** POST /api/orders - 创建订单 */
app.post("/api/orders", async (req, res) => {
  try {
    const result = await order.createOrder(req.body);
    res.json(result);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** GET /api/orders - 查询订单列表 */
app.get("/api/orders", async (req, res) => {
  try {
    const { page, limit, status, userId } = req.query;
    const result = await order.listOrders({
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 20,
      status,
      userId,
    });
    res.json(result);
  } catch (err) {
    console.error("List orders error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** GET /api/orders/stats - 订单统计 */
app.get("/api/orders/stats", async (req, res) => {
  try {
    const { userId } = req.query;
    const result = await order.getOrderStats(userId);
    res.json(result);
  } catch (err) {
    console.error("Order stats error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** GET /api/orders/:orderId - 查询订单详情 */
app.get("/api/orders/:orderId", async (req, res) => {
  try {
    const result = await order.getOrder(req.params.orderId);
    if (!result.success) {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (err) {
    console.error("Get order error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** POST /api/orders/:orderId/cancel - 取消订单 */
app.post("/api/orders/:orderId/cancel", async (req, res) => {
  try {
    const { reason } = req.body;
    const result = await order.cancelOrder(req.params.orderId, reason);
    
    // 同步取消到车盈网（如果是车盈网订单且有token）
    if (result.success && busboss.isAvailable()) {
      const orderDetail = await order.getOrder(req.params.orderId);
      if (orderDetail.success && orderDetail.data.source === "busboss") {
        const raw = orderDetail.data.raw_data;
        if (raw?.orderGID) {
          await busboss.cancelOrder(raw.orderGID, reason).catch(() => {});
        }
      }
    }
    
    res.json(result);
  } catch (err) {
    console.error("Cancel order error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** DELETE /api/orders/:orderId - 删除订单 */
app.delete("/api/orders/:orderId", async (req, res) => {
  try {
    const result = await order.deleteOrder(req.params.orderId);
    res.json(result);
  } catch (err) {
    console.error("Delete order error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** PATCH /api/orders/:orderId/status - 更新订单状态 */
app.patch("/api/orders/:orderId/status", async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ success: false, error: "缺少 status 参数" });
    }
    const result = await order.updateOrderStatus(req.params.orderId, status, req.body);
    res.json(result);
  } catch (err) {
    console.error("Update order status error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── 车盈网直通 API（需要 token）───────────────────────────────

/** GET /api/busboss/passengers - 获取车盈网乘客列表 */
app.get("/api/busboss/passengers", async (req, res) => {
  try {
    if (!busboss.isAvailable()) {
      return res.status(401).json({ success: false, error: "车盈网未认证" });
    }
    const passengers = await busboss.getPassengers();
    res.json({ success: true, data: { passengers } });
  } catch (err) {
    console.error("Get passengers error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** GET /api/busboss/orders - 获取车盈网订单列表（直通） */
app.get("/api/busboss/orders", async (req, res) => {
  try {
    if (!busboss.isAvailable()) {
      return res.status(401).json({ success: false, error: "车盈网未认证" });
    }
    const { page, limit, status } = req.query;
    const result = await busboss.getMyOrders({
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 20,
      status,
    });
    res.json(result);
  } catch (err) {
    console.error("Get busboss orders error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── Stripe 支付 API ────────────────────────────────────────

/** POST /api/orders/:orderId/pay - 创建 Stripe Checkout Session */
app.post("/api/orders/:orderId/pay", async (req, res) => {
  try {
    // 获取订单详情
    const orderResult = await order.getOrder(req.params.orderId);
    if (!orderResult.success) {
      return res.status(404).json(orderResult);
    }

    const orderData = orderResult.data;

    // 检查订单状态
    if (orderData.status !== "pending") {
      return res.status(400).json({
        success: false,
        error: `订单状态为 ${orderData.statusText}，无法支付`,
      });
    }

    // 创建 Stripe Checkout Session
    const result = await stripePayment.createCheckoutSession(orderData);
    res.json(result);
  } catch (err) {
    console.error("Create payment session error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/** GET /payment/success - 支付成功回调 */
app.get("/payment/success", async (req, res) => {
  const { orderId, session_id } = req.query;

  if (!orderId || !session_id) {
    return res.redirect("/?payment=error&message=缺少必要参数");
  }

  try {
    // 验证支付状态
    const verifyResult = await stripePayment.verifySession(session_id);

    if (verifyResult.success && verifyResult.paid) {
      // 更新订单状态为已支付
      await order.updateOrderStatus(orderId, "paid", {
        payment: {
          method: "stripe",
          paidAt: new Date().toISOString(),
          transactionId: session_id,
          amount: verifyResult.amountTotal / 100,
          currency: verifyResult.currency,
        },
      });

      // 跳转到前端成功页面
      res.redirect(`/?payment=success&orderId=${orderId}`);
    } else {
      res.redirect(`/?payment=pending&orderId=${orderId}`);
    }
  } catch (err) {
    console.error("Payment success handler error:", err);
    res.redirect(`/?payment=error&message=${encodeURIComponent(err.message)}`);
  }
});

/** GET /payment/cancel - 支付取消回调 */
app.get("/payment/cancel", (req, res) => {
  const { orderId } = req.query;
  res.redirect(`/?payment=cancelled&orderId=${orderId || ""}`);
});

/** POST /webhook/stripe - Stripe Webhook */
app.post("/webhook/stripe",
  express.raw({ type: "application/json" }),
  stripePayment.buildWebhookHandler(order)
);

// ── 定时爬虫（广深）────────────────────────────────────────────

/** POST /api/cron/crawl — 手动触发广深爬虫 */
app.post("/api/cron/crawl", async (req, res) => {
  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(403).json({ error: "forbidden" });
  }
  res.json({ status: "started" });
  crawlHotRoutes().catch((e) => console.error("[cron] manual trigger error:", e.message));
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
    crawlHotRoutes().catch((e) => console.error("[cron] daily error:", e.message));
    setTimeout(run, msUntilBeijing(6, 0));
  };
  const delay = msUntilBeijing(6, 0);
  console.log(`[cron] 下次广深定时抓取: ${Math.round(delay / 60000)} 分钟后`);
  setTimeout(run, delay);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  - POST /api/chat         对话接口`);
  console.log(`  - POST /api/orders       创建订单`);
  console.log(`  - GET  /api/orders       订单列表`);
  console.log(`  - GET  /api/orders/stats 订单统计`);
  console.log(`  - POST /api/orders/:orderId/pay  Stripe支付`);
  console.log(`  - POST /api/cron/crawl   手动触发广深爬虫`);
  console.log(`  - GET  /api/health       健康检查`);

  // 启动时预热：立即抓取广深数据
  console.log("[cron] 服务启动，开始预热广深数据...");
  crawlHotRoutes().catch((e) => console.error("[cron] startup crawl error:", e.message));

  // 每天北京时间 6:00 定时抓取
  scheduleDailyCrawl();
});

/**
 * Stripe 支付模块
 * 为城际巴士订单提供 Stripe Checkout 支付集成
 *
 * 流程：
 * 1. 用户创建订单
 * 2. 用户点击"Stripe 支付"按钮
 * 3. 后端创建 Stripe Checkout Session
 * 4. 用户跳转到 Stripe 支付页面
 * 5. 支付成功后跳转回 success_url，更新订单状态
 * 6. 支付取消后跳转回 cancel_url
 */

let stripe = null;
try {
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  }
} catch (e) {
  console.warn("[stripe] init failed:", e.message);
}

const HOST = process.env.HOST_URL || "http://localhost:3000";

/**
 * 创建 Stripe Checkout Session
 * @param {Object} params - 订单信息
 * @returns {Promise<{success: boolean, url?: string, error?: string}>}
 */
async function createCheckoutSession(order) {
  if (!stripe) return { success: false, error: "Stripe not configured" };
  try {
    // 构建订单描述
    const productName = `城际巴士: ${order.startCity} → ${order.endCity}`;
    const productDescription = `${order.date} ${order.fromTime} | ${order.boardingStation} → ${order.dropoffStation}`;

    // 转换价格为 cents (Stripe 使用最小货币单位)
    const amountCents = Math.round(parseFloat(order.priceYuan) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "alipay", "wechat_pay"],
      payment_method_options: {
        wechat_pay: {
          client: "web",
        },
      },
      line_items: [
        {
          price_data: {
            currency: "cny",
            product_data: {
              name: productName,
              description: productDescription,
              metadata: {
                orderId: order.orderId,
                source: order.source,
                intervalId: order.intervalId,
              },
            },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${HOST}/payment/success?orderId=${order.orderId}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${HOST}/payment/cancel?orderId=${order.orderId}`,
      metadata: {
        orderId: order.orderId,
        source: order.source,
        startCity: order.startCity,
        endCity: order.endCity,
        date: order.date,
      },
      // 12小时后过期
      expires_at: Math.floor(Date.now() / 1000) + 12 * 60 * 60,
    });

    return {
      success: true,
      sessionId: session.id,
      url: session.url,
    };
  } catch (err) {
    console.error("[stripe] createCheckoutSession error:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}

/**
 * 验证 Checkout Session 状态
 * @param {string} sessionId - Stripe Session ID
 * @returns {Promise<{success: boolean, paid?: boolean, error?: string}>}
 */
async function verifySession(sessionId) {
  if (!stripe) return { success: false, error: "Stripe not configured" };
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return {
      success: true,
      paid: session.payment_status === "paid",
      status: session.payment_status,
      amountTotal: session.amount_total,
      currency: session.currency,
      metadata: session.metadata,
    };
  } catch (err) {
    console.error("[stripe] verifySession error:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}

/**
 * 构建 Webhook 处理器
 * 用于接收 Stripe 支付状态更新
 */
function buildWebhookHandler(orderModule) {
  return async (req, res) => {
    if (!stripe) return res.status(503).send("Stripe not configured");
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.error("[stripe] Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // 处理支付成功事件
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        console.log(`[stripe] Payment completed for order: ${orderId}`);

        // 更新订单状态为已支付
        await orderModule.updateOrderStatus(orderId, "paid", {
          payment: {
            method: "stripe",
            paidAt: new Date().toISOString(),
            transactionId: session.payment_intent,
            amount: session.amount_total / 100,
            currency: session.currency,
          },
        });
      }
    }

    // 处理支付失败事件
    if (event.type === "checkout.session.async_payment_failed") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        console.log(`[stripe] Payment failed for order: ${orderId}`);
      }
    }

    res.json({ received: true });
  };
}

/**
 * 创建退款
 * @param {string} paymentIntentId - Stripe Payment Intent ID
 * @param {number} amount - 退款金额（元），不传则全额退款
 */
async function createRefund(paymentIntentId, amount = null) {
  if (!stripe) return { success: false, error: "Stripe not configured" };
  try {
    const params = {
      payment_intent: paymentIntentId,
    };

    if (amount) {
      params.amount = Math.round(amount * 100); // 转换为 cents
    }

    const refund = await stripe.refunds.create(params);

    return {
      success: true,
      refundId: refund.id,
      amount: refund.amount / 100,
      status: refund.status,
    };
  } catch (err) {
    console.error("[stripe] createRefund error:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}

module.exports = {
  createCheckoutSession,
  verifySession,
  buildWebhookHandler,
  createRefund,
  stripe,
};

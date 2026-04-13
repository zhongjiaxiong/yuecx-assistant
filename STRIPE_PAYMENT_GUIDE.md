# Stripe 支付集成指南

本项目已集成 **Stripe Checkout** 支付方式，支持用户直接在网页上完成城际巴士订单支付。

## 支持的支付方式

- **支付宝** (alipay)
- **微信支付** (wechat_pay)
- **信用卡/借记卡** (card)

## 快速开始

### 1. 注册 Stripe 账号

访问 [Stripe Dashboard](https://dashboard.stripe.com) 注册账号并完成实名认证。

### 2. 获取 API 密钥

在 Stripe Dashboard 中获取以下密钥：

- **Secret Key**: `Settings → API keys → Secret key` (以 `sk_test`_ 或 `sk_live`_ 开头)
- **Publishable Key**: 前端使用 (如有需要)

### 3. 配置环境变量

复制 `.env.example` 并创建 `.env` 文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的 Stripe 密钥：

```env
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
HOST_URL=http://localhost:3000  # 或你的域名
```

### 4. 配置 Stripe Webhook (可选但推荐)

Webhook 用于接收 Stripe 支付状态更新，确保订单状态同步。

1. 在 Stripe Dashboard 中进入 `Developers → Webhooks`
2. 点击 `Add endpoint`
3. 输入 Endpoint URL: `https://your-domain.com/webhook/stripe`
4. 选择监听事件：
  - `checkout.session.completed` - 支付完成
  - `checkout.session.async_payment_failed` - 支付失败
5. 复制 `Signing secret` 到 `.env` 文件：

```env
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

**本地开发测试 Webhook:**

```bash
# 安装 Stripe CLI
brew install stripe/stripe-cli/stripe

# 登录
stripe login

# 转发 webhook 到本地
stripe listen --forward-to localhost:3000/webhook/stripe
```

### 5. 启动服务器

```bash
npm install
npm start
```

## 支付流程

1. 用户在聊天界面查询班次并创建订单
2. 订单创建后状态为 `pending` (待支付)
3. 用户进入「我的订单」页面，点击「去支付」按钮
4. 系统询问支付方式：
  - **确定** → Stripe Checkout 支付
  - **取消** → 显示小程序支付指引
5. 用户跳转到 Stripe Checkout 页面完成支付
6. 支付成功后：
  - Stripe 自动跳转回 `HOST_URL/payment/success`
  - 系统自动更新订单状态为 `paid`
  - 前端显示支付成功消息

## API 接口

### 创建支付会话

```http
POST /api/orders/:orderId/pay
Content-Type: application/json

# 响应
{
  "success": true,
  "sessionId": "cs_test_xxx",
  "url": "https://checkout.stripe.com/pay/cs_test_xxx"
}
```

### 支付回调

- **成功**: `GET /payment/success?orderId=xxx&session_id=xxx`
- **取消**: `GET /payment/cancel?orderId=xxx`

### Webhook

```http
POST /webhook/stripe
Stripe-Signature: t=xxx,v1=xxx

# Raw JSON body
```

## 订单状态流转

```
pending (待支付)
    ↓ 支付成功
paid (已支付)
    ↓ 系统确认
confirmed (已确认)
    ↓ 行程完成
completed (已完成)

pending → cancelled (已取消)
paid → refunded (已退款)
```

## 生产环境部署

### 1. 切换到生产模式

在 Stripe Dashboard 中：

1. 切换开关到 `Test mode off`
2. 获取生产环境密钥 (`sk_live_xxx`)
3. 更新 `.env` 文件

### 2. 配置 Webhook

- Endpoint URL: `https://your-domain.com/webhook/stripe`
- 事件监听: `checkout.session.completed`

### 3. 域名白名单

在 Stripe Dashboard `Settings → Account settings` 中添加你的域名：

- `https://your-domain.com/payment/success`
- `https://your-domain.com/payment/cancel`

## 故障排查

### 支付创建失败

1. 检查 `STRIPE_SECRET_KEY` 是否正确配置
2. 检查 `HOST_URL` 是否可达
3. 查看服务器日志中的 `[stripe]` 前缀日志

### Webhook 未触发

1. 确认 Webhook endpoint URL 正确
2. 确认 `STRIPE_WEBHOOK_SECRET` 匹配
3. 使用 Stripe CLI `stripe listen` 本地测试

### 订单状态未更新

1. 确认 Webhook 已配置并监听 `checkout.session.completed`
2. 检查订单 ID 是否正确传递到 Stripe metadata
3. 查看 `orders.json` 或数据库中的订单状态

## 相关文件

- `stripe-payment.js` - Stripe 支付核心模块
- `server.js` - 支付 API 端点
- `public/index.html` - 前端支付界面
- `order.js` - 订单状态管理
- `db.js` - 数据库存储

## 参考文档

- [Stripe Checkout 文档](https://docs.stripe.com/payments/checkout)
- [Stripe API 参考](https://docs.stripe.com/api)
- [Webhook 最佳实践](https://docs.stripe.com/webhooks/quickstart)


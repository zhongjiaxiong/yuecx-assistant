# 订单操作功能说明

## 概述

已在粤程助手项目中添加完整的订单操作功能，包括：
- 订单创建
- 订单查询
- 订单取消
- 订单统计
- 车盈网直通 API 支持

## 新增文件

| 文件 | 说明 |
|------|------|
| `order.js` | 订单管理核心模块，提供订单 CRUD 操作 |

## 修改的文件

| 文件 | 修改内容 |
|------|----------|
| `busboss_crawler.js` | 添加订单相关 API：getIntervalDetail, getPassengers, savePassenger, createOrder, getMyOrders, getOrderDetail, cancelOrder, getRefundRule, applyRefund |
| `tools.js` | 添加订单相关工具：create_order, list_orders, get_order_detail, cancel_order, list_passengers |
| `server.js` | 添加订单 REST API 端点 |
| `agent.js` | 更新系统提示词，增加订单管理说明 |
| `public/index.html` | 添加「我的订单」标签页和订单管理 UI |
| `db.js` | 添加订单数据库操作函数 |
| `schema.sql` | 添加 orders 表定义 |

## API 端点

### 订单管理

| 方法 | 端点 | 说明 |
|------|------|------|
| POST | `/api/orders` | 创建订单 |
| GET | `/api/orders` | 查询订单列表 |
| GET | `/api/orders/:orderId` | 查询订单详情 |
| POST | `/api/orders/:orderId/cancel` | 取消订单 |
| DELETE | `/api/orders/:orderId` | 删除订单 |
| PATCH | `/api/orders/:orderId/status` | 更新订单状态 |
| GET | `/api/orders/stats` | 订单统计 |

### 车盈网直通 (需要 Token)

| 方法 | 端点 | 说明 |
|------|------|------|
| GET | `/api/busboss/passengers` | 获取乘客列表 |
| GET | `/api/busboss/orders` | 获取车盈网订单列表 |

## 使用方法

### 1. 通过智能助手创建订单

在聊天界面中：
1. 搜索班次（如："明天从深圳去广州"）
2. 系统返回班次列表，每个班次有「订票」按钮
3. 点击「订票」生成预订信息卡片
4. 点击卡片中的「创建订单」按钮
5. 订单创建成功，系统返回订单号

### 2. 查看订单

点击顶部的「我的订单」标签页：
- 查看所有订单列表
- 按状态筛选：全部、待支付、已支付、已完成、已取消
- 查看订单详情
- 取消待支付订单

### 3. 通过 LLM 管理订单

可以直接对话：
- "查看我的订单" → 显示订单列表
- "取消订单 ORDXXXX" → 取消指定订单
- "查看订单详情 ORDXXXX" → 显示订单详情

## 订单状态流转

```
待支付 (pending) → 已支付 (paid) → 已确认 (confirmed) → 已完成 (completed)
                ↘ 已取消 (cancelled)
                ↘ 已退款 (refunded)
```

## 数据存储

订单数据同时存储在：
1. **本地文件** `orders.json` - 无需数据库即可运行
2. **PostgreSQL** 数据库 (如果配置了 DATABASE_URL)

## 车盈网直通功能

如果配置了车盈网 token (`busboss_token.json`)，系统可以：
- 直通查询车盈网真实订单
- 直通取消车盈网订单
- 获取车盈网保存的乘客列表

## 注意事项

1. 订单系统创建的是「预订意向」，实际支付仍需前往对应小程序完成
2. 车盈网直通功能需要有效的 token 认证
3. 粤出行由于 PoW/SM4 加密机制，暂不支持直通下单，仅支持生成预订信息

## 测试

启动服务后：
```bash
node server.js
```

访问 http://localhost:3000，可以在聊天界面订票，并在「我的订单」标签页管理订单。

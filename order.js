/**
 * 订单管理核心模块
 * 提供订单创建、查询、取消等功能
 * 支持多数据源：粤出行(yuecx) + 车盈网(busboss)
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const db = require("./db");

// 订单存储文件
const ORDERS_FILE = path.join(__dirname, "orders.json");

// 内存中的订单缓存
let ordersCache = null;
let lastLoadTime = 0;
const CACHE_TTL = 5000; // 5秒缓存

// ============================================================
// 数据持久化
// ============================================================

function loadOrders() {
  const now = Date.now();
  if (ordersCache && now - lastLoadTime < CACHE_TTL) {
    return ordersCache;
  }
  
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      const data = JSON.parse(fs.readFileSync(ORDERS_FILE, "utf-8"));
      ordersCache = Array.isArray(data) ? data : [];
    } else {
      ordersCache = [];
    }
  } catch {
    ordersCache = [];
  }
  
  lastLoadTime = now;
  return ordersCache;
}

function saveOrders(orders) {
  ordersCache = orders;
  lastLoadTime = Date.now();
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
    return true;
  } catch (err) {
    console.error("[order] save orders failed:", err.message);
    return false;
  }
}

function generateOrderId() {
  return `ORD${Date.now()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

// ============================================================
// 订单状态定义
// ============================================================

const ORDER_STATUS = {
  PENDING: "pending",      // 待支付
  PAID: "paid",           // 已支付
  CONFIRMED: "confirmed", // 已确认
  COMPLETED: "completed", // 已完成
  CANCELLED: "cancelled", // 已取消
  REFUNDED: "refunded",   // 已退款
};

const STATUS_TEXT = {
  [ORDER_STATUS.PENDING]: "待支付",
  [ORDER_STATUS.PAID]: "已支付",
  [ORDER_STATUS.CONFIRMED]: "已确认",
  [ORDER_STATUS.COMPLETED]: "已完成",
  [ORDER_STATUS.CANCELLED]: "已取消",
  [ORDER_STATUS.REFUNDED]: "已退款",
};

// ============================================================
// 核心订单操作
// ============================================================

/**
 * 创建订单（预订意向）
 * 由于第三方 API 限制，这里创建的是"预订意向"订单
 * 用户需要前往对应小程序完成实际支付
 */
async function createOrder(orderData) {
  const {
    source,           // yuecx | busboss
    intervalId,       // 班次ID
    date,             // 出行日期
    startCity,        // 出发城市
    endCity,          // 到达城市
    boardingStation,  // 上车站
    dropoffStation,   // 下车站
    fromTime,         // 出发时间
    priceYuan,        // 价格
    passengerInfo,    // 乘客信息 {name, phone, idCard}
    userId = "anonymous", // 用户标识
  } = orderData;

  // 参数验证
  if (!source || !intervalId || !date || !startCity || !endCity) {
    return { success: false, error: "缺少必需的订单参数" };
  }

  const orderId = generateOrderId();
  const now = new Date().toISOString();

  const order = {
    orderId,
    source,
    status: ORDER_STATUS.PENDING,
    statusText: STATUS_TEXT[ORDER_STATUS.PENDING],
    
    // 班次信息
    intervalId,
    date,
    startCity,
    endCity,
    boardingStation: boardingStation || "",
    dropoffStation: dropoffStation || "",
    fromTime: fromTime || "",
    priceYuan: priceYuan || "0.00",
    
    // 乘客信息
    passengerInfo: passengerInfo || {},
    
    // 元数据
    userId,
    createdAt: now,
    updatedAt: now,
    
    // 支付信息（预留）
    payment: {
      method: null,
      paidAt: null,
      transactionId: null,
    },
    
    // 小程序跳转信息
    miniapp: {
      name: source === "yuecx" ? "粤出行城际巴士" : "如约城际巴士",
      appId: source === "yuecx" ? "wx44d254291f27af7c" : "wx1487...",
      path: generateMiniappPath(source, {
        intervalId, date, startCityId: orderData.startCityId,
        startCityName: startCity, endCityId: orderData.endCityId, endCityName: endCity,
      }),
    },
  };

  // 保存订单
  const orders = loadOrders();
  orders.unshift(order); // 新订单放前面
  
  if (!saveOrders(orders)) {
    return { success: false, error: "订单保存失败" };
  }

  // 同时保存到数据库（如果支持）
  try {
    await db.saveOrder(order);
  } catch {
    // 数据库保存失败不影响主流程
  }

  return {
    success: true,
    data: {
      orderId,
      status: order.status,
      statusText: order.statusText,
      miniapp: order.miniapp,
      createdAt: order.createdAt,
    },
  };
}

/**
 * 生成小程序跳转路径
 * 粤出行使用 interval2 班次列表页，参数从逆向的 app-service.js 中提取
 */
function generateMiniappPath(source, { intervalId, date, startCityId, startCityName, endCityId, endCityName } = {}) {
  if (source === "yuecx") {
    const params = new URLSearchParams({
      corpid: "ycx",
      tripDate: date,
      beginCityCode: startCityId || "",
      beginCityName: startCityName || "",
      endCityCode: endCityId || "",
      endCityName: endCityName || "",
    });
    return `/package/interval2/pages/interval2/interval2?${params.toString()}`;
  } else if (source === "busboss") {
    return `pages/booking/index?lineClassDayGID=${intervalId}&classDate=${date}`;
  }
  return "";
}

/**
 * 查询订单列表
 */
async function listOrders({ userId, status, page = 1, limit = 20 } = {}) {
  let orders = loadOrders();
  
  // 过滤条件
  if (userId && userId !== "anonymous") {
    orders = orders.filter(o => o.userId === userId);
  }
  
  if (status) {
    orders = orders.filter(o => o.status === status);
  }
  
  // 分页
  const total = orders.length;
  const start = (page - 1) * limit;
  const paginatedOrders = orders.slice(start, start + limit);
  
  return {
    success: true,
    data: {
      total,
      page,
      limit,
      orders: paginatedOrders.map(o => ({
        orderId: o.orderId,
        source: o.source,
        status: o.status,
        statusText: o.statusText,
        date: o.date,
        route: `${o.startCity} → ${o.endCity}`,
        fromTime: o.fromTime,
        boardingStation: o.boardingStation,
        dropoffStation: o.dropoffStation,
        priceYuan: o.priceYuan,
        createdAt: o.createdAt,
        miniapp: o.miniapp,
      })),
    },
  };
}

/**
 * 查询单个订单详情
 */
async function getOrder(orderId) {
  const orders = loadOrders();
  const order = orders.find(o => o.orderId === orderId);
  
  if (!order) {
    return { success: false, error: "订单不存在" };
  }
  
  return {
    success: true,
    data: order,
  };
}

/**
 * 更新订单状态
 */
async function updateOrderStatus(orderId, newStatus, extra = {}) {
  const orders = loadOrders();
  const index = orders.findIndex(o => o.orderId === orderId);
  
  if (index === -1) {
    return { success: false, error: "订单不存在" };
  }
  
  const order = orders[index];
  const oldStatus = order.status;
  
  // 状态流转验证
  const validTransitions = {
    [ORDER_STATUS.PENDING]: [ORDER_STATUS.PAID, ORDER_STATUS.CANCELLED],
    [ORDER_STATUS.PAID]: [ORDER_STATUS.CONFIRMED, ORDER_STATUS.REFUNDED],
    [ORDER_STATUS.CONFIRMED]: [ORDER_STATUS.COMPLETED, ORDER_STATUS.REFUNDED],
  };
  
  if (oldStatus !== newStatus && validTransitions[oldStatus]) {
    if (!validTransitions[oldStatus].includes(newStatus)) {
      return { success: false, error: `无效的状态流转: ${oldStatus} -> ${newStatus}` };
    }
  }
  
  // 更新订单
  order.status = newStatus;
  order.statusText = STATUS_TEXT[newStatus] || newStatus;
  order.updatedAt = new Date().toISOString();
  
  // 更新额外信息
  if (extra.payment) {
    order.payment = { ...order.payment, ...extra.payment };
  }
  
  if (extra.passengerInfo) {
    order.passengerInfo = { ...order.passengerInfo, ...extra.passengerInfo };
  }
  
  if (!saveOrders(orders)) {
    return { success: false, error: "订单更新失败" };
  }
  
  return {
    success: true,
    data: {
      orderId,
      oldStatus,
      newStatus,
      statusText: order.statusText,
      updatedAt: order.updatedAt,
    },
  };
}

/**
 * 取消订单
 */
async function cancelOrder(orderId, reason = "") {
  const result = await updateOrderStatus(orderId, ORDER_STATUS.CANCELLED, {
    cancelReason: reason,
    cancelledAt: new Date().toISOString(),
  });
  
  return result;
}

/**
 * 删除订单（物理删除）
 */
async function deleteOrder(orderId) {
  const orders = loadOrders();
  const index = orders.findIndex(o => o.orderId === orderId);
  
  if (index === -1) {
    return { success: false, error: "订单不存在" };
  }
  
  orders.splice(index, 1);
  
  if (!saveOrders(orders)) {
    return { success: false, error: "订单删除失败" };
  }
  
  return { success: true, data: { orderId, deletedAt: new Date().toISOString() } };
}

/**
 * 获取订单统计数据
 */
async function getOrderStats(userId) {
  let orders = loadOrders();
  
  if (userId && userId !== "anonymous") {
    orders = orders.filter(o => o.userId === userId);
  }
  
  const stats = {
    total: orders.length,
    byStatus: {},
    bySource: {},
    totalAmount: 0,
  };
  
  for (const order of orders) {
    // 按状态统计
    stats.byStatus[order.status] = (stats.byStatus[order.status] || 0) + 1;
    
    // 按来源统计
    stats.bySource[order.source] = (stats.bySource[order.source] || 0) + 1;
    
    // 总金额（仅计算已完成/已支付的）
    if ([ORDER_STATUS.PAID, ORDER_STATUS.CONFIRMED, ORDER_STATUS.COMPLETED].includes(order.status)) {
      stats.totalAmount += parseFloat(order.priceYuan) || 0;
    }
  }
  
  return {
    success: true,
    data: stats,
  };
}

// ============================================================
// 导出
// ============================================================

module.exports = {
  // 常量
  ORDER_STATUS,
  STATUS_TEXT,
  
  // 核心操作
  createOrder,
  listOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder,
  deleteOrder,
  getOrderStats,
  
  // 工具
  generateMiniappPath,
  generateOrderId,
};

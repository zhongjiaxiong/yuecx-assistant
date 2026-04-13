/**
 * 车盈网 (BusBoss) API 模块
 * 用于与如约城际巴士后端交互
 */

function isAvailable() {
  return false; // 未配置 token 时不可用
}

async function getPassengers() {
  throw new Error("车盈网未配置");
}

async function getMyOrders(params) {
  throw new Error("车盈网未配置");
}

async function cancelOrder(orderGID, reason) {
  throw new Error("车盈网未配置");
}

module.exports = {
  isAvailable,
  getPassengers,
  getMyOrders,
  cancelOrder,
};

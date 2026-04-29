const api = require('../../utils/api');
const auth = require('../../utils/auth');

const STATUS_TEXT = {
  pending: '待支付',
  paid: '已支付',
  confirmed: '已确认',
  completed: '已完成',
  cancelled: '已取消',
  refunded: '已退款',
};

const YUECX_APPID = 'wx44d254291f27af7c';

Page({
  data: {
    orders: [],
    total: 0,
    loading: true,
    currentFilter: '',
  },

  onShow() {
    this._loadOrders();
  },

  onFilter(e) {
    const status = e.currentTarget.dataset.status;
    this.setData({ currentFilter: status });
    this._loadOrders(status);
  },

  async _loadOrders(status) {
    this.setData({ loading: true });
    try {
      if (!auth.isLoggedIn()) {
        await auth.silentLogin();
      }
      const url = status ? `/api/orders?status=${status}` : '/api/orders';
      const result = await api.get(url);

      if (!result.success) {
        this.setData({ loading: false, orders: [], total: 0 });
        return;
      }

      const orders = (result.data.orders || []).map((o) => ({
        ...o,
        statusText: STATUS_TEXT[o.status] || o.status,
        sourceName: o.miniapp ? o.miniapp.name : (o.source === 'yuecx' ? '城际巴士' : '如约城际'),
      }));

      this.setData({ loading: false, orders, total: result.data.total || orders.length });
    } catch (err) {
      console.error('[orders] load error:', err);
      this.setData({ loading: false, orders: [], total: 0 });
      wx.showToast({ title: '加载失败', icon: 'none' });
    }
  },

  onPay(e) {
    const order = e.currentTarget.dataset.order;
    const appId = (order.miniapp && order.miniapp.appId) || YUECX_APPID;
    const path = order.miniapp && order.miniapp.path;
    const opts = {
      appId,
      extraData: { from: 'yuecheng-assistant' },
      success: () => console.log('[orders] 跳转购票成功'),
      fail: () => wx.showToast({ title: '跳转失败', icon: 'none' }),
    };
    if (path) opts.path = path;
    wx.navigateToMiniProgram(opts);
  },

  onCancel(e) {
    const orderId = e.currentTarget.dataset.id;
    wx.showModal({
      title: '确认取消',
      content: `确定要取消订单 ${orderId} 吗？`,
      success: async (res) => {
        if (!res.confirm) return;
        try {
          const result = await api.post(`/api/orders/${orderId}/cancel`, { reason: '用户取消' });
          if (result.success) {
            wx.showToast({ title: '已取消', icon: 'success' });
            this._loadOrders(this.data.currentFilter);
          } else {
            wx.showToast({ title: result.error || '取消失败', icon: 'none' });
          }
        } catch (err) {
          wx.showToast({ title: '取消失败', icon: 'none' });
        }
      },
    });
  },

  async onDetail(e) {
    const orderId = e.currentTarget.dataset.id;
    try {
      const result = await api.get(`/api/orders/${orderId}`);
      if (!result.success) return;
      const d = result.data;
      const lines = [
        `订单号: ${d.orderId}`,
        `状态: ${STATUS_TEXT[d.status] || d.status}`,
        `路线: ${d.startCity} → ${d.endCity}`,
        `日期: ${d.date}`,
        `时间: ${d.fromTime || '未指定'}`,
        `上车站: ${d.boardingStation || '未指定'}`,
        `下车站: ${d.dropoffStation || '未指定'}`,
        `票价: ¥${d.priceYuan}`,
        `来源: ${d.source === 'yuecx' ? '城际巴士' : '如约城际'}`,
      ];
      wx.showModal({ title: '订单详情', content: lines.join('\n'), showCancel: false });
    } catch (err) {
      wx.showToast({ title: '获取详情失败', icon: 'none' });
    }
  },

  goChat() {
    wx.switchTab({ url: '/pages/chat/chat' });
  },
});

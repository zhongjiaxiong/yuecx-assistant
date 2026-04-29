const api = require('../../utils/api');
const auth = require('../../utils/auth');

function mask(str, head, tail) {
  if (!str) return '';
  if (str.length <= head + tail) return str;
  return str.slice(0, head) + '*'.repeat(str.length - head - tail) + str.slice(-tail);
}

Page({
  data: {
    passengers: [],
    loading: true,
  },

  onShow() {
    this._load();
  },

  onPullDownRefresh() {
    this._load().finally(() => wx.stopPullDownRefresh());
  },

  async _load() {
    if (!auth.hasPhone()) {
      wx.showModal({
        title: '请先登录',
        content: '需要手机号登录后才能管理乘车人',
        showCancel: false,
        success: () => wx.navigateBack(),
      });
      return;
    }

    this.setData({ loading: true });
    try {
      const result = await api.get('/api/passengers');
      if (result.success) {
        const passengers = (result.data || []).map((p) => ({
          ...p,
          idNumberMasked: mask(p.idNumber, 4, 3),
          phoneMasked: p.phone ? mask(p.phone, 3, 4) : '',
        }));
        this.setData({ passengers });
      }
    } catch (err) {
      console.error('[passengers] load error:', err);
      wx.showToast({ title: '加载失败', icon: 'none' });
    } finally {
      this.setData({ loading: false });
    }
  },

  onAdd() {
    wx.navigateTo({ url: '/pages/passengers/edit' });
  },

  onEdit(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/passengers/edit?id=${id}` });
  },
});

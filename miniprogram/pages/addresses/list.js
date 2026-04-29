const api = require('../../utils/api');
const auth = require('../../utils/auth');

const LABEL_TEXT = { home: '家', company: '公司', other: '其他' };

Page({
  data: { addresses: [], loading: true },

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
        content: '需要手机号登录后才能管理地址',
        showCancel: false,
        success: () => wx.navigateBack(),
      });
      return;
    }

    this.setData({ loading: true });
    try {
      const result = await api.get('/api/addresses');
      if (result.success) {
        const addresses = (result.data || []).map((a) => ({
          ...a,
          labelText: LABEL_TEXT[a.label] || a.label,
        }));
        this.setData({ addresses });
      }
    } catch (err) {
      console.error('[addresses] load error:', err);
      wx.showToast({ title: '加载失败', icon: 'none' });
    } finally {
      this.setData({ loading: false });
    }
  },

  onAdd() {
    wx.navigateTo({ url: '/pages/addresses/edit' });
  },

  onEdit(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/addresses/edit?id=${id}` });
  },
});

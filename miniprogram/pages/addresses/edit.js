const api = require('../../utils/api');

const LABELS = [
  { key: 'home', text: '家' },
  { key: 'company', text: '公司' },
  { key: 'other', text: '其他' },
];

Page({
  data: {
    editingId: 0,
    form: { label: 'home', city: '', address: '', lat: null, lng: null },
    labelOptions: LABELS.map((l) => l.text),
    labelIndex: 0,
    saving: false,
  },

  onLoad(options) {
    const id = parseInt(options.id, 10);
    if (id) {
      this.setData({ editingId: id });
      this._loadOne(id);
    }
  },

  async _loadOne(id) {
    wx.showLoading({ title: '加载中' });
    try {
      const result = await api.get('/api/addresses');
      const found = (result.data || []).find((a) => a.id === id);
      if (found) {
        const idx = LABELS.findIndex((l) => l.key === found.label);
        this.setData({
          form: {
            label: found.label,
            city: found.city || '',
            address: found.address || '',
            lat: found.lat,
            lng: found.lng,
          },
          labelIndex: idx >= 0 ? idx : 0,
        });
      }
    } finally {
      wx.hideLoading();
    }
  },

  onInput(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ [`form.${key}`]: e.detail.value });
  },

  onLabelChange(e) {
    const idx = parseInt(e.detail.value, 10);
    this.setData({ labelIndex: idx, 'form.label': LABELS[idx].key });
  },

  onPickLocation() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          'form.lat': res.latitude.toFixed(6),
          'form.lng': res.longitude.toFixed(6),
          'form.address': this.data.form.address || res.address || res.name || '',
        });
      },
      fail: (err) => {
        if (err.errMsg && err.errMsg.indexOf('cancel') === -1) {
          wx.showToast({ title: '无法选择位置', icon: 'none' });
        }
      },
    });
  },

  async onSave() {
    const f = this.data.form;
    const payload = {
      label: f.label,
      city: f.city.trim() || null,
      address: f.address.trim() || null,
      lat: f.lat ? parseFloat(f.lat) : null,
      lng: f.lng ? parseFloat(f.lng) : null,
    };
    if (!payload.city && !payload.address) {
      return wx.showToast({ title: '请填写城市或地址', icon: 'none' });
    }

    this.setData({ saving: true });
    try {
      if (this.data.editingId) {
        await api.request({ url: `/api/addresses/${this.data.editingId}`, method: 'PUT', data: payload });
      } else {
        await api.post('/api/addresses', payload);
      }
      wx.showToast({ title: '已保存', icon: 'success' });
      setTimeout(() => wx.navigateBack(), 600);
    } catch (err) {
      console.error('[address/save]', err);
      wx.showToast({ title: '保存失败', icon: 'none' });
    } finally {
      this.setData({ saving: false });
    }
  },

  onDelete() {
    wx.showModal({
      title: '删除地址',
      content: '确定要删除吗？',
      confirmColor: '#ff4d4f',
      success: async (res) => {
        if (!res.confirm) return;
        try {
          await api.request({ url: `/api/addresses/${this.data.editingId}`, method: 'DELETE' });
          wx.showToast({ title: '已删除', icon: 'success' });
          setTimeout(() => wx.navigateBack(), 600);
        } catch (err) {
          wx.showToast({ title: '删除失败', icon: 'none' });
        }
      },
    });
  },
});

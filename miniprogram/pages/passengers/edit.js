const api = require('../../utils/api');

const ID_TYPES = [
  { key: 'id_card', label: '身份证' },
  { key: 'passport', label: '护照' },
];

const ID_CARD_RE = /^[0-9]{17}[0-9Xx]$/;
const PHONE_RE = /^1[3-9]\d{9}$/;

Page({
  data: {
    editingId: 0,
    form: { name: '', idType: 'id_card', idNumber: '', phone: '', isDefault: false },
    idTypeLabels: ID_TYPES.map((t) => t.label),
    idTypeIndex: 0,
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
      const result = await api.get('/api/passengers');
      const found = (result.data || []).find((p) => p.id === id);
      if (found) {
        const idx = ID_TYPES.findIndex((t) => t.key === found.idType);
        this.setData({
          form: {
            name: found.name,
            idType: found.idType,
            idNumber: found.idNumber,
            phone: found.phone || '',
            isDefault: found.isDefault,
          },
          idTypeIndex: idx >= 0 ? idx : 0,
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

  onIdTypeChange(e) {
    const idx = parseInt(e.detail.value, 10);
    this.setData({ idTypeIndex: idx, 'form.idType': ID_TYPES[idx].key });
  },

  onDefaultChange(e) {
    this.setData({ 'form.isDefault': e.detail.value });
  },

  async onSave() {
    const f = this.data.form;
    if (!f.name.trim()) return wx.showToast({ title: '请输入姓名', icon: 'none' });
    if (f.idType === 'id_card' && !ID_CARD_RE.test(f.idNumber.trim())) {
      return wx.showToast({ title: '身份证号格式错误', icon: 'none' });
    }
    if (!f.idNumber.trim()) return wx.showToast({ title: '请输入证件号', icon: 'none' });
    if (f.phone && !PHONE_RE.test(f.phone)) return wx.showToast({ title: '手机号格式错误', icon: 'none' });

    const payload = {
      name: f.name.trim(),
      idType: f.idType,
      idNumber: f.idNumber.trim().toUpperCase(),
      phone: f.phone.trim() || null,
      isDefault: f.isDefault,
    };

    this.setData({ saving: true });
    try {
      if (this.data.editingId) {
        await api.request({ url: `/api/passengers/${this.data.editingId}`, method: 'PUT', data: payload });
      } else {
        await api.post('/api/passengers', payload);
      }
      wx.showToast({ title: '已保存', icon: 'success' });
      setTimeout(() => wx.navigateBack(), 600);
    } catch (err) {
      console.error('[passenger/save]', err);
      wx.showToast({ title: '保存失败', icon: 'none' });
    } finally {
      this.setData({ saving: false });
    }
  },

  onDelete() {
    wx.showModal({
      title: '删除乘车人',
      content: '确定要删除吗？',
      confirmColor: '#ff4d4f',
      success: async (res) => {
        if (!res.confirm) return;
        try {
          await api.request({ url: `/api/passengers/${this.data.editingId}`, method: 'DELETE' });
          wx.showToast({ title: '已删除', icon: 'success' });
          setTimeout(() => wx.navigateBack(), 600);
        } catch (err) {
          wx.showToast({ title: '删除失败', icon: 'none' });
        }
      },
    });
  },
});

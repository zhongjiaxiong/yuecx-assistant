const auth = require('../../utils/auth');
const api = require('../../utils/api');

const YUECX_APPID = 'wx44d254291f27af7c';

Page({
  data: {
    phone: '',
    phoneMasked: '',
    isDev: false,
    prefSummary: null,
  },

  onShow() {
    const app = getApp();
    const phone = app.globalData.phone || wx.getStorageSync('phone') || '';
    this.setData({
      phone,
      phoneMasked: phone ? phone.slice(0, 3) + '****' + phone.slice(7) : '',
      isDev: !app.globalData.baseUrl || app.globalData.baseUrl.includes('localhost'),
    });
    if (phone) this._loadPrefSummary();
    else this.setData({ prefSummary: null });
  },

  async _loadPrefSummary() {
    try {
      const result = await api.get('/api/profile');
      if (!result.success) return;
      const d = result.data;
      const topRoute = (d.favoriteRoutes || [])[0];
      const favoriteRouteText = topRoute
        ? `${topRoute.startCity} → ${topRoute.endCity}（${topRoute.useCount} 次）`
        : '';
      const boardingText = (d.boardingPrefs || [])
        .slice(0, 3)
        .map((p) => `${p.city}·${p.station}`)
        .join('，');
      const passengerCount = (d.passengers || []).length;
      const hasAny = !!(favoriteRouteText || boardingText || passengerCount);
      this.setData({
        prefSummary: { favoriteRouteText, boardingText, passengerCount, hasAny },
      });
    } catch (err) {
      console.error('[profile] load summary error:', err);
    }
  },

  async onGetPhoneNumber(e) {
    if (e.detail.errMsg !== 'getPhoneNumber:ok') {
      console.log('[profile] 用户拒绝授权手机号');
      return;
    }

    const code = e.detail.code;
    if (!code) {
      wx.showToast({ title: '授权失败', icon: 'none' });
      return;
    }

    wx.showLoading({ title: '登录中...', mask: true });
    try {
      // 先确保已有 token（否则 wx-bindphone 会 401）
      if (!auth.isLoggedIn()) {
        await auth.silentLogin();
      }

      const data = await auth.bindPhone(code);
      if (!data || !data.phone) {
        const msg = (data && data.error) ? data.error : '未返回手机号';
        throw new Error(msg);
      }

      const app = getApp();
      const phone = app.globalData.phone;
      this.setData({
        phone,
        phoneMasked: phone ? phone.slice(0, 3) + '****' + phone.slice(7) : '',
      });
      this._loadPrefSummary();
      wx.showToast({ title: '绑定成功', icon: 'success' });
    } catch (err) {
      console.error('[profile] bindPhone error:', err);
      const msg = (err && (err.message || err.errMsg)) || '请重试';
      wx.showModal({
        title: '绑定失败',
        content: String(msg).slice(0, 200),
        showCancel: false,
      });
    } finally {
      wx.hideLoading();
    }
  },

  onGoChat() {
    wx.switchTab({ url: '/pages/chat/chat' });
  },

  onGoOrders() {
    wx.navigateTo({ url: '/pages/orders/orders' });
  },

  onGoPassengers() {
    wx.navigateTo({ url: '/pages/passengers/list' });
  },

  onGoAddresses() {
    wx.navigateTo({ url: '/pages/addresses/list' });
  },


  onOpenYuecx() {
    wx.navigateToMiniProgram({
      appId: YUECX_APPID,
      fail() {
        wx.showToast({ title: '跳转失败', icon: 'none' });
      },
    });
  },

  onSetServer() {
    const app = getApp();
    wx.showModal({
      title: '服务器地址',
      editable: true,
      placeholderText: app.globalData.baseUrl || 'http://localhost:3000',
      success(res) {
        if (res.confirm && res.content) {
          app.setBaseUrl(res.content.trim());
          wx.showToast({ title: '已更新', icon: 'success' });
        }
      },
    });
  },

  onLogout() {
    wx.showModal({
      title: '确认退出',
      content: '退出后需要重新授权手机号',
      success: (res) => {
        if (res.confirm) {
          auth.logout();
          this.setData({ phone: '', phoneMasked: '' });
          auth.silentLogin();
          wx.showToast({ title: '已退出', icon: 'success' });
        }
      },
    });
  },
});

const auth = require('../../utils/auth');

const YUECX_APPID = 'wx44d254291f27af7c';

Page({
  data: {
    phone: '',
    phoneMasked: '',
    isDev: false,
  },

  onShow() {
    const app = getApp();
    const phone = app.globalData.phone || wx.getStorageSync('phone') || '';
    this.setData({
      phone,
      phoneMasked: phone ? phone.slice(0, 3) + '****' + phone.slice(7) : '',
      isDev: !app.globalData.baseUrl || app.globalData.baseUrl.includes('localhost'),
    });
  },

  async onGetPhoneNumber(e) {
    if (e.detail.errMsg !== 'getPhoneNumber:ok') {
      console.log('[profile] 用户拒绝授权手机号');
      return;
    }

    wx.showLoading({ title: '获取中...' });
    try {
      const code = e.detail.code;
      if (!code) {
        wx.showToast({ title: '授权失败', icon: 'none' });
        return;
      }

      await auth.bindPhone(code);
      const app = getApp();
      const phone = app.globalData.phone;
      this.setData({
        phone,
        phoneMasked: phone ? phone.slice(0, 3) + '****' + phone.slice(7) : '',
      });
      wx.showToast({ title: '绑定成功', icon: 'success' });
    } catch (err) {
      console.error('[profile] bindPhone error:', err);
      wx.showToast({ title: '绑定失败，请重试', icon: 'none' });
    } finally {
      wx.hideLoading();
    }
  },

  onGoChat() {
    wx.switchTab({ url: '/pages/chat/chat' });
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

const auth = require('./utils/auth');

App({
  globalData: {
    token: '',
    openid: '',
    phone: '',
    location: null,
    baseUrl: '',
  },

  onLaunch() {
    this.globalData.baseUrl = this._getBaseUrl();
    auth.silentLogin();
  },

  _getBaseUrl() {
    const stored = wx.getStorageSync('baseUrl');
    if (stored) return stored;
    // 开发时用本地地址，上线后改为服务器地址
    return 'http://localhost:3000';
  },

  setBaseUrl(url) {
    this.globalData.baseUrl = url;
    wx.setStorageSync('baseUrl', url);
  },
});

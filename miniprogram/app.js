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
    const DEFAULT = 'https://yuecx-assistant.onrender.com';
    const stored = wx.getStorageSync('baseUrl');
    const isStale = !stored
      || stored.indexOf('localhost') !== -1
      || stored.indexOf('127.0.0.1') !== -1
      || stored.indexOf('192.168.') !== -1
      || stored.indexOf('10.') === 0
      || stored.indexOf('172.') === 0;
    if (!isStale) return stored;
    wx.setStorageSync('baseUrl', DEFAULT);
    return DEFAULT;
  },

  setBaseUrl(url) {
    this.globalData.baseUrl = url;
    wx.setStorageSync('baseUrl', url);
  },
});

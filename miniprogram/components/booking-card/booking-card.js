const YUECX_APPID = 'wx44d254291f27af7c';

Component({
  properties: {
    data: {
      type: Object,
      value: {},
    },
  },

  methods: {
    onBuy() {
      const { miniappAppId, miniappPath, source } = this.data.data || {};
      const appId = miniappAppId || YUECX_APPID;
      const opts = {
        appId,
        extraData: { from: 'yuecheng-assistant' },
        success() {
          console.log('[booking-card] 跳转成功, appId:', appId, 'path:', miniappPath);
        },
        fail(err) {
          console.error('[booking-card] 跳转失败:', err);
          wx.showToast({ title: '跳转失败，请手动打开粤出行小程序', icon: 'none' });
        },
      };
      if (miniappPath) {
        opts.path = miniappPath;
      }
      wx.navigateToMiniProgram(opts);
    },
  },
});

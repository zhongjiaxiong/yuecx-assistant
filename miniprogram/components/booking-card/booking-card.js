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
      wx.navigateToMiniProgram({
        appId: YUECX_APPID,
        extraData: {
          from: 'yuecheng-assistant',
        },
        success() {
          console.log('[booking-card] 跳转粤出行成功');
        },
        fail(err) {
          console.error('[booking-card] 跳转失败:', err);
          wx.showToast({ title: '跳转失败，请手动打开粤出行小程序', icon: 'none' });
        },
      });
    },
  },
});

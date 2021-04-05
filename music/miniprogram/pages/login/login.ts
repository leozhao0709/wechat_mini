// mock account phone=15711140593&password=123456yzy
//Page Object
Page({
  data: {
    phone: '',
    password: '',
  },
  //options(Object)
  onLoad: function (options) {},
  onReady: function () {},

  handleInputChange: function (event: WechatMiniprogram.Input) {
    const { type } = event.currentTarget.dataset;
    this.setData({
      [type]: event.detail.value,
    });
  },

  handleLogin: function () {
    const { phone, password } = this.data;

    if (!phone || !password) {
      wx.showToast({
        title: 'phone or password cannot be blank',
        icon: 'none',
      });
      return;
    }

    if (!phone.match(/^1[3-9]\d{9}$/)) {
      wx.showToast({
        title: 'invalid',
        icon: 'error',
      });
      return;
    }

    wx.showToast({
      title: 'success!',
    });
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});

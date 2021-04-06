// mock account phone=15711140593&password=123456yzy

import config from '../../config/config';
import httpUtils from '../../utils/httpUtils';

//Page Object
Page({
  data: {
    phone: '15711140593',
    password: '123456yzy',
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
        title: 'phone invalid',
        icon: 'error',
      });
      return;
    }

    httpUtils
      .get<{ code: number; profile: UserProfile }>('/login/cellphone', { phone, password })
      .then((res) => res.data)
      .then((res) => {
        if (res.code === 200) {
          wx.showToast({
            title: 'success!',
          });
          wx.setStorage({
            key: config.storageKey.userProfile,
            data: res.profile,
            success: () => {
              wx.navigateBack();
            },
            fail: () => {},
            complete: () => {},
          });
        } else if (res.code === 400) {
          wx.showToast({
            title: 'phone invalid',
            icon: 'error',
          });
        } else if (res.code === 502) {
          wx.showToast({
            title: 'password invalid',
            icon: 'none',
          });
        } else {
          wx.showToast({
            title: 'login failed, please try again',
            icon: 'none',
          });
        }
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

import config from '../../config/config';
import httpUtils from '../../utils/httpUtils';

let startY = 0;
let moveY = 0;
let moveDistance = 0;
//Page Object
Page({
  data: {
    coverTransform: 'translateY(0)',
    coverTransition: '',
    userProfile: undefined as UserProfile | undefined,
    recentPlayList: [] as RecentPlay[],
  },
  //options(Object)
  onLoad: function (options) {},
  handleTouchStart: function (event: WechatMiniprogram.TouchEvent) {
    this.setData({
      coverTransition: '',
    });
    startY = event.touches[0].clientY;
  },

  handleTouchMove: function (event: WechatMiniprogram.TouchEvent) {
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;

    if (moveDistance < 0) return;
    if (moveDistance > 80) moveDistance = 80;

    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`,
    });
  },

  handleTouchEnd: function () {
    this.setData({
      coverTransform: 'translateY(0)',
      coverTransition: 'transform 1s ease-in-out',
    });
  },

  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },

  onReady: function () {},
  onShow: function () {
    const userProfileLocal = wx.getStorageSync(config.storageKey.userProfile);
    if (userProfileLocal) {
      this.setData({ userProfile: userProfileLocal });
      this.getRecentPlayList();
    }
  },
  getRecentPlayList() {
    httpUtils
      .get<{ allData: { song: RecentPlay }[] }>('/user/record', { uid: this.data.userProfile?.userId, type: 0 })
      .then((res) => res.data)
      .then((res) => {
        const recentPlayList = res.allData.slice(0, 10).map((data) => data.song);
        console.log(recentPlayList[0].al.picUrl);
        this.setData({ recentPlayList });
      });
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});

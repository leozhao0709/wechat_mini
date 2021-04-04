let startY = 0;
let moveY = 0;
let moveDistance = 0;
//Page Object
Page({
  data: {
    coverTransform: 'translateY(0)',
    coverTransition: '',
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
  onReady: function () {},
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

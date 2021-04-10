import httpUtils from '../../utils/httpUtils';
//Page Object
Page({
  data: {
    groupList: [] as VideoPage.NavList,
    activeGroupId: 0,
    videoList: [] as VideoPage.VideoList,
  },
  //options(Object)
  onLoad: function (options) {},

  loadNavList() {
    return httpUtils
      .get<{ data: VideoPage.NavList }>('/video/group/list')
      .then((res) => res.data)
      .then((res) => {
        const activeItemId = res.data[0].id;
        this.setData({
          groupList: res.data.slice(0, 14),
          activeGroupId: activeItemId,
        });
        return activeItemId;
      });
  },

  loadVideoList(groupId: number) {
    return httpUtils
      .get<{ code: number; datas: { data: VideoPage.VideoItem }[] }>('/video/group', { id: groupId })
      .then((res) => res.data)
      .then((res) => {
        if (res.code === 301) {
          // need login
          wx.navigateTo({ url: '/pages/login/login' });
        }
        if (res.code === 200) {
          const videoList = res.datas.map((data) => data.data);
          this.setData({
            videoList,
          });
        }
      });
  },

  onTapNavItem: function (event: WechatMiniprogram.TouchEvent) {
    const activeItemId = event.currentTarget.dataset.itemId;
    this.setData({
      activeGroupId: activeItemId,
      videoList: [],
    });
    wx.showLoading({
      title: 'loading...',
      mask: true,
    });
    this.loadVideoList(activeItemId).then(() => wx.hideLoading());
  },

  onReady: function () {},
  onShow: function () {
    this.loadNavList().then((activeGroupId) => this.loadVideoList(activeGroupId));
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

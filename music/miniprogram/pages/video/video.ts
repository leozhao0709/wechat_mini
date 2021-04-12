import httpUtils from '../../utils/httpUtils';
//Page Object
Page({
  data: {
    groupList: [] as VideoPage.NavList,
    activeGroupId: 0,
    videoList: [] as VideoPage.VideoList,
    playingVideoId: '',
    videosUpdate: [] as { vid: string; currentTime: number }[],
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

  onVideoPlay: function (event: WechatMiniprogram.VideoPlay) {
    const vid = event.currentTarget.id;

    const videoContext = wx.createVideoContext(vid);

    const alreadyPlayingVideo = this.data.videosUpdate.find((video) => video.vid === vid);
    if (alreadyPlayingVideo) {
      videoContext.seek(alreadyPlayingVideo.currentTime);
    }

    videoContext.play();
    this.setData({
      playingVideoId: vid,
    });
  },

  onVideoTimeUpdate: function (event: WechatMiniprogram.VideoTimeUpdate) {
    const currentTime = event.detail.currentTime;
    const vid = event.currentTarget.id;
    const videoToUpdate = this.data.videosUpdate.find((video) => video.vid === vid);

    if (videoToUpdate) {
      this.setData({
        videosUpdate: this.data.videosUpdate.map((video) => {
          if (video.vid === videoToUpdate.vid) {
            return { ...video, currentTime };
          }
          return video;
        }),
      });
    } else {
      this.setData({
        videosUpdate: [...this.data.videosUpdate, { vid, currentTime }],
      });
    }
  },

  onVideoEnded: function (event: WechatMiniprogram.VideoEnded) {
    const vid = event.currentTarget.id;
    const videosUpdate = this.data.videosUpdate.filter((video) => video.vid !== vid);
    this.setData({
      videosUpdate,
    });
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

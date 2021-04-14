"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var httpUtils_1 = require("../../utils/httpUtils");
Page({
    data: {
        groupList: [],
        activeGroupId: 0,
        videoList: [],
        playingVideoId: '',
        videosUpdate: [],
        isRefresh: false,
    },
    onLoad: function (options) { },
    loadNavList: function () {
        var _this = this;
        return httpUtils_1.default
            .get('/video/group/list')
            .then(function (res) { return res.data; })
            .then(function (res) {
            var activeItemId = res.data[0].id;
            _this.setData({
                groupList: res.data.slice(0, 14),
                activeGroupId: activeItemId,
            });
            return activeItemId;
        });
    },
    loadVideoList: function (groupId) {
        var _this = this;
        return httpUtils_1.default
            .get('/video/group', { id: groupId })
            .then(function (res) { return res.data; })
            .then(function (res) {
            if (res.code === 301) {
                wx.navigateTo({ url: '/pages/login/login' });
            }
            if (res.code === 200) {
                var videoList = res.datas.map(function (data) { return data.data; });
                _this.setData({
                    videoList: videoList,
                });
            }
        });
    },
    onTapNavItem: function (event) {
        var activeItemId = event.currentTarget.dataset.itemId;
        this.setData({
            activeGroupId: activeItemId,
            videoList: [],
        });
        wx.showLoading({
            title: 'loading...',
            mask: true,
        });
        this.loadVideoList(activeItemId).then(function () { return wx.hideLoading(); });
    },
    onVideoPlay: function (event) {
        var vid = event.currentTarget.id;
        var videoContext = wx.createVideoContext(vid);
        var alreadyPlayingVideo = this.data.videosUpdate.find(function (video) { return video.vid === vid; });
        if (alreadyPlayingVideo) {
            videoContext.seek(alreadyPlayingVideo.currentTime);
        }
        videoContext.play();
        this.setData({
            playingVideoId: vid,
        });
    },
    onVideoTimeUpdate: function (event) {
        var currentTime = event.detail.currentTime;
        var vid = event.currentTarget.id;
        var videoToUpdate = this.data.videosUpdate.find(function (video) { return video.vid === vid; });
        if (videoToUpdate) {
            this.setData({
                videosUpdate: this.data.videosUpdate.map(function (video) {
                    if (video.vid === videoToUpdate.vid) {
                        return __assign(__assign({}, video), { currentTime: currentTime });
                    }
                    return video;
                }),
            });
        }
        else {
            this.setData({
                videosUpdate: __spreadArrays(this.data.videosUpdate, [{ vid: vid, currentTime: currentTime }]),
            });
        }
    },
    onVideoEnded: function (event) {
        var vid = event.currentTarget.id;
        var videosUpdate = this.data.videosUpdate.filter(function (video) { return video.vid !== vid; });
        this.setData({
            videosUpdate: videosUpdate,
        });
    },
    onScrollViewRefresh: function (event) {
        var _this = this;
        this.setData({
            isRefresh: true,
        });
        this.loadVideoList(this.data.activeGroupId).then(function () {
            return _this.setData({
                isRefresh: false,
            });
        });
    },
    onScrollToLower: function (event) {
        console.log('...scroll To Lower...');
    },
    onReady: function () { },
    onShow: function () {
        var _this = this;
        this.loadNavList().then(function (activeGroupId) { return _this.loadVideoList(activeGroupId); });
    },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () {
        console.log('...pull down refresh...');
    },
    onReachBottom: function () { },
    onShareAppMessage: function (options) {
        var from = options.from;
        if (from === 'menu') {
            console.log('handle share logic when user using top menu to share...');
            return {
                title: 'share from menu',
                page: '/pages/video/video',
                imageUrl: '/static/images/nvsheng.jpg',
            };
        }
        if (from === 'button') {
            console.log('handle share logic when user clicking your share button...');
            return {
                title: 'share from button',
                page: '/pages/video/video',
                imageUrl: '/static/images/nvsheng.jpg',
            };
        }
        return {};
    },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBdUI7UUFDbEMsYUFBYSxFQUFFLENBQUM7UUFDaEIsU0FBUyxFQUFFLEVBQXlCO1FBQ3BDLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFlBQVksRUFBRSxFQUE0QztRQUMxRCxTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQU8sSUFBRyxDQUFDO0lBRTdCLFdBQVcsRUFBWDtRQUFBLGlCQVlDO1FBWEMsT0FBTyxtQkFBUzthQUNiLEdBQUcsQ0FBOEIsbUJBQW1CLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBUixDQUFRLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNSLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hDLGFBQWEsRUFBRSxZQUFZO2FBQzVCLENBQUMsQ0FBQztZQUNILE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWEsRUFBYixVQUFjLE9BQWU7UUFBN0IsaUJBZ0JDO1FBZkMsT0FBTyxtQkFBUzthQUNiLEdBQUcsQ0FBMkQsY0FBYyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzlGLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIs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QUFFLGNBQWEsQ0FBQztJQUN4QixpQkFBaUIsRUFBRTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGFBQWEsRUFBRSxjQUFhLENBQUM7SUFDN0IsaUJBQWlCLEVBQUUsVUFBVSxPQUFzRDtRQUN6RSxJQUFBLElBQUksR0FBSyxPQUFPLEtBQVosQ0FBYTtRQUN6QixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1lBR3ZFLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsUUFBUSxFQUFFLDRCQUE0QjthQUN2QyxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1lBRzFFLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsUUFBUSxFQUFFLDRCQUE0QjthQUN2QyxDQUFDO1NBQ0g7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxZQUFZLEVBQUUsY0FBYSxDQUFDO0lBRTVCLFlBQVksRUFBRSxVQUFVLElBQUksSUFBRyxDQUFDO0NBQ2pDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cFV0aWxzJztcbi8vUGFnZSBPYmplY3RcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZ3JvdXBMaXN0OiBbXSBhcyBWaWRlb1BhZ2UuTmF2TGlzdCxcbiAgICBhY3RpdmVHcm91cElkOiAwLFxuICAgIHZpZGVvTGlzdDogW10gYXMgVmlkZW9QYWdlLlZpZGVvTGlzdCxcbiAgICBwbGF5aW5nVmlkZW9JZDogJycsXG4gICAgdmlkZW9zVXBkYXRlOiBbXSBhcyB7IHZpZDogc3RyaW5nOyBjdXJyZW50VGltZTogbnVtYmVyIH1bXSxcbiAgICBpc1JlZnJlc2g6IGZhbHNlLFxuICB9LFxuICAvL29wdGlvbnMoT2JqZWN0KVxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7fSxcblxuICBsb2FkTmF2TGlzdCgpIHtcbiAgICByZXR1cm4gaHR0cFV0aWxzXG4gICAgICAuZ2V0PHsgZGF0YTogVmlkZW9QYWdlLk5hdkxpc3QgfT4oJy92aWRlby9ncm91cC9saXN0JylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVJdGVtSWQgPSByZXMuZGF0YVswXS5pZDtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBncm91cExpc3Q6IHJlcy5kYXRhLnNsaWNlKDAsIDE0KSxcbiAgICAgICAgICBhY3RpdmVHcm91cElkOiBhY3RpdmVJdGVtSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWN0aXZlSXRlbUlkO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgbG9hZFZpZGVvTGlzdChncm91cElkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gaHR0cFV0aWxzXG4gICAgICAuZ2V0PHsgY29kZTogbnVtYmVyOyBkYXRhczogeyBkYXRhOiBWaWRlb1BhZ2UuVmlkZW9JdGVtIH1bXSB9PignL3ZpZGVvL2dyb3VwJywgeyBpZDogZ3JvdXBJZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gMzAxKSB7XG4gICAgICAgICAgLy8gbmVlZCBsb2dpblxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3QgdmlkZW9MaXN0ID0gcmVzLmRhdGFzLm1hcCgoZGF0YSkgPT4gZGF0YS5kYXRhKTtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdmlkZW9MaXN0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcblxuICBvblRhcE5hdkl0ZW06IGZ1bmN0aW9uIChldmVudDogV2VjaGF0TWluaXByb2dyYW0uVG91Y2hFdmVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW1JZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtSWQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFjdGl2ZUdyb3VwSWQ6IGFjdGl2ZUl0ZW1JZCxcbiAgICAgIHZpZGVvTGlzdDogW10sXG4gICAgfSk7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICdsb2FkaW5nLi4uJyxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5sb2FkVmlkZW9MaXN0KGFjdGl2ZUl0ZW1JZCkudGhlbigoKSA9PiB3eC5oaWRlTG9hZGluZygpKTtcbiAgfSxcblxuICBvblZpZGVvUGxheTogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5WaWRlb1BsYXkpIHtcbiAgICBjb25zdCB2aWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuXG4gICAgY29uc3QgdmlkZW9Db250ZXh0ID0gd3guY3JlYXRlVmlkZW9Db250ZXh0KHZpZCk7XG5cbiAgICBjb25zdCBhbHJlYWR5UGxheWluZ1ZpZGVvID0gdGhpcy5kYXRhLnZpZGVvc1VwZGF0ZS5maW5kKCh2aWRlbykgPT4gdmlkZW8udmlkID09PSB2aWQpO1xuICAgIGlmIChhbHJlYWR5UGxheWluZ1ZpZGVvKSB7XG4gICAgICB2aWRlb0NvbnRleHQuc2VlayhhbHJlYWR5UGxheWluZ1ZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICB2aWRlb0NvbnRleHQucGxheSgpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBwbGF5aW5nVmlkZW9JZDogdmlkLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uVmlkZW9UaW1lVXBkYXRlOiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlZpZGVvVGltZVVwZGF0ZSkge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZXZlbnQuZGV0YWlsLmN1cnJlbnRUaW1lO1xuICAgIGNvbnN0IHZpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgY29uc3QgdmlkZW9Ub1VwZGF0ZSA9IHRoaXMuZGF0YS52aWRlb3NVcGRhdGUuZmluZCgodmlkZW8pID0+IHZpZGVvLnZpZCA9PT0gdmlkKTtcblxuICAgIGlmICh2aWRlb1RvVXBkYXRlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB2aWRlb3NVcGRhdGU6IHRoaXMuZGF0YS52aWRlb3NVcGRhdGUubWFwKCh2aWRlbykgPT4ge1xuICAgICAgICAgIGlmICh2aWRlby52aWQgPT09IHZpZGVvVG9VcGRhdGUudmlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi52aWRlbywgY3VycmVudFRpbWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZpZGVvO1xuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB2aWRlb3NVcGRhdGU6IFsuLi50aGlzLmRhdGEudmlkZW9zVXBkYXRlLCB7IHZpZCwgY3VycmVudFRpbWUgfV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25WaWRlb0VuZGVkOiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlZpZGVvRW5kZWQpIHtcbiAgICBjb25zdCB2aWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIGNvbnN0IHZpZGVvc1VwZGF0ZSA9IHRoaXMuZGF0YS52aWRlb3NVcGRhdGUuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8udmlkICE9PSB2aWQpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB2aWRlb3NVcGRhdGUsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25TY3JvbGxWaWV3UmVmcmVzaDogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5TY3JvbGxWaWV3UmVmcmVzaGVyUmVmcmVzaCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpc1JlZnJlc2g6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5sb2FkVmlkZW9MaXN0KHRoaXMuZGF0YS5hY3RpdmVHcm91cElkKS50aGVuKCgpID0+XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1JlZnJlc2g6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuICB9LFxuXG4gIG9uU2Nyb2xsVG9Mb3dlcjogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5TY3JvbGxWaWV3U2Nyb2xsVG9Mb3dlcikge1xuICAgIGNvbnNvbGUubG9nKCcuLi5zY3JvbGwgVG8gTG93ZXIuLi4nKTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkTmF2TGlzdCgpLnRoZW4oKGFjdGl2ZUdyb3VwSWQpID0+IHRoaXMubG9hZFZpZGVvTGlzdChhY3RpdmVHcm91cElkKSk7XG4gIH0sXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnLi4ucHVsbCBkb3duIHJlZnJlc2guLi4nKTtcbiAgfSxcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAob3B0aW9uczogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JU2hhcmVBcHBNZXNzYWdlT3B0aW9uKSB7XG4gICAgY29uc3QgeyBmcm9tIH0gPSBvcHRpb25zO1xuICAgIGlmIChmcm9tID09PSAnbWVudScpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgc2hhcmUgbG9naWMgd2hlbiB1c2VyIHVzaW5nIHRvcCBtZW51IHRvIHNoYXJlLi4uJyk7XG5cbiAgICAgIC8vIGN1c3RvbWl6ZSBzaGFyZWQgY29udGVudCggb3B0aW9uYWwpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ3NoYXJlIGZyb20gbWVudScsXG4gICAgICAgIHBhZ2U6ICcvcGFnZXMvdmlkZW8vdmlkZW8nLFxuICAgICAgICBpbWFnZVVybDogJy9zdGF0aWMvaW1hZ2VzL252c2hlbmcuanBnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlIHNoYXJlIGxvZ2ljIHdoZW4gdXNlciBjbGlja2luZyB5b3VyIHNoYXJlIGJ1dHRvbi4uLicpO1xuXG4gICAgICAvLyBjdXN0b21pemUgc2hhcmVkIGNvbnRlbnQoIG9wdGlvbmFsKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdzaGFyZSBmcm9tIGJ1dHRvbicsXG4gICAgICAgIHBhZ2U6ICcvcGFnZXMvdmlkZW8vdmlkZW8nLFxuICAgICAgICBpbWFnZVVybDogJy9zdGF0aWMvaW1hZ2VzL252c2hlbmcuanBnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uICgpIHt9LFxuICAvL2l0ZW0oaW5kZXgscGFnZVBhdGgsdGV4dClcbiAgb25UYWJJdGVtVGFwOiBmdW5jdGlvbiAoaXRlbSkge30sXG59KTtcbiJdfQ==
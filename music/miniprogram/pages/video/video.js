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
    onReady: function () { },
    onShow: function () {
        var _this = this;
        this.loadNavList().then(function (activeGroupId) { return _this.loadVideoList(activeGroupId); });
    },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBdUI7UUFDbEMsYUFBYSxFQUFFLENBQUM7UUFDaEIsU0FBUyxFQUFFLEVBQXlCO1FBQ3BDLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFlBQVksRUFBRSxFQUE0QztLQUMzRDtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQU8sSUFBRyxDQUFDO0lBRTdCLFdBQVcsRUFBWDtRQUFBLGlCQVlDO1FBWEMsT0FBTyxtQkFBUzthQUNiLEdBQUcsQ0FBOEIsbUJBQW1CLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBUixDQUFRLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNSLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hDLGFBQWEsRUFBRSxZQUFZO2FBQzVCLENBQUMsQ0FBQztZQUNILE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWEsRUFBYixVQUFjLE9BQWU7UUFBN0IsaUJBZ0JDO1FBZkMsT0FBTyxtQkFBUzthQUNiLEdBQUcsQ0FBMkQsY0FBYyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzlGLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIsQ0FBUSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUVwQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3BCLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBVCxDQUFTLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLFdBQUE7aUJBQ1YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxZQUFZLEVBQUUsVUFBVSxLQUFtQztRQUN6RCxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBRSxZQUFZO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXLEVBQUUsVUFBVSxLQUFrQztRQUN2RCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUVuQyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEQsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ3RGLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRDtRQUVELFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsY0FBYyxFQUFFLEdBQUc7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixFQUFFLFVBQVUsS0FBd0M7UUFDbkUsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUVoRixJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO29CQUM3QyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLEdBQUcsRUFBRTt3QkFDbkMsNkJBQVksS0FBSyxLQUFFLFdBQVcsYUFBQSxJQUFHO3FCQUNsQztvQkFDRCxPQUFPLEtBQUssQ0FBQztnQkFDZixDQUFDLENBQUM7YUFDSCxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxZQUFZLGlCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsRUFBQzthQUNoRSxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxZQUFZLEVBQUUsVUFBVSxLQUFtQztRQUN6RCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLGNBQUE7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUN2QixNQUFNLEVBQUU7UUFBQSxpQkFFUDtRQURDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFhLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNELE1BQU0sRUFBRSxjQUFhLENBQUM7SUFDdEIsUUFBUSxFQUFFLGNBQWEsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFDakMsYUFBYSxFQUFFLGNBQWEsQ0FBQztJQUM3QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFDakMsWUFBWSxFQUFFLGNBQWEsQ0FBQztJQUU1QixZQUFZLEVBQUUsVUFBVSxJQUFJLElBQUcsQ0FBQztDQUNqQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL2h0dHBVdGlscyc7XG4vL1BhZ2UgT2JqZWN0XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGdyb3VwTGlzdDogW10gYXMgVmlkZW9QYWdlLk5hdkxpc3QsXG4gICAgYWN0aXZlR3JvdXBJZDogMCxcbiAgICB2aWRlb0xpc3Q6IFtdIGFzIFZpZGVvUGFnZS5WaWRlb0xpc3QsXG4gICAgcGxheWluZ1ZpZGVvSWQ6ICcnLFxuICAgIHZpZGVvc1VwZGF0ZTogW10gYXMgeyB2aWQ6IHN0cmluZzsgY3VycmVudFRpbWU6IG51bWJlciB9W10sXG4gIH0sXG4gIC8vb3B0aW9ucyhPYmplY3QpXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHt9LFxuXG4gIGxvYWROYXZMaXN0KCkge1xuICAgIHJldHVybiBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyBkYXRhOiBWaWRlb1BhZ2UuTmF2TGlzdCB9PignL3ZpZGVvL2dyb3VwL2xpc3QnKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JZCA9IHJlcy5kYXRhWzBdLmlkO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGdyb3VwTGlzdDogcmVzLmRhdGEuc2xpY2UoMCwgMTQpLFxuICAgICAgICAgIGFjdGl2ZUdyb3VwSWQ6IGFjdGl2ZUl0ZW1JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY3RpdmVJdGVtSWQ7XG4gICAgICB9KTtcbiAgfSxcblxuICBsb2FkVmlkZW9MaXN0KGdyb3VwSWQ6IG51bWJlcikge1xuICAgIHJldHVybiBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyBjb2RlOiBudW1iZXI7IGRhdGFzOiB7IGRhdGE6IFZpZGVvUGFnZS5WaWRlb0l0ZW0gfVtdIH0+KCcvdmlkZW8vZ3JvdXAnLCB7IGlkOiBncm91cElkIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5jb2RlID09PSAzMDEpIHtcbiAgICAgICAgICAvLyBuZWVkIGxvZ2luXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcy5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCB2aWRlb0xpc3QgPSByZXMuZGF0YXMubWFwKChkYXRhKSA9PiBkYXRhLmRhdGEpO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB2aWRlb0xpc3QsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuXG4gIG9uVGFwTmF2SXRlbTogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5Ub3VjaEV2ZW50KSB7XG4gICAgY29uc3QgYWN0aXZlSXRlbUlkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW1JZDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWN0aXZlR3JvdXBJZDogYWN0aXZlSXRlbUlkLFxuICAgICAgdmlkZW9MaXN0OiBbXSxcbiAgICB9KTtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcuLi4nLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRWaWRlb0xpc3QoYWN0aXZlSXRlbUlkKS50aGVuKCgpID0+IHd4LmhpZGVMb2FkaW5nKCkpO1xuICB9LFxuXG4gIG9uVmlkZW9QbGF5OiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLlZpZGVvUGxheSkge1xuICAgIGNvbnN0IHZpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG5cbiAgICBjb25zdCB2aWRlb0NvbnRleHQgPSB3eC5jcmVhdGVWaWRlb0NvbnRleHQodmlkKTtcblxuICAgIGNvbnN0IGFscmVhZHlQbGF5aW5nVmlkZW8gPSB0aGlzLmRhdGEudmlkZW9zVXBkYXRlLmZpbmQoKHZpZGVvKSA9PiB2aWRlby52aWQgPT09IHZpZCk7XG4gICAgaWYgKGFscmVhZHlQbGF5aW5nVmlkZW8pIHtcbiAgICAgIHZpZGVvQ29udGV4dC5zZWVrKGFscmVhZHlQbGF5aW5nVmlkZW8uY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHZpZGVvQ29udGV4dC5wbGF5KCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHBsYXlpbmdWaWRlb0lkOiB2aWQsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25WaWRlb1RpbWVVcGRhdGU6IGZ1bmN0aW9uIChldmVudDogV2VjaGF0TWluaXByb2dyYW0uVmlkZW9UaW1lVXBkYXRlKSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBldmVudC5kZXRhaWwuY3VycmVudFRpbWU7XG4gICAgY29uc3QgdmlkID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICBjb25zdCB2aWRlb1RvVXBkYXRlID0gdGhpcy5kYXRhLnZpZGVvc1VwZGF0ZS5maW5kKCh2aWRlbykgPT4gdmlkZW8udmlkID09PSB2aWQpO1xuXG4gICAgaWYgKHZpZGVvVG9VcGRhdGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHZpZGVvc1VwZGF0ZTogdGhpcy5kYXRhLnZpZGVvc1VwZGF0ZS5tYXAoKHZpZGVvKSA9PiB7XG4gICAgICAgICAgaWYgKHZpZGVvLnZpZCA9PT0gdmlkZW9Ub1VwZGF0ZS52aWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnZpZGVvLCBjdXJyZW50VGltZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmlkZW87XG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHZpZGVvc1VwZGF0ZTogWy4uLnRoaXMuZGF0YS52aWRlb3NVcGRhdGUsIHsgdmlkLCBjdXJyZW50VGltZSB9XSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBvblZpZGVvRW5kZWQ6IGZ1bmN0aW9uIChldmVudDogV2VjaGF0TWluaXByb2dyYW0uVmlkZW9FbmRlZCkge1xuICAgIGNvbnN0IHZpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgY29uc3QgdmlkZW9zVXBkYXRlID0gdGhpcy5kYXRhLnZpZGVvc1VwZGF0ZS5maWx0ZXIoKHZpZGVvKSA9PiB2aWRlby52aWQgIT09IHZpZCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHZpZGVvc1VwZGF0ZSxcbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkTmF2TGlzdCgpLnRoZW4oKGFjdGl2ZUdyb3VwSWQpID0+IHRoaXMubG9hZFZpZGVvTGlzdChhY3RpdmVHcm91cElkKSk7XG4gIH0sXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHt9LFxuICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uICgpIHt9LFxuICAvL2l0ZW0oaW5kZXgscGFnZVBhdGgsdGV4dClcbiAgb25UYWJJdGVtVGFwOiBmdW5jdGlvbiAoaXRlbSkge30sXG59KTtcbiJdfQ==
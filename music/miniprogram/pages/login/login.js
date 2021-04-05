"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpUtils_1 = require("../../utils/httpUtils");
Page({
    data: {
        phone: '',
        password: '',
    },
    onLoad: function (options) { },
    onReady: function () { },
    handleInputChange: function (event) {
        var _a;
        var type = event.currentTarget.dataset.type;
        this.setData((_a = {},
            _a[type] = event.detail.value,
            _a));
    },
    handleLogin: function () {
        var _a = this.data, phone = _a.phone, password = _a.password;
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
        httpUtils_1.default
            .get('/login/cellphone', { phone: phone, password: password })
            .then(function (res) { return res.data; })
            .then(function (res) {
            if (res.code === 200) {
                wx.showToast({
                    title: 'success!',
                });
            }
            else if (res.code === 400) {
                wx.showToast({
                    title: 'phone invalid',
                    icon: 'error',
                });
            }
            else if (res.code === 502) {
                wx.showToast({
                    title: 'password invalid',
                    icon: 'none',
                });
            }
            else {
                wx.showToast({
                    title: 'login failed, please try again',
                    icon: 'none',
                });
            }
        });
    },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1EQUE4QztBQUc5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFPLElBQUcsQ0FBQztJQUM3QixPQUFPLEVBQUUsY0FBYSxDQUFDO0lBRXZCLGlCQUFpQixFQUFFLFVBQVUsS0FBOEI7O1FBQ2pELElBQUEsSUFBSSxHQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFoQyxDQUFpQztRQUM3QyxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsSUFBSSxJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLEVBQUU7UUFDTCxJQUFBLEtBQXNCLElBQUksQ0FBQyxJQUFJLEVBQTdCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBYyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsbUNBQW1DO2dCQUMxQyxJQUFJLEVBQUUsTUFBTTthQUNiLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxPQUFPO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBRUQsbUJBQVM7YUFDTixHQUFHLENBQW1CLGtCQUFrQixFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsVUFBVTtpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsZUFBZTtvQkFDdEIsSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixJQUFJLEVBQUUsTUFBTTtpQkFDYixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxnQ0FBZ0M7b0JBQ3ZDLElBQUksRUFBRSxNQUFNO2lCQUNiLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUN0QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxjQUFhLENBQUM7SUFDeEIsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBQ2pDLGFBQWEsRUFBRSxjQUFhLENBQUM7SUFDN0IsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBQ2pDLFlBQVksRUFBRSxjQUFhLENBQUM7SUFFNUIsWUFBWSxFQUFFLFVBQVUsSUFBSSxJQUFHLENBQUM7Q0FDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9jayBhY2NvdW50IHBob25lPTE1NzExMTQwNTkzJnBhc3N3b3JkPTEyMzQ1Nnl6eVxuXG5pbXBvcnQgaHR0cFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL2h0dHBVdGlscyc7XG5cbi8vUGFnZSBPYmplY3RcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcGhvbmU6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSxcbiAgLy9vcHRpb25zKE9iamVjdClcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge30sXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IFdlY2hhdE1pbmlwcm9ncmFtLklucHV0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFt0eXBlXTogZXZlbnQuZGV0YWlsLnZhbHVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUxvZ2luOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBwaG9uZSwgcGFzc3dvcmQgfSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghcGhvbmUgfHwgIXBhc3N3b3JkKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ3Bob25lIG9yIHBhc3N3b3JkIGNhbm5vdCBiZSBibGFuaycsXG4gICAgICAgIGljb246ICdub25lJyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcGhvbmUubWF0Y2goL14xWzMtOV1cXGR7OX0kLykpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAncGhvbmUgaW52YWxpZCcsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyBjb2RlOiBudW1iZXIgfT4oJy9sb2dpbi9jZWxscGhvbmUnLCB7IHBob25lLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnc3VjY2VzcyEnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcy5jb2RlID09PSA0MDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdwaG9uZSBpbnZhbGlkJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmNvZGUgPT09IDUwMikge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ3Bhc3N3b3JkIGludmFsaWQnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ2xvZ2luIGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpbicsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25QYWdlU2Nyb2xsOiBmdW5jdGlvbiAoKSB7fSxcbiAgLy9pdGVtKGluZGV4LHBhZ2VQYXRoLHRleHQpXG4gIG9uVGFiSXRlbVRhcDogZnVuY3Rpb24gKGl0ZW0pIHt9LFxufSk7XG4iXX0=
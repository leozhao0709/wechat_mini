"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../config/config");
var httpUtils_1 = require("../../utils/httpUtils");
Page({
    data: {
        phone: '15711140593',
        password: '123456yzy',
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
                wx.setStorage({
                    key: config_1.default.storageKey.userProfile,
                    data: res.profile,
                    success: function () {
                        wx.navigateBack();
                    },
                    fail: function () { },
                    complete: function () { },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDhDQUF5QztBQUN6QyxtREFBOEM7QUFHOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLFdBQVc7S0FDdEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFPLElBQUcsQ0FBQztJQUM3QixPQUFPLEVBQUUsY0FBYSxDQUFDO0lBRXZCLGlCQUFpQixFQUFFLFVBQVUsS0FBOEI7O1FBQ2pELElBQUEsSUFBSSxHQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFoQyxDQUFpQztRQUM3QyxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsSUFBSSxJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLEVBQUU7UUFDTCxJQUFBLEtBQXNCLElBQUksQ0FBQyxJQUFJLEVBQTdCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBYyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsbUNBQW1DO2dCQUMxQyxJQUFJLEVBQUUsTUFBTTthQUNiLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxPQUFPO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBRUQsbUJBQVM7YUFDTixHQUFHLENBQXlDLGtCQUFrQixFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzthQUNwRixJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsVUFBVTtpQkFDbEIsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLGdCQUFNLENBQUMsVUFBVSxDQUFDLFdBQVc7b0JBQ2xDLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDakIsT0FBTyxFQUFFO3dCQUNQLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxJQUFJLEVBQUUsY0FBTyxDQUFDO29CQUNkLFFBQVEsRUFBRSxjQUFPLENBQUM7aUJBQ25CLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxPQUFPO2lCQUNkLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsZ0NBQWdDO29CQUN2QyxJQUFJLEVBQUUsTUFBTTtpQkFDYixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE1BQU0sRUFBRSxjQUFhLENBQUM7SUFDdEIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUN0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBQ3hCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUNqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBQzdCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUNqQyxZQUFZLEVBQUUsY0FBYSxDQUFDO0lBRTVCLFlBQVksRUFBRSxVQUFVLElBQUksSUFBRyxDQUFDO0NBQ2pDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vY2sgYWNjb3VudCBwaG9uZT0xNTcxMTE0MDU5MyZwYXNzd29yZD0xMjM0NTZ5enlcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBodHRwVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cFV0aWxzJztcblxuLy9QYWdlIE9iamVjdFxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBwaG9uZTogJzE1NzExMTQwNTkzJyxcbiAgICBwYXNzd29yZDogJzEyMzQ1Nnl6eScsXG4gIH0sXG4gIC8vb3B0aW9ucyhPYmplY3QpXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHt9LFxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcblxuICBoYW5kbGVJbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBXZWNoYXRNaW5pcHJvZ3JhbS5JbnB1dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbdHlwZV06IGV2ZW50LmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVMb2dpbjogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgcGhvbmUsIHBhc3N3b3JkIH0gPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoIXBob25lIHx8ICFwYXNzd29yZCkge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdwaG9uZSBvciBwYXNzd29yZCBjYW5ub3QgYmUgYmxhbmsnLFxuICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXBob25lLm1hdGNoKC9eMVszLTldXFxkezl9JC8pKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ3Bob25lIGludmFsaWQnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaHR0cFV0aWxzXG4gICAgICAuZ2V0PHsgY29kZTogbnVtYmVyOyBwcm9maWxlOiBVc2VyUHJvZmlsZSB9PignL2xvZ2luL2NlbGxwaG9uZScsIHsgcGhvbmUsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdzdWNjZXNzIScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IGNvbmZpZy5zdG9yYWdlS2V5LnVzZXJQcm9maWxlLFxuICAgICAgICAgICAgZGF0YTogcmVzLnByb2ZpbGUsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcy5jb2RlID09PSA0MDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdwaG9uZSBpbnZhbGlkJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmNvZGUgPT09IDUwMikge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ3Bhc3N3b3JkIGludmFsaWQnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ2xvZ2luIGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpbicsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7fSxcbiAgb25QYWdlU2Nyb2xsOiBmdW5jdGlvbiAoKSB7fSxcbiAgLy9pdGVtKGluZGV4LHBhZ2VQYXRoLHRleHQpXG4gIG9uVGFiSXRlbVRhcDogZnVuY3Rpb24gKGl0ZW0pIHt9LFxufSk7XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config/config");
var httpUtils = {
    request: function (url, method, data) {
        if (method === void 0) { method = 'GET'; }
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            wx.request({
                url: config_1.default.host + url,
                data: data,
                method: method,
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    reject(err);
                },
            });
        });
    },
    get: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'GET', data);
    },
    post: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'POST', data);
    },
    put: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'PUT', data);
    },
    delete: function (url, data) {
        if (data === void 0) { data = {}; }
        return httpUtils.request(url, 'DELETE', data);
    },
};
exports.default = httpUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLElBQU0sU0FBUyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxVQUNQLEdBQVcsRUFDWCxNQUE0RixFQUM1RixJQUFTO1FBRFQsdUJBQUEsRUFBQSxjQUE0RjtRQUM1RixxQkFBQSxFQUFBLFNBQVM7UUFFVCxPQUFPLElBQUksT0FBTyxDQUFvRCxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3BGLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLGdCQUFNLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBQ3RCLElBQUksTUFBQTtnQkFDSixNQUFNLFFBQUE7Z0JBQ04sT0FBTyxFQUFFLFVBQUMsR0FBc0Q7b0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQUc7b0JBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFHLEVBQUUsVUFBSSxHQUFXLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUM3QixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSSxFQUFFLFVBQUksR0FBVyxFQUFFLElBQVM7UUFBVCxxQkFBQSxFQUFBLFNBQVM7UUFDOUIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELEdBQUcsRUFBRSxVQUFJLEdBQVcsRUFBRSxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQzdCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxNQUFNLEVBQUUsVUFBSSxHQUFXLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUNoQyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5cbmNvbnN0IGh0dHBVdGlscyA9IHtcbiAgcmVxdWVzdDogPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ09QVElPTlMnIHwgJ0hFQUQnIHwgJ1RSQUNFJyB8ICdDT05ORUNUJyA9ICdHRVQnLFxuICAgIGRhdGEgPSB7fVxuICApID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8V2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdDxUPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogY29uZmlnLmhvc3QgKyB1cmwsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgc3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdDxUPikgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0OiA8VD4odXJsOiBzdHJpbmcsIGRhdGEgPSB7fSkgPT4ge1xuICAgIHJldHVybiBodHRwVXRpbHMucmVxdWVzdDxUPih1cmwsICdHRVQnLCBkYXRhKTtcbiAgfSxcblxuICBwb3N0OiA8VD4odXJsOiBzdHJpbmcsIGRhdGEgPSB7fSkgPT4ge1xuICAgIHJldHVybiBodHRwVXRpbHMucmVxdWVzdDxUPih1cmwsICdQT1NUJywgZGF0YSk7XG4gIH0sXG5cbiAgcHV0OiA8VD4odXJsOiBzdHJpbmcsIGRhdGEgPSB7fSkgPT4ge1xuICAgIHJldHVybiBodHRwVXRpbHMucmVxdWVzdDxUPih1cmwsICdQVVQnLCBkYXRhKTtcbiAgfSxcblxuICBkZWxldGU6IDxUPih1cmw6IHN0cmluZywgZGF0YSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGh0dHBVdGlscy5yZXF1ZXN0PFQ+KHVybCwgJ0RFTEVURScsIGRhdGEpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFV0aWxzO1xuIl19
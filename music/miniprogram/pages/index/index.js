"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        bannerList: [],
        recommendList: [],
        topList: [],
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var topListCount, i, res, topListData, playlist;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpUtils_1.default
                            .get('/banner', { type: 2 })
                            .then(function (res) {
                            return _this.setData({
                                bannerList: res.data.banners,
                            });
                        });
                        httpUtils_1.default
                            .get('/personalized', { limit: 10 })
                            .then(function (res) {
                            _this.setData({
                                recommendList: res.data.result,
                            });
                        });
                        topListCount = 5;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < topListCount)) return [3, 4];
                        return [4, httpUtils_1.default.get('/top/list', { idx: i })];
                    case 2:
                        res = _a.sent();
                        topListData = res.data;
                        playlist = {
                            name: topListData.playlist.name,
                            tracks: topListData.playlist.tracks.slice(0, 3),
                        };
                        this.setData({
                            topList: __spreadArrays(this.data.topList, [playlist]),
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQXdCO1FBQ3BDLGFBQWEsRUFBRSxFQUEyQjtRQUMxQyxPQUFPLEVBQUUsRUFBMEI7S0FDcEM7SUFFSyxNQUFNLEVBQVo7Ozs7Ozs7d0JBQ0UsbUJBQVM7NkJBQ04sR0FBRyxDQUFrQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7NkJBQzVELElBQUksQ0FBQyxVQUFDLEdBQUc7NEJBQ1IsT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNYLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQTZCOzZCQUNuRCxDQUFDO3dCQUZGLENBRUUsQ0FDSCxDQUFDO3dCQUVKLG1CQUFTOzZCQUNOLEdBQUcsQ0FBb0MsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDOzZCQUN0RSxJQUFJLENBQUMsVUFBQyxHQUFHOzRCQUNSLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTs2QkFDL0IsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUVDLFlBQVksR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsR0FBRyxZQUFZLENBQUE7d0JBQ2xCLFdBQU0sbUJBQVMsQ0FBQyxHQUFHLENBQXdCLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBekUsR0FBRyxHQUFHLFNBQW1FO3dCQUN6RSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDdkIsUUFBUSxHQUF1Qjs0QkFDbkMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSTs0QkFDL0IsTUFBTSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNoRCxDQUFDO3dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsT0FBTyxpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRSxRQUFRLEVBQUM7eUJBQzFDLENBQUMsQ0FBQzs7O3dCQVQ2QixDQUFDLEVBQUUsQ0FBQTs7Ozs7O0tBV3RDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IGh0dHBVdGlscyBmcm9tICcuLi8uLi91dGlscy9odHRwVXRpbHMnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGJhbm5lckxpc3Q6IFtdIGFzIEluZGV4UGFnZS5CYW5uZXJbXSxcbiAgICByZWNvbW1lbmRMaXN0OiBbXSBhcyBJbmRleFBhZ2UuUmVjb21tZW5kW10sXG4gICAgdG9wTGlzdDogW10gYXMgSW5kZXhQYWdlLlBsYXlsaXN0W10sXG4gIH0sXG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGh0dHBVdGlsc1xuICAgICAgLmdldDx7IGJhbm5lcnM6IEluZGV4UGFnZS5CYW5uZXJbXSB9PignL2Jhbm5lcicsIHsgdHlwZTogMiB9KVxuICAgICAgLnRoZW4oKHJlcykgPT5cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBiYW5uZXJMaXN0OiByZXMuZGF0YS5iYW5uZXJzIGFzIEluZGV4UGFnZS5CYW5uZXJbXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBodHRwVXRpbHNcbiAgICAgIC5nZXQ8eyByZXN1bHQ6IEluZGV4UGFnZS5SZWNvbW1lbmRbXSB9PignL3BlcnNvbmFsaXplZCcsIHsgbGltaXQ6IDEwIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgcmVjb21tZW5kTGlzdDogcmVzLmRhdGEucmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdG9wTGlzdENvdW50ID0gNTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcExpc3RDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwVXRpbHMuZ2V0PEluZGV4UGFnZS5Ub3BMaXN0RGF0YT4oJy90b3AvbGlzdCcsIHsgaWR4OiBpIH0pO1xuICAgICAgY29uc3QgdG9wTGlzdERhdGEgPSByZXMuZGF0YTtcbiAgICAgIGNvbnN0IHBsYXlsaXN0OiBJbmRleFBhZ2UuUGxheWxpc3QgPSB7XG4gICAgICAgIG5hbWU6IHRvcExpc3REYXRhLnBsYXlsaXN0Lm5hbWUsXG4gICAgICAgIHRyYWNrczogdG9wTGlzdERhdGEucGxheWxpc3QudHJhY2tzLnNsaWNlKDAsIDMpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHRvcExpc3Q6IFsuLi50aGlzLmRhdGEudG9wTGlzdCwgcGxheWxpc3RdLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=
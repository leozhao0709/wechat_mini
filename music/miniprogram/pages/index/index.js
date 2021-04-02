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
Object.defineProperty(exports, "__esModule", { value: true });
var httpUtils_1 = require("../../utils/httpUtils");
var app = getApp();
Page({
    data: {
        bannerList: [],
        recommendList: [],
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var bannerListRes, recommendListRes, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, httpUtils_1.default.get('/banner', { type: 2 })];
                    case 1:
                        bannerListRes = _a.sent();
                        this.setData({
                            bannerList: bannerListRes.data.banners,
                        });
                        return [4, httpUtils_1.default.get('/personalized', { limit: 10 })];
                    case 2:
                        recommendListRes = _a.sent();
                        this.setData({
                            recommendList: recommendListRes.data.result,
                        });
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG1EQUE4QztBQUc5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUVqQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBYztRQUMxQixhQUFhLEVBQUUsRUFBaUI7S0FDakM7SUFFSyxNQUFNLEVBQVo7Ozs7Ozs7d0JBRTBCLFdBQU0sbUJBQVMsQ0FBQyxHQUFHLENBQXdCLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEYsYUFBYSxHQUFHLFNBQWtFO3dCQUN4RixJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFVBQVUsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQW1CO3lCQUNuRCxDQUFDLENBQUM7d0JBRXNCLFdBQU0sbUJBQVMsQ0FBQyxHQUFHLENBQTBCLGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBL0YsZ0JBQWdCLEdBQUcsU0FBNEU7d0JBQ3JHLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsYUFBYSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNO3lCQUM1QyxDQUFDLENBQUM7Ozs7Ozs7OztLQUVOO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IGh0dHBVdGlscyBmcm9tICcuLi8uLi91dGlscy9odHRwVXRpbHMnO1xuXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGJhbm5lckxpc3Q6IFtdIGFzIEJhbm5lcltdLFxuICAgIHJlY29tbWVuZExpc3Q6IFtdIGFzIFJlY29tbWVuZFtdLFxuICB9LFxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFubmVyTGlzdFJlcyA9IGF3YWl0IGh0dHBVdGlscy5nZXQ8eyBiYW5uZXJzOiBCYW5uZXJbXSB9PignL2Jhbm5lcicsIHsgdHlwZTogMiB9KTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJhbm5lckxpc3Q6IGJhbm5lckxpc3RSZXMuZGF0YS5iYW5uZXJzIGFzIEJhbm5lcltdLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlY29tbWVuZExpc3RSZXMgPSBhd2FpdCBodHRwVXRpbHMuZ2V0PHsgcmVzdWx0OiBSZWNvbW1lbmRbXSB9PignL3BlcnNvbmFsaXplZCcsIHsgbGltaXQ6IDEwIH0pO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgcmVjb21tZW5kTGlzdDogcmVjb21tZW5kTGlzdFJlcy5kYXRhLnJlc3VsdCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9LFxufSk7XG4iXX0=
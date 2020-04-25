var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 游戏管理的基类
*/
var IGameService = (function () {
    function IGameService() {
    }
    //注册所有服务 此函数是一个接口
    IGameService.prototype.Init = function () {
    };
    //心跳
    IGameService.prototype.HeartBeat = function () {
    };
    IGameService.prototype.Stop = function () {
    };
    return IGameService;
}());
__reflect(IGameService.prototype, "IGameService");
//# sourceMappingURL=IGameService.js.map
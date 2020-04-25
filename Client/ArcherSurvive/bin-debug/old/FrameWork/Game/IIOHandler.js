var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 游戏管理的基类
*/
var IIOHandler = (function () {
    //构造函数
    function IIOHandler() {
    }
    //初始化
    IIOHandler.prototype.Init = function (part) {
    };
    //心跳
    IIOHandler.prototype.RegisterAllMessage = function () {
    };
    return IIOHandler;
}());
__reflect(IIOHandler.prototype, "IIOHandler");
//# sourceMappingURL=IIOHandler.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var IGamePart = (function () {
    //构造函数
    function IGamePart() {
    }
    //初始化
    IGamePart.prototype._OnInit = function () {
    };
    //心跳
    IGamePart.prototype._OnHeartBeat = function () {
    };
    //停止的时候处理
    IGamePart.prototype._OnStop = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    return IGamePart;
}());
__reflect(IGamePart.prototype, "IGamePart");
//# sourceMappingURL=IGamePart.js.map
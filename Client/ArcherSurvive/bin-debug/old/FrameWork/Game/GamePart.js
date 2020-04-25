var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*
* name;
*/
//定义类
var GamePart = (function (_super) {
    __extends(GamePart, _super);
    //构造函数
    function GamePart() {
        return _super.call(this) || this;
    }
    //初始化
    GamePart.prototype.Init = function () {
        this._OnInit();
    };
    //心跳
    GamePart.prototype.HeartBeat = function () {
        this._OnHeartBeat();
    };
    //停止的时候处理
    GamePart.prototype.Stop = function () {
        this._OnStop();
    };
    //清空
    GamePart.prototype.Clear = function () {
    };
    return GamePart;
}(IGamePart));
__reflect(GamePart.prototype, "GamePart");
//# sourceMappingURL=GamePart.js.map
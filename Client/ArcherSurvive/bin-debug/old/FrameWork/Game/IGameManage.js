var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 游戏管理的基类
*/
var IGameManage = (function () {
    function IGameManage() {
    }
    //注册所有服务
    //此函数是一个接口
    IGameManage.prototype._RegisterAllMessage = function () {
    };
    return IGameManage;
}());
__reflect(IGameManage.prototype, "IGameManage");
//# sourceMappingURL=IGameManage.js.map
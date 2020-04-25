var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 网络接收器
*/
var NetHandler = (function () {
    function NetHandler() {
        this._object = null;
        this._onConnectFunction = null;
        this._onDisConnectFunction = null;
        this._onReceiveFunction = null;
    }
    NetHandler.prototype.SetObject = function (value) {
        this._object = value;
    };
    NetHandler.prototype.GetObject = function () {
        return this._object;
    };
    NetHandler.prototype.SetConnectFunction = function (value) {
        this._onConnectFunction = value;
    };
    NetHandler.prototype.GetConnectFunction = function () {
        return this._onConnectFunction;
    };
    NetHandler.prototype.SetDisConnectFunction = function (value) {
        this._onDisConnectFunction = value;
    };
    NetHandler.prototype.GetDisConnectFunction = function () {
        return this._onDisConnectFunction;
    };
    NetHandler.prototype.SetReceiveFunction = function (value) {
        this._onReceiveFunction = value;
    };
    NetHandler.prototype.GetReceiveFunction = function () {
        return this._onReceiveFunction;
    };
    return NetHandler;
}());
__reflect(NetHandler.prototype, "NetHandler");
//# sourceMappingURL=NetHandler.js.map
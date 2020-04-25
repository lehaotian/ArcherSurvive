/*
* 游戏消息派发相关
*/
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
//消息派发 接口
var MessagePart = (function (_super) {
    __extends(MessagePart, _super);
    function MessagePart() {
        var _this = _super.call(this) || this;
        _this._allMessageHandlerMap = {};
        _this._allMessageMap = {};
        _this._allMessageObjectMap = {};
        _this._allNoticeMap = {};
        return _this;
    }
    //初始化
    MessagePart.prototype.Init = function () {
    };
    //心跳
    MessagePart.prototype._OnHeartBeat = function () {
    };
    //停止的时候处理
    MessagePart.prototype._OnStop = function () {
    };
    MessagePart.prototype.RegisterMessage = function (msgId, msgFun, msg, object) {
        this._allMessageHandlerMap[msgId] = msgFun;
        this._allMessageMap[msgId] = msg;
        this._allMessageObjectMap[msgId] = object;
    };
    //创建消息
    MessagePart.prototype.CreateMessage = function (msgId) {
        var msg = this._allMessageMap[msgId];
        if (msgId == null)
            return;
        return msg;
    };
    //查找消息回调
    MessagePart.prototype.FindMessageFun = function (msgId) {
        return this._allMessageHandlerMap[msgId];
    };
    //查找消息处理对象
    MessagePart.prototype.FindMessageObject = function (msgId) {
        return this._allMessageObjectMap[msgId];
    };
    //注册事件
    MessagePart.prototype.RegisterNotice = function (msgId, obj, fun) {
        if (msgId == null || obj == null || fun == null) {
            return;
        }
        var msgIdCallBack = this._allNoticeMap[msgId];
        if (msgIdCallBack == null) {
            msgIdCallBack = {};
            this._allNoticeMap[msgId] = msgIdCallBack;
        }
        this._allNoticeMap[msgId] = fun;
    };
    //派发通知
    MessagePart.prototype.DispatchNotice = function (msgId) {
        if (msgId == null) {
            return;
        }
        var msgIdCallBack = this._allNoticeMap[msgId];
        if (msgIdCallBack == null) {
            return null;
        }
    };
    //删除派发
    MessagePart.prototype.RemoveNotice = function (msgId, obj) {
        if (msgId == null) {
            return;
        }
        var msgIdCallBack = this._allNoticeMap[msgId];
        if (msgIdCallBack == null) {
            return null;
        }
        msgIdCallBack[obj] = null;
    };
    return MessagePart;
}(GamePart));
__reflect(MessagePart.prototype, "MessagePart");
//# sourceMappingURL=MessagePart.js.map
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
* 游戏消息服务类
*/
var FrameWork;
(function (FrameWork) {
    var MessageService = (function (_super) {
        __extends(MessageService, _super);
        function MessageService() {
            var _this = _super.call(this, new MessagePart(), new DefaultHandler()) || this;
            MessageService.Instance = _this;
            return _this;
        }
        //注册消息对象
        MessageService.prototype.RegisterMessage = function (msgId, msgFun, msg, object) {
            this._logic.RegisterMessage(msgId, msgFun, msg, object);
        };
        MessageService.prototype.CreatMessage = function (msgId) {
            return this._logic.CreateMessage(msgId);
        };
        //注册消息
        MessageService.prototype.ReceiveMessage = function (msg) {
            if (msg == null)
                return;
            var obj = this._logic.FindMessageObject(msg.GetMessageId());
            var fun = this._logic.FindMessageFun(msg.GetMessageId());
            if (fun == null || obj == null)
                return;
            fun.call(obj, msg);
            this.DispatchNotice(msg.GetMessageId());
        };
        //注册通知
        MessageService.prototype.RegisterNotice = function (msgId, obj, fun) {
            this._logic.RegisterNotice(msgId, obj, fun);
        };
        //派发通知
        MessageService.prototype.DispatchNotice = function (msgId) {
            this._logic.DispatchNotice(msgId);
        };
        //删除派发
        MessageService.prototype.RemoveNotice = function (msgId, obj) {
            this._logic.RemoveNotice(msgId.obj);
        };
        return MessageService;
    }(FrameWork.GameService));
    FrameWork.MessageService = MessageService;
    __reflect(MessageService.prototype, "FrameWork.MessageService");
})(FrameWork || (FrameWork = {}));
//# sourceMappingURL=MessageService.js.map
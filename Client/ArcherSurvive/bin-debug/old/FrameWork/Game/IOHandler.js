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
var FrameWork;
(function (FrameWork) {
    //定义类
    var IOHandler = (function (_super) {
        __extends(IOHandler, _super);
        //构造函数
        function IOHandler() {
            var _this = _super.call(this) || this;
            _this._logicManage = null;
            return _this;
        }
        //初始化   
        IOHandler.prototype.Init = function (part) {
            this._logicManage = part;
        };
        //注册消息
        IOHandler.prototype.RegisterMessage = function (msgId, msgFun, msg) {
            FrameWork.MessageService.Instance.RegisterMessage(msgId, msgFun, msg, this);
        };
        return IOHandler;
    }(IIOHandler));
    FrameWork.IOHandler = IOHandler;
    __reflect(IOHandler.prototype, "FrameWork.IOHandler");
})(FrameWork || (FrameWork = {}));
//# sourceMappingURL=IOHandler.js.map
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
* 游戏管理的基类
*/
var FrameWork;
(function (FrameWork) {
    var GameService = (function (_super) {
        __extends(GameService, _super);
        //构造函数
        function GameService(part, handler) {
            var _this = _super.call(this) || this;
            //网络管理类
            _this._logic = null;
            //接收消息的容器
            _this._handler = null;
            _this._service = null;
            _this._logic = part;
            _this._handler = handler;
            if (_this._handler != null) {
                _this._handler.Init(_this._logic);
            }
            _this._service = _this;
            return _this;
        }
        //注册所有服务
        //此函数是一个接口
        GameService.prototype.Init = function () {
            if (this._logic != null) {
                this._logic.Init();
            }
            if (this._handler != null) {
                this._handler.RegisterAllMessage();
            }
        };
        //心跳
        GameService.prototype.HeartBeat = function () {
        };
        GameService.prototype.Stop = function () {
        };
        return GameService;
    }(IGameService));
    FrameWork.GameService = GameService;
    __reflect(GameService.prototype, "FrameWork.GameService");
})(FrameWork || (FrameWork = {}));
//# sourceMappingURL=GameService.js.map
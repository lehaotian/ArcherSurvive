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
    var GameManage = (function (_super) {
        __extends(GameManage, _super);
        //构造函数
        function GameManage() {
            var _this = _super.call(this) || this;
            _this._allGameServiceList = new Common.Dictionary();
            return _this;
        }
        //启动游戏
        GameManage.prototype.StartGame = function (main) {
            this._RegisterCommonService();
            this._RegisterAllService();
            this._OnInit();
            //创建一个计时器对象
            var timer = new egret.Timer(50, 0);
            //注册事件侦听器
            timer.addEventListener(egret.TimerEvent.TIMER, this.HeartBeat, this);
            //计时结束
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        };
        GameManage.prototype.timerComFunc = function () {
        };
        //注册服务
        GameManage.prototype._RegisterService = function (service) {
            if (service == null) {
                return;
            }
            var size = this._allGameServiceList.Size();
            this._allGameServiceList.Add(size + 1, service);
        };
        //注册通用服务
        GameManage.prototype._RegisterCommonService = function () {
            this._RegisterService(new FrameWork.MessageService());
        };
        //初始化
        GameManage.prototype._OnInit = function () {
            for (var key in this._allGameServiceList.GetArray()) {
                if (this._allGameServiceList.ConstainsKey(key)) {
                    var service = this._allGameServiceList.GetArray()[key];
                    if (service != null) {
                        service.Init();
                    }
                }
            }
        };
        //此函数是一个接口
        GameManage.prototype._RegisterAllService = function () {
        };
        //心跳
        GameManage.prototype.HeartBeat = function () {
            if (this._allGameServiceList != null) {
                for (var key in this._allGameServiceList.GetArray()) {
                    if (this._allGameServiceList.ConstainsKey(key)) {
                        var service = this._allGameServiceList.GetArray()[key];
                        if (service != null) {
                            service.HeartBeat();
                        }
                    }
                }
            }
        };
        return GameManage;
    }(IGameManage));
    FrameWork.GameManage = GameManage;
    __reflect(GameManage.prototype, "FrameWork.GameManage");
})(FrameWork || (FrameWork = {}));
//# sourceMappingURL=GameManage.js.map
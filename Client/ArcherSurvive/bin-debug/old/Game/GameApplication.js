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
var LuckGame;
(function (LuckGame) {
    var GameApplication = (function (_super) {
        __extends(GameApplication, _super);
        function GameApplication() {
            return _super.call(this) || this;
        }
        GameApplication.Inst = function () {
            if (GameApplication._inst == null) {
                GameApplication._inst = new GameApplication();
            }
            return GameApplication._inst;
        };
        //注册所有模块的服务
        GameApplication.prototype._RegisterAllService = function () {
            this._RegisterService(new LuckGame.NetSetvice());
            this._RegisterService(new LuckGame.LoginService());
            this._RegisterService(new LuckGame.PlayerService());
            this._RegisterService(new LuckGame.ShopService());
            this._RegisterService(new LuckGame.BagService());
            this._RegisterService(new LuckGame.ComBatService());
        };
        GameApplication.prototype.StartGame = function (main) {
            //初始化游戏逻辑框架
            //TODO
            _super.prototype.StartGame.call(this, main);
            SingletonBase.Get(LuckGame.LayerManager).Init(main);
            // let layer = new LayerManager();
            // layer.Init(main);
            SingletonBase.Get(LuckGame.JsonManager).loadAllJson();
            // let jsonmanage = new JsonManager();
            // jsonmanage.loadAllJson();
            // 开启对象池
            new LuckGame.HintManage();
            //开启游戏状态，打开界面 
            // ViewManager.Inst.Init();
            this.openLoginView();
            this.openHintView();
        };
        //打开登陆界面
        GameApplication.prototype.openLoginView = function () {
            // ViewManager.Inst.OpenView("LoginView",false,function(ui){
            //     this.mPreUI = ui;
            // },null,TierType.viewRoot);
            SingletonBase.Get(ui.LoginView).open();
        };
        //打开登陆界面
        GameApplication.prototype.openHintView = function () {
            // ViewManager.Inst.OpenView("HintView",false,function(ui){
            //     this.mPreUI = ui;
            // },null,TierType.superRoot);
        };
        return GameApplication;
    }(FrameWork.GameManage));
    LuckGame.GameApplication = GameApplication;
    __reflect(GameApplication.prototype, "LuckGame.GameApplication");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=GameApplication.js.map
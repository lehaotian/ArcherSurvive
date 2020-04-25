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
var ui;
(function (ui) {
    var WorldLobbyView = (function (_super) {
        __extends(WorldLobbyView, _super);
        function WorldLobbyView() {
            var _this = _super.call(this, "WorldLobbyView") || this;
            _this.biudEvent();
            return _this;
        }
        WorldLobbyView.prototype.biudEvent = function () {
            this.awakenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ReqAwakenPro, this);
            this.mShopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openShopView, this);
            this.bagBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openBagView, this);
        };
        WorldLobbyView.prototype.openShopView = function () {
            SingletonBase.Get(ui.ShopView).open();
            // ViewManager.Inst.OpenView("ShopView", false, Laya.Handler.create(this, function (ui) {
            // 	this.mPreUI = ui;
            // }), null, TierType.dialogRoot);
        };
        WorldLobbyView.prototype.openBagView = function () {
            SingletonBase.Get(ui.BagView).open();
            // ViewManager.Inst.OpenView("BagView", false, Laya.Handler.create(this, function (ui) {
            // 	this.mPreUI = ui;
            // 	this.mPreUI.openView();
            // }), null, TierType.dialogRoot);
        };
        WorldLobbyView.prototype.ReqAwakenPro = function () {
            // if(PlayerManage.Instance.playerLv > 0){
            //     return;
            // }
            LuckGame.PlayerService.Instance.ReqAwakenPro();
        };
        return WorldLobbyView;
    }(BaseUI));
    ui.WorldLobbyView = WorldLobbyView;
    __reflect(WorldLobbyView.prototype, "ui.WorldLobbyView");
})(ui || (ui = {}));
//# sourceMappingURL=WorldLobbyView.js.map
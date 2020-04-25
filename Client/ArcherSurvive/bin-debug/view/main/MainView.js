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
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        return _super.call(this, "MainSkin") || this;
    }
    MainView.prototype.childrenCreated = function () {
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginBtnnHandler, this);
        this.battleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.battleBtnnHandler, this);
    };
    MainView.prototype.open = function (data) {
        console.log(data);
        this.initView();
    };
    MainView.prototype.close = function () {
    };
    MainView.prototype.initView = function () {
    };
    MainView.prototype.loginBtnnHandler = function () {
        LayerManager.Instance.openView(LoginView);
    };
    MainView.prototype.battleBtnnHandler = function () {
        LayerManager.Instance.openView(BattleMainView);
    };
    return MainView;
}(ViewBase));
__reflect(MainView.prototype, "MainView");
//# sourceMappingURL=MainView.js.map
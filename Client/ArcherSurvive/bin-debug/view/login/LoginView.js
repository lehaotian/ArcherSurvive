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
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        return _super.call(this, "LoginSkin") || this;
    }
    LoginView.prototype.childrenCreated = function () {
        this.passWord.displayAsPassword = true;
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginBtnBtnHandler, this);
        this.registBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.registBtnBtnHandler, this);
        this.account.addEventListener(egret.FocusEvent.FOCUS_OUT, this.setAccountBtnHandler, this);
        this.passWord.addEventListener(egret.TouchEvent.FOCUS_OUT, this.passWordBtnHandler, this);
        this.serverId.addEventListener(egret.TouchEvent.FOCUS_OUT, this.selectServerBtnHandler, this);
    };
    LoginView.prototype.open = function (data) {
    };
    LoginView.prototype.close = function () {
    };
    LoginView.prototype.loginBtnBtnHandler = function () {
        LayerManager.Instance.openView(MainView);
    };
    LoginView.prototype.registBtnBtnHandler = function () {
    };
    LoginView.prototype.setAccountBtnHandler = function () {
    };
    LoginView.prototype.passWordBtnHandler = function () {
    };
    LoginView.prototype.selectServerBtnHandler = function () {
    };
    return LoginView;
}(ViewBase));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map
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
    var LoginView = (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            var _this = _super.call(this, "LoginView") || this;
            _this.biudEvent();
            return _this;
        }
        LoginView.prototype.biudEvent = function () {
            this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.login, this);
            this.touristBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tourist, this);
            this.setUserName();
        };
        LoginView.prototype.setUserName = function () {
            var userInfo = LocalStorage.GetName("userInfo");
            if (userInfo == null) {
                return;
            }
            var arr = userInfo.split("_");
            this.userName.text = arr[0];
            this.pswd.text = arr[1];
        };
        /**
         * 登录
         */
        LoginView.prototype.login = function () {
            if (this.userName.text == "") {
                var str = GetDictionaryStr.getStrById(DictionaryType.userNameNoNull);
                // Event.DispatchEvent("showWaveHintView", str);
                return;
            }
            LuckGame.LoginService.Instance.ReqLogin(this.userName.text, this.pswd.text);
        };
        /**
         * 游客登录
         */
        LoginView.prototype.tourist = function () {
            //生成账号
            var account = LayerTime.getTimeClient() + "";
            LuckGame.LoginService.Instance.ReqRegisterGame(account, "123456");
        };
        return LoginView;
    }(BaseUI));
    ui.LoginView = LoginView;
    __reflect(LoginView.prototype, "ui.LoginView");
})(ui || (ui = {}));
//# sourceMappingURL=LoginView.js.map
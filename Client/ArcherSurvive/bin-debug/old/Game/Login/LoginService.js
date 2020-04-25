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
    var LoginService = (function (_super) {
        __extends(LoginService, _super);
        function LoginService() {
            var _this = _super.call(this, new LuckGame.LoginManage(), new LuckGame.LoginHandler()) || this;
            _this.userName = "";
            _this.userPswd = "";
            LoginService.Instance = _this;
            return _this;
        }
        /**
         * 请求注册
         */
        LoginService.prototype.ReqRegisterGame = function (username, userpswd) {
            this.userName = username;
            this.userPswd = userpswd;
            //判断有没有连接服务器
            LuckGame.NetManager.Instance.isregister = true;
            if (!LuckGame.NetManager.Instance.isLoginConnected()) {
                LuckGame.NetManager.Instance.ConnectLoginServer();
            }
            else {
                this.ReqRegister();
            }
        };
        LoginService.prototype.ReqLogin = function (username, userpswd) {
            this.userName = username;
            this.userPswd = userpswd;
            //判断有没有连接服务器
            if (!LuckGame.NetManager.Instance.isLoginConnected()) {
                LuckGame.NetManager.Instance.ConnectLoginServer();
            }
            else {
                this.ReqLoginGame();
            }
        };
        /**
         * 请求登陆
         */
        LoginService.prototype.ReqLoginGame = function () {
            var _msg = new Login.RequestLogin();
            _msg.SetMessageId(C2A_Login.RequestLogin);
            _msg.userName = this.userName;
            _msg.userPswd = this.userPswd;
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        /**
         * 请求注册
         */
        LoginService.prototype.ReqRegister = function () {
            LuckGame.NetManager.Instance.isregister = false;
            var _msg = new Login.RequestLogin();
            _msg.SetMessageId(C2A_Login.RequestRegistry);
            _msg.userName = this.userName;
            _msg.userPswd = this.userPswd;
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        /**
         * 请求验证
         */
        LoginService.prototype.ReqVerfiy = function () {
        };
        //连接逻辑服务器成功 请求角色list信息
        LoginService.prototype.ReqPlayetInfoList = function () {
            var _msg = new LogicAccount.RequestPlayerInfo();
            _msg.SetMessageId(C2L_Account.RequestPlayerInfo);
            _msg.accountId = LuckGame.LoginManage.Instance.accountId;
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        return LoginService;
    }(FrameWork.GameService));
    LuckGame.LoginService = LoginService;
    __reflect(LoginService.prototype, "LuckGame.LoginService");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=LoginService.js.map
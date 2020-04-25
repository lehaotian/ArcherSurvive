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
    var LoginHandler = (function (_super) {
        __extends(LoginHandler, _super);
        function LoginHandler() {
            return _super.call(this) || this;
        }
        //注册所有消息
        LoginHandler.prototype.RegisterAllMessage = function () {
            /**
             * 提示信息
             */
            this.RegisterMessage(A2C_Login.TipMsgCode, this.handlerTipMsgCode, new Login.TipMsgCode());
            this.RegisterMessage(A2C_Login.ReturnAccountInfo, this.loginSuccee, new Login.AccountInfo());
            this.RegisterMessage(L2C_Account.PlayerInfoList, this.loginPlayerInfoList, new LogicAccount.PlayerInfoList());
        };
        LoginHandler.prototype.handlerTipMsgCode = function (msg) {
            Debugger.log("服务器发来的消息");
        };
        LoginHandler.prototype.loginSuccee = function (msg) {
            //把用户名本地保存起来
            LocalStorage.SetNameString("userInfo", LuckGame.LoginService.Instance.userName + "_" + LuckGame.LoginService.Instance.userPswd);
            //获取玩家账号信息
            LuckGame.LoginManage.Instance.accountId = msg.accountId;
            //连接逻辑服务器请求角色信息
            LuckGame.NetManager.Instance.mBConnecting = false;
            var info = LuckGame.JsonManager.Instance.getJsonMap("IpPort");
            //TODO 选服务器连接游戏服
            LuckGame.NetManager.Instance.ConnectGameServer(info.logicip, info.logicport);
        };
        //获取角色信息
        LoginHandler.prototype.loginPlayerInfoList = function (msg) {
            for (var index in msg.playerInfoList) {
                var info = msg.playerInfoList[index];
                this._logicManage.addPlayerInfo(info);
            }
            // SingletonBase.Get(LayerManager).closeView(LoginView);
            this.openPlayerListView();
        };
        LoginHandler.prototype.openPlayerListView = function () {
            SingletonBase.Get(ui.PlayerInfoListView).open();
        };
        return LoginHandler;
    }(FrameWork.IOHandler));
    LuckGame.LoginHandler = LoginHandler;
    __reflect(LoginHandler.prototype, "LuckGame.LoginHandler");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=LoginHandler.js.map
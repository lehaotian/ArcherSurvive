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
    var LoginManage = (function (_super) {
        __extends(LoginManage, _super);
        function LoginManage() {
            var _this = _super.call(this) || this;
            _this.accountId = 0;
            _this.playerListArr = [];
            LoginManage.Instance = _this;
            return _this;
        }
        LoginManage.prototype.addPlayerInfo = function (info) {
            this.playerListArr.push(info);
        };
        LoginManage.prototype.getPlayerList = function () {
            return this.playerListArr;
        };
        return LoginManage;
    }(GamePart));
    LuckGame.LoginManage = LoginManage;
    __reflect(LoginManage.prototype, "LuckGame.LoginManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=LoginManage.js.map
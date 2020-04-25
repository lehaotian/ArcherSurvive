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
var Login;
(function (Login) {
    var RequestLogin = (function (_super) {
        __extends(RequestLogin, _super);
        function RequestLogin() {
            var _this = _super.call(this) || this;
            _this.playerId = 0;
            _this.userName = "";
            _this.userPswd = "";
            return _this;
        }
        RequestLogin.prototype._OnSerial = function () {
            this.WriteInt64(this.playerId);
            this.WriteString(this.userName);
            this.WriteString(this.userPswd);
        };
        RequestLogin.prototype._OnDeserialize = function () {
            this.playerId = this.ReadInt32();
        };
        return RequestLogin;
    }(Common.GameMessage));
    Login.RequestLogin = RequestLogin;
    __reflect(RequestLogin.prototype, "Login.RequestLogin");
})(Login || (Login = {}));
//# sourceMappingURL=RequestLogin.js.map
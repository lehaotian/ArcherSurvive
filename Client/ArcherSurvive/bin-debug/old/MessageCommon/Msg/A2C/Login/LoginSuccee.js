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
    var LoginSuccee = (function (_super) {
        __extends(LoginSuccee, _super);
        function LoginSuccee() {
            var _this = _super.call(this) || this;
            _this.playerId = 0;
            return _this;
        }
        LoginSuccee.prototype._OnSerial = function () {
            this.WriteInt32(this.playerId);
        };
        LoginSuccee.prototype._OnDeserialize = function () {
            this.playerId = this.ReadInt32();
        };
        return LoginSuccee;
    }(Common.GameMessage));
    Login.LoginSuccee = LoginSuccee;
    __reflect(LoginSuccee.prototype, "Login.LoginSuccee");
})(Login || (Login = {}));
//# sourceMappingURL=LoginSuccee.js.map
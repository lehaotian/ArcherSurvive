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
/*
* name;
*/
var Login;
(function (Login) {
    var AccountInfo = (function (_super) {
        __extends(AccountInfo, _super);
        function AccountInfo() {
            var _this = _super.call(this) || this;
            _this.accountId = 0;
            return _this;
        }
        AccountInfo.prototype._OnDeserialize = function () {
            this.accountId = this.ReadInt32();
        };
        return AccountInfo;
    }(Common.GameMessage));
    Login.AccountInfo = AccountInfo;
    __reflect(AccountInfo.prototype, "Login.AccountInfo");
})(Login || (Login = {}));
//# sourceMappingURL=AccountInfo.js.map
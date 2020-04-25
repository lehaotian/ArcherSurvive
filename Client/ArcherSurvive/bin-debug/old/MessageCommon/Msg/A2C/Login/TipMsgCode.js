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
    var TipMsgCode = (function (_super) {
        __extends(TipMsgCode, _super);
        function TipMsgCode() {
            var _this = _super.call(this) || this;
            _this.code = 0;
            return _this;
        }
        TipMsgCode.prototype._OnDeserialize = function () {
            this.code = this.ReadInt32();
        };
        return TipMsgCode;
    }(Common.GameMessage));
    Login.TipMsgCode = TipMsgCode;
    __reflect(TipMsgCode.prototype, "Login.TipMsgCode");
})(Login || (Login = {}));
//# sourceMappingURL=TipMsgCode.js.map
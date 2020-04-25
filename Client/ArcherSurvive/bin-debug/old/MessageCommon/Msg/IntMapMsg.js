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
var IntMapMsg = (function (_super) {
    __extends(IntMapMsg, _super);
    function IntMapMsg() {
        var _this = _super.call(this) || this;
        _this.intMap = {};
        return _this;
    }
    IntMapMsg.prototype._OnSerial = function () {
    };
    IntMapMsg.prototype._OnDeserialize = function () {
        var count = this.ReadInt32();
        for (var i = 0; i < count; i++) {
            var key = this.ReadInt32();
            var num = this.ReadInt32();
            this.intMap[key] = num;
        }
    };
    return IntMapMsg;
}(Common.GameMessage));
__reflect(IntMapMsg.prototype, "IntMapMsg");
//# sourceMappingURL=IntMapMsg.js.map
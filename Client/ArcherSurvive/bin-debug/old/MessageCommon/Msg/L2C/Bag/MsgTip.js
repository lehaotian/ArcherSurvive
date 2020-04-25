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
var Bag;
(function (Bag) {
    var MsgTip = (function (_super) {
        __extends(MsgTip, _super);
        function MsgTip() {
            var _this = _super.call(this) || this;
            _this.id = 0;
            _this.msg = [];
            return _this;
        }
        MsgTip.prototype._OnDeserialize = function () {
            this.msg = [];
            this.id = this.ReadInt32();
            var count = this.ReadInt16();
            for (var i = 0; i < count; i++) {
                var val = this.ReadString();
                this.msg.push(val);
            }
        };
        return MsgTip;
    }(Common.GameMessage));
    Bag.MsgTip = MsgTip;
    __reflect(MsgTip.prototype, "Bag.MsgTip");
})(Bag || (Bag = {}));
//# sourceMappingURL=MsgTip.js.map
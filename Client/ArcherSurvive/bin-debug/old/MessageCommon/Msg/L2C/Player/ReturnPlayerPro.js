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
var Player;
(function (Player) {
    var ReturnPlayerPro = (function (_super) {
        __extends(ReturnPlayerPro, _super);
        function ReturnPlayerPro() {
            var _this = _super.call(this) || this;
            _this.proResultMap = {};
            return _this;
        }
        ReturnPlayerPro.prototype._OnDeserialize = function () {
            this.proResultMap = {};
            var count = this.ReadInt8();
            for (var i = 0; i < count; i++) {
                var key = this.ReadInt8();
                var val = this.ReadInt32();
                this.proResultMap[key] = val;
            }
        };
        return ReturnPlayerPro;
    }(Common.GameMessage));
    Player.ReturnPlayerPro = ReturnPlayerPro;
    __reflect(ReturnPlayerPro.prototype, "Player.ReturnPlayerPro");
})(Player || (Player = {}));
//# sourceMappingURL=ReturnPlayerPro.js.map
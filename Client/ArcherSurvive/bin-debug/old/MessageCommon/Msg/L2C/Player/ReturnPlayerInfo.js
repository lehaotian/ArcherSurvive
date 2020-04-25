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
    var ReturnPlayerInfo = (function (_super) {
        __extends(ReturnPlayerInfo, _super);
        function ReturnPlayerInfo() {
            var _this = _super.call(this) || this;
            _this.playerInfo = new PlayerInfo();
            return _this;
        }
        ReturnPlayerInfo.prototype._OnDeserialize = function () {
            this.playerInfo.DbId = this.ReadInt64();
            this.playerInfo.playerName = this.ReadString();
            this.playerInfo.sex = this.ReadInt8();
            this.playerInfo.Lv = this.ReadInt32();
        };
        return ReturnPlayerInfo;
    }(Common.GameMessage));
    Player.ReturnPlayerInfo = ReturnPlayerInfo;
    __reflect(ReturnPlayerInfo.prototype, "Player.ReturnPlayerInfo");
})(Player || (Player = {}));
//# sourceMappingURL=ReturnPlayerInfo.js.map
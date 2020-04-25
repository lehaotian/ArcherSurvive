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
var LogicAccount;
(function (LogicAccount) {
    var PlayerInfoList = (function (_super) {
        __extends(PlayerInfoList, _super);
        function PlayerInfoList() {
            var _this = _super.call(this) || this;
            _this.playerInfoList = [];
            return _this;
        }
        PlayerInfoList.prototype._OnDeserialize = function () {
            this.playerInfoList = [];
            var count = this.ReadInt8();
            for (var i = 0; i < count; i++) {
                var playerInfo = new PlayerInfo();
                playerInfo.DbId = this.ReadInt64();
                playerInfo.playerName = this.ReadString();
                playerInfo.sex = this.ReadInt8();
                playerInfo.Lv = this.ReadInt32();
                this.playerInfoList.push(playerInfo);
            }
        };
        return PlayerInfoList;
    }(Common.GameMessage));
    LogicAccount.PlayerInfoList = PlayerInfoList;
    __reflect(PlayerInfoList.prototype, "LogicAccount.PlayerInfoList");
})(LogicAccount || (LogicAccount = {}));
//# sourceMappingURL=PlayerInfoList.js.map
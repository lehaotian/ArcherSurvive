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
var Combat;
(function (Combat) {
    var GetCombatCardData = (function (_super) {
        __extends(GetCombatCardData, _super);
        function GetCombatCardData() {
            var _this = _super.call(this) || this;
            _this.cardDataMap = {};
            return _this;
        }
        GetCombatCardData.prototype._OnDeserialize = function () {
            this.cardDataMap = {};
            var count = this.ReadInt32();
            for (var i = 0; i < count; i++) {
                var cardInfo = new CombatCardData();
                cardInfo.playerId = this.ReadInt64();
                cardInfo.pos = this.ReadInt32();
                cardInfo.baseHP = this.ReadInt32();
                cardInfo.currHP = this.ReadInt32();
                this.cardDataMap[cardInfo.playerId] = cardInfo;
            }
        };
        return GetCombatCardData;
    }(Common.GameMessage));
    Combat.GetCombatCardData = GetCombatCardData;
    __reflect(GetCombatCardData.prototype, "Combat.GetCombatCardData");
})(Combat || (Combat = {}));
//# sourceMappingURL=GetCombatCardData.js.map
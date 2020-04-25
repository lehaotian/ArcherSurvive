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
    var CombatResultData = (function (_super) {
        __extends(CombatResultData, _super);
        function CombatResultData() {
            var _this = _super.call(this) || this;
            _this.attProcessDataMap = {};
            return _this;
        }
        CombatResultData.prototype._OnDeserialize = function () {
            this.attProcessDataMap = {};
            var count = this.ReadInt32();
            var key = 0;
            for (var i = 0; i < count; i++) {
                var combatProcessData = new CombatProcessData();
                key = this.ReadInt32();
                combatProcessData.boutNum = this.ReadInt32();
                combatProcessData.attDbid = this.ReadInt64();
                var count2 = this.ReadInt32();
                for (var j = 0; j < count2; j++) {
                    var arr = [];
                    var key2 = this.ReadInt32();
                    var count3 = this.ReadInt32();
                    for (var n = 0; n < count3; n++) {
                        var cardProcessData = new CardProcessData();
                        cardProcessData.playerId = this.ReadInt64();
                        cardProcessData.actionType = this.ReadInt32();
                        cardProcessData.actionVal = this.ReadInt32();
                        cardProcessData.proType = this.ReadInt32();
                        combatProcessData.addProcessData(key2, cardProcessData);
                    }
                }
                this.attProcessDataMap[key] = combatProcessData;
            }
        };
        return CombatResultData;
    }(Common.GameMessage));
    Combat.CombatResultData = CombatResultData;
    __reflect(CombatResultData.prototype, "Combat.CombatResultData");
})(Combat || (Combat = {}));
//# sourceMappingURL=CombatResultData.js.map
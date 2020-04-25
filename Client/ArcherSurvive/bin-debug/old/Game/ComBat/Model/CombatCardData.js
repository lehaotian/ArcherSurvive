var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var CombatCardData = (function () {
    function CombatCardData() {
        this.playerId = 0;
        this.pos = 0;
        //基本血量
        this.baseHP = 0;
        //当前血量
        this.currHP = 0;
    }
    return CombatCardData;
}());
__reflect(CombatCardData.prototype, "CombatCardData");
//# sourceMappingURL=CombatCardData.js.map
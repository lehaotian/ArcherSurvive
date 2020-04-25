var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var CardProcessData = (function () {
    function CardProcessData() {
        this.playerId = 0;
        //1：技能    2：属性
        this.actionType = 0;
        this.actionVal = 0;
        this.proType = 0;
    }
    return CardProcessData;
}());
__reflect(CardProcessData.prototype, "CardProcessData");
//# sourceMappingURL=CardProcessData.js.map
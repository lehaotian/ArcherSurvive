var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var CombatProcessData = (function () {
    function CombatProcessData() {
        /**
         * 当前回合
         */
        this.boutNum = 0;
        /**
         * 攻击方Dbid
         */
        this.attDbid = 0;
        //key:类型  ， val: list
        this.attMap = {};
    }
    CombatProcessData.prototype.addProcessData = function (processType, cardProcessData) {
        var proDataList = null;
        proDataList = this.attMap[processType];
        if (proDataList == null) {
            proDataList = [];
            this.attMap[processType] = proDataList;
        }
        proDataList.push(cardProcessData);
    };
    CombatProcessData.prototype.getProcessData = function (processType) {
        return this.attMap[processType];
    };
    return CombatProcessData;
}());
__reflect(CombatProcessData.prototype, "CombatProcessData");
//# sourceMappingURL=CombatProcessData.js.map
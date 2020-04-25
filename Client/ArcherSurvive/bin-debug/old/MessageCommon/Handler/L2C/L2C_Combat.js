/*
* name;
*/
var Begin = Terminal.Logic * 16777216 + Terminal.Client * 65536 + MessageHandler.Combat * 256;
var L2C_Combat;
(function (L2C_Combat) {
    L2C_Combat[L2C_Combat["CombatCardData"] = Begin + 0] = "CombatCardData";
    L2C_Combat[L2C_Combat["CombatResultData"] = Begin + 1] = "CombatResultData";
})(L2C_Combat || (L2C_Combat = {}));
//# sourceMappingURL=L2C_Combat.js.map
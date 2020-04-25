/*
* name;
*/
var Begin = Terminal.Logic * 16777216 + Terminal.Client * 65536 + MessageHandler.Player * 256;
var L2C_Player;
(function (L2C_Player) {
    L2C_Player[L2C_Player["ReturnPlayerInfo"] = Begin + 0] = "ReturnPlayerInfo";
    //返回角色灵根信息
    L2C_Player[L2C_Player["ReturnPlayerInfoAnimaRoot"] = Begin + 1] = "ReturnPlayerInfoAnimaRoot";
    //返回角色属性值信息
    L2C_Player[L2C_Player["returnPlayerInfoAnimaPro"] = Begin + 2] = "returnPlayerInfoAnimaPro";
    ////返回角色等级信息
    L2C_Player[L2C_Player["returnPlayerLvInfo"] = Begin + 3] = "returnPlayerLvInfo";
})(L2C_Player || (L2C_Player = {}));
//# sourceMappingURL=L2C_Player.js.map
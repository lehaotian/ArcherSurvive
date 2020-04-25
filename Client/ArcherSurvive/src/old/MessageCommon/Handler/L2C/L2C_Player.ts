/*
* name;
*/

var Begin = Terminal.Logic * 16777216 + Terminal.Client * 65536 + MessageHandler.Player * 256
enum L2C_Player{
    ReturnPlayerInfo = Begin + 0,
    //返回角色灵根信息
    ReturnPlayerInfoAnimaRoot = Begin + 1,
    //返回角色属性值信息
    returnPlayerInfoAnimaPro = Begin + 2,
    ////返回角色等级信息
    returnPlayerLvInfo = Begin + 3,
}
/*
* name;
*/
var Begin = Terminal.Client * 16777216 + Terminal.Logic * 65536 + MessageHandler.Player * 256
enum C2L_Player{
    CreatePlayerInfo = Begin + 0,

    RequestPlayerInfo = Begin + 1,
    //请求觉醒
    ReqAwakenPro = Begin + 2,
}
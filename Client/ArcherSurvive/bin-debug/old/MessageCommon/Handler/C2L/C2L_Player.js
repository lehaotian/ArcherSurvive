/*
* name;
*/
var Begin = Terminal.Client * 16777216 + Terminal.Logic * 65536 + MessageHandler.Player * 256;
var C2L_Player;
(function (C2L_Player) {
    C2L_Player[C2L_Player["CreatePlayerInfo"] = Begin + 0] = "CreatePlayerInfo";
    C2L_Player[C2L_Player["RequestPlayerInfo"] = Begin + 1] = "RequestPlayerInfo";
    //请求觉醒
    C2L_Player[C2L_Player["ReqAwakenPro"] = Begin + 2] = "ReqAwakenPro";
})(C2L_Player || (C2L_Player = {}));
//# sourceMappingURL=C2L_Player.js.map
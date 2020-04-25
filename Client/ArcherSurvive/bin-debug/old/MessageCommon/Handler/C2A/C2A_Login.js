//var Begin = Terminal.Client << 24 + Terminal.Account << 16 + MessageHandler.Login << 8
var Begin = Terminal.Client * 16777216 + Terminal.Account * 65536 + MessageHandler.Login * 256;
var C2A_Login;
(function (C2A_Login) {
    C2A_Login[C2A_Login["RequestLogin"] = Begin + 0] = "RequestLogin";
    C2A_Login[C2A_Login["RequestRegistry"] = Begin + 1] = "RequestRegistry";
})(C2A_Login || (C2A_Login = {}));
//# sourceMappingURL=C2A_Login.js.map
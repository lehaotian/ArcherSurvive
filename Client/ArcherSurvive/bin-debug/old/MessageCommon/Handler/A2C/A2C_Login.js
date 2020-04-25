var Begin = Terminal.Account * 16777216 + Terminal.Client * 65536 + MessageHandler.Login * 256;
var A2C_Login;
(function (A2C_Login) {
    /**
     * 提示信息
     */
    A2C_Login[A2C_Login["TipMsgCode"] = Begin + 0] = "TipMsgCode";
    A2C_Login[A2C_Login["ReturnAccountInfo"] = Begin + 1] = "ReturnAccountInfo";
})(A2C_Login || (A2C_Login = {}));
//# sourceMappingURL=A2C_Login.js.map
var Begin = Terminal.Account * 16777216 + Terminal.Client * 65536 + MessageHandler.Login * 256
enum A2C_Login{
    /**
     * 提示信息
     */
    TipMsgCode = Begin + 0,
    ReturnAccountInfo = Begin + 1,
}
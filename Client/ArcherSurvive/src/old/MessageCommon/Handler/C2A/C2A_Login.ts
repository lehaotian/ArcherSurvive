//var Begin = Terminal.Client << 24 + Terminal.Account << 16 + MessageHandler.Login << 8
var Begin = Terminal.Client * 16777216 + Terminal.Account * 65536 + MessageHandler.Login * 256
enum C2A_Login{
    RequestLogin = Begin + 0,
    RequestRegistry = Begin + 1,
}
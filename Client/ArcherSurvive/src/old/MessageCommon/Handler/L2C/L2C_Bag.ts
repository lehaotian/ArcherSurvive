/*
* name;
*/
var Begin = Terminal.Logic * 16777216 + Terminal.Client * 65536 + MessageHandler.Bag * 256
enum L2C_Bag{
    BagInfo = Begin+0,
    BagNewItemInfo = Begin+1,
    BagReduceItemInfo = Begin+2,
    MsgTip = Begin+3,
}
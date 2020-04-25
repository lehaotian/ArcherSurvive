/*
* name;
*/
var Begin = Terminal.Client * 16777216 + Terminal.Logic * 65536 + MessageHandler.Bag * 256
enum C2L_Bag{
    getBagInfo = Begin+0,
    useItem =  Begin+1,
    //请求炼器
    selfCreateEquip =  Begin+2,
}
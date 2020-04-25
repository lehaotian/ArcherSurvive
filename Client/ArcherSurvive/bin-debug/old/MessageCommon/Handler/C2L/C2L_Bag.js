/*
* name;
*/
var Begin = Terminal.Client * 16777216 + Terminal.Logic * 65536 + MessageHandler.Bag * 256;
var C2L_Bag;
(function (C2L_Bag) {
    C2L_Bag[C2L_Bag["getBagInfo"] = Begin + 0] = "getBagInfo";
    C2L_Bag[C2L_Bag["useItem"] = Begin + 1] = "useItem";
    //请求炼器
    C2L_Bag[C2L_Bag["selfCreateEquip"] = Begin + 2] = "selfCreateEquip";
})(C2L_Bag || (C2L_Bag = {}));
//# sourceMappingURL=C2L_Bag.js.map
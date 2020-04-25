/*
* name;
*/
var Begin = Terminal.Logic * 16777216 + Terminal.Client * 65536 + MessageHandler.Bag * 256;
var L2C_Bag;
(function (L2C_Bag) {
    L2C_Bag[L2C_Bag["BagInfo"] = Begin + 0] = "BagInfo";
    L2C_Bag[L2C_Bag["BagNewItemInfo"] = Begin + 1] = "BagNewItemInfo";
    L2C_Bag[L2C_Bag["BagReduceItemInfo"] = Begin + 2] = "BagReduceItemInfo";
    L2C_Bag[L2C_Bag["MsgTip"] = Begin + 3] = "MsgTip";
})(L2C_Bag || (L2C_Bag = {}));
//# sourceMappingURL=L2C_Bag.js.map
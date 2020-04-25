var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ItemShowInfo = (function () {
    function ItemShowInfo() {
        this.color = 0;
        this.itemIcon = "";
        this.itemName = "";
        this.num = 0;
    }
    return ItemShowInfo;
}());
__reflect(ItemShowInfo.prototype, "ItemShowInfo");
//# sourceMappingURL=ItemShowInfo.js.map
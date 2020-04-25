var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/ var ItemInfo = (function () {
    function ItemInfo() {
        /**
         * 物品DbId
         */
        this.DbId = 0;
        /**
         * 物品普通id
         */
        this.itemId = 0;
        this.num = 1;
        /**
         * 是否可堆叠（0：不可，1.可以）
         */
        this.heapUpNum = 0;
        /**
         * 1:普通物品，2：带有属性的物品
         */
        this.itemType2 = 1;
    }
    return ItemInfo;
}());
__reflect(ItemInfo.prototype, "ItemInfo");
//# sourceMappingURL=ItemInfo.js.map
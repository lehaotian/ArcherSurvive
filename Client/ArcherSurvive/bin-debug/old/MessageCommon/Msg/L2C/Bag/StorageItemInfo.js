var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StorageItemInfo = (function () {
    function StorageItemInfo() {
        this.dbId = 0;
        this.itemId = 0;
        this.num = 0;
    }
    return StorageItemInfo;
}());
__reflect(StorageItemInfo.prototype, "StorageItemInfo");
//# sourceMappingURL=StorageItemInfo.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UpdateBagInfo = (function (_super) {
    __extends(UpdateBagInfo, _super);
    function UpdateBagInfo() {
        var _this = _super.call(this) || this;
        _this.bagSize = 50;
        _this.useSize = 0;
        /**
         * 所有物品
         */
        _this.newitemMap = {};
        return _this;
    }
    UpdateBagInfo.prototype._OnDeserialize = function () {
        this.newitemMap = {};
        this.bagSize = this.ReadInt32();
        this.useSize = this.ReadInt32();
        var count = this.ReadInt16();
        for (var i = 0; i < count; i++) {
            var itemInfo = new StorageItemInfo();
            itemInfo.dbId = this.ReadInt64();
            itemInfo.itemId = this.ReadInt32();
            itemInfo.num = this.ReadInt32();
            this.newitemMap[itemInfo.dbId] = itemInfo;
        }
    };
    return UpdateBagInfo;
}(Common.GameMessage));
__reflect(UpdateBagInfo.prototype, "UpdateBagInfo");
//# sourceMappingURL=UpdateBagInfo.js.map
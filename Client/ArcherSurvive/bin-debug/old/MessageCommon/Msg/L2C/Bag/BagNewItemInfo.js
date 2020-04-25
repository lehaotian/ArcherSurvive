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
/*
* name;
*/
var Bag;
(function (Bag) {
    var BagNewItemInfo = (function (_super) {
        __extends(BagNewItemInfo, _super);
        function BagNewItemInfo() {
            var _this = _super.call(this) || this;
            _this.bagSize = 50;
            _this.useSize = 0;
            /**
             * 所有物品
             */
            _this.newitemMap = {};
            _this.newAddNumMap = {};
            return _this;
        }
        BagNewItemInfo.prototype._OnDeserialize = function () {
            this.newitemMap = {};
            this.newAddNumMap = {};
            this.bagSize = this.ReadInt32();
            this.useSize = this.ReadInt32();
            var count = this.ReadInt16();
            for (var i = 0; i < count; i++) {
                var itemType2 = this.ReadInt32();
                var itemInfo = null;
                switch (itemType2) {
                    case 2:
                        itemInfo = new ProItem();
                        var count2 = this.ReadInt16();
                        for (var j = 0; j < count2; j++) {
                            var proType = this.ReadInt8();
                            var val = this.ReadInt32();
                            itemInfo.basePro[proType] = val;
                        }
                        break;
                    default:
                        itemInfo = new ItemInfo();
                        break;
                }
                itemInfo.DbId = this.ReadInt64();
                itemInfo.itemId = this.ReadInt32();
                itemInfo.num = this.ReadInt32();
                this.newitemMap[itemInfo.DbId] = itemInfo;
            }
            count = this.ReadInt16();
            for (var i = 0; i < count; i++) {
                var dbId = this.ReadInt64();
                var num = this.ReadInt32();
                this.newAddNumMap[dbId] = num;
            }
        };
        return BagNewItemInfo;
    }(Common.GameMessage));
    Bag.BagNewItemInfo = BagNewItemInfo;
    __reflect(BagNewItemInfo.prototype, "Bag.BagNewItemInfo");
})(Bag || (Bag = {}));
//# sourceMappingURL=BagNewItemInfo.js.map
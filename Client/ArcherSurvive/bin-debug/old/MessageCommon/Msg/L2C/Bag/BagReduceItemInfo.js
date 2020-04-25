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
    var BagReduceItemInfo = (function (_super) {
        __extends(BagReduceItemInfo, _super);
        function BagReduceItemInfo() {
            var _this = _super.call(this) || this;
            _this.bagSize = 50;
            _this.useSize = 0;
            /**
             * 所有物品
             */
            _this.reduceItemMap = {};
            return _this;
        }
        BagReduceItemInfo.prototype._OnDeserialize = function () {
            this.reduceItemMap = {};
            this.bagSize = this.ReadInt32();
            this.useSize = this.ReadInt32();
            var count = this.ReadInt16();
            for (var i = 0; i < count; i++) {
                var dbId = this.ReadInt64();
                var num = this.ReadInt32();
                this.reduceItemMap[dbId] = num;
            }
        };
        return BagReduceItemInfo;
    }(Common.GameMessage));
    Bag.BagReduceItemInfo = BagReduceItemInfo;
    __reflect(BagReduceItemInfo.prototype, "Bag.BagReduceItemInfo");
})(Bag || (Bag = {}));
//# sourceMappingURL=BagReduceItemInfo.js.map
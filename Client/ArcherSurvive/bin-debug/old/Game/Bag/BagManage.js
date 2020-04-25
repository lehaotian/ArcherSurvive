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
var LuckGame;
(function (LuckGame) {
    var BagManage = (function (_super) {
        __extends(BagManage, _super);
        function BagManage() {
            var _this = _super.call(this) || this;
            _this.bagSize = 50;
            _this.useSize = 0;
            /**
             * 背包中所以的物品信息
             */
            _this.itemMap = {};
            /**
             * key:itemId,  val: dbid
             */
            _this.itemIdMap = {};
            BagManage.Instance = _this;
            return _this;
        }
        /**
         * 添加新物品
         * @param dbId
         * @param info
         */
        BagManage.prototype.addNewItem = function (dbId, info) {
            this.itemMap[dbId] = info;
            this.itemIdMap[info.itemId] = dbId;
        };
        /**
         * 物品增加数量
         * @param dbId
         * @param info
         */
        BagManage.prototype.addItemNum = function (dbId, num) {
            var info = this.itemMap[dbId];
            if (info == null) {
                return;
            }
            info.num += num;
        };
        /**
         * 减少物品数量
         * @param dbId
         * @param num
         */
        BagManage.prototype.reduceItemNum = function (dbId, num) {
            var info = this.itemMap[dbId];
            if (info == null) {
                return;
            }
            info.num -= num;
            if (info.num <= 0) {
                delete this.itemMap[dbId];
                delete this.itemIdMap[info.itemId];
            }
        };
        /**
         * 获取物品信息 By itemId
         */
        BagManage.prototype.getItemInfoByItemId = function (itemId) {
            var dbid = this.itemIdMap[itemId];
            if (dbid == null) {
                return this.getItemInfoFor(itemId);
            }
            var info = this.itemMap[dbid];
            if (info == null) {
                return this.getItemInfoFor(itemId);
            }
            return info;
        };
        BagManage.prototype.getItemInfoFor = function (itemId) {
            for (var key in this.itemMap) {
                var info = this.itemMap[key];
                if (info.itemId == itemId) {
                    return info;
                }
            }
            return null;
        };
        BagManage.prototype.getBagItemArr = function () {
            var arr = [];
            for (var dbId in this.itemMap) {
                arr.push(this.itemMap[dbId]);
            }
            return arr;
        };
        BagManage.prototype.getBagItemArrByType = function (type) {
            var arr = [];
            for (var dbId in this.itemMap) {
                var info = this.itemMap[dbId];
                var baseinfo = LuckGame.JsonManager.Instance.getJsonMap("Item")[info.itemId];
                if (baseinfo.ItemType != type) {
                    continue;
                }
                arr.push(info);
            }
            return arr;
        };
        BagManage.prototype.getItemInfo = function (dbId) {
            return this.itemMap[dbId];
        };
        return BagManage;
    }(GamePart));
    LuckGame.BagManage = BagManage;
    __reflect(BagManage.prototype, "LuckGame.BagManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=BagManage.js.map
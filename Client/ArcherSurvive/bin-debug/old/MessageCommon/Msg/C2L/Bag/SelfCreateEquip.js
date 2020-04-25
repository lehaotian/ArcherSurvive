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
var SelfCreateEquip = (function (_super) {
    __extends(SelfCreateEquip, _super);
    function SelfCreateEquip() {
        var _this = _super.call(this) || this;
        /**
         * 炼器师的id
         */
        _this.masterId = 0;
        /**
         * 配方id
         */
        _this.recipeId = 0;
        /**
         * 主材料dbid
         */
        _this.mainMaterDbId = 0;
        /**
         * 辅助材料 key:itemId   value:数量
         */
        _this.assistMaterMap = {};
        return _this;
    }
    SelfCreateEquip.prototype._OnSerial = function () {
        this.WriteInt64(this.masterId);
        this.WriteInt32(this.recipeId);
        this.WriteInt64(this.mainMaterDbId);
        this.WriteInt16(Object.keys(this.assistMaterMap).length);
        for (var itemId in this.assistMaterMap) {
            this.WriteInt32(itemId);
            this.WriteInt32(this.assistMaterMap[itemId]);
        }
    };
    return SelfCreateEquip;
}(Common.GameMessage));
__reflect(SelfCreateEquip.prototype, "SelfCreateEquip");
//# sourceMappingURL=SelfCreateEquip.js.map
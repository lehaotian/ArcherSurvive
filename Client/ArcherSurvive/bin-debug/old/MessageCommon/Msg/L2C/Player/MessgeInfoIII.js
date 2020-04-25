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
var MessgeInfoIII = (function (_super) {
    __extends(MessgeInfoIII, _super);
    function MessgeInfoIII() {
        var _this = _super.call(this) || this;
        /**
         * 玩家的等级
         */
        _this.Lv = 0;
        /**
         * 当前经验
         */
        _this.currExp = 0;
        /**
         * 升到下一级所需的经验
         */
        _this.nextNeedExp = 0;
        return _this;
    }
    MessgeInfoIII.prototype._OnDeserialize = function () {
        this.Lv = this.ReadInt32();
        this.currExp = this.ReadInt32();
        this.nextNeedExp = this.ReadInt32();
    };
    return MessgeInfoIII;
}(Common.GameMessage));
__reflect(MessgeInfoIII.prototype, "MessgeInfoIII");
//# sourceMappingURL=MessgeInfoIII.js.map
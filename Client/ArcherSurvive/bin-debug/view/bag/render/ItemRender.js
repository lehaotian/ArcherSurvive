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
var ItemRender = (function (_super) {
    __extends(ItemRender, _super);
    function ItemRender() {
        var _this = _super.call(this) || this;
        _this.skinName = "ItemRenderSkin";
        return _this;
    }
    ItemRender.prototype.childrenCreated = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    ItemRender.prototype.touchBegin = function () {
        if (this.icon.visible) {
            LayerManager.Instance.getPop(BagMainPop).item.source = this.icon.source;
            LayerManager.Instance.getPop(BagMainPop).item.visible = true;
            this.icon.visible = false;
        }
        else {
        }
    };
    ItemRender.prototype.touchEnd = function () {
        if (LayerManager.Instance.getPop(BagMainPop).item.visible) {
            this.icon.source = LayerManager.Instance.getPop(BagMainPop).item.source;
            LayerManager.Instance.getPop(BagMainPop).item.visible = false;
            this.icon.visible = true;
        }
        else {
        }
    };
    ItemRender.prototype.dataChanged = function () {
        if (this.data) {
            this.icon.source = "skill_" + this.data + "_png";
        }
        else {
            this.icon.visible = false;
        }
    };
    return ItemRender;
}(eui.ItemRenderer));
__reflect(ItemRender.prototype, "ItemRender");
//# sourceMappingURL=ItemRender.js.map
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
var ui;
(function (ui) {
    var BagItemRender = (function (_super) {
        __extends(BagItemRender, _super);
        function BagItemRender() {
            var _this = _super.call(this) || this;
            _this.skinName = "BagItemSkin";
            return _this;
        }
        BagItemRender.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        BagItemRender.prototype.biudEvent = function () {
            this.itemInfoView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
        };
        BagItemRender.prototype.dataChanged = function () {
            this.itemInfoView.showItem(this.data.itemId, this.data.num);
        };
        BagItemRender.prototype.useItem = function () {
            SingletonBase.Get(ui.ShowItemInfo).open(null, this.data);
        };
        return BagItemRender;
    }(RenderBaseUI));
    ui.BagItemRender = BagItemRender;
    __reflect(BagItemRender.prototype, "ui.BagItemRender");
})(ui || (ui = {}));
//# sourceMappingURL=BagItemRender.js.map
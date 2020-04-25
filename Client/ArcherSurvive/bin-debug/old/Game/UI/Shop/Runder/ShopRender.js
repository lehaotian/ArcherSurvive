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
    var ShopRender = (function (_super) {
        __extends(ShopRender, _super);
        function ShopRender() {
            var _this = _super.call(this) || this;
            _this.skinName = "ShopRender";
            return _this;
        }
        ShopRender.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        ShopRender.prototype.biudEvent = function () {
            this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopBtnH, this);
        };
        ShopRender.prototype.shopBtnH = function () {
            SingletonBase.Get(ui.ShopDes).open(null, this.data.itemId, this.data.id);
        };
        ShopRender.prototype.dataChanged = function () {
            var itemId = this.data.itemId;
            var info = LuckGame.JsonManager.Instance.getJsonMap("Item");
            var item1 = info[itemId];
            this.itemNum0.text = this.data.num;
            this.itemName0.text = item1.ItemName;
            this.itemIcon0.source = item1.Icon + "_png";
        };
        return ShopRender;
    }(RenderBaseUI));
    ui.ShopRender = ShopRender;
    __reflect(ShopRender.prototype, "ui.ShopRender");
})(ui || (ui = {}));
//# sourceMappingURL=ShopRender.js.map
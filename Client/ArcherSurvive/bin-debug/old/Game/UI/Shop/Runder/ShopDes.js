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
    var ShopDes = (function (_super) {
        __extends(ShopDes, _super);
        function ShopDes() {
            var _this = _super.call(this) || this;
            _this.shopId = 1;
            _this.skinName = "shopDes";
            return _this;
        }
        ShopDes.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        ShopDes.prototype.closeView = function () {
            _super.prototype.close.call(this);
        };
        ShopDes.prototype.biudEvent = function () {
            this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyBtnH, this);
        };
        ShopDes.prototype.buyBtnH = function () {
            LuckGame.ShopService.Instance.RequestBuyItems(this.shopId, 1);
            _super.prototype.close.call(this);
        };
        ShopDes.prototype.openView = function (data) {
            var itemId = data[0];
            this.shopId = data[1];
            var info = LuckGame.JsonManager.Instance.getJsonMap("Item");
            this.desShop.text = info[itemId].des;
        };
        return ShopDes;
    }(BaseUI));
    ui.ShopDes = ShopDes;
    __reflect(ShopDes.prototype, "ui.ShopDes");
})(ui || (ui = {}));
//# sourceMappingURL=ShopDes.js.map
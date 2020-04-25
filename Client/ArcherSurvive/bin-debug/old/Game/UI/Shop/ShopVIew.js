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
    var ShopView = (function (_super) {
        __extends(ShopView, _super);
        function ShopView() {
            var _this = _super.call(this, "ShopSkin") || this;
            _this.shopArray = new eui.ArrayCollection();
            _this.shopType = 1;
            return _this;
        }
        ShopView.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        ShopView.prototype.biudEvent = function () {
            this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.shopBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopBtn1H, this);
            this.shopBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopBtn2H, this);
            this.shopList.itemRenderer = ui.ShopRender;
            this.shopList.dataProvider = this.shopArray;
        };
        ShopView.prototype.closeView = function () {
            _super.prototype.close.call(this);
        };
        ShopView.prototype.openView = function () {
            this.shopBtn1H();
        };
        ShopView.prototype.shopBtn1H = function () {
            this.shopType = 1;
            this.push();
        };
        ShopView.prototype.shopBtn2H = function () {
            this.shopType = 2;
            this.push();
        };
        ShopView.prototype.push = function () {
            var info = LuckGame.JsonManager.Instance.getJsonMap("Shop");
            var arr = [];
            for (var key in info) {
                var into = info[key];
                if (into.type == this.shopType) {
                    arr.push(info[key]);
                }
            }
            this.shopArray.replaceAll(arr);
        };
        return ShopView;
    }(BaseUI));
    ui.ShopView = ShopView;
    __reflect(ShopView.prototype, "ui.ShopView");
})(ui || (ui = {}));
//# sourceMappingURL=ShopVIew.js.map
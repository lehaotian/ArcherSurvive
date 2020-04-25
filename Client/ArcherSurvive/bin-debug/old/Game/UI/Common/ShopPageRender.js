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
    var ShopPageRender = (function (_super) {
        __extends(ShopPageRender, _super);
        function ShopPageRender() {
            return _super.call(this, "ShopPageRender") || this;
            // super();
        }
        return ShopPageRender;
    }(BaseUI));
    ui.ShopPageRender = ShopPageRender;
    __reflect(ShopPageRender.prototype, "ui.ShopPageRender");
})(ui || (ui = {}));
//# sourceMappingURL=ShopPageRender.js.map
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
    var BagView = (function (_super) {
        __extends(BagView, _super);
        function BagView() {
            var _this = _super.call(this, "BagView") || this;
            _this.itemArray = new eui.ArrayCollection();
            return _this;
        }
        BagView.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        BagView.prototype.biudEvent = function () {
            this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.itemList.itemRenderer = ui.BagItemRender;
            this.itemList.dataProvider = this.itemArray;
        };
        BagView.prototype.openView = function () {
            this.showItemList();
        };
        BagView.prototype.showItemList = function () {
            //获取背包的物品
            var arr = LuckGame.BagManage.Instance.getBagItemArr();
            this.itemArray.replaceAll(arr);
        };
        BagView.prototype.refresh = function () {
            if (!this.isShowing()) {
                return;
            }
            this.showItemList();
        };
        return BagView;
    }(BaseUI));
    ui.BagView = BagView;
    __reflect(BagView.prototype, "ui.BagView");
})(ui || (ui = {}));
//# sourceMappingURL=BagView.js.map
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
    var ItemInfoView = (function (_super) {
        __extends(ItemInfoView, _super);
        function ItemInfoView() {
            var _this = _super.call(this, "ItemInfoSkin") || this;
            _this.itemShowInfo = null;
            return _this;
        }
        ItemInfoView.prototype.showInfo = function () {
            this.frameIcon.source = CommonClass.getItemFrame(this.itemShowInfo.color); //this.itemShowInfo.color;
            this.itemIcon.source = this.itemShowInfo.itemIcon;
            this.itemName.text = this.itemShowInfo.itemName;
            this.itemNum.text = this.itemShowInfo.num + "";
            this.frameIcon.visible = this.itemShowInfo.color == 0 ? false : true;
            this.itemIcon.visible = this.itemShowInfo.itemIcon == "" ? false : true;
            this.itemName.visible = this.itemShowInfo.itemName == "" ? false : true;
            this.itemNum.visible = this.itemShowInfo.num == 0 ? false : true;
        };
        ItemInfoView.prototype.noItem = function () {
            this.itemShowInfo = new ItemShowInfo();
            this.itemShowInfo.color = 1;
            this.showInfo();
        };
        ItemInfoView.prototype.showItem = function (itemId, num) {
            if (num === void 0) { num = 0; }
            this.itemShowInfo = new ItemShowInfo();
            var info = LuckGame.JsonManager.Instance.getJsonMap("Item")[itemId];
            this.itemShowInfo.color = info.quality;
            this.itemShowInfo.itemIcon = info.Icon + "_png";
            this.itemShowInfo.itemName = info.ItemName;
            this.itemShowInfo.num = num;
            this.showInfo();
        };
        ItemInfoView.prototype.showItem2 = function (color, icon, name, num) {
            if (num === void 0) { num = 0; }
            this.itemShowInfo = new ItemShowInfo();
            this.itemShowInfo.color = color;
            this.itemShowInfo.itemIcon = icon + "_png";
            this.itemShowInfo.itemName = name;
            this.itemShowInfo.num = num;
            this.showInfo();
        };
        return ItemInfoView;
    }(BaseUI));
    ui.ItemInfoView = ItemInfoView;
    __reflect(ItemInfoView.prototype, "ui.ItemInfoView");
})(ui || (ui = {}));
//# sourceMappingURL=ItemInfoView.js.map
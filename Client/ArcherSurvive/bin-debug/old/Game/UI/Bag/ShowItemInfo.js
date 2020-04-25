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
    var ShowItemInfo = (function (_super) {
        __extends(ShowItemInfo, _super);
        function ShowItemInfo() {
            var _this = _super.call(this, "ShowItemInfo") || this;
            _this.proArray = new eui.ArrayCollection();
            _this.data = null;
            return _this;
        }
        ShowItemInfo.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        ShowItemInfo.prototype.biudEvent = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
            this.proList.itemRenderer = ui.TalentProRender;
            this.proList.dataProvider = this.proArray;
        };
        ShowItemInfo.prototype.openView = function (_info) {
            this.data = _info[0];
            //设置名称
            var info = LuckGame.JsonManager.Instance.getJsonMap("Item")[this.data.itemId];
            this.itemName.text = info.ItemName;
            this.des.text = info.des;
            if (this.data.basePro != null) {
                this.proList.visible = true;
                this.initProList();
            }
            else {
                this.proList.visible = false;
            }
        };
        ShowItemInfo.prototype.initProList = function () {
            var arr = [];
            for (var key in this.data.basePro) {
                var val = this.data.basePro[key];
                arr.push({ "name": key, "val": val });
            }
            this.proArray.replaceAll(arr);
        };
        ShowItemInfo.prototype.useItem = function () {
            LuckGame.BagService.Instance.reqUseItem(this.data.DbId, 1);
        };
        return ShowItemInfo;
    }(BaseUI));
    ui.ShowItemInfo = ShowItemInfo;
    __reflect(ShowItemInfo.prototype, "ui.ShowItemInfo");
})(ui || (ui = {}));
//# sourceMappingURL=ShowItemInfo.js.map
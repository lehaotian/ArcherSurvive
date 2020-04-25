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
    var materRender2 = (function (_super) {
        __extends(materRender2, _super);
        function materRender2() {
            var _this = _super.call(this) || this;
            _this.skinName = "materRender2";
            return _this;
        }
        // private addImg:eui.Image;
        materRender2.prototype.ComponentCreate = function () {
            this.bindEvent();
        };
        materRender2.prototype.bindEvent = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
        };
        materRender2.prototype.useItem = function () {
            if (LuckGame.BagService.Instance.pos == 0) {
                LuckGame.BagService.Instance.mainMaterDbId = this.data.DbId;
            }
            else {
                // LuckGame.BagService.Instance.materMap[LuckGame.BagService.Instance.pos] = this.data.itemId;
                LuckGame.BagService.Instance.addMater(LuckGame.BagService.Instance.pos, this.data.itemId);
            }
            // Event.DispatchEvent("updateshowRecipeInfo");
            SingletonBase.Get(ui.MaterView).close();
            SingletonBase.Get(ui.CareerSkillView).updateRecipeInfo();
        };
        materRender2.prototype.dataChanged = function () {
            var num = LuckGame.BagService.Instance.createMaterMap[this.data.itemId];
            if (num != null) {
                num = this.data.num - num;
            }
            else {
                num = this.data.num;
            }
            this.itemInfoView.showItem(this.data.itemId, num);
        };
        return materRender2;
    }(RenderBaseUI));
    ui.materRender2 = materRender2;
    __reflect(materRender2.prototype, "ui.materRender2");
})(ui || (ui = {}));
//# sourceMappingURL=materRender2.js.map
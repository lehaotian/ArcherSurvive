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
    var MaterView = (function (_super) {
        __extends(MaterView, _super);
        function MaterView() {
            var _this = _super.call(this, "MaterView") || this;
            _this.materArray = new eui.ArrayCollection();
            return _this;
        }
        MaterView.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        MaterView.prototype.biudEvent = function () {
            this.closeView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.materList.itemRenderer = ui.materRender2;
            this.materList.dataProvider = this.materArray;
        };
        MaterView.prototype.openView = function () {
            //筛选
            this.showItemList();
        };
        MaterView.prototype.showItemList = function () {
            var recipeInfo = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe")[LuckGame.BagService.Instance.recipeId];
            var str = recipeInfo.assistMater;
            var strarr = str.split("_");
            //获取背包的物品
            var arr = LuckGame.BagManage.Instance.getBagItemArrByType(parseInt(strarr[0]));
            var arr2 = [];
            for (var index in arr) {
                var info = arr[index];
                var num = LuckGame.BagService.Instance.createMaterMap[info.itemId];
                if (num != null && num >= info.num) {
                    continue;
                }
                arr2.push(info);
            }
            // let ynum = Math.floor(arr.length / 4) + 1;
            // this.materList.repeatY = ynum;
            this.materArray.replaceAll(arr2);
        };
        return MaterView;
    }(BaseUI));
    ui.MaterView = MaterView;
    __reflect(MaterView.prototype, "ui.MaterView");
})(ui || (ui = {}));
//# sourceMappingURL=MaterView.js.map
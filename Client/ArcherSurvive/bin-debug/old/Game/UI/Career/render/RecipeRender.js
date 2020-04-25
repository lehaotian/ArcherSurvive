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
    var RecipeRender = (function (_super) {
        __extends(RecipeRender, _super);
        function RecipeRender() {
            var _this = _super.call(this) || this;
            _this.skinName = "recipeRender";
            return _this;
        }
        RecipeRender.prototype.ComponentCreate = function () {
            this.biudEvent();
        };
        RecipeRender.prototype.biudEvent = function () {
            this.itemInfoView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
        };
        RecipeRender.prototype.useItem = function () {
            // Event.DispatchEvent("showRecipeInfo", this.data.recipeId);
            SingletonBase.Get(ui.CareerSkillView).showRecipeInfo(this.data.recipeId);
        };
        RecipeRender.prototype.dataChanged = function () {
            this.itemInfoView.showItem(this.data.itemId);
            //设置
            this.num.text = this.data.powerNum;
        };
        return RecipeRender;
    }(RenderBaseUI));
    ui.RecipeRender = RecipeRender;
    __reflect(RecipeRender.prototype, "ui.RecipeRender");
})(ui || (ui = {}));
//# sourceMappingURL=RecipeRender.js.map
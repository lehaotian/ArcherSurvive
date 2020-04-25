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
    var CareerSkillView = (function (_super) {
        __extends(CareerSkillView, _super);
        function CareerSkillView() {
            var _this = _super.call(this, "CareerSkillSkin") || this;
            _this.materArray = new eui.ArrayCollection();
            _this.recipeArray = new eui.ArrayCollection();
            _this.effect = null;
            return _this;
        }
        CareerSkillView.prototype.ComponentCreate = function () {
            this.biudEvent();
            this.initText();
        };
        CareerSkillView.prototype.biudEvent = function () {
            this.closeView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            // this.mainFrameIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getMainMater, this);
            this.createBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startCreateEquip, this);
            this.materList.itemRenderer = ui.materRender;
            this.materList.dataProvider = this.materArray;
            this.recipeList.itemRenderer = ui.RecipeRender;
            this.recipeList.dataProvider = this.recipeArray;
        };
        CareerSkillView.prototype.initText = function () {
            this.createBtn.setText = "炼制";
        };
        CareerSkillView.prototype.openView = function () {
            this.recipeArray.replaceAll(this.getEquipRecipeArr());
            if (LuckGame.BagService.Instance.recipeId <= 0) {
                this.clearMaterData();
            }
            this.showRecipeInfo(LuckGame.BagService.Instance.recipeId);
        };
        CareerSkillView.prototype.getEquipRecipeArr = function () {
            var arr = [];
            var map = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe");
            for (var key in map) {
                arr.push(map[key]);
            }
            return arr;
        };
        /**
         * 失败
         */
        CareerSkillView.prototype.createEquipFail = function () {
            this.showRecipeInfo(LuckGame.BagService.Instance.recipeId);
            this.playEffect("e5", 1);
        };
        /**
         * 成功
         */
        CareerSkillView.prototype.createEquipSucc = function () {
            this.showRecipeInfo(LuckGame.BagService.Instance.recipeId);
            this.playEffect("e3", 3);
        };
        CareerSkillView.prototype.playEffect = function (name, tiems) {
            if (this.effect == null) {
                this.effect = new ui.ViewEffect();
            }
            this.effect.loadRes(name, tiems);
            this.targetEffect.addChild(this.effect);
        };
        CareerSkillView.prototype.showRecipeInfo = function (id) {
            LuckGame.BagService.Instance.recipeId = id;
            this.clearMaterData();
            this.showTargetItem();
            this.showMainMater();
            this.showMater();
        };
        CareerSkillView.prototype.showTargetItem = function () {
            if (LuckGame.BagService.Instance.recipeId == 0) {
                this.target.visible = false;
                return;
            }
            this.target.visible = true;
            var recipeInfo = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe")[LuckGame.BagService.Instance.recipeId];
            this.target.source = CommonClass.getItemIcon(recipeInfo.itemId);
        };
        CareerSkillView.prototype.showMainMater = function () {
            if (LuckGame.BagService.Instance.recipeId <= 0) {
                // this.mainItemName.visible = false;
                // this.mainItemIcon.skin = "UI/bag/UI3_9.png";
                // this.mainFrameIcon.skin = ImgUrl.getQualityFrame(1);
                this.mainFrameIcon.noItem();
                return;
            }
            var recipeInfo = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe")[LuckGame.BagService.Instance.recipeId];
            //获取背包里有没有这个主材料
            var info = LuckGame.BagManage.Instance.getItemInfoByItemId(recipeInfo.mainMater);
            if (info == null) {
                this.mainFrameIcon.noItem();
                return;
            }
            LuckGame.BagService.Instance.mainMaterDbId = info.DbId;
            this.mainFrameIcon.showItem(recipeInfo.mainMater);
            // let iteminfo: ItemInfo = LuckGame.BagManage.Instance.getItemInfo(LuckGame.BagService.Instance.mainMaterDbId);
            // this.mainFrameIcon.showItem(iteminfo.itemId);
            // this.mainItemName.visible = true;
            // let info = LuckGame.JsonManager.Instance.getJsonMap("Item")[iteminfo.itemId];
            // this.mainItemName.text = info.ItemName;
            // this.mainItemIcon.skin = ImgUrl.getSkin(ImgUrl.itemImgUrl, info.Icon);
            // this.mainFrameIcon.skin = ImgUrl.getQualityFrame(info.quality);
        };
        CareerSkillView.prototype.showMater = function () {
            var arr = [];
            for (var pos in LuckGame.BagService.Instance.materMap) {
                arr.push({ "pos": pos, "id": LuckGame.BagService.Instance.materMap[pos] });
            }
            this.materArray.replaceAll(arr);
        };
        CareerSkillView.prototype.clearMaterData = function () {
            for (var i = 1; i <= 4; i++) {
                LuckGame.BagService.Instance.materMap[i] = 0;
            }
            LuckGame.BagService.Instance.mainMaterDbId = 0;
            LuckGame.BagService.Instance.createMaterMap = {};
        };
        CareerSkillView.prototype.updateRecipeInfo = function () {
            this.showMainMater();
            this.showMater();
        };
        CareerSkillView.prototype.getMainMater = function () {
            LuckGame.BagService.Instance.pos = 0;
            SingletonBase.Get(ui.MaterView).open();
            // ViewManager.Inst.OpenView("MaterView", false, Laya.Handler.create(this, function (ui) {
            // 	this.mPreUI = ui;
            // 	this.mPreUI.openView();
            // }), null, TierType.dialogRoot);
        };
        CareerSkillView.prototype.startCreateEquip = function () {
            if (LuckGame.BagService.Instance.recipeId == 0) {
                return;
            }
            if (LuckGame.BagService.Instance.mainMaterDbId == 0) {
                return;
            }
            LuckGame.BagService.Instance.reqSelfCreateEquip();
        };
        return CareerSkillView;
    }(BaseUI));
    ui.CareerSkillView = CareerSkillView;
    __reflect(CareerSkillView.prototype, "ui.CareerSkillView");
})(ui || (ui = {}));
//# sourceMappingURL=CareerSkillView.js.map
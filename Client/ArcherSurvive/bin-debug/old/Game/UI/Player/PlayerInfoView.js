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
    var PlayerInfoView = (function (_super) {
        __extends(PlayerInfoView, _super);
        function PlayerInfoView() {
            var _this = _super.call(this, "PlayerInfoView") || this;
            _this.talentArray = new eui.ArrayCollection();
            _this.proArray = new eui.ArrayCollection();
            return _this;
        }
        PlayerInfoView.prototype.ComponentCreate = function () {
            this.biudEvent();
            this.initBtn();
        };
        PlayerInfoView.prototype.biudEvent = function () {
            this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.createEquipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createEquip, this);
            this.createBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_createBtn2, this);
            this.talentList.itemRenderer = ui.TalentItemRender;
            this.talentList.dataProvider = this.talentArray;
            this.proList.itemRenderer = ui.TalentProRender;
            this.proList.dataProvider = this.proArray;
        };
        PlayerInfoView.prototype.initBtn = function () {
            this.createEquipBtn.setText = "炼器";
        };
        PlayerInfoView.prototype.openView = function () {
            this.init();
        };
        PlayerInfoView.prototype.init = function () {
            var arr = [];
            for (var key in LuckGame.PlayerManage.Instance.rootResultMap) {
                var val = LuckGame.PlayerManage.Instance.rootResultMap[key];
                arr.push({ "name": key, "val": val });
            }
            this.talentArray.replaceAll(arr);
            this.initProList();
        };
        PlayerInfoView.prototype.initProList = function () {
            var arr = [];
            for (var key in LuckGame.PlayerManage.Instance.proResultMap) {
                var val = LuckGame.PlayerManage.Instance.proResultMap[key];
                arr.push({ "name": key, "val": val });
            }
            this.proArray.replaceAll(arr);
        };
        //炼器
        PlayerInfoView.prototype.createEquip = function () {
            SingletonBase.Get(ui.CareerSkillView).open();
            // ViewManager.Inst.OpenView("CareerSkillView", false, Laya.Handler.create(this, function (ui) {
            // 	this.mPreUI = ui;
            // 	this.mPreUI.openView(1);
            // }), null, TierType.dialogRoot);
            // ViewManager.Inst.HideView("PlayerInfoView");
        };
        PlayerInfoView.prototype.onclick_createBtn2 = function () {
            var effect = new ui.ViewEffect();
            effect.loadRes("e2", 1);
            this.createBtn2.addChild(effect);
        };
        return PlayerInfoView;
    }(BaseUI));
    ui.PlayerInfoView = PlayerInfoView;
    __reflect(PlayerInfoView.prototype, "ui.PlayerInfoView");
})(ui || (ui = {}));
//# sourceMappingURL=PlayerInfoView.js.map
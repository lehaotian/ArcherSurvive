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
/*
* name;
*/
var ui;
(function (ui) {
    var CombatCard = (function (_super) {
        __extends(CombatCard, _super);
        function CombatCard() {
            var _this = _super.call(this, "CombatCardView") || this;
            /**
             * 玩家id
             */
            _this.playerId = 0;
            _this.skeletonAnim = new ui.SkeletonAnim();
            _this.animData = null;
            return _this;
        }
        CombatCard.prototype.initData = function (playerId) {
            this.playerId = playerId;
            this.initModel();
            this.initPos();
            this.updataBloodUI();
        };
        CombatCard.prototype.clear = function () {
            SingletonBase.Get(LuckGame.LayerManager).removeSelf(this);
        };
        CombatCard.prototype.initModel = function () {
            this.skeletonAnim.loadRes("Swordsman");
            this.animPos.addChild(this.skeletonAnim);
            // this.effectEntity.loadAnimAndRes(this.path,"CP901",0);
        };
        CombatCard.prototype.initPos = function () {
            var data = LuckGame.ComBatManage.Instance.combatCardDataMap[this.playerId];
            //读表
            var posInfo = LuckGame.JsonManager.Instance.getJsonMap("HeroPos")[data.pos];
            if (data.pos > 6) {
                this.animPos.skewY = 180;
            }
            else {
                this.animPos.skewY = 0;
            }
            this.x = posInfo.posX;
            this.y = posInfo.posY;
        };
        CombatCard.prototype.anim = function (data) {
            this.animData = data;
            switch (data.actionType) {
                case 1://1：技能
                    this.useSkill();
                    break;
                case 2://2：属性
                    this.dropBlood();
                    break;
                case 3://2：属性
                    this.die();
                    break;
            }
        };
        CombatCard.prototype.useSkill = function () {
            this.skeletonAnim.play("attack1", 1, new FuntionCall(this.animEnd, this));
        };
        /**
         * 掉血
         */
        CombatCard.prototype.dropBlood = function () {
            var waveHint = LuckGame.HintManage.instan.getObj("DropBloodView");
            if (waveHint == null) {
                waveHint = new ui.DropBloodView();
            }
            this.addChild(waveHint);
            waveHint.x = 36;
            waveHint.y = 0;
            waveHint.showContent(this.animData.actionVal, new FuntionCall(this.animEnd, this)); //,new FuntionCall(this.animEnd,this)
            //
            if (this.animData.proType == ProType.Hp) {
                this.updataBloodUI();
            }
            // this.animEnd();
            // this.skeletonAnim.play("steady");
        };
        CombatCard.prototype.updataBloodUI = function () {
            var data = LuckGame.ComBatManage.Instance.combatCardDataMap[this.playerId];
            if (this.animData != null) {
                data.currHP += this.animData.actionVal;
            }
            this.proBar.setPro = data.currHP / data.baseHP;
            this.currHPLab.text = data.baseHP + " / " + data.currHP + "";
        };
        CombatCard.prototype.animEnd = function () {
            LuckGame.AttackControl.Instance.animEnd();
        };
        CombatCard.prototype.attack = function () {
        };
        CombatCard.prototype.die = function () {
            this.skeletonAnim.visible = false;
            var tw = egret.Tween.get(this);
            tw.to(null, 500);
            tw.call(this.animEnd, this);
            // LuckGame.AttackControl.Instance.animEnd();
        };
        return CombatCard;
    }(BaseUI));
    ui.CombatCard = CombatCard;
    __reflect(CombatCard.prototype, "ui.CombatCard");
})(ui || (ui = {}));
//# sourceMappingURL=CombatCard.js.map
/*
* name;
*/
namespace ui {
	export class CombatCard extends BaseUI {
		public constructor() {
			super("CombatCardView");
		}

        private proBar:ProgressBarView;
        private currHPLab:eui.Label;
        private animPos:eui.Group;
        
 
        /**
         * 玩家id
         */
        private playerId = 0;
        public initData(playerId) {
            this.playerId = playerId;
            this.initModel();
            this.initPos();
            this.updataBloodUI();
        }

        clear(){
            SingletonBase.Get(LuckGame.LayerManager).removeSelf(this);
        }

        private skeletonAnim = new SkeletonAnim();
        initModel(){
            this.skeletonAnim.loadRes("Swordsman");
            this.animPos.addChild(this.skeletonAnim);
            // this.effectEntity.loadAnimAndRes(this.path,"CP901",0);
        }

        initPos(){
            let data:CombatCardData = LuckGame.ComBatManage.Instance.combatCardDataMap[this.playerId];
            //读表
            let posInfo = LuckGame.JsonManager.Instance.getJsonMap("HeroPos")[data.pos];
            if(data.pos > 6){
                this.animPos.skewY = 180;
            }else{
                this.animPos.skewY = 0;
            }
            this.x = posInfo.posX;
            this.y = posInfo.posY;
        }

        private animData:CardProcessData = null;
        public anim(data:CardProcessData) {
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
        }

        useSkill(){
            this.skeletonAnim.play("attack1",1,new FuntionCall(this.animEnd,this));
        }

        /**
         * 掉血
         */
        dropBlood(){
            let waveHint = LuckGame.HintManage.instan.getObj("DropBloodView");
            if(waveHint == null){
                waveHint = new DropBloodView();
            }
            this.addChild(waveHint);
            waveHint.x = 36
            waveHint.y = 0;
            waveHint.showContent(this.animData.actionVal,new FuntionCall(this.animEnd,this));//,new FuntionCall(this.animEnd,this)
            //
            if(this.animData.proType == ProType.Hp){
                this.updataBloodUI();
            }
            // this.animEnd();
            // this.skeletonAnim.play("steady");
        }

        updataBloodUI(){
            let data:CombatCardData = LuckGame.ComBatManage.Instance.combatCardDataMap[this.playerId];
            if(this.animData != null){
                data.currHP += this.animData.actionVal;
            }
            this.proBar.setPro = data.currHP/data.baseHP;
            this.currHPLab.text = data.baseHP+" / "+data.currHP+"";
        }

        public animEnd(){
            LuckGame.AttackControl.Instance.animEnd();
        }

        public attack(){
            
        }

        public die(){
            this.skeletonAnim.visible = false;
            let tw = egret.Tween.get(this);
            tw.to(null, 500);
            tw.call(this.animEnd, this);
            // LuckGame.AttackControl.Instance.animEnd();
        }

        //上场之前加载资源

        //攻击 -1.攻击之前的动作 2.攻击动作

        //被攻击 -1被攻击之前的动作 2.被攻击动作

        //回到自己的位置上
    }
}
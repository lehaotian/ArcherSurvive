/*
* name;
*/
module LuckGame {
    export class ComBatHandler extends FrameWork.IOHandler {
        constructor() {
            super();
        }

        //注册所有消息
        public RegisterAllMessage(){

            this.RegisterMessage(L2C_Combat.CombatCardData,this.getCombatCardDataHandler,new Combat.GetCombatCardData());

            this.RegisterMessage(L2C_Combat.CombatResultData,this.combatResultDataHandler,new Combat.CombatResultData());
        }

        getCombatCardDataHandler(msg){
            ComBatManage.Instance.combatCardDataMap = {};
            for(let key in msg.cardDataMap){
                ComBatManage.Instance.initCombatCardDataMap(msg.cardDataMap[key]);
            }
        }

        combatResultDataHandler(msg){
            ComBatManage.Instance.attProcessDataMap = {};
            for(let key in msg.attProcessDataMap){
                ComBatManage.Instance.initAttProcessDataMap(key,msg.attProcessDataMap[key]);
            }
            this.openLoginView();
        }

        openLoginView(){
            SingletonBase.Get(ui.CombatMainView).open();
            // ViewManager.Inst.OpenView("CombatMainView",false,function(ui){
            //     this.mPreUI = ui;
            //     ui.openView();
            // },null,TierType.viewRoot);
        }

        
    }
}
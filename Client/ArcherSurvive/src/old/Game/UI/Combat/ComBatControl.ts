/*
* 单例
*/
module LuckGame {
    export class ComBatControl{
    public static Instance:ComBatControl;
    constructor(){
        ComBatControl.Instance = this;
    }

    
    //进场
    public initCardPos(onwer){
        this.attackTimes = 0;
        AttackControl.Instance.initCardPos(onwer);
    }

    //回合开始

    //攻击
    public attackTimes = 0;
    public attack(){
        this.attackTimes++;
        let combatProcessData = ComBatManage.Instance.getAttProcessDataMap(this.attackTimes);
        if(combatProcessData == null){
            //战斗结束
            console.log("战斗结束");
            // ViewManager.Inst.HideView("CombatMainView");
            SingletonBase.Get(ui.CombatMainView).close();
            return;
        }
        AttackControl.Instance.processType = 0;
        AttackControl.Instance.attack();
    }

    //回合结束


}
}
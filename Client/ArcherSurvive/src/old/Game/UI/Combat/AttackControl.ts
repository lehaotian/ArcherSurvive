/*
* 单例
*/
module LuckGame {
    export class AttackControl{
    public static Instance:AttackControl;
    constructor(){
        AttackControl.Instance = this;
    }
    //玩家数据
    /**
     * key: playerId 
     */
    public combatCardMap = {};
    public getCard(playerId){
        return this.combatCardMap[playerId];
    }

    // private combatCardt:ui.CombatCard = null;
    //攻击之前加载资源
    public initCardPos(onwer){
        // this.combatCardt = new ui.CombatCard();
        // this.combatCardt.initData("1");
        // onwer.addChild(this.combatCardt);
        this.clearData();
        for(let key in ComBatManage.Instance.combatCardDataMap){
            let combatCard = new ui.CombatCard();
            combatCard.initData(key);
            onwer.addChild(combatCard);
            this.combatCardMap[key] = combatCard;
        }

        //
        ComBatControl.Instance.attack();
    }

    clearData(){
        for(let key in this.combatCardMap){
            let combatCard = this.combatCardMap[key];
            combatCard.initData(key);
            combatCard.clear();
            delete this.combatCardMap[key];
        }
    }

    //找到攻击点

    //攻击

    public processType = 0;
    public attack(){
        this.processType++;
        if(this.processType >= ProcessType.end){
            //一次出手结束
            ComBatControl.Instance.attack();
            return;
        }
        let combatProcessData:CombatProcessData = ComBatManage.Instance.getAttProcessDataMap(ComBatControl.Instance.attackTimes);
        if(combatProcessData == null){
            //战斗结束
            console.log("战斗结束 AttackControl");
            return;
        }
        let proDataList = combatProcessData.getProcessData(this.processType);
        if(proDataList == null){
            this.attack();
            return;
        }

        this.animTimes = 0;
        let card:ui.CombatCard = null;
        let data:CardProcessData = null;
        for(let index in proDataList){
            data = proDataList[index];
            if(data != null){
                this.animTimes++;
                card = this.getCard(data.playerId);
                card.anim(data);
            }
        }
    }

    public animTimes = 0;
    public animEnd(){
        this.animTimes--;
        if(this.animTimes <= 0){
            this.attack();
        }
        
    }


    //攻击结束
    public attackEnd(){
        //一次出手结束
        this.attack();
        
    }
}
}
/*
* name;
*/
module LuckGame{
    export class ComBatManage extends GamePart {
        public static Instance: ComBatManage;
        constructor() {
            super();
            ComBatManage.Instance = this;
            new ComBatControl();
            new AttackControl();
        }
        //玩家数据
        /**
         * key: playerId 
         */
        public combatCardDataMap = {};
        public initCombatCardDataMap(data:CombatCardData){
            this.combatCardDataMap[data.playerId] = data;
        }

        //攻击过程
        public attProcessDataMap = {};

        public getAttProcessDataMap(attTimes) {
            let data = this.attProcessDataMap[attTimes];
            return data;
        }

        public initAttProcessDataMap(key,data){
            this.attProcessDataMap[key] = data;
        }


        //初始化假数据
        public initData() {
            for (let i = 1; i <= 12; i++) {
                let combatCardData = new CombatCardData();
                combatCardData.playerId = i;
                combatCardData.pos = i;
                this.combatCardDataMap[combatCardData.playerId] = combatCardData;
            }
        }

    }
}
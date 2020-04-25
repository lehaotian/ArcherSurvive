/*
* name;
*/
module Combat{
    export class CombatResultData extends Common.GameMessage{
    constructor(){
        super();
    }

    public attProcessDataMap = {};

    public _OnDeserialize(){
        this.attProcessDataMap = {};
        let count = this.ReadInt32();
        let key = 0;
        for(let i = 0 ; i < count ; i++){
            let combatProcessData = new CombatProcessData();
            key = this.ReadInt32();
            combatProcessData.boutNum = this.ReadInt32();
            combatProcessData.attDbid = this.ReadInt64();
            let count2 = this.ReadInt32();
            for(let j = 0 ; j < count2 ; j++){
                let arr = [];
                let key2 = this.ReadInt32();
                let count3 = this.ReadInt32();
                for(let n = 0 ; n < count3 ; n++){
                    let cardProcessData = new CardProcessData();
                    cardProcessData.playerId = this.ReadInt64();
                    cardProcessData.actionType = this.ReadInt32();
                    cardProcessData.actionVal = this.ReadInt32();
                    cardProcessData.proType = this.ReadInt32();
                    combatProcessData.addProcessData(key2,cardProcessData);
                }
                
            }
            this.attProcessDataMap[key] = combatProcessData;
        }
    }


}
}
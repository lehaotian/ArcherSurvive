/*
* name;
*/
module LogicAccount{
    export class PlayerInfoList extends Common.GameMessage{
    constructor(){
        super();
    }

    public playerInfoList = [];
    public _OnDeserialize(){
        this.playerInfoList = [];
        let count =  this.ReadInt8();
        for(let i = 0 ; i < count ; i++){
            let playerInfo = new PlayerInfo();
            playerInfo.DbId = this.ReadInt64();
            playerInfo.playerName = this.ReadString();
            playerInfo.sex = this.ReadInt8();
            playerInfo.Lv = this.ReadInt32();
            this.playerInfoList.push(playerInfo);
        }
    }
    


}
}
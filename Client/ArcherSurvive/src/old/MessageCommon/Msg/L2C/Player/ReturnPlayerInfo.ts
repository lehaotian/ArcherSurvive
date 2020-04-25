/*
* name;
*/
module Player{
    export class ReturnPlayerInfo extends Common.GameMessage{
    constructor(){
        super();
    }


    public playerInfo = new PlayerInfo();
    public _OnDeserialize(){
        this.playerInfo.DbId = this.ReadInt64();
        this.playerInfo.playerName = this.ReadString();
        this.playerInfo.sex = this.ReadInt8();
        this.playerInfo.Lv = this.ReadInt32();
    }
}
}
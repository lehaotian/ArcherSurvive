/*
* name;
*/
module LogicAccount{
    export class CreatePlayerInfo extends Common.GameMessage{
    constructor(){
        super();
    }

    public accountId = 0;
    public playerName = "";
    public sex = 0;

    public _OnSerial(){
        this.WriteInt64(this.accountId);
        this.WriteString(this.playerName);
        this.WriteInt8(this.sex);
    }

}
}
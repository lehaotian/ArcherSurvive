/*
* name;
*/
class MessgeInfoLI extends Common.GameMessage{
    constructor(){
        super();
    }
    public itemDbId = 0;
	public num = 0;

    public _OnSerial(){
        this.WriteInt64(this.itemDbId);
        this.WriteInt32(this.num);
    }

}
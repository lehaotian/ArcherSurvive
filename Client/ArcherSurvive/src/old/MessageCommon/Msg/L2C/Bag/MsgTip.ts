/*
* name;
*/
module Bag{
    export class MsgTip extends Common.GameMessage{
    constructor(){
        super();
    }


    public id = 0;
	
	public  msg = [];

    public _OnDeserialize(){
        this.msg = [];
        this.id = this.ReadInt32();
        let count = this.ReadInt16();
        for(let i = 0 ; i < count ; i++){
            let val = this.ReadString();
            this.msg.push(val);
        }
    }

}
}
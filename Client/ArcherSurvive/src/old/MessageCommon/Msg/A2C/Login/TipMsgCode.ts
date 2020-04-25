/*
* name;
*/
module Login{
    export class TipMsgCode extends Common.GameMessage{
    constructor(){
        super();
    }

    public code = 0;

    public _OnDeserialize(){
        this.code = this.ReadInt32();
    }
}
}
/*
* name;
*/
module Login{
    export class AccountInfo extends Common.GameMessage{
    constructor(){
        super();
    }

    public accountId = 0;

    public _OnDeserialize(){
        this.accountId = this.ReadInt32();
    }

    
}
}
/*
* name;
*/
module Player{
    export class ReturnPlayerPro extends Common.GameMessage{
    constructor(){
        super();
    }

    public proResultMap = {};
    public _OnDeserialize(){
        this.proResultMap = {};
        let count =  this.ReadInt8();
        for(let i = 0 ; i < count ; i++){
            let key = this.ReadInt8();
            let val = this.ReadInt32();
            this.proResultMap[key] = val
        }
    }


}
}
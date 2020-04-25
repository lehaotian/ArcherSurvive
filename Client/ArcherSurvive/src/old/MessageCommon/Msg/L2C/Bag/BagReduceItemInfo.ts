/*
* name;
*/
module Bag{
    export class BagReduceItemInfo extends Common.GameMessage{
    constructor(){
        super();
    }
    public bagSize = 50;
	public useSize = 0;
	/**
	 * 所有物品
	 */
	public reduceItemMap = {};
    public _OnDeserialize(){
        
        this.reduceItemMap = {};
        this.bagSize = this.ReadInt32();
        this.useSize = this.ReadInt32();
        let count = this.ReadInt16();
        for(let i = 0 ; i < count ; i++){
            let dbId = this.ReadInt64();
            let num = this.ReadInt32();
            this.reduceItemMap[dbId] = num;
        }
    }
}
}
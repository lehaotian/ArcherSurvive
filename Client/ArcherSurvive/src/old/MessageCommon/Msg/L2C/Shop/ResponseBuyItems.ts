/*
* name;
*/
module LuckGame
{
    export class ResponseBuyItems extends Common.GameMessage{
    constructor(){
        super();
    }
	
	/**
	 * 物品id
	 */
	public mItemId = 0;
	/**
	 * 物品数量
	 */
    public mItemNum = 0;


    public _OnDeserialize(){
        this.mItemId = this.ReadInt32();
        this.mItemNum = this.ReadInt32();
    }
}
}

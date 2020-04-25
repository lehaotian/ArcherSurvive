/*
* name;
*/
module LuckGame{
    export class RequestBuyItems extends Common.GameMessage{
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


    public _OnSerial(){
        this.WriteInt32(this.mItemId);
		this.WriteInt32(this.mItemNum);
    }

}
}
/*
* name;
*/
module Bag{
    export class BagInfo extends Common.GameMessage{
    constructor(){
        super();
    }

    public bagSize = 50;
	public useSize = 0;
	/**
	 * 所有物品
	 */
	public itemMap = {};

    public _OnDeserialize(){
        this.itemMap = {};

        this.bagSize = this.ReadInt32();
        this.useSize = this.ReadInt32();
        let count = this.ReadInt16();
        for(let i = 0 ; i < count ; i++){
            let itemType2 = this.ReadInt32();
            let itemInfo = null;
            switch (itemType2) {
                case 2:
                    itemInfo = new ProItem();
                    let count2 = this.ReadInt16();
                    for(let j = 0 ; j < count2 ; j++){
                        let proType = this.ReadInt8();
                        let val = this.ReadInt32();
                        itemInfo.basePro[proType] = val;
                    }
                    break;
                default:
                    itemInfo = new ItemInfo();
                    break;
            }
            itemInfo.DbId = this.ReadInt64();
            itemInfo.itemId = this.ReadInt32();
            itemInfo.num = this.ReadInt32();
            this.itemMap[itemInfo.DbId] = itemInfo;
        }
        
    }
}
}
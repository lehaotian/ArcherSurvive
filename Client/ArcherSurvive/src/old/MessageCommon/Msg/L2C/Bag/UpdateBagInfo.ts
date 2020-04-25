class UpdateBagInfo extends Common.GameMessage{
    constructor(){
        super();
    }

    public bagSize = 50;
	public useSize = 0;
	/**
	 * 所有物品
	 */
	public newitemMap = {};

	public _OnDeserialize(){
        this.newitemMap = {};
		this.bagSize = this.ReadInt32();
        this.useSize = this.ReadInt32();
        let count = this.ReadInt16();
        for(let i = 0 ; i < count ; i++){
			let itemInfo = new StorageItemInfo();
			itemInfo.dbId = this.ReadInt64();
            itemInfo.itemId = this.ReadInt32();
            itemInfo.num = this.ReadInt32();
            this.newitemMap[itemInfo.dbId] = itemInfo;
		}
	}
}
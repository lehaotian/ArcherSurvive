/*
* name;
*/class ItemInfo{
    constructor(){

    }

    /**
	 * 物品DbId
	 */
	public DbId = 0;
	/**
	 * 物品普通id
	 */
	public itemId = 0;
	
	public num = 1;
	/**
	 * 是否可堆叠（0：不可，1.可以）
	 */
	public heapUpNum = 0;
	/**
	 * 1:普通物品，2：带有属性的物品 
	 */
	public itemType2 = 1;
}
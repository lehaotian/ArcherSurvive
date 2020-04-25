/*
* name;
*/
module LuckGame{
    export class BagManage extends GamePart{
    public static Instance:BagManage;
    constructor(){
        super();
        BagManage.Instance = this;
    }

    public bagSize = 50;
	public useSize = 0;

    /**
     * 背包中所以的物品信息
     */
    public itemMap = {};
    /**
     * key:itemId,  val: dbid
     */
    public itemIdMap = {};
    /**
     * 添加新物品
     * @param dbId 
     * @param info 
     */
    public addNewItem(dbId,info:StorageItemInfo){
        this.itemMap[dbId] = info;
        this.itemIdMap[info.itemId] = dbId;
    }
    /**
     * 物品增加数量
     * @param dbId 
     * @param info 
     */
    public addItemNum(dbId,num){
        let info = this.itemMap[dbId];
        if(info == null){
            return;
        }
        info.num += num;
    }

    /**
     * 减少物品数量
     * @param dbId
     * @param num 
     */
    public reduceItemNum(dbId,num){
        let info = this.itemMap[dbId];
        if(info == null){
            return;
        }
        info.num -= num;
        if(info.num <= 0){
            delete this.itemMap[dbId];
            delete this.itemIdMap[info.itemId];
        }
    }

    /**
     * 获取物品信息 By itemId
     */
    public getItemInfoByItemId(itemId){
        let dbid = this.itemIdMap[itemId]
        if(dbid == null){
            return this.getItemInfoFor(itemId);
        }
        let info = this.itemMap[dbid];
        if(info == null){
            return this.getItemInfoFor(itemId);
        }
        return info;
    }

    public getItemInfoFor(itemId){
        for(let key in this.itemMap){
            let info = this.itemMap[key];
            if(info.itemId == itemId){
                return info;
            }
        }
        return null;
    }

    public getBagItemArr(){
        let arr = [];
        for(let dbId in this.itemMap){
            arr.push(this.itemMap[dbId]);
        }
        return arr;
    }

    public getBagItemArrByType(type){
        let arr = [];
        for(let dbId in this.itemMap){
            let info = this.itemMap[dbId];
            let baseinfo = LuckGame.JsonManager.Instance.getJsonMap("Item")[info.itemId];
            if(baseinfo.ItemType != type){
                continue;
            }
            arr.push(info);
        }
        return arr;
    }

    public getItemInfo(dbId):StorageItemInfo{
        return this.itemMap[dbId];
    }
    

}
}
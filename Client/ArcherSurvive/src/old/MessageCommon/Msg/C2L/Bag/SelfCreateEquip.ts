/*
* name;
*/
class SelfCreateEquip extends Common.GameMessage{
    constructor(){
        super();
    }
    /**
     * 炼器师的id
     */
    public masterId = 0;
    /**
     * 配方id
     */
    public recipeId = 0;
    /**
     * 主材料dbid
     */
    public mainMaterDbId = 0;
    /**
     * 辅助材料 key:itemId   value:数量
     */
    public assistMaterMap = {};

    public _OnSerial(){
        this.WriteInt64(this.masterId);
        this.WriteInt32(this.recipeId);
        this.WriteInt64(this.mainMaterDbId);
        this.WriteInt16(Object.keys(this.assistMaterMap).length);
        for(let itemId in this.assistMaterMap){
            this.WriteInt32(itemId);
            this.WriteInt32(this.assistMaterMap[itemId]);
        }
    }
}
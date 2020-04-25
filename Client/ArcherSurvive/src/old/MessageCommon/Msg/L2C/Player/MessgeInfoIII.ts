/*
* name;
*/
class MessgeInfoIII extends Common.GameMessage{
    constructor(){
        super();
    }

    /**
	 * 玩家的等级
	 */
	public Lv = 0;
	/**
	 * 当前经验
	 */
	public currExp = 0;
	/**
	 * 升到下一级所需的经验
	 */
	public nextNeedExp = 0;


    public _OnDeserialize(){
        this.Lv = this.ReadInt32();
        this.currExp = this.ReadInt32();
        this.nextNeedExp = this.ReadInt32();
    }
}
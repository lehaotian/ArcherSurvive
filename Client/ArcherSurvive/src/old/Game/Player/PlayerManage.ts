/*
* name;
*/
module LuckGame{
    export class PlayerManage extends GamePart{
        public static Instance:PlayerManage;
    constructor(){
        super();
        PlayerManage.Instance = this;
    }

    public playerId = 0;

    public playerName = "";

    public playerLv = 0;
    /**
	 * 当前经验
	 */
	public currExp = 0;
	/**
	 * 升到下一级所需的经验
	 */
	public nextNeedExp = 0;


    public playerSex = 0;

    /**
	 * 灵根
	 */
	public rootResultMap = {};
	/**
	 * 基本属性值
	 */
	public proResultMap = {};

    addRoot(key,val){
        this.rootResultMap[key] = val;
    }

    addPro(key,val){
        this.proResultMap[key] = val;
    }
    
}
}
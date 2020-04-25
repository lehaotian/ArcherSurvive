/*
* name;
*/
class CombatProcessData{
    constructor(){

    }

    /**
	 * 当前回合
	 */
	public boutNum = 0;
	/**
	 * 攻击方Dbid
	 */
	public attDbid = 0;
	
	//key:类型  ， val: list
	public attMap = {};
	
	
	public addProcessData(processType,cardProcessData){
		let proDataList = null;
        proDataList = this.attMap[processType];
		if(proDataList == null){
			proDataList = [];
			this.attMap[processType] = proDataList;
		}
		proDataList.push(cardProcessData);
	}

    public getProcessData(processType){
        return this.attMap[processType];
    }
}
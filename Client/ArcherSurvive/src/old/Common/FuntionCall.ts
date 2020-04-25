class FuntionCall {
	
	public constructor(_callFun,_callObj) {
		this.callFun = _callFun;
		this.callObj = _callObj;
	}
	
	public callFun:Function = null;
	public callObj = null;

	public runCall(args = null){
		// console.log("回调函数："+this.callObj);
		this.callFun.call(this.callObj,args);
		
	}
}
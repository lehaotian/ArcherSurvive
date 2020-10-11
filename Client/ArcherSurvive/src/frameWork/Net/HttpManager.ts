/** 
 * http网络管理器
 */
class HttpManager {
	private static _instance:HttpManager;

    public static get instance():HttpManager{
        if(this._instance == null){
            this._instance = new HttpManager();
        }
        return this._instance;
    }
	private request = new egret.HttpRequest();
	/**
	 * 发送get请求
	 */
	public sendGetMsg(url:string,param:{[key:string]:string},callback:Function,obj){
        url += "?";
        for(let i in param){
            url += "&" + i + "=" + param[i];
        }
		this.request.responseType = egret.HttpResponseType.TEXT;
		this.request.open(url,egret.HttpMethod.GET);
		this.request.send();
		this.request.addEventListener(egret.Event.COMPLETE,callback,obj);
		this.request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
		this.request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
	}
	/**
	 * 发送post请求
	 */
	public sendPostMsg(url:string,param:{[key:string]:string},callback:Function,obj){
		
	}

    private onGetIOError(event:egret.IOErrorEvent):void {
        egret.log("get error : " + event);
    }

    private onGetProgress(event:egret.ProgressEvent):void {
        egret.log("get progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

    private sendPostRequest(url:string,param:{[key:string]:string},callback:Function,obj) {
        //请求参数
        let params = "p1=postP1&p2=postP2";
        url += "?";
        for(let i in param){
            url += "&" + i + "=" + param[i];
        }
        
        this.request.responseType = egret.HttpResponseType.TEXT;
        this.request.open(url,egret.HttpMethod.POST);
        this.request.send(params);
        this.request.addEventListener(egret.Event.COMPLETE,callback,obj);
        this.request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        this.request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
    }

    private onPostIOError(event:egret.IOErrorEvent):void {
        egret.log("post error : " + event);
    }

    private onPostProgress(event:egret.ProgressEvent):void {
        egret.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }
}
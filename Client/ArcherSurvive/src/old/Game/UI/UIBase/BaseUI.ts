abstract class BaseUI extends eui.Component implements  eui.UIComponent {
	public constructor(skinName = "") {
		super();
		this.skinName = skinName;
	}

	protected childrenCreated(): void{
		super.childrenCreated();
		this.ComponentCreate();
	}

	public ComponentCreate(){};

	public close(isDelete = false){
		SingletonBase.Get(LuckGame.LayerManager).closeView2(this,isDelete);
	}

	private openCall:FuntionCall = null;
	public open(_openCall = null,...agrs){
		this.openCall = _openCall;
		SingletonBase.Get(LuckGame.LayerManager).addView(this);
		//加载资源
		this.openView(agrs);
	}

	public openView(data= null){
		if(this.openCall != null){
			this.openCall.runCall();
		}
	}

	public isShowing():boolean{
		if(SingletonBase.Get(LuckGame.LayerManager).isExitStage(this)){
			return true;
		}
		return false;
	}


}
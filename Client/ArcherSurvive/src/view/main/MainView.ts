class MainView extends ViewBase{
	constructor() {
		super("MainSkin");
	}
	public loginBtn:eui.Button;
	public battleBtn:eui.Button;

	protected childrenCreated(): void{
		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.loginBtnnHandler,this);
		this.battleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.battleBtnnHandler,this);
	}
	public open(data){
		console.log(data);
		this.initView();
	}
	public close(){

	}
	private initView(){
		
	}
	public loginBtnnHandler(){
		LayerManager.Instance.openView(LoginView);
	}
	public battleBtnnHandler(){
		LayerManager.Instance.openView(BattleMainView);
	}
}

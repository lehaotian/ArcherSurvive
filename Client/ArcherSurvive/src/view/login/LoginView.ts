class LoginView extends ViewBase {
	constructor() {
		super("LoginSkin");
	}
	public loginBtn: eui.Button;
	public registBtn: eui.Button;
	public account: eui.TextInput;
	public passWord: eui.TextInput;
	public serverId: eui.TextInput;
	protected childrenCreated(): void {
		this.passWord.displayAsPassword = true;
		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginBtnBtnHandler, this);
		this.registBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.registBtnBtnHandler, this);
		this.account.addEventListener(egret.FocusEvent.FOCUS_OUT, this.setAccountBtnHandler, this);
		this.passWord.addEventListener(egret.TouchEvent.FOCUS_OUT, this.passWordBtnHandler, this);
		this.serverId.addEventListener(egret.TouchEvent.FOCUS_OUT, this.selectServerBtnHandler, this);
	}
	public open(data) {
	}
	public close() {

	}
	public loginBtnBtnHandler() {
		LayerManager.Instance.openView(MainView);
	}
	public registBtnBtnHandler() {

	}
	public setAccountBtnHandler() {

	}
	public passWordBtnHandler() {

	}
	public selectServerBtnHandler() {

	}
}

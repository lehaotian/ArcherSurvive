namespace ui {
	export class LoginView extends BaseUI {
		public constructor() {
			super("LoginView");
			this.biudEvent();
		}

		private userName: eui.EditableText;
		private pswd: eui.EditableText;

		private loginBtn: CommonBtn1;
		private touristBtn: CommonBtn1;

		biudEvent() {
			this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.login, this);
			this.touristBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tourist, this);
			this.setUserName();

		}

		setUserName() {
			let userInfo = LocalStorage.GetName("userInfo");
			if (userInfo == null) {
				return;
			}
			let arr = userInfo.split("_");
			this.userName.text = arr[0];
			this.pswd.text = arr[1];
		}

		/**
		 * 登录
		 */
		login() {
			if (this.userName.text == "") {
				let str = GetDictionaryStr.getStrById(DictionaryType.userNameNoNull);
				// Event.DispatchEvent("showWaveHintView", str);
				return;
			}
			LuckGame.LoginService.Instance.ReqLogin(this.userName.text, this.pswd.text);
		}

		/**
		 * 游客登录
		 */
		tourist() {
			//生成账号
			let account = LayerTime.getTimeClient() + "";
			LuckGame.LoginService.Instance.ReqRegisterGame(account, "123456");
		}
	}
}
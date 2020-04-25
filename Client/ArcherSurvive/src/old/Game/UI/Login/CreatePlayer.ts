namespace ui {
	export class CreatePlayer extends BaseUI {
		public constructor() {
			super("CreatePlayer");
			this.biudEvent();
		}

		private bg:eui.Image;
		private okBtn:CommonBtn1;
		private nick:eui.EditableText;

		biudEvent() {
			this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
			this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createPlayerInfo, this);
		}

		createPlayerInfo() {
			if (this.nick.text == "") {
				// Event.DispatchEvent("showWaveHintView", "昵称不能为空");
				return;
			}
			LuckGame.PlayerService.Instance.createPlayerInfo(this.nick.text, 1);
		}


	}
}
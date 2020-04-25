namespace ui {
	export class CombatMainView extends BaseUI {
		public constructor() {
			super("CombatMainView");
			this.biudEvent();
		}

		private closeBtn:eui.Image;

		biudEvent() {
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
		}

		openView() {
            //战斗控制器
            LuckGame.ComBatControl.Instance.initCardPos(this);
        }
	}
}
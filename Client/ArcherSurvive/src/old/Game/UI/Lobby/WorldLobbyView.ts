namespace ui {
	export class WorldLobbyView extends BaseUI {
		public constructor() {
			super("WorldLobbyView");
			this.biudEvent();
		}

		private awakenBtn:eui.Group;
		private mShopBtn:CommonBtn1;
		private bagBtn:CommonBtn1;

		biudEvent() {
			this.awakenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ReqAwakenPro, this);
			this.mShopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openShopView, this);
			this.bagBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openBagView, this);
		}

		openShopView() {
			SingletonBase.Get(ui.ShopView).open();
			// ViewManager.Inst.OpenView("ShopView", false, Laya.Handler.create(this, function (ui) {
			// 	this.mPreUI = ui;
			// }), null, TierType.dialogRoot);
		}

		openBagView() {
			SingletonBase.Get(ui.BagView).open();
			// ViewManager.Inst.OpenView("BagView", false, Laya.Handler.create(this, function (ui) {
			// 	this.mPreUI = ui;
			// 	this.mPreUI.openView();
			// }), null, TierType.dialogRoot);
		}

		ReqAwakenPro() {
			// if(PlayerManage.Instance.playerLv > 0){
			//     return;
			// }
			LuckGame.PlayerService.Instance.ReqAwakenPro();
		}
	}
}
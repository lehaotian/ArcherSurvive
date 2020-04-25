namespace ui {
	export class ShopDes extends BaseUI {
		public constructor() {
			super();
			this.skinName = "shopDes";
		}

		private desShop: eui.Label;
		private closeViewBtn:eui.Image;
		private buyBtn:eui.Group;
		private shopId = 1;

		public ComponentCreate(){
			this.biudEvent();
		}

		closeView(){
			super.close();
		}

		biudEvent() {
			this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
			this.buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyBtnH, this);
		}
		public buyBtnH (){
			LuckGame.ShopService.Instance.RequestBuyItems(this.shopId,1);
			super.close();
		}
		
		public openView(data){
			let itemId = data[0];
			this.shopId = data[1];
			let info = LuckGame.JsonManager.Instance.getJsonMap("Item");
			this.desShop.text = info[itemId].des;
		}

	}
}

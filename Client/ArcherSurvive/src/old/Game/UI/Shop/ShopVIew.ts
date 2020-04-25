namespace ui {
	export class ShopView extends BaseUI {
		public constructor() {
			super("ShopSkin");

		}
		private shopBtn1: ShopPageRender;
		private shopBtn2: ShopPageRender;

		private closeViewBtn: eui.Image;

		private shopList: eui.List;
		private shopArray: eui.ArrayCollection = new eui.ArrayCollection();
		private shopType = 1;

		public ComponentCreate(){
			this.biudEvent();
		}

		biudEvent() {
			this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
			this.shopBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopBtn1H, this);
			this.shopBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopBtn2H, this);

			this.shopList.itemRenderer = ShopRender;
			this.shopList.dataProvider = this.shopArray;

		}
		closeView(){
			super.close();
		}
		public openView(){
			this.shopBtn1H();
		}
		public shopBtn1H(){
			this.shopType = 1;
			this.push();
		}
		public shopBtn2H(){
			this.shopType = 2;
			this.push();
		}
		public push(){
			
			let info = LuckGame.JsonManager.Instance.getJsonMap("Shop");
			let arr = [];
			for(let key in info){
				let into = info[key]
				if(into.type ==this.shopType){
					arr.push(info[key]);
				}
			}
			this.shopArray.replaceAll(arr);
		}
	}
}
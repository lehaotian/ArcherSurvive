namespace ui {
	export class ShopRender extends RenderBaseUI {
		public constructor() {
			super();
			this.skinName = "ShopRender";
		}
		private shopBtn:eui.Group;
		private itemIcon0:eui.Image;
		private itemName0:eui.Label;
		private itemNum0:eui.Label;
		

		public ComponentCreate(){
			this.biudEvent();
		}

		biudEvent() {
			this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopBtnH, this);
		}

		private shopBtnH(){
			SingletonBase.Get(ShopDes).open(null,this.data.itemId,this.data.id);
		}

		protected dataChanged(): void {
			let itemId=this.data.itemId;
			let info =  LuckGame.JsonManager.Instance.getJsonMap("Item");
			let item1 = info[itemId];
			this.itemNum0.text = this.data.num;
			this.itemName0.text = item1.ItemName;
			this.itemIcon0.source = item1.Icon+"_png";
		}
	}
}

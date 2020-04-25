namespace ui {
	export class BagItemRender extends RenderBaseUI {
		public constructor() {
			super();
			this.skinName = "BagItemSkin";
		}

		private itemInfoView:ItemInfoView;

		public ComponentCreate(){
			this.biudEvent();
		}

		biudEvent() {
			this.itemInfoView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
		}

		protected dataChanged(): void {
			this.itemInfoView.showItem(this.data.itemId,this.data.num)
		}

		useItem(){
			SingletonBase.Get(ui.ShowItemInfo).open(null,this.data);
		}


	}
}
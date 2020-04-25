
namespace ui {
	export class BagView extends BaseUI {
		public constructor() {
			super("BagView");

		}
		private closeViewBtn: eui.Image;

		private itemList: eui.List;
		private itemArray: eui.ArrayCollection = new eui.ArrayCollection();

		public ComponentCreate(){
			this.biudEvent();
		}

		biudEvent() {
			this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);

			this.itemList.itemRenderer = BagItemRender;
			this.itemList.dataProvider = this.itemArray;

		}

		public openView(){
			this.showItemList();
		}

		public showItemList() {
			//获取背包的物品
			let arr = LuckGame.BagManage.Instance.getBagItemArr();
			this.itemArray.replaceAll(arr);
		}

		public refresh(){
			if(!this.isShowing()){
				return;
			}
			this.showItemList();
		}
	}
}
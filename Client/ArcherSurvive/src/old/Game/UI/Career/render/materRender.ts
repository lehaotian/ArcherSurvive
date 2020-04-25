
namespace ui {
	export class materRender extends RenderBaseUI {
		public constructor() {
			super();
			this.skinName = "materRender";
		}

		private itemInfoView: ItemInfoView;
		private addImg: eui.Image;

		public ComponentCreate() {
			this.bindEvent();
		}

		bindEvent() {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
		}

		useItem() {
			LuckGame.BagService.Instance.pos = this.data.pos;
			// ViewManager.Inst.OpenView("MaterView",false,Laya.Handler.create(this,function(ui){
			//     this.mPreUI = ui;
			//     this.mPreUI.openView();
			// }),null,TierType.dialogRoot);
			SingletonBase.Get(ui.MaterView).open();
		}

		protected dataChanged(): void {
			
			if (this.data.id <= 0) {
				// this.itemName.visible = false;
				// this.itemIcon.skin = "UI/bag/UI3_9.png";
				// this.frameIcon.skin = ImgUrl.getQualityFrame(1);
				this.itemInfoView.noItem();
				this.addImg.visible = true;
				return;
			}
			this.itemInfoView.showItem(this.data.id);
			this.addImg.visible = false;
			// this.itemName.visible = true;
			// //设置名称
			// let info = JsonManager.Instance.getJsonMap("Item")[this.dataSource.id];
			// this.itemName.text = info.ItemName;
			// this.itemIcon.skin = ImgUrl.getSkin(ImgUrl.itemImgUrl, info.Icon);
			// this.frameIcon.skin = ImgUrl.getQualityFrame(info.quality);
		}

	}
}
namespace ui {
	export class materRender2 extends RenderBaseUI {
		public constructor() {
			super();
			this.skinName = "materRender2";
		}

		private itemInfoView: ItemInfoView;
		// private addImg:eui.Image;

		public ComponentCreate() {
			this.bindEvent();
		}

		bindEvent() {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
		}

		useItem() {
			if (LuckGame.BagService.Instance.pos == 0) {
				LuckGame.BagService.Instance.mainMaterDbId = this.data.DbId;
			} else {
				// LuckGame.BagService.Instance.materMap[LuckGame.BagService.Instance.pos] = this.data.itemId;
				LuckGame.BagService.Instance.addMater(LuckGame.BagService.Instance.pos, this.data.itemId);
			}

			// Event.DispatchEvent("updateshowRecipeInfo");
			SingletonBase.Get(ui.MaterView).close();
			SingletonBase.Get(ui.CareerSkillView).updateRecipeInfo();
		}

		protected dataChanged(): void {

			let num = LuckGame.BagService.Instance.createMaterMap[this.data.itemId];
			if (num != null) {
				num = this.data.num - num;
			}else{
				num = this.data.num;
			}
			this.itemInfoView.showItem(this.data.itemId, num);
		}


	}
}
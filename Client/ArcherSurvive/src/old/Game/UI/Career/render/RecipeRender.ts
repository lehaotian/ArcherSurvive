namespace ui {
	export class RecipeRender extends RenderBaseUI {
		public constructor() {
			super();
			this.skinName = "recipeRender";
		}
		private itemInfoView: ItemInfoView;
		private num:eui.Label;

		public ComponentCreate() {
			this.biudEvent();
		}

		biudEvent() {
			this.itemInfoView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
		}

		useItem() {
			// Event.DispatchEvent("showRecipeInfo", this.data.recipeId);
			SingletonBase.Get(ui.CareerSkillView).showRecipeInfo(this.data.recipeId);
		}

		protected dataChanged(): void {
			this.itemInfoView.showItem(this.data.itemId);
			//设置
			this.num.text = this.data.powerNum;
		}





	}
}


namespace ui {
	export class MaterView extends BaseUI {
		public constructor() {
			super("MaterView");

		}

		private closeView: eui.Image;
		private materList: eui.List;
		private materArray: eui.ArrayCollection = new eui.ArrayCollection();

		public ComponentCreate() {
			this.biudEvent();
		}


		biudEvent() {
			this.closeView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);

			this.materList.itemRenderer = materRender2;
			this.materList.dataProvider = this.materArray;
		}

		openView() {
			//筛选
			this.showItemList();
		}

		showItemList() {
			let recipeInfo = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe")[LuckGame.BagService.Instance.recipeId];
			let str:string = recipeInfo.assistMater;
			let strarr = str.split("_");
			//获取背包的物品
			let arr = LuckGame.BagManage.Instance.getBagItemArrByType(parseInt(strarr[0]));
			let arr2 = [];
			for(let index in arr){
				let info = arr[index];
				let num = LuckGame.BagService.Instance.createMaterMap[info.itemId];
				if(num != null && num >= info.num){
					continue;
				}
				arr2.push(info);
			}
			// let ynum = Math.floor(arr.length / 4) + 1;
			// this.materList.repeatY = ynum;
			this.materArray.replaceAll(arr2);
		}

	}
}
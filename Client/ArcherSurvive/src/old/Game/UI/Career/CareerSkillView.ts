namespace ui {
	export class CareerSkillView extends BaseUI {
		public constructor() {
			super("CareerSkillSkin");

		}

		private closeView: eui.Image;
		private createBtn: CommonBtn1;
		private target: eui.Image;
		private targetEffect:eui.Group;
		private mainFrameIcon: ItemInfoView;

		private materList: eui.List;
		private materArray: eui.ArrayCollection = new eui.ArrayCollection();
		private recipeList: eui.List;
		private recipeArray: eui.ArrayCollection = new eui.ArrayCollection();


		public ComponentCreate() {
			this.biudEvent();
			this.initText();
		}

		biudEvent() {
			this.closeView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
			// this.mainFrameIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getMainMater, this);
			this.createBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startCreateEquip, this);

			this.materList.itemRenderer = materRender;
			this.materList.dataProvider = this.materArray;

			this.recipeList.itemRenderer = RecipeRender;
			this.recipeList.dataProvider = this.recipeArray;
		}

		initText(){
			this.createBtn.setText = "炼制";
		}

		openView() {
			this.recipeArray.replaceAll(this.getEquipRecipeArr());
			if (LuckGame.BagService.Instance.recipeId <= 0) {
				this.clearMaterData();

			}
			this.showRecipeInfo(LuckGame.BagService.Instance.recipeId);
		}

		getEquipRecipeArr() {
			let arr = [];
			let map = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe");
			for (let key in map) {
				arr.push(map[key]);
			}
			return arr;
		}

		private effect = null;
		/**
		 * 失败
		 */
		createEquipFail(){
			this.showRecipeInfo(LuckGame.BagService.Instance.recipeId);

			this.playEffect("e5",1);
		}
		/**
		 * 成功
		 */
		createEquipSucc(){
			this.showRecipeInfo(LuckGame.BagService.Instance.recipeId);
			
			this.playEffect("e3",3);
		}

		playEffect(name,tiems){
			if(this.effect == null){
				this.effect = new ViewEffect();
			}
			this.effect.loadRes(name,tiems);
			this.targetEffect.addChild(this.effect);
		}

		showRecipeInfo(id) {
			LuckGame.BagService.Instance.recipeId = id;
			this.clearMaterData();
			this.showTargetItem();
			this.showMainMater();
			this.showMater();
		}

		showTargetItem() {
			if (LuckGame.BagService.Instance.recipeId == 0) {
				this.target.visible = false;
				return;
			}
			this.target.visible = true;
			let recipeInfo = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe")[LuckGame.BagService.Instance.recipeId];
			this.target.source = CommonClass.getItemIcon(recipeInfo.itemId);
		}

		showMainMater() {
			if (LuckGame.BagService.Instance.recipeId <= 0) {
				// this.mainItemName.visible = false;
				// this.mainItemIcon.skin = "UI/bag/UI3_9.png";
				// this.mainFrameIcon.skin = ImgUrl.getQualityFrame(1);
				this.mainFrameIcon.noItem();
				return;
			}
			let recipeInfo = LuckGame.JsonManager.Instance.getJsonMap("EquipRecipe")[LuckGame.BagService.Instance.recipeId];
			//获取背包里有没有这个主材料
			let info = LuckGame.BagManage.Instance.getItemInfoByItemId(recipeInfo.mainMater);
			if(info == null){
				this.mainFrameIcon.noItem();
				return;
			}
			LuckGame.BagService.Instance.mainMaterDbId = info.DbId;
			this.mainFrameIcon.showItem(recipeInfo.mainMater);
			// let iteminfo: ItemInfo = LuckGame.BagManage.Instance.getItemInfo(LuckGame.BagService.Instance.mainMaterDbId);
			// this.mainFrameIcon.showItem(iteminfo.itemId);
			// this.mainItemName.visible = true;
			// let info = LuckGame.JsonManager.Instance.getJsonMap("Item")[iteminfo.itemId];
			// this.mainItemName.text = info.ItemName;
			// this.mainItemIcon.skin = ImgUrl.getSkin(ImgUrl.itemImgUrl, info.Icon);
			// this.mainFrameIcon.skin = ImgUrl.getQualityFrame(info.quality);
		}

		showMater() {
			let arr = [];
			for (let pos in LuckGame.BagService.Instance.materMap) {
				arr.push({ "pos": pos, "id": LuckGame.BagService.Instance.materMap[pos] });
			}
			this.materArray.replaceAll(arr);
		}

		clearMaterData() {
			for (let i = 1; i <= 4; i++) {
				LuckGame.BagService.Instance.materMap[i] = 0;
			}
			LuckGame.BagService.Instance.mainMaterDbId = 0;
			LuckGame.BagService.Instance.createMaterMap = {};
		}

		public updateRecipeInfo() {
			this.showMainMater();
			this.showMater();
		}
		getMainMater() {
			LuckGame.BagService.Instance.pos = 0;
			SingletonBase.Get(ui.MaterView).open();

			// ViewManager.Inst.OpenView("MaterView", false, Laya.Handler.create(this, function (ui) {
			// 	this.mPreUI = ui;
			// 	this.mPreUI.openView();
			// }), null, TierType.dialogRoot);
		}

		startCreateEquip() {
			if (LuckGame.BagService.Instance.recipeId == 0) {
				return;
			}
			if (LuckGame.BagService.Instance.mainMaterDbId == 0) {
				return;
			}
			LuckGame.BagService.Instance.reqSelfCreateEquip();
		}



	}
}
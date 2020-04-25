namespace ui {
	export class PlayerInfoView extends BaseUI {
		public constructor() {
			super("PlayerInfoView");

		}

		public ComponentCreate() {
			this.biudEvent();
			this.initBtn();
		}


		private closeViewBtn: eui.Image;
		private createEquipBtn: CommonBtn1;
		private createBtn2: CommonBtn1;
		

		private talentList: eui.List;
		private talentArray: eui.ArrayCollection = new eui.ArrayCollection();

		private proList: eui.List;
		private proArray: eui.ArrayCollection = new eui.ArrayCollection();


		biudEvent() {
			this.closeViewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
			this.createEquipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createEquip, this);
			this.createBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_createBtn2, this);


			this.talentList.itemRenderer = TalentItemRender;
			this.talentList.dataProvider = this.talentArray;

			this.proList.itemRenderer = TalentProRender;
			this.proList.dataProvider = this.proArray;
		}

		initBtn(){
			this.createEquipBtn.setText = "炼器";
		}

		public openView(){
			this.init();
		}

		init() {
			let arr = [];

			for (let key in LuckGame.PlayerManage.Instance.rootResultMap) {
				let val = LuckGame.PlayerManage.Instance.rootResultMap[key];
				arr.push({ "name": key, "val": val });
			}
			this.talentArray.replaceAll(arr);

			this.initProList();
		}

		initProList() {
			let arr = [];
			for (let key in LuckGame.PlayerManage.Instance.proResultMap) {
				let val = LuckGame.PlayerManage.Instance.proResultMap[key];
				arr.push({ "name": key, "val": val });
			}
			this.proArray.replaceAll(arr);
		}

		//炼器
		createEquip() {
			SingletonBase.Get(ui.CareerSkillView).open();
			// ViewManager.Inst.OpenView("CareerSkillView", false, Laya.Handler.create(this, function (ui) {
			// 	this.mPreUI = ui;
			// 	this.mPreUI.openView(1);
			// }), null, TierType.dialogRoot);
			// ViewManager.Inst.HideView("PlayerInfoView");
		}

		onclick_createBtn2(){
			let effect = new ViewEffect();
			effect.loadRes("e2",1);
			this.createBtn2.addChild(effect);
		}

	}
}
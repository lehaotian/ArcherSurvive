namespace ui {
	export class TalentItemRender extends eui.ItemRenderer {
		public constructor() {
			super();
			this.skinName = "TalentProRender";
		}

		private talentType:eui.Label;
		private proValue:eui.Label;
		private proBar:ProgressBarView;
		

		protected dataChanged(): void {
			this.init();
		}

		init() {
			this.talentType.text = this.getRootName(this.data.name);
			this.proValue.text = this.data.val;
			this.proBar.setPro = this.data.val / 100;
		}

		getRootName(type) {
			let str = GetDictionaryStr.getStrById(parseInt(type) + 20);
			return str;

		}
	}
}
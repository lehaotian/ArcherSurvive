namespace ui {
	export class TalentProRender extends eui.ItemRenderer {
		public constructor() {
			super();
			this.skinName = "talentItemRender";
		}

		private proTypeLab:eui.Label;
		private proVal:eui.Label;

		protected dataChanged(): void {
			this.init();
		}

		init() {
			this.proTypeLab.text = this.getRootName(this.data.name);
			this.proVal.text = this.data.val;
		}

		getRootName(type) {
			let str = GetDictionaryStr.getStrById(type);
			return str;

		}
	}
}
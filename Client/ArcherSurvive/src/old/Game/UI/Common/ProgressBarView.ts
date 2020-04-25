namespace ui {
	export class ProgressBarView extends BaseUI {
		public constructor() {
			super("ProgressBarSkin");
		}

		private proBarBg:eui.Group;
		private proBar:eui.Image;

		public set setPro(val){
			this.proBar.width = this.proBarBg.width * val;
		}
	}
}
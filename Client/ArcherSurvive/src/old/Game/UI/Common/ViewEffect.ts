namespace ui {
	export class ViewEffect extends BaseUI {
		public constructor() {
			super("ViewEffect2");
		}

		private mc1: egret.MovieClip;

		public loadRes(name, times = -1) {
			var data = RES.getRes(name + "_mc_json");
			var txtr = RES.getRes(name + "_tex_png");
			var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
			this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("viewEffect"));
			this.mc1.addEventListener(egret.Event.LOOP_COMPLETE, this.loopComplete, this);
			this.mc1.addEventListener(egret.Event.COMPLETE, this.complete, this);
			this.addChild(this.mc1);
			this.mc1.gotoAndPlay(name,times);
		}

		/**
		 * 循环
		 */
		public loopComplete() {
			console.log("循环播放");
		}

		/**
		 * 完成
		 */
		public complete() {
			//从父节点移除自己
			SingletonBase.Get(LuckGame.LayerManager).removeSelf(this);
			this.mc1 = null;
			console.log("播放end");
		}
	}
}
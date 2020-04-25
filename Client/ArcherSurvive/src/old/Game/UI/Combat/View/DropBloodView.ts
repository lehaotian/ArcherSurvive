namespace ui {
	export class DropBloodView extends BaseUI {
		public constructor() {
			super("DropBloodView");
			this.biudEvent();
		}
		biudEvent() {
		}

		private valLab:eui.Label;

		private comCall:FuntionCall = null;
		showContent(msg, call) {
			this.valLab.text = msg;
			this.comCall = call;
			this.startMove();
		}

		startMove() {
			let yy = this.y - 50 * 4;
			// Tween.to(this, { y: yy }, 1000, null, Handler.create(this, this.moveEnd));
			let tw = egret.Tween.get(this);
            tw.to({ "y": yy }, 1000);
            // tw.wait(2000);
            // tw.to({ "alpha": 0 }, 200);
            tw.call(this.moveEnd, this);
		}

		moveEnd() {
			SingletonBase.Get(LuckGame.LayerManager).removeSelf(this);
			//回收对象
			LuckGame.HintManage.instan.recycleObj("WaveHintView", this);
			if (this.comCall != null) {
				this.comCall.runCall();
				this.comCall = null;
			}
		}

	}
}
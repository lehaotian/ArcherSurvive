namespace ui {
	export class PlayerInfoItem extends eui.ItemRenderer {
		public constructor() {
			super();
			this.skinName = "PlayerInfoItem";
			this.biudEvent();
		}

		private playerNameLab:eui.EditableText;

		biudEvent() {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerThis, this);
		}

		protected dataChanged(): void {
			if (this.data.DbId <= 0) {
				return;
			}
			this.playerNameLab.text = this.data.playerName;
		}

		playerThis() {
			if (this.data.DbId <= 0) {
				return;
			}
			LuckGame.PlayerManage.Instance.playerId = this.data.DbId;
			LuckGame.PlayerService.Instance.ReqPlayetInfo();
		}

	}
}
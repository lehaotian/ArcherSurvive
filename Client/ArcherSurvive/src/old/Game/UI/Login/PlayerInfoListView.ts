namespace ui {
	export class PlayerInfoListView extends BaseUI {
		public constructor() {
			super("PlayerInfoListView");
			this.biudEvent();
		}

		private playerInfoList: eui.List;
		private createPlayer: CommonBtn1;

		private dataArray: eui.ArrayCollection = new eui.ArrayCollection();
		biudEvent() {
			this.createPlayer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openCreateView, this);
			this.playerInfoList.itemRenderer = PlayerInfoItem;
			this.playerInfoList.dataProvider = this.dataArray;
		}

		public openView(){
			this.init();
		}

		init() {
			let arr =LuckGame.LoginManage.Instance.getPlayerList();
			for (let i = arr.length; i < 6; i++) {
				let playerInfo = new PlayerInfo();
				arr.push(playerInfo);
			}

			this.dataArray.replaceAll(arr);
		}

		openCreateView() {
			SingletonBase.Get(ui.CreatePlayer).open();
		}
	}
}
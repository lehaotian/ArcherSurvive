namespace ui {
	export class ItemInfoView extends BaseUI {
		public constructor() {
			super("ItemInfoSkin");
		}



		private frameIcon:eui.Image;
		private itemIcon:eui.Image;
		private itemName:eui.Label;
		private itemNum:eui.Label;
		
		private itemShowInfo:ItemShowInfo = null;
		private showInfo(){
			this.frameIcon.source = CommonClass.getItemFrame(this.itemShowInfo.color); //this.itemShowInfo.color;
			this.itemIcon.source = this.itemShowInfo.itemIcon
			this.itemName.text = this.itemShowInfo.itemName;
			this.itemNum.text = this.itemShowInfo.num+"";

			this.frameIcon.visible = this.itemShowInfo.color==0?false:true;
			this.itemIcon.visible = this.itemShowInfo.itemIcon==""?false:true;
			this.itemName.visible = this.itemShowInfo.itemName==""?false:true;
			this.itemNum.visible = this.itemShowInfo.num==0?false:true;
		}

		public noItem(){
			this.itemShowInfo = new ItemShowInfo();
			this.itemShowInfo.color = 1;
			this.showInfo();
		}

		public showItem(itemId,num=0){
			this.itemShowInfo = new ItemShowInfo();
			let info = LuckGame.JsonManager.Instance.getJsonMap("Item")[itemId];
			
			this.itemShowInfo.color = info.quality;
			this.itemShowInfo.itemIcon = info.Icon+"_png";
			this.itemShowInfo.itemName = info.ItemName;
			this.itemShowInfo.num = num;

			this.showInfo();
		}

		public showItem2(color,icon,name,num=0){
			this.itemShowInfo = new ItemShowInfo();
			this.itemShowInfo.color = color;
			this.itemShowInfo.itemIcon = icon+"_png";
			this.itemShowInfo.itemName = name;
			this.itemShowInfo.num = num;

			this.showInfo();
		}
		
	}
}
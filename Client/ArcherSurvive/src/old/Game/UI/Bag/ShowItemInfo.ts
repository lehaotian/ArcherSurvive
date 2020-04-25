namespace ui {
	export class ShowItemInfo extends BaseUI {
		public constructor() {
			super("ShowItemInfo");

		}
		public ComponentCreate(){
			this.biudEvent();
		}

		private useBtn:CommonBtn1;
		private proList:eui.List;
		private proArray: eui.ArrayCollection = new eui.ArrayCollection();

		private itemName:eui.Label;
		private des:eui.Label;


		biudEvent(){
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        this.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.useItem,this);
        this.proList.itemRenderer = TalentProRender;
		this.proList.dataProvider = this.proArray;

    }

	private data = null;
    openView(_info){
		this.data = _info[0];
        //设置名称
        let info = LuckGame.JsonManager.Instance.getJsonMap("Item")[this.data.itemId];
        this.itemName.text = info.ItemName;
        this.des.text  =info.des;

        if(this.data.basePro != null){
            this.proList.visible = true;
            this.initProList();
        }else{
            this.proList.visible = false;
        }
    }

    initProList(){
        let arr = [];
        for(let key in this.data.basePro){
            let val = this.data.basePro[key];
            arr.push({"name":key,"val":val});
        }
        this.proArray.replaceAll(arr);
    }

     useItem(){
        LuckGame.BagService.Instance.reqUseItem(this.data.DbId,1);
    }

	}
}
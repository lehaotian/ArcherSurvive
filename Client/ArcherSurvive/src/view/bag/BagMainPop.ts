class BagMainPop extends PopBase{
	constructor() {
		super("BagMainPopSkin");
	}
	public scroller:eui.Scroller;
	public itemList:eui.List;
	public itemData:eui.ArrayCollection = new eui.ArrayCollection();
	public closeBtn:eui.Button;

	protected childrenCreated(): void{
		this.itemList.itemRenderer = ItemRender;
		this.itemList.dataProvider = this.itemData;
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnHandler,this);
		this.itemList.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.moveItemHandler,this);
		this.itemList.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
	}
	public open(data){
		this.initView();
	}
	public close(){

	}
	private initView(){
		let arr = [];
		let hasItem = [10001,10001,10001,10001,10001,10001];
		arr.push(...hasItem);
		for(let i = 0; i < 60 ;i++){
			arr.push(null);
		}
        this.itemData.replaceAll(arr);
		this.item.visible = false;
		this.item.touchEnabled = false;
	}
	public closeBtnHandler(){
		LayerManager.Instance.closePop(BagMainPop);
	}
	private startPoint:egret.Point = new egret.Point();
    private movePoint:egret.Point = new egret.Point();
	public item:eui.Image;
	public moveItemHandler(event:eui.ItemTapEvent){
		let item :ItemRender = <ItemRender>event.itemRenderer;
		// item.icon.visible = true;
	}
	private touchBegin(event:egret.TouchEvent){
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.touchCancel,this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.touchCancel,this);
        this.startPoint = this.globalToLocal(event.stageX,event.stageY);
		this.item.x = this.startPoint.x;
        this.item.y = this.startPoint.y;
    }
	private touchCancel(event:egret.TouchEvent){
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchCancel,this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL,this.touchCancel,this);

    }
    private touchMove(event:egret.TouchEvent){
        this.movePoint = this.globalToLocal(event.stageX,event.stageY);
        this.item.x = this.movePoint.x;
        this.item.y = this.movePoint.y;
		console.log(this.movePoint.toString());
		
    }
}

class BattleMainView extends ViewBase{
	constructor() {
		super("BattleMainSkin");
	}
	private gotoBtn:eui.Button;
	public add:eui.Button;
	public reduce:eui.Button;
	public bag:eui.Button;
	public rocker:Rocker;
	public item:eui.Image;
    public map:eui.Group;
	public speed:number = 100;
	public skillList:eui.List;
	public skillData:eui.ArrayCollection = new eui.ArrayCollection();
	protected childrenCreated(): void{
		this.skillList.itemRenderer = ItemRender;
		this.skillList.dataProvider = this.skillData;
		this.gotoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoBtnHandler,this);
		this.add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtnHandler,this);
		this.reduce.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reduceBtnHandler,this);
		this.bag.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bagBtnHandler,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
		this.skillList.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.moveItemHandler,this);
		this.skillList.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
	}
	public gotoBtnHandler(){
		LayerManager.Instance.openView(MainView);
	}
	public addBtnHandler(){
		this.map.scaleX+=0.1;
		this.map.scaleY+=0.1;
	}
	public reduceBtnHandler(){
		this.map.scaleX-=0.1;
		this.map.scaleY-=0.1;
	}
	public bagBtnHandler(){
		LayerManager.Instance.openPop(BagMainPop);
	}
	public moveItemHandler(event:eui.ItemTapEvent){
		let item :ItemRender = <ItemRender>event.itemRenderer;
		// item.icon.visible = true;
	}
	private startPoint:egret.Point = new egret.Point();
    private movePoint:egret.Point = new egret.Point();
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
	public open(data){
		this.initView();
	}
	public close(){

	}
	private initView(){
		let numX = 50;
		let numY = 50;
		this.map.removeChildren();
		for(let i = 0 ;i < numX; i++){
			for(let j = 0 ;j < numY; j++){
				let grid = new eui.Image("grid_1012_png");
				grid.width = 200;
				grid.height = 100;
				if(j%2==0){
					grid.x = i*200;	
				}else{
					grid.x = 100+i*200;
					// grid.source = "grid_1013_png";
				}
				grid.y = j*50;
				this.map.addChild(grid);
			}
		}
		numX *= 2;
		numY /= 2;
		for(let i = 0 ;i < numX; i++){
			for(let j = 0 ;j < numY; j++){
				let grid = new eui.Image("Active Button_png");
				grid.alpha = 0.2;
				grid.width = 100;
				grid.height = 100;
				grid.x = 100+i*100;	
				grid.y = 50+j*100;
				this.map.addChild(grid);
			}
		}
		
		this.map.scrollEnabled = true;
		this.skillData.source = [null,null,null,null,null,null,null,null];
		DragonBonesManager.Instance.createDragonBones("bosspit_evil_wizard");
		let display = DragonBonesManager.Instance.getDragonBones("armatureName");
		this.addChild(display);
		display.x = 960;
		display.y = 540;
		display.scaleX = 0.5;
		display.scaleY = 0.5;
		display.animation.play("summon",0);
		display.animation.timeScale = 1;
	}
	
	private lastTime = 0;
    public update(){
        let time = egret.getTimer();
        if(time - this.lastTime<50){
            return;
        }
        this.lastTime = time;
		// dragonBones.WorldClock.clock.advanceTime(-1);
		if(this.rocker.multX==0&&this.rocker.multY==0){
			return;
		}
		let x = this.speed*this.rocker.multX;
		let y = this.speed*this.rocker.multY;
		if(x && x != 0){
			this.map.scrollH += x;
		}
        
		if(y && y != 0){
			this.map.scrollV += y;
		}
        console.log(this.item.x+"..."+this.item.y);
    }
}

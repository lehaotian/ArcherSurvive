enum Direction{
    center,up,down,left,right,upLeft,upRight,downLeft,downRight
}
/**
 * 摇杆
 */
class Rocker extends ComponentBase{
    constructor() {
		super("RockerSkin");
	}
    private center:eui.Image;
    private centerPoint:egret.Point = new egret.Point(200,200);
    private startPoint:egret.Point = new egret.Point();
    private movePoint:egret.Point = new egret.Point();
    private role:eui.Image;
    private direction:Direction;
    public multX:number = 0;
    public multY:number = 0;
    private maxDistance:number = 100;

    protected childrenCreated(): void{
		this.center.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
	}
    public init(){
        this.direction = Direction.center;
        this.multX = 0;
        this.multY = 0;
        this.center.x = this.centerPoint.x;
        this.center.y = this.centerPoint.y;
    }
    private touchBegin(event:egret.TouchEvent){
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.touchCancel,this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.touchCancel,this);
        this.startPoint = this.globalToLocal(event.stageX,event.stageY);
    }
    private touchCancel(event:egret.TouchEvent){
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchCancel,this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL,this.touchCancel,this);
        egret.Tween.removeTweens(this.center);
        egret.Tween.get(this.center).to({ x: this.centerPoint.x, y: this.centerPoint.y }, 100, egret.Ease.backOut);
        this.init();
    }
    private touchMove(event:egret.TouchEvent){
        this.movePoint = this.globalToLocal(event.stageX,event.stageY);
        let distance = egret.Point.distance(this.startPoint,this.movePoint);
        if(distance>this.maxDistance){
            // return;
            var toPoint: egret.Point = egret.Point.interpolate(this.movePoint, this.centerPoint, this.maxDistance / distance);
            this.center.x = toPoint.x;
            this.center.y = toPoint.y;
        }else{
            this.center.x = this.centerPoint.x+this.movePoint.x-this.startPoint.x;
            this.center.y = this.centerPoint.y+this.movePoint.y-this.startPoint.y;
        }
        let speed = distance/this.maxDistance;//力度分量
        let x = (this.center.x-this.centerPoint.x)/this.maxDistance;
        let y = (this.center.y-this.centerPoint.y)/this.maxDistance; 
        this.multX = Math.floor(x*100)/100;
        this.multY = Math.floor(y*100)/100;
    }
    
}
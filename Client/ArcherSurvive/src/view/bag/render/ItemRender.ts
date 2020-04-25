class ItemRender extends eui.ItemRenderer{
    constructor() {
		super();
        this.skinName = "ItemRenderSkin";
	}
    public frame:eui.Image;
    public icon:eui.Image;
    protected childrenCreated(): void{
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);
	}
    private touchBegin(){
        if(this.icon.visible){
            LayerManager.Instance.getPop(BagMainPop).item.source = this.icon.source;
            LayerManager.Instance.getPop(BagMainPop).item.visible = true;
            this.icon.visible = false;
        }else{
            
        }
    }
    private touchEnd(){
        if(LayerManager.Instance.getPop(BagMainPop).item.visible){
            this.icon.source = LayerManager.Instance.getPop(BagMainPop).item.source;
            LayerManager.Instance.getPop(BagMainPop).item.visible = false;
            this.icon.visible = true;
        }else{

        }
    }
    protected dataChanged(): void{
        if(this.data){
            this.icon.source = "skill_"+this.data+"_png";
        }else{
            this.icon.visible = false;
        }
    }
}
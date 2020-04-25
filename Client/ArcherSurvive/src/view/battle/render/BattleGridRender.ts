class BattleGridRender extends eui.ItemRenderer{
    constructor() {
		super();
	}
    public item:eui.Image;
    protected dataChanged(): void{
        this.skinName = "BattleGridRenderSkin";
    }
}
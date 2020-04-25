class RenderBaseUI extends eui.ItemRenderer {
	public constructor() {
		super();
	}

	protected childrenCreated(): void{
		super.childrenCreated();
		this.ComponentCreate();
	}

	public ComponentCreate(){}

	protected dataChanged(): void {
	}
}
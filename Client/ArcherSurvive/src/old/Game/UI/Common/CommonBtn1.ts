class CommonBtn1 extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "CommonBtn1Skin";
	}

	private content:eui.Label;


	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public set setText(text){
		this.content.text = text;
	}
	
}
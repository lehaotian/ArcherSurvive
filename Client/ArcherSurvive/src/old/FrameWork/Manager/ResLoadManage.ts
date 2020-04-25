class ResLoadManage {
	public constructor() {
	}

	public bind() {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
		RES.loadGroup("preload");
	}
	/**
	 * 加载进度
	 */
	private onResourceProgress(event: RES.ResourceEvent): void {
		//event.itemsLoaded, event.itemsTotal

	}

	private countGroupError = 0;
	/**
	 * 加载失败
	 */
	private onResourceLoadErr(event: RES.ResourceEvent): void {
		if (++this.countGroupError < 3) {
			RES.loadGroup(event.groupName);
		} else {
			/// 弹出网络失去连接提示等
		}
	}
	/**
	 * 加载完成
	 */
	onResourceLoadComplete(){

	}



}
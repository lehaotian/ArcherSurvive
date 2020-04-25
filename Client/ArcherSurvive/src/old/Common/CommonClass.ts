class CommonClass {
    public constructor() {
    }

	/**
	 * 获取物品边框
	 */
    public static getItemFrame(color) {
        let url = "";
        switch (color) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                url = "frame_" + color + "_png";
                return url;
            default:
                return "";
        }

    }

    public static getItemIcon(itemId) {
        let info = LuckGame.JsonManager.Instance.getJsonMap("Item")[itemId];
        return info.Icon + "_png";
    }


}
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CommonClass = (function () {
    function CommonClass() {
    }
    /**
     * 获取物品边框
     */
    CommonClass.getItemFrame = function (color) {
        var url = "";
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
    };
    CommonClass.getItemIcon = function (itemId) {
        var info = LuckGame.JsonManager.Instance.getJsonMap("Item")[itemId];
        return info.Icon + "_png";
    };
    return CommonClass;
}());
__reflect(CommonClass.prototype, "CommonClass");
//# sourceMappingURL=CommonClass.js.map
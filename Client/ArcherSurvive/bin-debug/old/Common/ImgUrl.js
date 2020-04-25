/*
* name;
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var QualityType;
(function (QualityType) {
})(QualityType || (QualityType = {}));
var ImgUrl = (function () {
    function ImgUrl() {
    }
    ImgUrl.getSkin = function (url, name) {
        return url + name + ".png";
    };
    ImgUrl.getQualityFrame = function (num) {
        var url = "";
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                url = this.itemImgUrl + "frame_" + num + ".png";
                return url;
            default:
                return "";
        }
    };
    //物品路径
    ImgUrl.itemImgUrl = "UI/item/";
    //配方路径
    ImgUrl.recipeImgUrl = "UI/recipe/";
    return ImgUrl;
}());
__reflect(ImgUrl.prototype, "ImgUrl");
//# sourceMappingURL=ImgUrl.js.map
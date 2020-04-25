var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var GetDictionaryStr = (function () {
    function GetDictionaryStr() {
    }
    GetDictionaryStr.getStrById = function (id) {
        var info = LuckGame.JsonManager.Instance.getJsonMap("Dictionary")[id];
        if (info == null) {
            return "";
        }
        return info.des;
    };
    return GetDictionaryStr;
}());
__reflect(GetDictionaryStr.prototype, "GetDictionaryStr");
//# sourceMappingURL=GetDictionaryStr.js.map
/*
* 本地存储
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LocalStorage = (function () {
    function LocalStorage() {
        //example
        this.mName = "Name";
    }
    //example
    LocalStorage.SetNameNumber = function (_key, _value) {
        window.localStorage.setItem(_key, _value.toString());
    };
    LocalStorage.SetNameString = function (_key, _value) {
        window.localStorage.setItem(_key, _value);
    };
    //example
    LocalStorage.GetName = function (_key) {
        return window.localStorage.getItem(_key);
    };
    return LocalStorage;
}());
__reflect(LocalStorage.prototype, "LocalStorage");
//# sourceMappingURL=LocalStorage.js.map
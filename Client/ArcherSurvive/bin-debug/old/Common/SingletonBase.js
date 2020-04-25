var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SingletonBase = (function () {
    function SingletonBase() {
    }
    SingletonBase.Get = function (target) {
        var t = this.map.GetValueByKey(target);
        if (t == null) {
            t = new target();
            this.map.Add(target, t);
        }
        return t;
    };
    SingletonBase.DeleteByVal = function (view) {
        this.map.DeleteDataByVal(view);
    };
    SingletonBase.DeleteByKey = function (type) {
        this.map.DeleteDataByKey(type);
    };
    // private static _instance = null;
    // public static get Instance():SingletonBase{
    // 	if(SingletonBase._instance == null){
    // 		SingletonBase._instance = new SingletonBase();
    // 	}
    // 	return SingletonBase._instance;
    // }
    SingletonBase.map = new DictionaryT();
    return SingletonBase;
}());
__reflect(SingletonBase.prototype, "SingletonBase");
//# sourceMappingURL=SingletonBase.js.map
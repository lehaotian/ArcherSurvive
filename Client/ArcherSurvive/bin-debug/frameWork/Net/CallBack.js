var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CallBack = (function () {
    function CallBack(obj, fun) {
        this.obj = obj;
        this.fun = fun;
    }
    CallBack.prototype.call = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.fun.call(this.obj, argArray);
    };
    return CallBack;
}());
__reflect(CallBack.prototype, "CallBack");
//# sourceMappingURL=CallBack.js.map
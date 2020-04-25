var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FuntionCall = (function () {
    function FuntionCall(_callFun, _callObj) {
        this.callFun = null;
        this.callObj = null;
        this.callFun = _callFun;
        this.callObj = _callObj;
    }
    FuntionCall.prototype.runCall = function (args) {
        if (args === void 0) { args = null; }
        // console.log("回调函数："+this.callObj);
        this.callFun.call(this.callObj, args);
    };
    return FuntionCall;
}());
__reflect(FuntionCall.prototype, "FuntionCall");
//# sourceMappingURL=FuntionCall.js.map
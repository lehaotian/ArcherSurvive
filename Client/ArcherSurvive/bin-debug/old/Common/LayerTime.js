var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var LayerTime = (function () {
    function LayerTime() {
    }
    //获取系统当前时间
    LayerTime.getTimeClient = function () {
        return new Date().getTime();
    };
    return LayerTime;
}());
__reflect(LayerTime.prototype, "LayerTime");
//# sourceMappingURL=LayerTime.js.map
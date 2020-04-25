var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AnimInfo = (function () {
    function AnimInfo() {
        this.animName = "";
        this.animTimes = 0;
        this.call = null;
    }
    return AnimInfo;
}());
__reflect(AnimInfo.prototype, "AnimInfo");
//# sourceMappingURL=AnimInfo.js.map
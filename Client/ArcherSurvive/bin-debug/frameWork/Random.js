var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/** 随机数工具类 */
var Random = (function () {
    function Random() {
    }
    /** 根据种子生成随机数 */
    Random.randBySeed = function (seed) {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    /** 根据当前时间生成随机数 */
    Random.randByTime = function () {
        return this.randBySeed(new Date().getMilliseconds());
    };
    return Random;
}());
__reflect(Random.prototype, "Random");
//# sourceMappingURL=Random.js.map
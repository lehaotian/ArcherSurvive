var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * View基类
 */
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase(skinName) {
        var _this = _super.call(this) || this;
        _this.args = [];
        _this.skinName = skinName;
        return _this;
    }
    return ViewBase;
}(eui.Component));
__reflect(ViewBase.prototype, "ViewBase");
//# sourceMappingURL=ViewBase.js.map
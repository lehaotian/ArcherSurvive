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
 * 组件基类
 */
var ComponentBase = (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase(skinName) {
        var _this = _super.call(this) || this;
        _this.skinName = skinName;
        return _this;
    }
    return ComponentBase;
}(eui.Component));
__reflect(ComponentBase.prototype, "ComponentBase");
//# sourceMappingURL=ComponentBase.js.map
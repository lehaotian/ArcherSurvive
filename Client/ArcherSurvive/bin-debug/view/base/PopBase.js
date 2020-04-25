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
 * 弹窗基类
 */
var PopBase = (function (_super) {
    __extends(PopBase, _super);
    function PopBase(skinName) {
        var _this = _super.call(this) || this;
        _this.args = [];
        _this.skinName = skinName;
        return _this;
    }
    PopBase.prototype.open = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.args = args;
    };
    ;
    PopBase.prototype.close = function (obj) {
        LayerManager.Instance.closePop(obj);
    };
    ;
    return PopBase;
}(eui.Component));
__reflect(PopBase.prototype, "PopBase");
//# sourceMappingURL=PopBase.js.map
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
var CommonBtn1 = (function (_super) {
    __extends(CommonBtn1, _super);
    function CommonBtn1() {
        var _this = _super.call(this) || this;
        _this.skinName = "CommonBtn1Skin";
        return _this;
    }
    CommonBtn1.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonBtn1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Object.defineProperty(CommonBtn1.prototype, "setText", {
        set: function (text) {
            this.content.text = text;
        },
        enumerable: true,
        configurable: true
    });
    return CommonBtn1;
}(eui.Component));
__reflect(CommonBtn1.prototype, "CommonBtn1", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CommonBtn1.js.map
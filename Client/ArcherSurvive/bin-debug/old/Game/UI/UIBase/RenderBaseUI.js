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
var RenderBaseUI = (function (_super) {
    __extends(RenderBaseUI, _super);
    function RenderBaseUI() {
        return _super.call(this) || this;
    }
    RenderBaseUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.ComponentCreate();
    };
    RenderBaseUI.prototype.ComponentCreate = function () { };
    RenderBaseUI.prototype.dataChanged = function () {
    };
    return RenderBaseUI;
}(eui.ItemRenderer));
__reflect(RenderBaseUI.prototype, "RenderBaseUI");
//# sourceMappingURL=RenderBaseUI.js.map
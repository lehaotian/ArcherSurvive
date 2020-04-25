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
var BaseUI = (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI(skinName) {
        if (skinName === void 0) { skinName = ""; }
        var _this = _super.call(this) || this;
        _this.openCall = null;
        _this.skinName = skinName;
        return _this;
    }
    BaseUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.ComponentCreate();
    };
    BaseUI.prototype.ComponentCreate = function () { };
    ;
    BaseUI.prototype.close = function (isDelete) {
        if (isDelete === void 0) { isDelete = false; }
        SingletonBase.Get(LuckGame.LayerManager).closeView2(this, isDelete);
    };
    BaseUI.prototype.open = function (_openCall) {
        if (_openCall === void 0) { _openCall = null; }
        var agrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            agrs[_i - 1] = arguments[_i];
        }
        this.openCall = _openCall;
        SingletonBase.Get(LuckGame.LayerManager).addView(this);
        //加载资源
        this.openView(agrs);
    };
    BaseUI.prototype.openView = function (data) {
        if (data === void 0) { data = null; }
        if (this.openCall != null) {
            this.openCall.runCall();
        }
    };
    BaseUI.prototype.isShowing = function () {
        if (SingletonBase.Get(LuckGame.LayerManager).isExitStage(this)) {
            return true;
        }
        return false;
    };
    return BaseUI;
}(eui.Component));
__reflect(BaseUI.prototype, "BaseUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BaseUI.js.map
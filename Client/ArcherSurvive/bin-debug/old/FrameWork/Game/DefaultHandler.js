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
/*
* name;
*/
var DefaultHandler = (function (_super) {
    __extends(DefaultHandler, _super);
    //构造函数
    function DefaultHandler() {
        var _this = _super.call(this) || this;
        _this._logicManage = null;
        return _this;
    }
    DefaultHandler.prototype.Init = function (part) {
        this._logicManage = part;
    };
    return DefaultHandler;
}(IIOHandler));
__reflect(DefaultHandler.prototype, "DefaultHandler");
//# sourceMappingURL=DefaultHandler.js.map
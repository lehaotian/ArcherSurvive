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
var ui;
(function (ui) {
    var CombatMainView = (function (_super) {
        __extends(CombatMainView, _super);
        function CombatMainView() {
            var _this = _super.call(this, "CombatMainView") || this;
            _this.biudEvent();
            return _this;
        }
        CombatMainView.prototype.biudEvent = function () {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        };
        CombatMainView.prototype.openView = function () {
            //战斗控制器
            LuckGame.ComBatControl.Instance.initCardPos(this);
        };
        return CombatMainView;
    }(BaseUI));
    ui.CombatMainView = CombatMainView;
    __reflect(CombatMainView.prototype, "ui.CombatMainView");
})(ui || (ui = {}));
//# sourceMappingURL=CombatMainView.js.map
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
    var ProgressBarView = (function (_super) {
        __extends(ProgressBarView, _super);
        function ProgressBarView() {
            return _super.call(this, "ProgressBarSkin") || this;
        }
        Object.defineProperty(ProgressBarView.prototype, "setPro", {
            set: function (val) {
                this.proBar.width = this.proBarBg.width * val;
            },
            enumerable: true,
            configurable: true
        });
        return ProgressBarView;
    }(BaseUI));
    ui.ProgressBarView = ProgressBarView;
    __reflect(ProgressBarView.prototype, "ui.ProgressBarView");
})(ui || (ui = {}));
//# sourceMappingURL=ProgressBarView.js.map
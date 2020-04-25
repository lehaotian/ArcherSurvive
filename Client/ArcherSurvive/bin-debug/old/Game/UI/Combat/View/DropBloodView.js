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
    var DropBloodView = (function (_super) {
        __extends(DropBloodView, _super);
        function DropBloodView() {
            var _this = _super.call(this, "DropBloodView") || this;
            _this.comCall = null;
            _this.biudEvent();
            return _this;
        }
        DropBloodView.prototype.biudEvent = function () {
        };
        DropBloodView.prototype.showContent = function (msg, call) {
            this.valLab.text = msg;
            this.comCall = call;
            this.startMove();
        };
        DropBloodView.prototype.startMove = function () {
            var yy = this.y - 50 * 4;
            // Tween.to(this, { y: yy }, 1000, null, Handler.create(this, this.moveEnd));
            var tw = egret.Tween.get(this);
            tw.to({ "y": yy }, 1000);
            // tw.wait(2000);
            // tw.to({ "alpha": 0 }, 200);
            tw.call(this.moveEnd, this);
        };
        DropBloodView.prototype.moveEnd = function () {
            SingletonBase.Get(LuckGame.LayerManager).removeSelf(this);
            //回收对象
            LuckGame.HintManage.instan.recycleObj("WaveHintView", this);
            if (this.comCall != null) {
                this.comCall.runCall();
                this.comCall = null;
            }
        };
        return DropBloodView;
    }(BaseUI));
    ui.DropBloodView = DropBloodView;
    __reflect(DropBloodView.prototype, "ui.DropBloodView");
})(ui || (ui = {}));
//# sourceMappingURL=DropBloodView.js.map
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
    var ViewEffect = (function (_super) {
        __extends(ViewEffect, _super);
        function ViewEffect() {
            return _super.call(this, "ViewEffect2") || this;
        }
        ViewEffect.prototype.loadRes = function (name, times) {
            if (times === void 0) { times = -1; }
            var data = RES.getRes(name + "_mc_json");
            var txtr = RES.getRes(name + "_tex_png");
            var mcFactory = new egret.MovieClipDataFactory(data, txtr);
            this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("viewEffect"));
            this.mc1.addEventListener(egret.Event.LOOP_COMPLETE, this.loopComplete, this);
            this.mc1.addEventListener(egret.Event.COMPLETE, this.complete, this);
            this.addChild(this.mc1);
            this.mc1.gotoAndPlay(name, times);
        };
        /**
         * 循环
         */
        ViewEffect.prototype.loopComplete = function () {
            console.log("循环播放");
        };
        /**
         * 完成
         */
        ViewEffect.prototype.complete = function () {
            //从父节点移除自己
            SingletonBase.Get(LuckGame.LayerManager).removeSelf(this);
            this.mc1 = null;
            console.log("播放end");
        };
        return ViewEffect;
    }(BaseUI));
    ui.ViewEffect = ViewEffect;
    __reflect(ViewEffect.prototype, "ui.ViewEffect");
})(ui || (ui = {}));
//# sourceMappingURL=ViewEffect.js.map
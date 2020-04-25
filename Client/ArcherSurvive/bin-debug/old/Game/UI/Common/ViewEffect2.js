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
    var ViewEffect2 = (function (_super) {
        __extends(ViewEffect2, _super);
        function ViewEffect2() {
            var _this = _super.call(this, "ViewEffect2") || this;
            _this.armatureDisplay = null;
            return _this;
        }
        ViewEffect2.prototype.loadRes = function (name, times) {
            if (times === void 0) { times = 0; }
            var dragonbonesData = RES.getRes(name + "_ske_json");
            var textureData = RES.getRes(name + "_tex_json");
            var texture = RES.getRes(name + "_tex_png");
            var egretFactory = dragonBones.EgretFactory.factory;
            egretFactory.parseDragonBonesData(dragonbonesData);
            egretFactory.parseTextureAtlasData(textureData, texture);
            this.armatureDisplay = egretFactory.buildArmatureDisplay(name);
            this.armatureDisplay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
            this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
            this.addChild(this.armatureDisplay);
            // this.armatureDisplay.scaleX = 0.3;
            // this.armatureDisplay.scaleY = 0.3;
            this.armatureDisplay.animation.play("steady", times);
        };
        ViewEffect2.prototype.loopAnimationEventHandler = function () {
        };
        ViewEffect2.prototype.animationEventHandler = function () {
        };
        return ViewEffect2;
    }(BaseUI));
    ui.ViewEffect2 = ViewEffect2;
    __reflect(ViewEffect2.prototype, "ui.ViewEffect2");
})(ui || (ui = {}));
//# sourceMappingURL=ViewEffect2.js.map
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
    var SkeletonAnim = (function (_super) {
        __extends(SkeletonAnim, _super);
        function SkeletonAnim() {
            var _this = _super.call(this, "SkeletonAnimSkin") || this;
            _this.armatureDisplay = null;
            _this.wring = false;
            _this.animArr = [];
            _this.callFun = null;
            return _this;
        }
        SkeletonAnim.prototype.loadRes = function (name) {
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
            // this.armatureDisplay.x = 200;
            // this.armatureDisplay.y = 300;
            this.armatureDisplay.scaleX = 0.3;
            this.armatureDisplay.scaleY = 0.3;
            // this.play("steady");
            this.armatureDisplay.animation.play("steady");
        };
        SkeletonAnim.prototype.loopAnimationEventHandler = function () {
            this.wring = false;
            if (this.animArr.length > 0) {
                var animInfo = this.animArr.shift();
                this.callFun = animInfo.call;
                this.armatureDisplay.animation.play(animInfo.animName, animInfo.animTimes);
            }
        };
        SkeletonAnim.prototype.play = function (name, times, _callFun) {
            if (times === void 0) { times = 0; }
            if (_callFun === void 0) { _callFun = null; }
            if (this.wring) {
                var animInfo = new AnimInfo();
                animInfo.animName = name;
                animInfo.animTimes = times;
                animInfo.call = _callFun;
                this.animArr.push(animInfo);
                return;
            }
            this.callFun = _callFun;
            this.armatureDisplay.animation.play(name, times);
        };
        SkeletonAnim.prototype.animationEventHandler = function () {
            this.wring = true;
            if (this.callFun != null) {
                this.callFun.runCall();
            }
            this.armatureDisplay.animation.play("steady");
        };
        return SkeletonAnim;
    }(BaseUI));
    ui.SkeletonAnim = SkeletonAnim;
    __reflect(SkeletonAnim.prototype, "ui.SkeletonAnim");
})(ui || (ui = {}));
//# sourceMappingURL=SkeletonAnim.js.map
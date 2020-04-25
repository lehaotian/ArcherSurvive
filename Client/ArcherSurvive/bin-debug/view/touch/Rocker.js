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
var Direction;
(function (Direction) {
    Direction[Direction["center"] = 0] = "center";
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
    Direction[Direction["upLeft"] = 5] = "upLeft";
    Direction[Direction["upRight"] = 6] = "upRight";
    Direction[Direction["downLeft"] = 7] = "downLeft";
    Direction[Direction["downRight"] = 8] = "downRight";
})(Direction || (Direction = {}));
/**
 * 摇杆
 */
var Rocker = (function (_super) {
    __extends(Rocker, _super);
    function Rocker() {
        var _this = _super.call(this, "RockerSkin") || this;
        _this.centerPoint = new egret.Point(200, 200);
        _this.startPoint = new egret.Point();
        _this.movePoint = new egret.Point();
        _this.multX = 0;
        _this.multY = 0;
        _this.maxDistance = 100;
        return _this;
    }
    Rocker.prototype.childrenCreated = function () {
        this.center.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
    };
    Rocker.prototype.init = function () {
        this.direction = Direction.center;
        this.multX = 0;
        this.multY = 0;
        this.center.x = this.centerPoint.x;
        this.center.y = this.centerPoint.y;
    };
    Rocker.prototype.touchBegin = function (event) {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
        this.startPoint = this.globalToLocal(event.stageX, event.stageY);
    };
    Rocker.prototype.touchCancel = function (event) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
        egret.Tween.removeTweens(this.center);
        egret.Tween.get(this.center).to({ x: this.centerPoint.x, y: this.centerPoint.y }, 100, egret.Ease.backOut);
        this.init();
    };
    Rocker.prototype.touchMove = function (event) {
        this.movePoint = this.globalToLocal(event.stageX, event.stageY);
        var distance = egret.Point.distance(this.startPoint, this.movePoint);
        if (distance > this.maxDistance) {
            // return;
            var toPoint = egret.Point.interpolate(this.movePoint, this.centerPoint, this.maxDistance / distance);
            this.center.x = toPoint.x;
            this.center.y = toPoint.y;
        }
        else {
            this.center.x = this.centerPoint.x + this.movePoint.x - this.startPoint.x;
            this.center.y = this.centerPoint.y + this.movePoint.y - this.startPoint.y;
        }
        var speed = distance / this.maxDistance; //力度分量
        var x = (this.center.x - this.centerPoint.x) / this.maxDistance;
        var y = (this.center.y - this.centerPoint.y) / this.maxDistance;
        this.multX = Math.floor(x * 100) / 100;
        this.multY = Math.floor(y * 100) / 100;
    };
    return Rocker;
}(ComponentBase));
__reflect(Rocker.prototype, "Rocker");
//# sourceMappingURL=Rocker.js.map
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
var BattleMainView = (function (_super) {
    __extends(BattleMainView, _super);
    function BattleMainView() {
        var _this = _super.call(this, "BattleMainSkin") || this;
        _this.speed = 100;
        _this.skillData = new eui.ArrayCollection();
        _this.startPoint = new egret.Point();
        _this.movePoint = new egret.Point();
        _this.lastTime = 0;
        return _this;
    }
    BattleMainView.prototype.childrenCreated = function () {
        this.skillList.itemRenderer = ItemRender;
        this.skillList.dataProvider = this.skillData;
        this.gotoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoBtnHandler, this);
        this.add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtnHandler, this);
        this.reduce.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reduceBtnHandler, this);
        this.bag.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bagBtnHandler, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
        this.skillList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.moveItemHandler, this);
        this.skillList.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
    };
    BattleMainView.prototype.gotoBtnHandler = function () {
        LayerManager.Instance.openView(MainView);
    };
    BattleMainView.prototype.addBtnHandler = function () {
        this.map.scaleX += 0.1;
        this.map.scaleY += 0.1;
    };
    BattleMainView.prototype.reduceBtnHandler = function () {
        this.map.scaleX -= 0.1;
        this.map.scaleY -= 0.1;
    };
    BattleMainView.prototype.bagBtnHandler = function () {
        LayerManager.Instance.openPop(BagMainPop);
    };
    BattleMainView.prototype.moveItemHandler = function (event) {
        var item = event.itemRenderer;
        // item.icon.visible = true;
    };
    BattleMainView.prototype.touchBegin = function (event) {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
        this.startPoint = this.globalToLocal(event.stageX, event.stageY);
        this.item.x = this.startPoint.x;
        this.item.y = this.startPoint.y;
    };
    BattleMainView.prototype.touchCancel = function (event) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
    };
    BattleMainView.prototype.touchMove = function (event) {
        this.movePoint = this.globalToLocal(event.stageX, event.stageY);
        this.item.x = this.movePoint.x;
        this.item.y = this.movePoint.y;
        console.log(this.movePoint.toString());
    };
    BattleMainView.prototype.open = function (data) {
        this.initView();
    };
    BattleMainView.prototype.close = function () {
    };
    BattleMainView.prototype.initView = function () {
        var numX = 50;
        var numY = 50;
        this.map.removeChildren();
        for (var i = 0; i < numX; i++) {
            for (var j = 0; j < numY; j++) {
                var grid = new eui.Image("grid_1012_png");
                grid.width = 200;
                grid.height = 100;
                if (j % 2 == 0) {
                    grid.x = i * 200;
                }
                else {
                    grid.x = 100 + i * 200;
                    // grid.source = "grid_1013_png";
                }
                grid.y = j * 50;
                this.map.addChild(grid);
            }
        }
        numX *= 2;
        numY /= 2;
        for (var i = 0; i < numX; i++) {
            for (var j = 0; j < numY; j++) {
                var grid = new eui.Image("Active Button_png");
                grid.alpha = 0.2;
                grid.width = 100;
                grid.height = 100;
                grid.x = 100 + i * 100;
                grid.y = 50 + j * 100;
                this.map.addChild(grid);
            }
        }
        this.map.scrollEnabled = true;
        this.skillData.source = [null, null, null, null, null, null, null, null];
        DragonBonesManager.Instance.createDragonBones("bosspit_evil_wizard");
        var display = DragonBonesManager.Instance.getDragonBones("armatureName");
        this.addChild(display);
        display.x = 960;
        display.y = 540;
        display.scaleX = 0.5;
        display.scaleY = 0.5;
        display.animation.play("summon", 0);
        display.animation.timeScale = 1;
    };
    BattleMainView.prototype.update = function () {
        var time = egret.getTimer();
        if (time - this.lastTime < 50) {
            return;
        }
        this.lastTime = time;
        // dragonBones.WorldClock.clock.advanceTime(-1);
        if (this.rocker.multX == 0 && this.rocker.multY == 0) {
            return;
        }
        var x = this.speed * this.rocker.multX;
        var y = this.speed * this.rocker.multY;
        if (x && x != 0) {
            this.map.scrollH += x;
        }
        if (y && y != 0) {
            this.map.scrollV += y;
        }
        console.log(this.item.x + "..." + this.item.y);
    };
    return BattleMainView;
}(ViewBase));
__reflect(BattleMainView.prototype, "BattleMainView");
//# sourceMappingURL=BattleMainView.js.map
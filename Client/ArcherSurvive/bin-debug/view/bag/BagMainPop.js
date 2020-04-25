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
var BagMainPop = (function (_super) {
    __extends(BagMainPop, _super);
    function BagMainPop() {
        var _this = _super.call(this, "BagMainPopSkin") || this;
        _this.itemData = new eui.ArrayCollection();
        _this.startPoint = new egret.Point();
        _this.movePoint = new egret.Point();
        return _this;
    }
    BagMainPop.prototype.childrenCreated = function () {
        this.itemList.itemRenderer = ItemRender;
        this.itemList.dataProvider = this.itemData;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnHandler, this);
        this.itemList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.moveItemHandler, this);
        this.itemList.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
    };
    BagMainPop.prototype.open = function (data) {
        this.initView();
    };
    BagMainPop.prototype.close = function () {
    };
    BagMainPop.prototype.initView = function () {
        var arr = [];
        var hasItem = [10001, 10001, 10001, 10001, 10001, 10001];
        arr.push.apply(arr, hasItem);
        for (var i = 0; i < 60; i++) {
            arr.push(null);
        }
        this.itemData.replaceAll(arr);
        this.item.visible = false;
        this.item.touchEnabled = false;
    };
    BagMainPop.prototype.closeBtnHandler = function () {
        LayerManager.Instance.closePop(BagMainPop);
    };
    BagMainPop.prototype.moveItemHandler = function (event) {
        var item = event.itemRenderer;
        // item.icon.visible = true;
    };
    BagMainPop.prototype.touchBegin = function (event) {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
        this.startPoint = this.globalToLocal(event.stageX, event.stageY);
        this.item.x = this.startPoint.x;
        this.item.y = this.startPoint.y;
    };
    BagMainPop.prototype.touchCancel = function (event) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
    };
    BagMainPop.prototype.touchMove = function (event) {
        this.movePoint = this.globalToLocal(event.stageX, event.stageY);
        this.item.x = this.movePoint.x;
        this.item.y = this.movePoint.y;
        console.log(this.movePoint.toString());
    };
    return BagMainPop;
}(PopBase));
__reflect(BagMainPop.prototype, "BagMainPop");
//# sourceMappingURL=BagMainPop.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 层级管理器
 */
var LayerManager = (function () {
    function LayerManager() {
        this.view = new eui.Group;
        this.pop = new eui.Group;
        /** 界面MAP */
        this.viewMap = {};
        this.viewList = [];
        /** 弹窗MAP */
        this.popMap = {};
    }
    LayerManager.prototype.init = function (statge) {
        this.view = new eui.Group;
        statge.addChild(this.view);
        statge.addChild(this.pop);
        this.pop.touchThrough = true;
    };
    Object.defineProperty(LayerManager, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LayerManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    LayerManager.prototype.openView = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.viewList.length > 0) {
            var lastView = this.viewMap[this.viewList.pop()];
            lastView.visible = false;
            lastView.close();
        }
        var view = this.viewMap[target.toString()];
        if (view) {
            view.visible = true;
        }
        else {
            view = new target();
            this.view.addChild(view);
            this.viewMap[target.toString()] = view;
        }
        view.open(args);
        this.viewList.push(target.toString());
    };
    LayerManager.prototype.closeView = function (target) {
        var view = this.viewMap[target.toString()];
        view.visible = false;
        view.close();
    };
    LayerManager.prototype.getView = function (target) {
        var view = this.viewMap[target.toString()];
        return view;
    };
    LayerManager.prototype.openPop = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var pop = this.popMap[target.toString()];
        if (pop) {
            pop.visible = true;
        }
        else {
            pop = new target();
            this.popMap[target.toString()] = pop;
        }
        pop.open(args);
        this.pop.addChild(pop);
    };
    LayerManager.prototype.getPop = function (target) {
        var pop = this.popMap[target.toString()];
        if (!pop) {
            pop = new target();
        }
        return pop;
    };
    LayerManager.prototype.closePop = function (target) {
        var pop = this.popMap[target.toString()];
        if (pop) {
            this.pop.removeChild(pop);
        }
    };
    LayerManager._instance = null;
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map
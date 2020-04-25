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
var LuckGame;
(function (LuckGame) {
    var LayerManager = (function (_super) {
        __extends(LayerManager, _super);
        function LayerManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.mIsInit = false;
            _this.mainStage = null;
            _this.Init = function (main) {
                if (this.mIsInit) {
                    return;
                }
                this.mIsInit = true;
                this.mainStage = main;
                LuckGame.sceneRoot = new egret.Sprite();
                LuckGame.sceneRoot.name = "SceneRoot";
                this.mainStage.stage.addChild(LuckGame.sceneRoot);
                // this.mMap = new Map();
                // this.mMap.Init();
                // Laya.stage.addChild(this.mMap);
                LuckGame.lowerRoot = new egret.Sprite();
                LuckGame.lowerRoot.name = "LowerRoot";
                this.mainStage.stage.addChild(LuckGame.lowerRoot);
                LuckGame.viewRoot = new egret.Sprite();
                LuckGame.viewRoot.name = "ViewRoot";
                this.mainStage.stage.addChild(LuckGame.viewRoot);
                LuckGame.mainRoot = new egret.Sprite();
                LuckGame.mainRoot.name = "mainRoot";
                this.mainStage.stage.addChild(LuckGame.mainRoot);
                LuckGame.dialogRoot = new egret.Sprite();
                LuckGame.dialogRoot.name = "dialogRoot";
                this.mainStage.stage.addChild(LuckGame.dialogRoot);
                LuckGame.superRoot = new egret.Sprite();
                LuckGame.superRoot.name = "SuperRoot";
                this.mainStage.stage.addChild(LuckGame.superRoot);
                LuckGame.effectRoot = new egret.Sprite();
                LuckGame.effectRoot.name = "effectRoot";
                this.mainStage.stage.addChild(LuckGame.effectRoot);
                Debugger.log("层级管理器启动成功");
            };
            _this.stageView = [];
            _this.stageHideView = [];
            return _this;
        }
        LayerManager.prototype.addView = function (view, layer) {
            if (layer === void 0) { layer = LuckGame.viewRoot; }
            var type = eval(view.__proto__.__class__);
            var viewinfo = SingletonBase.Get(type);
            layer.addChild(viewinfo);
            this.showView(type);
        };
        LayerManager.prototype.showView = function (view) {
            var viewinfo = SingletonBase.Get(view);
            viewinfo.visible = true;
            this.removeHide(view);
            this.addStageView(view);
        };
        /**
         * 隐藏界面
         */
        LayerManager.prototype.hideView = function (view) {
            var viewinfo = SingletonBase.Get(view);
            this.removeStageView(view);
            this.addHideView(view);
            viewinfo.visible = false;
        };
        LayerManager.prototype.closeView = function (view, isDelete) {
            if (isDelete === void 0) { isDelete = false; }
            //从父节点移除
            var viewinfo = SingletonBase.Get(view);
            this.removeSelf(viewinfo);
            this.removeHide(view);
            this.removeStageView(view);
            if (isDelete) {
                SingletonBase.DeleteByKey(view);
            }
        };
        /**
         * 关闭  并销毁界面
         */
        LayerManager.prototype.closeView2 = function (viewthis, isDelete) {
            if (isDelete === void 0) { isDelete = false; }
            var view = eval(viewthis.__proto__.__class__);
            //从父节点移除
            var viewinfo = SingletonBase.Get(view);
            this.removeSelf(viewinfo);
            this.removeHide(view);
            this.removeStageView(view);
            if (isDelete) {
                SingletonBase.DeleteByKey(view);
            }
        };
        /**
         * 从父节点移除自己
         */
        LayerManager.prototype.removeSelf = function (viewinfo) {
            if (viewinfo.parent) {
                viewinfo.parent.removeChild(viewinfo);
            }
        };
        LayerManager.prototype.removeHide = function (view) {
            var index = this.stageHideView.indexOf(view);
            if (index != -1) {
                this.stageHideView.splice(index, 1);
            }
        };
        LayerManager.prototype.addHideView = function (view) {
            var index = this.stageHideView.indexOf(view);
            if (index == -1) {
                this.stageHideView.push(view);
            }
        };
        LayerManager.prototype.removeStageView = function (view) {
            var index = this.stageView.indexOf(view);
            if (index != -1) {
                this.stageView.splice(index, 1);
            }
        };
        LayerManager.prototype.addStageView = function (view) {
            var index = this.stageView.indexOf(view);
            if (index == -1) {
                this.stageView.push(view);
            }
        };
        LayerManager.prototype.isExitStage = function (viewthis) {
            var view = eval(viewthis.__proto__.__class__);
            var index = this.stageView.indexOf(view);
            if (index == -1) {
                return false;
            }
            return true;
        };
        return LayerManager;
    }(Common.Singleton));
    LuckGame.LayerManager = LayerManager;
    __reflect(LayerManager.prototype, "LuckGame.LayerManager");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=LayerManager.js.map
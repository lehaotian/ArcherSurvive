var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var LuckGame;
(function (LuckGame) {
    var HintManage = (function () {
        function HintManage() {
            //所有对象的map
            this.map = {};
            HintManage.instan = this;
        }
        //获取对象
        HintManage.prototype.getObj = function (model) {
            var arr = this.map[model];
            if (arr == null || arr.length <= 0) {
                return null;
            }
            else {
                return arr.shift();
            }
        };
        //回收对象
        HintManage.prototype.recycleObj = function (model, obj) {
            var arr = this.map[model];
            if (arr == null) {
                arr = [];
                arr.push(obj);
                this.map[model] = arr;
            }
            else {
                arr.push(obj);
            }
        };
        HintManage.prototype.addNewMsg = function (msg) {
        };
        HintManage.prototype.showGetItem = function (arr) {
            // ViewManager.Inst.OpenView("GetItemView",false,Laya.Handler.create(this,function(ui){
            //     this.mPreUI = ui;
            //     this.mPreUI.openView(arr);
            // }),null,TierType.superRoot);
        };
        HintManage.instan = null;
        return HintManage;
    }());
    LuckGame.HintManage = HintManage;
    __reflect(HintManage.prototype, "LuckGame.HintManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=HintManage.js.map
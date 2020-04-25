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
/*
* name;
*/
var LuckGame;
(function (LuckGame) {
    var ShopHandler = (function (_super) {
        __extends(ShopHandler, _super);
        function ShopHandler() {
            return _super.call(this) || this;
        }
        //注册所有消息
        ShopHandler.prototype.RegisterAllMessage = function () {
            this.RegisterMessage(L2C_Shop.ResponseBuyItems, this.BuyItemsHandler, new LuckGame.ResponseBuyItems());
        };
        //购买物品的回调函数
        ShopHandler.prototype.BuyItemsHandler = function (_msg) {
            LuckGame.ShopManage.Instance.buy(_msg.mItemId, _msg.mItemNum);
            //刷新界面
        };
        return ShopHandler;
    }(FrameWork.IOHandler));
    LuckGame.ShopHandler = ShopHandler;
    __reflect(ShopHandler.prototype, "LuckGame.ShopHandler");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ShopHandler.js.map
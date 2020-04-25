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
    var ShopService = (function (_super) {
        __extends(ShopService, _super);
        function ShopService() {
            var _this = _super.call(this, new LuckGame.ShopManage(), new LuckGame.ShopHandler()) || this;
            ShopService.Instance = _this;
            return _this;
        }
        //请求角色信息
        ShopService.prototype.RequestBuyItems = function (_Id, _itemNum) {
            var _msg = new LuckGame.RequestBuyItems();
            _msg.SetMessageId(C2L_Shop.RequestBuyItems);
            _msg.SetRelationId(LuckGame.PlayerManage.Instance.playerId);
            _msg.mItemId = _Id;
            _msg.mItemNum = _itemNum;
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        return ShopService;
    }(FrameWork.GameService));
    LuckGame.ShopService = ShopService;
    __reflect(ShopService.prototype, "LuckGame.ShopService");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ShopService.js.map
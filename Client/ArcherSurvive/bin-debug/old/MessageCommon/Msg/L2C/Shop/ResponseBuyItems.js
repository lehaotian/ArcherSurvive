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
    var ResponseBuyItems = (function (_super) {
        __extends(ResponseBuyItems, _super);
        function ResponseBuyItems() {
            var _this = _super.call(this) || this;
            /**
             * 物品id
             */
            _this.mItemId = 0;
            /**
             * 物品数量
             */
            _this.mItemNum = 0;
            return _this;
        }
        ResponseBuyItems.prototype._OnDeserialize = function () {
            this.mItemId = this.ReadInt32();
            this.mItemNum = this.ReadInt32();
        };
        return ResponseBuyItems;
    }(Common.GameMessage));
    LuckGame.ResponseBuyItems = ResponseBuyItems;
    __reflect(ResponseBuyItems.prototype, "LuckGame.ResponseBuyItems");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ResponseBuyItems.js.map
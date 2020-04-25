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
    var ShopManage = (function (_super) {
        __extends(ShopManage, _super);
        function ShopManage() {
            var _this = _super.call(this) || this;
            _this.itemMap = {};
            _this.BtnId = 1;
            ShopManage.Instance = _this;
            return _this;
        }
        ShopManage.prototype.buy = function (id, num) {
            var old = this.itemMap[id];
            if (old != null) {
                old += num;
            }
            this.itemMap[id] = old;
        };
        return ShopManage;
    }(GamePart));
    LuckGame.ShopManage = ShopManage;
    __reflect(ShopManage.prototype, "LuckGame.ShopManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ShopManage.js.map
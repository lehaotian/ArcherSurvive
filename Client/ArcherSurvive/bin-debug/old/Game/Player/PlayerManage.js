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
    var PlayerManage = (function (_super) {
        __extends(PlayerManage, _super);
        function PlayerManage() {
            var _this = _super.call(this) || this;
            _this.playerId = 0;
            _this.playerName = "";
            _this.playerLv = 0;
            /**
             * 当前经验
             */
            _this.currExp = 0;
            /**
             * 升到下一级所需的经验
             */
            _this.nextNeedExp = 0;
            _this.playerSex = 0;
            /**
             * 灵根
             */
            _this.rootResultMap = {};
            /**
             * 基本属性值
             */
            _this.proResultMap = {};
            PlayerManage.Instance = _this;
            return _this;
        }
        PlayerManage.prototype.addRoot = function (key, val) {
            this.rootResultMap[key] = val;
        };
        PlayerManage.prototype.addPro = function (key, val) {
            this.proResultMap[key] = val;
        };
        return PlayerManage;
    }(GamePart));
    LuckGame.PlayerManage = PlayerManage;
    __reflect(PlayerManage.prototype, "LuckGame.PlayerManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=PlayerManage.js.map
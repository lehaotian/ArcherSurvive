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
    var ComBatManage = (function (_super) {
        __extends(ComBatManage, _super);
        function ComBatManage() {
            var _this = _super.call(this) || this;
            //玩家数据
            /**
             * key: playerId
             */
            _this.combatCardDataMap = {};
            //攻击过程
            _this.attProcessDataMap = {};
            ComBatManage.Instance = _this;
            new LuckGame.ComBatControl();
            new LuckGame.AttackControl();
            return _this;
        }
        ComBatManage.prototype.initCombatCardDataMap = function (data) {
            this.combatCardDataMap[data.playerId] = data;
        };
        ComBatManage.prototype.getAttProcessDataMap = function (attTimes) {
            var data = this.attProcessDataMap[attTimes];
            return data;
        };
        ComBatManage.prototype.initAttProcessDataMap = function (key, data) {
            this.attProcessDataMap[key] = data;
        };
        //初始化假数据
        ComBatManage.prototype.initData = function () {
            for (var i = 1; i <= 12; i++) {
                var combatCardData = new CombatCardData();
                combatCardData.playerId = i;
                combatCardData.pos = i;
                this.combatCardDataMap[combatCardData.playerId] = combatCardData;
            }
        };
        return ComBatManage;
    }(GamePart));
    LuckGame.ComBatManage = ComBatManage;
    __reflect(ComBatManage.prototype, "LuckGame.ComBatManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ComBatManage.js.map
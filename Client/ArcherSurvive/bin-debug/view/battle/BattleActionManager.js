var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var battle;
(function (battle) {
    var BattleActionManager = (function () {
        function BattleActionManager() {
        }
        return BattleActionManager;
    }());
    battle.BattleActionManager = BattleActionManager;
    __reflect(BattleActionManager.prototype, "battle.BattleActionManager");
})(battle || (battle = {}));
//# sourceMappingURL=BattleActionManager.js.map
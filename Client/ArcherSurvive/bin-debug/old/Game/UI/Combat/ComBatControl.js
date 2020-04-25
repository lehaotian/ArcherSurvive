var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 单例
*/
var LuckGame;
(function (LuckGame) {
    var ComBatControl = (function () {
        function ComBatControl() {
            //回合开始
            //攻击
            this.attackTimes = 0;
            ComBatControl.Instance = this;
        }
        //进场
        ComBatControl.prototype.initCardPos = function (onwer) {
            this.attackTimes = 0;
            LuckGame.AttackControl.Instance.initCardPos(onwer);
        };
        ComBatControl.prototype.attack = function () {
            this.attackTimes++;
            var combatProcessData = LuckGame.ComBatManage.Instance.getAttProcessDataMap(this.attackTimes);
            if (combatProcessData == null) {
                //战斗结束
                console.log("战斗结束");
                // ViewManager.Inst.HideView("CombatMainView");
                SingletonBase.Get(ui.CombatMainView).close();
                return;
            }
            LuckGame.AttackControl.Instance.processType = 0;
            LuckGame.AttackControl.Instance.attack();
        };
        return ComBatControl;
    }());
    LuckGame.ComBatControl = ComBatControl;
    __reflect(ComBatControl.prototype, "LuckGame.ComBatControl");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ComBatControl.js.map
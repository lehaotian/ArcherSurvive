var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 单例
*/
var LuckGame;
(function (LuckGame) {
    var AttackControl = (function () {
        function AttackControl() {
            //玩家数据
            /**
             * key: playerId
             */
            this.combatCardMap = {};
            //找到攻击点
            //攻击
            this.processType = 0;
            this.animTimes = 0;
            AttackControl.Instance = this;
        }
        AttackControl.prototype.getCard = function (playerId) {
            return this.combatCardMap[playerId];
        };
        // private combatCardt:ui.CombatCard = null;
        //攻击之前加载资源
        AttackControl.prototype.initCardPos = function (onwer) {
            // this.combatCardt = new ui.CombatCard();
            // this.combatCardt.initData("1");
            // onwer.addChild(this.combatCardt);
            this.clearData();
            for (var key in LuckGame.ComBatManage.Instance.combatCardDataMap) {
                var combatCard = new ui.CombatCard();
                combatCard.initData(key);
                onwer.addChild(combatCard);
                this.combatCardMap[key] = combatCard;
            }
            //
            LuckGame.ComBatControl.Instance.attack();
        };
        AttackControl.prototype.clearData = function () {
            for (var key in this.combatCardMap) {
                var combatCard = this.combatCardMap[key];
                combatCard.initData(key);
                combatCard.clear();
                delete this.combatCardMap[key];
            }
        };
        AttackControl.prototype.attack = function () {
            this.processType++;
            if (this.processType >= ProcessType.end) {
                //一次出手结束
                LuckGame.ComBatControl.Instance.attack();
                return;
            }
            var combatProcessData = LuckGame.ComBatManage.Instance.getAttProcessDataMap(LuckGame.ComBatControl.Instance.attackTimes);
            if (combatProcessData == null) {
                //战斗结束
                console.log("战斗结束 AttackControl");
                return;
            }
            var proDataList = combatProcessData.getProcessData(this.processType);
            if (proDataList == null) {
                this.attack();
                return;
            }
            this.animTimes = 0;
            var card = null;
            var data = null;
            for (var index in proDataList) {
                data = proDataList[index];
                if (data != null) {
                    this.animTimes++;
                    card = this.getCard(data.playerId);
                    card.anim(data);
                }
            }
        };
        AttackControl.prototype.animEnd = function () {
            this.animTimes--;
            if (this.animTimes <= 0) {
                this.attack();
            }
        };
        //攻击结束
        AttackControl.prototype.attackEnd = function () {
            //一次出手结束
            this.attack();
        };
        return AttackControl;
    }());
    LuckGame.AttackControl = AttackControl;
    __reflect(AttackControl.prototype, "LuckGame.AttackControl");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=AttackControl.js.map
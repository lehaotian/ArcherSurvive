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
    var ComBatHandler = (function (_super) {
        __extends(ComBatHandler, _super);
        function ComBatHandler() {
            return _super.call(this) || this;
        }
        //注册所有消息
        ComBatHandler.prototype.RegisterAllMessage = function () {
            this.RegisterMessage(L2C_Combat.CombatCardData, this.getCombatCardDataHandler, new Combat.GetCombatCardData());
            this.RegisterMessage(L2C_Combat.CombatResultData, this.combatResultDataHandler, new Combat.CombatResultData());
        };
        ComBatHandler.prototype.getCombatCardDataHandler = function (msg) {
            LuckGame.ComBatManage.Instance.combatCardDataMap = {};
            for (var key in msg.cardDataMap) {
                LuckGame.ComBatManage.Instance.initCombatCardDataMap(msg.cardDataMap[key]);
            }
        };
        ComBatHandler.prototype.combatResultDataHandler = function (msg) {
            LuckGame.ComBatManage.Instance.attProcessDataMap = {};
            for (var key in msg.attProcessDataMap) {
                LuckGame.ComBatManage.Instance.initAttProcessDataMap(key, msg.attProcessDataMap[key]);
            }
            this.openLoginView();
        };
        ComBatHandler.prototype.openLoginView = function () {
            SingletonBase.Get(ui.CombatMainView).open();
            // ViewManager.Inst.OpenView("CombatMainView",false,function(ui){
            //     this.mPreUI = ui;
            //     ui.openView();
            // },null,TierType.viewRoot);
        };
        return ComBatHandler;
    }(FrameWork.IOHandler));
    LuckGame.ComBatHandler = ComBatHandler;
    __reflect(ComBatHandler.prototype, "LuckGame.ComBatHandler");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ComBatHandler.js.map
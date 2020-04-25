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
    var PlayerHandler = (function (_super) {
        __extends(PlayerHandler, _super);
        function PlayerHandler() {
            return _super.call(this) || this;
        }
        //注册所有消息
        PlayerHandler.prototype.RegisterAllMessage = function () {
            this.RegisterMessage(L2C_Player.ReturnPlayerInfo, this.getPlayerInfo, new Player.ReturnPlayerInfo());
            this.RegisterMessage(L2C_Player.ReturnPlayerInfoAnimaRoot, this.getPlayerAnimaRoot, new Player.ReturnPlayerPro());
            this.RegisterMessage(L2C_Player.returnPlayerInfoAnimaPro, this.getPlayerAnimaPro, new Player.ReturnPlayerPro());
            this.RegisterMessage(L2C_Player.returnPlayerLvInfo, this.getPlayerLvInfo, new MessgeInfoIII());
        };
        PlayerHandler.prototype.getPlayerInfo = function (msg) {
            LuckGame.PlayerManage.Instance.playerId = msg.playerInfo.DbId;
            LuckGame.PlayerManage.Instance.playerName = msg.playerInfo.playerName;
            LuckGame.PlayerManage.Instance.playerSex = msg.playerInfo.sex;
            LuckGame.PlayerManage.Instance.playerLv = msg.playerInfo.Lv;
            //请求背包信息
            LuckGame.BagService.Instance.reqBagInfo();
            //进入游戏大厅
            this.openPlayerInfoView();
        };
        PlayerHandler.prototype.openPlayerInfoView = function () {
            SingletonBase.Get(LuckGame.LayerManager).closeView(ui.CreatePlayer);
            SingletonBase.Get(LuckGame.LayerManager).closeView(ui.PlayerInfoListView);
            // ViewManager.Inst.HideView("CreatePlayer");
            // ViewManager.Inst.HideView("PlayerInfoListView");
            // ViewManager.Inst.OpenView("WorldLobbyView",false,function(ui){
            //     this.mPreUI = ui;
            // },null,TierType.viewRoot);
            // ViewManager.Inst.OpenView("MainView",false,function(ui){
            //     this.mPreUI = ui;
            //     this.mPreUI.openView();
            // },null,TierType.viewRoot);
        };
        PlayerHandler.prototype.getPlayerAnimaRoot = function (msg) {
            for (var key in msg.proResultMap) {
                var val = msg.proResultMap[key];
                this._logicManage.addRoot(key, val);
            }
        };
        PlayerHandler.prototype.getPlayerAnimaPro = function (msg) {
            for (var key in msg.proResultMap) {
                var val = msg.proResultMap[key];
                this._logicManage.addPro(key, val);
            }
        };
        PlayerHandler.prototype.getPlayerLvInfo = function (msg) {
            LuckGame.PlayerManage.Instance.playerLv = msg.Lv;
            LuckGame.PlayerManage.Instance.currExp = msg.currExp;
            LuckGame.PlayerManage.Instance.nextNeedExp = msg.nextNeedExp;
            // UIRefreshManage.Instance.runCall("updatePlayerLvInfo");
        };
        return PlayerHandler;
    }(FrameWork.IOHandler));
    LuckGame.PlayerHandler = PlayerHandler;
    __reflect(PlayerHandler.prototype, "LuckGame.PlayerHandler");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=PlayerHandler.js.map
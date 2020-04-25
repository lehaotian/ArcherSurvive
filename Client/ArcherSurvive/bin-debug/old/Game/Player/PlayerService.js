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
    var PlayerService = (function (_super) {
        __extends(PlayerService, _super);
        function PlayerService() {
            var _this = _super.call(this, new LuckGame.PlayerManage(), new LuckGame.PlayerHandler()) || this;
            PlayerService.Instance = _this;
            return _this;
            // new UIRefreshManage();
        }
        PlayerService.prototype.createPlayerInfo = function (name, sex) {
            var _msg = new LogicAccount.CreatePlayerInfo();
            _msg.SetMessageId(C2L_Player.CreatePlayerInfo);
            _msg.accountId = LuckGame.LoginManage.Instance.accountId;
            _msg.playerName = name;
            _msg.sex = sex;
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        //请求角色信息
        PlayerService.prototype.ReqPlayetInfo = function () {
            var _msg = new LogicAccount.RequestPlayerInfo();
            _msg.SetMessageId(C2L_Player.RequestPlayerInfo);
            _msg.SetRelationId(LuckGame.PlayerManage.Instance.playerId);
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        //请求觉醒
        PlayerService.prototype.ReqAwakenPro = function () {
            var _msg = new MessgeInfoNone();
            _msg.SetMessageId(C2L_Player.ReqAwakenPro);
            _msg.SetRelationId(LuckGame.PlayerManage.Instance.playerId);
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        return PlayerService;
    }(FrameWork.GameService));
    LuckGame.PlayerService = PlayerService;
    __reflect(PlayerService.prototype, "LuckGame.PlayerService");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=PlayerService.js.map
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
    var NetSetvice = (function (_super) {
        __extends(NetSetvice, _super);
        function NetSetvice() {
            var _this = _super.call(this, new LuckGame.NetManager(), new DefaultHandler()) || this;
            NetSetvice.Instance = _this;
            return _this;
        }
        //发送消息
        NetSetvice.prototype.SendMessage = function (msg) {
            if (msg == null || msg.GetMessageId() == null) {
                return;
            }
            this._logic.SendMessage(msg);
        };
        return NetSetvice;
    }(FrameWork.GameService));
    LuckGame.NetSetvice = NetSetvice;
    __reflect(NetSetvice.prototype, "LuckGame.NetSetvice");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=NetSetvice.js.map
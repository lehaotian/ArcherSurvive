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
var ui;
(function (ui) {
    var CreatePlayer = (function (_super) {
        __extends(CreatePlayer, _super);
        function CreatePlayer() {
            var _this = _super.call(this, "CreatePlayer") || this;
            _this.biudEvent();
            return _this;
        }
        CreatePlayer.prototype.biudEvent = function () {
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
            this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createPlayerInfo, this);
        };
        CreatePlayer.prototype.createPlayerInfo = function () {
            if (this.nick.text == "") {
                // Event.DispatchEvent("showWaveHintView", "昵称不能为空");
                return;
            }
            LuckGame.PlayerService.Instance.createPlayerInfo(this.nick.text, 1);
        };
        return CreatePlayer;
    }(BaseUI));
    ui.CreatePlayer = CreatePlayer;
    __reflect(CreatePlayer.prototype, "ui.CreatePlayer");
})(ui || (ui = {}));
//# sourceMappingURL=CreatePlayer.js.map
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
    var PlayerInfoItem = (function (_super) {
        __extends(PlayerInfoItem, _super);
        function PlayerInfoItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "PlayerInfoItem";
            _this.biudEvent();
            return _this;
        }
        PlayerInfoItem.prototype.biudEvent = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playerThis, this);
        };
        PlayerInfoItem.prototype.dataChanged = function () {
            if (this.data.DbId <= 0) {
                return;
            }
            this.playerNameLab.text = this.data.playerName;
        };
        PlayerInfoItem.prototype.playerThis = function () {
            if (this.data.DbId <= 0) {
                return;
            }
            LuckGame.PlayerManage.Instance.playerId = this.data.DbId;
            LuckGame.PlayerService.Instance.ReqPlayetInfo();
        };
        return PlayerInfoItem;
    }(eui.ItemRenderer));
    ui.PlayerInfoItem = PlayerInfoItem;
    __reflect(PlayerInfoItem.prototype, "ui.PlayerInfoItem");
})(ui || (ui = {}));
//# sourceMappingURL=PlayerInfoItem.js.map
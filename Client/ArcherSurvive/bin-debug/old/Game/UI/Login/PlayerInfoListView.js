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
    var PlayerInfoListView = (function (_super) {
        __extends(PlayerInfoListView, _super);
        function PlayerInfoListView() {
            var _this = _super.call(this, "PlayerInfoListView") || this;
            _this.dataArray = new eui.ArrayCollection();
            _this.biudEvent();
            return _this;
        }
        PlayerInfoListView.prototype.biudEvent = function () {
            this.createPlayer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openCreateView, this);
            this.playerInfoList.itemRenderer = ui.PlayerInfoItem;
            this.playerInfoList.dataProvider = this.dataArray;
        };
        PlayerInfoListView.prototype.openView = function () {
            this.init();
        };
        PlayerInfoListView.prototype.init = function () {
            var arr = LuckGame.LoginManage.Instance.getPlayerList();
            for (var i = arr.length; i < 6; i++) {
                var playerInfo = new PlayerInfo();
                arr.push(playerInfo);
            }
            this.dataArray.replaceAll(arr);
        };
        PlayerInfoListView.prototype.openCreateView = function () {
            SingletonBase.Get(ui.CreatePlayer).open();
        };
        return PlayerInfoListView;
    }(BaseUI));
    ui.PlayerInfoListView = PlayerInfoListView;
    __reflect(PlayerInfoListView.prototype, "ui.PlayerInfoListView");
})(ui || (ui = {}));
//# sourceMappingURL=PlayerInfoListView.js.map
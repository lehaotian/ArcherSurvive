var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var PlayerInfo = (function () {
    function PlayerInfo() {
        /**
         * 角色id
         */
        this.DbId = 0;
        /**
         * 角色昵称
         */
        this.playerName = "";
        /**
         * 角色性别
         */
        this.sex = 0;
        this.Lv = 0;
    }
    return PlayerInfo;
}());
__reflect(PlayerInfo.prototype, "PlayerInfo");
//# sourceMappingURL=PlayerInfo.js.map
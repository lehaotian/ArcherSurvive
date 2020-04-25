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
var LogicAccount;
(function (LogicAccount) {
    var CreatePlayerInfo = (function (_super) {
        __extends(CreatePlayerInfo, _super);
        function CreatePlayerInfo() {
            var _this = _super.call(this) || this;
            _this.accountId = 0;
            _this.playerName = "";
            _this.sex = 0;
            return _this;
        }
        CreatePlayerInfo.prototype._OnSerial = function () {
            this.WriteInt64(this.accountId);
            this.WriteString(this.playerName);
            this.WriteInt8(this.sex);
        };
        return CreatePlayerInfo;
    }(Common.GameMessage));
    LogicAccount.CreatePlayerInfo = CreatePlayerInfo;
    __reflect(CreatePlayerInfo.prototype, "LogicAccount.CreatePlayerInfo");
})(LogicAccount || (LogicAccount = {}));
//# sourceMappingURL=CreatePlayerInfo.js.map
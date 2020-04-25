var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameMsg = (function () {
    function GameMsg(version, eventId, encoderType, len, pb) {
        this.version = version;
        this.eventId = eventId;
        this.encoderType = encoderType;
        this.len = len;
        this.pb = pb;
    }
    return GameMsg;
}());
__reflect(GameMsg.prototype, "GameMsg");
//# sourceMappingURL=GameMsg.js.map
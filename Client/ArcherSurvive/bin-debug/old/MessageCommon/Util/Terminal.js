var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terminal;
(function (Terminal) {
    Terminal[Terminal["System"] = 0] = "System";
    Terminal[Terminal["Client"] = 1] = "Client";
    Terminal[Terminal["Account"] = 2] = "Account";
    Terminal[Terminal["Logic"] = 3] = "Logic";
})(Terminal || (Terminal = {}));
var TerminalTool = (function () {
    function TerminalTool() {
    }
    TerminalTool.prototype.FromTerminal = function (msgId, number) {
        var t1 = Math.floor(msgId / 16777216);
        return t1;
    };
    TerminalTool.prototype.ToTerminal = function (msgId) {
        var a = ((msgId / 16777216)).toString();
        var b = a.split(".");
        var t1 = parseInt(b[0]);
        var t2 = parseInt(b[1]);
        t1 = t1 * 16777216;
        t1 = msgId - t1;
        t1 = Math.floor(t1 / 65536);
        return t1;
    };
    return TerminalTool;
}());
__reflect(TerminalTool.prototype, "TerminalTool");
//# sourceMappingURL=Terminal.js.map
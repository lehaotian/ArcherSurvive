var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Debugger = (function () {
    function Debugger() {
    }
    Debugger.log = function (content) {
        console.log(content);
    };
    Debugger.error = function (content) {
        console.error(content);
    };
    Debugger.warn = function (content) {
        console.warn(content);
    };
    Debugger.exception = function (content) {
        console.exception(content);
    };
    Debugger.assert = function (test, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        console.assert(test, message, optionalParams);
    };
    return Debugger;
}());
__reflect(Debugger.prototype, "Debugger");
//# sourceMappingURL=Debugger.js.map
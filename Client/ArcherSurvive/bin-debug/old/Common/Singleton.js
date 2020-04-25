var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var Singleton = (function () {
        function Singleton() {
        }
        Singleton.GetInstance = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var Class = this;
            if (!Class._instance) {
                var argsLen = args.length;
                if (argsLen == 0) {
                    Class._instance = new Class();
                }
                else if (argsLen == 1) {
                    Class._instance = new Class(args[0]);
                }
                else if (argsLen == 2) {
                    Class._instance = new Class(args[0], args[1]);
                }
                else if (argsLen == 3) {
                    Class._instance = new Class(args[0], args[1], args[2]);
                }
                else if (argsLen == 4) {
                    Class._instance = new Class(args[0], args[1], args[2], args[3]);
                }
                else if (argsLen == 5) {
                    Class._instance = new Class(args[0], args[1], args[2], args[3], args[4]);
                }
                else {
                    Class._instance = new Class();
                }
            }
            return Class._instance;
        };
        return Singleton;
    }());
    Common.Singleton = Singleton;
    __reflect(Singleton.prototype, "Common.Singleton");
})(Common || (Common = {}));
//# sourceMappingURL=Singleton.js.map
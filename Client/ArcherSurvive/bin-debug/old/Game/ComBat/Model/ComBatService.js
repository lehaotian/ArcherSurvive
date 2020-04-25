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
    var ComBatService = (function (_super) {
        __extends(ComBatService, _super);
        function ComBatService() {
            var _this = _super.call(this, new LuckGame.ComBatManage(), new LuckGame.ComBatHandler()) || this;
            ComBatService.Instance = _this;
            return _this;
        }
        return ComBatService;
    }(FrameWork.GameService));
    LuckGame.ComBatService = ComBatService;
    __reflect(ComBatService.prototype, "LuckGame.ComBatService");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=ComBatService.js.map
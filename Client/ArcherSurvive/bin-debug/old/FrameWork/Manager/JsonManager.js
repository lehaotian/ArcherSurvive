var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var LuckGame;
(function (LuckGame) {
    var JsonManager = (function () {
        function JsonManager() {
            this.jsonMap = {};
            this.url = "config/";
            this.nameEnd = "_json";
            this.jsonUrlArr = [];
            this.currJsonName = "";
            JsonManager.Instance = this;
        }
        JsonManager.prototype.loadAllJson = function () {
            var allJsonName = RES.getRes("includ_json");
            var arr = allJsonName["jsonconfig"];
            for (var key in arr) {
                var info = arr[key];
                RES.getResAsync(info + this.nameEnd, this.loadJson, this);
            }
        };
        JsonManager.prototype.onLoaded = function () {
        };
        JsonManager.prototype.loadJson = function (json, jsonName) {
            var arr = jsonName.split("_");
            this.jsonMap[arr[0]] = json;
        };
        JsonManager.prototype.getJsonMap = function (name) {
            return this.jsonMap[name];
        };
        return JsonManager;
    }());
    LuckGame.JsonManager = JsonManager;
    __reflect(JsonManager.prototype, "LuckGame.JsonManager");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=JsonManager.js.map
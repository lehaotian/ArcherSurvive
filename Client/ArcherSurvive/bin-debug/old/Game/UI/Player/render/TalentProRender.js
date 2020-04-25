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
    var TalentProRender = (function (_super) {
        __extends(TalentProRender, _super);
        function TalentProRender() {
            var _this = _super.call(this) || this;
            _this.skinName = "talentItemRender";
            return _this;
        }
        TalentProRender.prototype.dataChanged = function () {
            this.init();
        };
        TalentProRender.prototype.init = function () {
            this.proTypeLab.text = this.getRootName(this.data.name);
            this.proVal.text = this.data.val;
        };
        TalentProRender.prototype.getRootName = function (type) {
            var str = GetDictionaryStr.getStrById(type);
            return str;
        };
        return TalentProRender;
    }(eui.ItemRenderer));
    ui.TalentProRender = TalentProRender;
    __reflect(TalentProRender.prototype, "ui.TalentProRender");
})(ui || (ui = {}));
//# sourceMappingURL=TalentProRender.js.map
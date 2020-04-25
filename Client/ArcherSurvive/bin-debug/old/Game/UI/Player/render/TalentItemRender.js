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
    var TalentItemRender = (function (_super) {
        __extends(TalentItemRender, _super);
        function TalentItemRender() {
            var _this = _super.call(this) || this;
            _this.skinName = "TalentProRender";
            return _this;
        }
        TalentItemRender.prototype.dataChanged = function () {
            this.init();
        };
        TalentItemRender.prototype.init = function () {
            this.talentType.text = this.getRootName(this.data.name);
            this.proValue.text = this.data.val;
            this.proBar.setPro = this.data.val / 100;
        };
        TalentItemRender.prototype.getRootName = function (type) {
            var str = GetDictionaryStr.getStrById(parseInt(type) + 20);
            return str;
        };
        return TalentItemRender;
    }(eui.ItemRenderer));
    ui.TalentItemRender = TalentItemRender;
    __reflect(TalentItemRender.prototype, "ui.TalentItemRender");
})(ui || (ui = {}));
//# sourceMappingURL=TalentItemRender.js.map
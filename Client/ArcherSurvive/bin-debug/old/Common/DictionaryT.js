var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DictionaryT = (function () {
    function DictionaryT() {
        this.keyArr = [];
        this.valArr = [];
    }
    DictionaryT.prototype.Add = function (key, val) {
        this.keyArr.push(key);
        this.valArr.push(val);
    };
    DictionaryT.prototype.ContainsKey = function (key) {
        return this.keyArr.indexOf(key) != -1;
    };
    DictionaryT.prototype.GetValueByKey = function (key) {
        var index = this.keyArr.indexOf(key);
        if (index == -1) {
            return null;
        }
        return this.valArr[index];
    };
    DictionaryT.prototype.GetKeyByValue = function (val) {
        var index = this.valArr.indexOf(val);
        if (index == -1) {
            return null;
        }
        return this.keyArr[index];
    };
    DictionaryT.prototype.DeleteDataByKey = function (key) {
        var index = this.keyArr.indexOf(key);
        if (index == -1) {
            return;
        }
        this.keyArr.splice(index, 1);
        this.valArr.splice(index, 1);
    };
    DictionaryT.prototype.DeleteDataByVal = function (val) {
        var index = this.valArr.indexOf(val);
        if (index == -1) {
            return;
        }
        this.keyArr.splice(index, 1);
        this.valArr.splice(index, 1);
    };
    return DictionaryT;
}());
__reflect(DictionaryT.prototype, "DictionaryT");
//# sourceMappingURL=DictionaryT.js.map
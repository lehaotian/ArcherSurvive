var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 存储的键值对
*/
var Common;
(function (Common) {
    var Dictionary = (function () {
        function Dictionary() {
            this.items = {};
        }
        //检查某个key是否存在
        Dictionary.prototype.ConstainsKey = function (key) {
            return key in this.items;
        };
        //检查某个值是否存在
        Dictionary.prototype.ContainsValue = function (value) {
            for (var key in this.items) {
                if (this.items[key] == value)
                    return true;
            }
            return false;
        };
        //添加元素
        Dictionary.prototype.Add = function (key, value) {
            this.items[key] = value;
        };
        //移出元素
        Dictionary.prototype.Remove = function (key) {
            if (!this.ContainsKey(key))
                return false;
            delete this.items[key];
            return true;
        };
        //获取值
        Dictionary.prototype.GetItem = function (key) {
            return this.ContainsKey(key) ? this.items[key] : null;
        };
        Dictionary.prototype.ContainsKey = function (key) {
            var val = this.items[key];
            if (val == null) {
                return false;
            }
            return true;
        };
        //值以数组形式返回
        Dictionary.prototype.GetValuesArray = function () {
            var values = [];
            for (var key in this.items) {
                if (this.ContainsKey(key)) {
                    values.push(this.items[key]);
                }
            }
            return values;
        };
        //键以数组形式返回
        Dictionary.prototype.GetKeyArray = function () {
            var values = [];
            for (var key in this.items) {
                if (this.ContainsKey(key)) {
                    values.push(key);
                }
            }
            return values;
        };
        Dictionary.prototype.GetArray = function () {
            return this.items;
        };
        //返回Map
        Dictionary.prototype.GetMap = function () {
            return this.items;
        };
        //长度
        Dictionary.prototype.Size = function () {
            return Object.keys(this.items).length;
        };
        //清空
        Dictionary.prototype.Clear = function () {
            this.items = [];
        };
        return Dictionary;
    }());
    Common.Dictionary = Dictionary;
    __reflect(Dictionary.prototype, "Common.Dictionary");
})(Common || (Common = {}));
//# sourceMappingURL=Dictionary.js.map
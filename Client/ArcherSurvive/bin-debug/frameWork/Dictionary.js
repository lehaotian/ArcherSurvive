var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 存储的键值对
*/
var HashMap = (function () {
    function HashMap() {
        this.arr = [];
        this.items = {};
    }
    //检查某个key是否存在
    HashMap.prototype.ConstainsKey = function (key) {
        var map = {};
        map["sss"];
        return key in this.items;
    };
    //检查某个值是否存在
    HashMap.prototype.containsValue = function (value) {
        for (var key in this.items) {
            if (this.items[key] == value)
                return true;
        }
        return false;
    };
    //添加元素
    HashMap.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    //移出元素
    HashMap.prototype.Remove = function (key) {
        if (!this.ContainsKey(key))
            return false;
        delete this.items[key];
        return true;
    };
    //获取值
    HashMap.prototype.GetItem = function (key) {
        return this.ContainsKey(key) ? this.items[key] : null;
    };
    HashMap.prototype.ContainsKey = function (key) {
        var val = this.items[key];
        if (val == null) {
            return false;
        }
        return true;
    };
    //值以数组形式返回
    HashMap.prototype.GetValuesArray = function () {
        var values = [];
        for (var key in this.items) {
            if (this.ContainsKey(key)) {
                values.push(this.items[key]);
            }
        }
        return values;
    };
    //键以数组形式返回
    HashMap.prototype.GetKeyArray = function () {
        var values = [];
        for (var key in this.items) {
            if (this.ContainsKey(key)) {
                values.push(key);
            }
        }
        return values;
    };
    HashMap.prototype.GetArray = function () {
        return this.items;
    };
    //返回Map
    HashMap.prototype.GetMap = function () {
        return this.items;
    };
    //长度
    HashMap.prototype.Size = function () {
        return Object.keys(this.items).length;
    };
    //清空
    HashMap.prototype.Clear = function () {
        this.items = [];
    };
    return HashMap;
}());
__reflect(HashMap.prototype, "HashMap");
//# sourceMappingURL=Dictionary.js.map
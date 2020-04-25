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
* http 适配器
*/
var HttpClientAdapter = (function (_super) {
    __extends(HttpClientAdapter, _super);
    //构造函数
    function HttpClientAdapter() {
        var _this = _super.call(this) || this;
        _this._content = null;
        return _this;
    }
    //初始化
    HttpClientAdapter.prototype.Init = function (adapterId, objectParam) {
        _super.prototype.Init.call(this, adapterId, objectParam);
        this._adapterId = adapterId;
        this._content = objectParam;
    };
    //添加发送队列
    HttpClientAdapter.prototype.AddSendBlock = function (block) {
        _super.prototype.AddSendBlock.call(this, block);
    };
    //发送消息
    HttpClientAdapter.prototype.SendMessage = function () {
        var count = this._allMemMesssageQueue.Size();
        for (var i = 0; i < count; i++) {
            var sendData = this._allMemMesssageQueue.Dequeue();
            this.SendData(sendData);
        }
    };
    HttpClientAdapter.prototype.SendData = function (data) {
        this._content.RequestData(data);
    };
    return HttpClientAdapter;
}(NetAdapter));
__reflect(HttpClientAdapter.prototype, "HttpClientAdapter");
//# sourceMappingURL=HttpClientAdapter.js.map
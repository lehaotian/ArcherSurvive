var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* name;
*/
var NetAdapter = (function () {
    function NetAdapter() {
        this._adapterId = 0;
        this._objectCache = null;
        this._allMemMesssageQueue = new Common.Queue();
    }
    //适配器id
    NetAdapter.prototype.GetAdapterId = function () {
        return this._adapterId;
    };
    //对象缓存
    NetAdapter.prototype.GetObjectCache = function () {
        return this._objectCache;
    };
    //初始化
    NetAdapter.prototype.Init = function (adapterId, objectParam) {
        this._adapterId = adapterId;
        this._objectCache = objectParam;
    };
    //添加发送队列
    NetAdapter.prototype.AddSendBlock = function (block) {
        this._allMemMesssageQueue.Enqueue(block);
    };
    //发送消息
    NetAdapter.prototype.SendMessage = function (block) {
    };
    //发送消息
    NetAdapter.prototype.SendData = function (block) {
    };
    return NetAdapter;
}());
__reflect(NetAdapter.prototype, "NetAdapter");
//# sourceMappingURL=NetAdapter.js.map
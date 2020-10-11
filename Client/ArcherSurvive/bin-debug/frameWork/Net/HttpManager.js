var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * http网络管理器
 */
var HttpManager = (function () {
    function HttpManager() {
        this.request = new egret.HttpRequest();
    }
    Object.defineProperty(HttpManager, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new HttpManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 发送get请求
     */
    HttpManager.prototype.sendGetMsg = function (url, param, callback, obj) {
        url += "?";
        for (var i in param) {
            url += "&" + i + "=" + param[i];
        }
        this.request.responseType = egret.HttpResponseType.TEXT;
        this.request.open(url, egret.HttpMethod.GET);
        this.request.send();
        this.request.addEventListener(egret.Event.COMPLETE, callback, obj);
        this.request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        this.request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    /**
     * 发送post请求
     */
    HttpManager.prototype.sendPostMsg = function (url, param, callback, obj) {
    };
    HttpManager.prototype.onGetIOError = function (event) {
        egret.log("get error : " + event);
    };
    HttpManager.prototype.onGetProgress = function (event) {
        egret.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpManager.prototype.sendPostRequest = function (url, param, callback, obj) {
        //请求参数
        var params = "p1=postP1&p2=postP2";
        url += "?";
        for (var i in param) {
            url += "&" + i + "=" + param[i];
        }
        this.request.responseType = egret.HttpResponseType.TEXT;
        this.request.open(url, egret.HttpMethod.POST);
        this.request.send(params);
        this.request.addEventListener(egret.Event.COMPLETE, callback, obj);
        this.request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        this.request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    HttpManager.prototype.onPostIOError = function (event) {
        egret.log("post error : " + event);
    };
    HttpManager.prototype.onPostProgress = function (event) {
        egret.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return HttpManager;
}());
__reflect(HttpManager.prototype, "HttpManager");
//# sourceMappingURL=HttpManager.js.map
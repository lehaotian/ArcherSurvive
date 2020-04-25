var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ResLoadManage = (function () {
    function ResLoadManage() {
        this.countGroupError = 0;
    }
    ResLoadManage.prototype.bind = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadErr, this);
        RES.loadGroup("preload");
    };
    /**
     * 加载进度
     */
    ResLoadManage.prototype.onResourceProgress = function (event) {
        //event.itemsLoaded, event.itemsTotal
    };
    /**
     * 加载失败
     */
    ResLoadManage.prototype.onResourceLoadErr = function (event) {
        if (++this.countGroupError < 3) {
            RES.loadGroup(event.groupName);
        }
        else {
            /// 弹出网络失去连接提示等
        }
    };
    /**
     * 加载完成
     */
    ResLoadManage.prototype.onResourceLoadComplete = function () {
    };
    return ResLoadManage;
}());
__reflect(ResLoadManage.prototype, "ResLoadManage");
//# sourceMappingURL=ResLoadManage.js.map
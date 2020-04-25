var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 队列遵循先进先出原则的一组有序的项,队列在尾部添加新元素,并从顶部移除元素,新添加的元素必须排在队列的末尾
*/
var Common;
(function (Common) {
    var Queue = (function () {
        function Queue() {
            this.items = [];
        }
        //入列
        Queue.prototype.Enqueue = function (element) {
            this.items.push(element);
        };
        //移出队列第一项,并返回移除的元素
        Queue.prototype.Dequeue = function () {
            return this.items.shift();
        };
        //返回队列最前项
        Queue.prototype.Front = function () {
            return this.items[0];
        };
        //是否为空
        Queue.prototype.IsEmpty = function () {
            return this.items.length === 0;
        };
        //长度
        Queue.prototype.Size = function () {
            return this.items.length;
        };
        //清空队列
        Queue.prototype.Clear = function () {
            this.items = [];
        };
        return Queue;
    }());
    Common.Queue = Queue;
    __reflect(Queue.prototype, "Common.Queue");
})(Common || (Common = {}));
//# sourceMappingURL=Queue.js.map
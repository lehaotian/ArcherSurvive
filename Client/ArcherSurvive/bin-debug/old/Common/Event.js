var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 游戏中用到的事件派发
*/
var LuckGame;
(function (LuckGame) {
    var TEvent = (function () {
        function TEvent() {
            this._handlerList = new Array();
        }
        //添加一个事件
        TEvent.prototype.Add = function (_handler) {
            this._handlerList.push(_handler);
        };
        //移除一个事件
        TEvent.prototype.Remove = function (_handler) {
            for (var i = 0; i < this._handlerList.length; i++) {
                if (_handler == this._handlerList[i]) {
                    this._handlerList[i].recover();
                    this._handlerList.splice(i, 1);
                    return;
                }
            }
        };
        //执行一个事件
        TEvent.prototype.Exec = function (args) {
            for (var i = 0; i < this._handlerList.length; i++) {
                var handler = this._handlerList[i];
                if (handler != null) {
                    //handler.args = args;//(handler.caller,handler.method,args,false);
                    handler.runCall(args);
                }
            }
        };
        return TEvent;
    }());
    __reflect(TEvent.prototype, "TEvent");
    var MAX_STACK_DEEP = 8;
    var Event = (function () {
        function Event() {
        }
        /**
         * 派发事件
         */
        Event.DispatchEvent = function (type, args) {
            // if(!(args instanceof Array))
            // {
            //     return;
            // }
            var ev = this._eventList[type];
            if (ev != null) {
                try {
                    this._stackDeep++;
                    if (this._stackDeep > MAX_STACK_DEEP)
                        throw new Error("Event Stack OverFlow");
                    ev.Exec(args);
                }
                catch (e) {
                    Debugger.log(e);
                }
                finally {
                    this._stackDeep--;
                }
            }
        };
        /**
         * 注册事件
         */
        Event.RegistEvent = function (type, handler) {
            var ev = this._eventList[type];
            if (ev == null) {
                ev = new TEvent();
                this._eventList[type] = ev;
            }
            ev.Add(handler);
        };
        /**
         * 移除事件
         */
        Event.RemoveEvent = function (type, handler) {
            var ev = this._eventList[type];
            if (ev != null && handler != null) {
                ev.Remove(handler);
            }
        };
        Event._eventList = {};
        Event._stackDeep = 0;
        return Event;
    }());
    LuckGame.Event = Event;
    __reflect(Event.prototype, "LuckGame.Event");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=Event.js.map
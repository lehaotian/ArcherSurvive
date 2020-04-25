/*
* 游戏中用到的事件派发
*/
module LuckGame
{
    class TEvent
    {
        private _handlerList;

        constructor()
        {
            this._handlerList = new Array<any>();
        }

        //添加一个事件
        public Add(_handler):void
        {
            this._handlerList.push(_handler);
        }

        //移除一个事件
        public Remove(_handler:FuntionCall):void
        {
            for(let i:number = 0;i < this._handlerList.length;i++)
            {
                if(_handler == this._handlerList[i])
                {
                    this._handlerList[i].recover();
                    this._handlerList.splice(i,1);
                    return;
                }
            }
        }

        //执行一个事件
        public Exec(args?:Array<any>):void
        {
            for(let i:number = 0;i<this._handlerList.length;i++)
            {
                let handler:FuntionCall = this._handlerList[i];
                if(handler!= null)
                {
                    //handler.args = args;//(handler.caller,handler.method,args,false);
                    handler.runCall(args);
                }
            }
        }
    }
    const MAX_STACK_DEEP:number = 8;
    export class Event
    {   
        private static _eventList:Object = {};
        private static _stackDeep:number = 0;

        /**
         * 派发事件
         */
        public static DispatchEvent(type:string,args?:any):void
        {
            // if(!(args instanceof Array))
            // {
            //     return;
            // }

            let ev:TEvent = this._eventList[type];
            if(ev!=null)
            {
                try
                {
                    this._stackDeep ++;
                    if(this._stackDeep > MAX_STACK_DEEP)
                        throw new Error("Event Stack OverFlow");
                    ev.Exec(args);
                }catch(e)
                {
                    Debugger.log(e);
                }finally
                {
                    this._stackDeep --;
                }
            }
        }

        /**
         * 注册事件
         */
        public static RegistEvent(type:string,handler:FuntionCall):void
        {
            let ev:TEvent = this._eventList[type];
            if(ev == null)
            {
                ev = new TEvent();
                this._eventList[type] = ev;
            }
            ev.Add(handler);
        }

        /**
         * 移除事件
         */
        public static RemoveEvent(type:string,handler:FuntionCall):void
        {
            let ev:TEvent = this._eventList[type];
            if(ev!=null && handler != null)
            {
                ev.Remove(handler);
            }
        }
    }
}
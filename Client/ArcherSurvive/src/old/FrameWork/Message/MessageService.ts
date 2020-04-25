/*
* 游戏消息服务类
*/
module FrameWork
{
    export class MessageService extends GameService{

        public static Instance:MessageService;

        constructor(){
            super(new MessagePart(),new DefaultHandler());

            MessageService.Instance = this;
        }

        //注册消息对象
        public RegisterMessage(msgId,msgFun,msg,object)
        {
            this._logic.RegisterMessage(msgId,msgFun,msg,object);
        }

        public CreatMessage(msgId)
        {
            return this._logic.CreateMessage(msgId);
        }

        //注册消息
        public ReceiveMessage(msg)
        {
            if(msg == null)
                return;
            
            let obj = this._logic.FindMessageObject(msg.GetMessageId());
            let fun = this._logic.FindMessageFun(msg.GetMessageId());
            if(fun == null || obj == null)
                return;
            
            fun.call(obj,msg);

            this.DispatchNotice(msg.GetMessageId());
        }

        //注册通知
        public RegisterNotice(msgId,obj,fun)
        {
            this._logic.RegisterNotice(msgId,obj,fun);
        }

        //派发通知
        public DispatchNotice(msgId)
        {
            this._logic.DispatchNotice(msgId);
        }

        //删除派发
        public RemoveNotice(msgId,obj)
        {
            this._logic.RemoveNotice(msgId.obj);
        }
    }
}
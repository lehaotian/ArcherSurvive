/*
* name;
*/
module FrameWork
{
    //定义类
    export class IOHandler extends IIOHandler{

        protected _logicManage = null;

        //构造函数
        public constructor(){
            super();
        }

        //初始化   
        public Init(part)
        {
            this._logicManage = part;
        }

        //注册消息
        public RegisterMessage(msgId,msgFun,msg)
        {
            MessageService.Instance.RegisterMessage(msgId,msgFun,msg,this);
        }
    }
}
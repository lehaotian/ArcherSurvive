/*
* 游戏管理的基类
*/
module FrameWork
{
    export class GameService extends IGameService{

        //网络管理类
        protected _logic = null;

        //接收消息的容器
        protected _handler:DefaultHandler = null;

        protected _service = null;

        //构造函数
        constructor(part,handler){
            super();

            this._logic = part;
            this._handler = handler;
            if(this._handler != null)
            {
                this._handler.Init(this._logic);
            }

            this._service = this;
        }

        //注册所有服务
        //此函数是一个接口
        public Init()
        {
            if(this._logic != null)
            {
                this._logic.Init();
            }

            if(this._handler != null)
            {
                this._handler.RegisterAllMessage();
            }
        }

        //心跳
        public HeartBeat()
        {

        }

        public Stop()
        {

        }
    }
}
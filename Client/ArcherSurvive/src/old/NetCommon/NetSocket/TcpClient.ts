/*
* tcp websocket连接 
*/
module LuckGame
{
    export class TcpClient{

        private mNetHandler = null;

        private mSocketClient:SocketClient = null;

        private mConnectState = 0;

        private mHost:string = "";

        private mSendMessageQueue = new Common.Queue();

        public Init(netHandler,name):void
        {

            this.mNetHandler = netHandler;

            this.mHost = name;
            Debugger.log("开启服务器==========="+name);
            this.mSocketClient = new SocketClient();
            this.mSocketClient.serverName = name;
            //创建一个计时器对象
            let timer:egret.Timer = new egret.Timer(200,0);
            //注册事件侦听器
            timer.addEventListener(egret.TimerEvent.TIMER,this.HeartBeat,this);
            //计时结束
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
            timer.start();
        }

        timerComFunc(){
            console.log("计时结束");
        }

        public Connect(ip,port)
        {
            this.mSocketClient.Connect(ip,port);
        }

        public HeartBeat()
        {
            if(this.mSocketClient != null){
                let state = this.mSocketClient.GetConnectState();

                switch(state)
                {
                    case SocKetState.CONNECTED:
                        //连接成功状态
                        if(this.mConnectState <= SocKetState.CONNECTIING)
                        {
                            this.HandleConnect();
                        }
                        break;
                    case SocKetState.CLOSE:
                        //连接关闭状态
                        if(this.mConnectState <= SocKetState.CONNECTED)
                        {
                            this.HandleDisConnect();
                        }
                        break;
                }
            }
            //接收消息
            if(this.mConnectState >= SocKetState.CONNECTIING)
            {
                this.HandlerReceive();
            }
        }

        //连接成功回调
        public HandleConnect()
        {
            this.mConnectState = SocKetState.CONNECTED;

            let object = this.mNetHandler.GetObject();
            let fun = this.mNetHandler.GetConnectFunction();
            if(object == null || fun == null)
            {
                return;
            }

            fun.call(object,this,NetType.TcpClent);
        }

        //请求数据
        public RequestData(data)
        {
            this.mSendMessageQueue.Enqueue(data);
            this.StartRequest();
        }

        //开始请求
        public StartRequest()
        {
            if(this.mSendMessageQueue.Size() == 0)
            {
                return;
            }

            let data = this.mSendMessageQueue.Dequeue();

            this.mSocketClient.Send(data);
        }

        //接收回调
        public HandlerReceive()
        {
            let queue = this.mSocketClient.GetReceiveMessageQueue();

            if(queue.Size() == 0)
            {
                return;
            }
            

            let data = queue.Dequeue();

            let object = this.mNetHandler.GetObject();
            let fun = this.mNetHandler.GetReceiveFunction();
            if(object == null || fun == null)
            {
                return;
            }

            fun.call(object,this,data);
        }

        // /取消连接
        public HandleDisConnect()
        {
            this.mConnectState = SocKetState.CLOSE;

            let object = this.mNetHandler.GetObject();
            let fun = this.mNetHandler.GetDisConnectFunction();
            if(object == null || fun == null)
            {
                return;
            }

            //回调
            fun.call(object,this,NetType.TcpClent);
        }

        //关闭连接
        public CloseConnect()
        {
            if(this.mSocketClient != null)
            {
                Debugger.error("关闭服务器："+this.mHost);
                this.mSocketClient.Close();
            }
        }

        //获取当前服务器状态
        public GetConnectState()
        {
            return this.mConnectState;
        }
    }
}

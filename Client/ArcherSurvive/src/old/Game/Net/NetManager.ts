/*
* 网络管理器，接收消息，发送消息处理
*/
module LuckGame
{
    export class NetManager extends LuckGame.MessageManage{

        public _accountAdapterId:number = 0;

        private _logicAdapterId = 1;

        private _chatAdapterId = 2;

        public static Instance:NetManager = null;

        //登录服务器 http
        // private _accountClient:HttpClient = null;

        //逻辑服务器 tcp
        private mLogicClient:TcpClient = null;

        private mAccountTcpClient:TcpClient = null;

        // private _logicHttpClient:HttpClient = null;

        //聊天服务器
        private mChatClient:TcpClient = null;
        //账号服务器
        private mDefaultGateWayIp:string = "127.0.0.1";
        private mDefaultGateWayPort:number = 8083;
        private mSzClientIp:string;
        public mBConnecting:boolean = false;

        constructor(){
            super();

            NetManager.Instance = this;

            this.mChatClient = new TcpClient();
            //this.mChatClient.Init(this._handler,"chatTcp");

            this.mLogicClient = new TcpClient();
            this.mLogicClient.Init(this._handler,"logicTcp");

            this.mAccountTcpClient = new TcpClient();
            this.mAccountTcpClient.Init(this._handler,"accountTcp");

            Event.RegistEvent("socket_connectsuccess",new FuntionCall(this.OnConnected,this));
            Event.RegistEvent("socket_connectfail",new FuntionCall(this.OnConnectFail,this));
            Event.RegistEvent("socket_disconnect",new FuntionCall(this.OnDisConntect,this));
        }

        public _OnInit()
        {
            // let info = JsonManager.Instance.getJsonMap("config")
            // // let json = Laya.loader.getRes("config/config.json");
            // this.mDefaultGateWayIp = info.ip;
            // this.mDefaultGateWayPort = info.port;
        }

        getIpProt(){
            let info = JsonManager.Instance.getJsonMap("IpPort");
            // let json = Laya.loader.getRes("config/config.json");
            this.mDefaultGateWayIp = info.accip;
            this.mDefaultGateWayPort = info.accport;
        }

        //用于注册
        public isregister:boolean = false;
        private OnConnected(args):void
        {
            this.mBConnecting = true;
            if(args == null)
            {
                Debugger.log("connected args error");
                return;
            }

            if(this.isregister)
            {
                LoginService.Instance.ReqRegister();
                return;
            }

            if(args == "accountTcp")
            {
                Debugger.log("登录服连接成功");
                LoginService.Instance.ReqLoginGame();
            }else if(args == "logicTcp")
            {
                Debugger.log("游戏服连接成功");
                //关闭账号服务器
                this.DisConnectLoginServer();
                LoginService.Instance.ReqPlayetInfoList();

                //20秒 发送心跳
                // Laya.timer.loop(20000,this,this.PingGatewayRequest);
            }
            // else if(args == "chatTcp")
            // {
            //     ChatService.Instance.loginChat();
            //     Laya.timer.loop(20000,this,this.PingGatewayRequest);
            // }
        }

        private OnConnectFail():void
        {
            Debugger.log("连接服务器失败");

            this.mBConnecting = false;
            // Laya.timer.clear(this,this.PingGatewayRequest);
        }

        private OnDisConntect():void
        {
            this.mBConnecting = false;
            // Laya.timer.clear(this,this.PingGatewayRequest);
        }

        private PingGatewayRequest(currentTime:number):void
        {

        }

        //逻辑服socket
        public GetLogicNet()
        {
            return this.mLogicClient;
        }

        //登录服socket
        public GetAccountNet()
        {
            return this.mAccountTcpClient;
        }
        //连接账号服务器
        public ConnectLoginServer()
        {
            if(this.mBConnecting)
            {
                LoginService.Instance.ReqLoginGame();
                return;
            }

            this.mBConnecting = true;
            this.getIpProt();
            this.mAccountTcpClient.Connect(this.mDefaultGateWayIp,this.mDefaultGateWayPort);
        }
        //关闭账号服务器
        public DisConnectLoginServer(){
            this.mAccountTcpClient.CloseConnect();
        }

        public isLoginConnected(){
            return this.mBConnecting;
        }

        //获取登录服状态
        public GetLoginState()
        {
            return this.mAccountTcpClient.GetConnectState();
        }

        //连接游戏服务器
        public ConnectGameServer(_ip:String,_port)
        {
            if(this.mBConnecting)
            {
                return;
            }

            this.mBConnecting = true;

            this.mLogicClient.Connect(_ip,_port);
        }

        //连接聊天服务器
        public ConnectChatServer()
        {
            if(this.mBConnecting)
            {
                return;
            }    

            this.mBConnecting = true;

            this.mChatClient.Connect(this.mDefaultGateWayIp,"8071");
        }

        public GetHttpUrl(ip,port:number)
        {
            let str:string = "http://";
            str += ip;
            str += ":";
            str += port;
            str += "/Binary";

            Debugger.log(str);

            return str;
        }

        //处理连接
        public _HandlerConnect(adapter)
        {
            Debugger.log("hanlerconnect");
            // if(this._accountClient == adapter.GetObjectCache())
            // {
            //     this._accountAdapterId = adapter.GetAdapterId();
            // }else if(this.mLogicClient == adapter.GetObjectCache())
            // {
            //     this._logicAdapterId = adapter.GetAdapterId();
            // }else if(this._logicHttpClient == adapter.GetObjectCache())
            // {
            //     Debugger.log("_logicHttpClient");
            //     this._logicAdapterId = adapter.GetAdapterId();
            // }else if(this.mAccountTcpClient == adapter.GetObjectCache())
            // {
            //     Debugger.log("_logicHttpClient");
            //     this._accountAdapterId = adapter.GetAdapterId();
            // }else if(this.mChatClient == adapter.GetObjectCache())
            // {
            //     this._chatAdapterId = adapter.GetAdapterId();
            // }
        }

        //发送消息
        public SendMessage(msg)
        {
            var toTerminal = this.ToTerminal(msg.GetMessageId());
            if(toTerminal == Terminal.Account)
            {
                super.SendMessage(this._accountAdapterId,msg);
            }else if(toTerminal == Terminal.Logic)
            {
                super.SendMessage(this._logicAdapterId,msg);
            }
            // else if(toTerminal == Terminal.Chat)
            // {
            //     super.SendMessage(this._chatAdapterId,msg);
            // }
        }

        public FromTerminal(msgId:number)
        {
            var t1 = Math.floor(msgId/16777216);
            return t1;
        }

        //根据消息Id获取消息终端
        public ToTerminal(msgId)
        {
            var a:string  = (msgId / 16777216).toString();

            var b = a.split(".");
            var t1 = parseInt(b[0]);
            var t2 = parseInt(b[1]);
            t1 = t1 * 16777216;
            t1 = msgId - t1;
            t1 = Math.floor(t1/65536);
            return t1;
        }

        //心跳
        public _OnHeartBeat()
        {

        }
    }
}
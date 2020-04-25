var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*
* 网络管理器，接收消息，发送消息处理
*/
var LuckGame;
(function (LuckGame) {
    var NetManager = (function (_super) {
        __extends(NetManager, _super);
        function NetManager() {
            var _this = _super.call(this) || this;
            _this._accountAdapterId = 0;
            _this._logicAdapterId = 1;
            _this._chatAdapterId = 2;
            //登录服务器 http
            // private _accountClient:HttpClient = null;
            //逻辑服务器 tcp
            _this.mLogicClient = null;
            _this.mAccountTcpClient = null;
            // private _logicHttpClient:HttpClient = null;
            //聊天服务器
            _this.mChatClient = null;
            //账号服务器
            _this.mDefaultGateWayIp = "127.0.0.1";
            _this.mDefaultGateWayPort = 8083;
            _this.mBConnecting = false;
            //用于注册
            _this.isregister = false;
            NetManager.Instance = _this;
            _this.mChatClient = new LuckGame.TcpClient();
            //this.mChatClient.Init(this._handler,"chatTcp");
            _this.mLogicClient = new LuckGame.TcpClient();
            _this.mLogicClient.Init(_this._handler, "logicTcp");
            _this.mAccountTcpClient = new LuckGame.TcpClient();
            _this.mAccountTcpClient.Init(_this._handler, "accountTcp");
            LuckGame.Event.RegistEvent("socket_connectsuccess", new FuntionCall(_this.OnConnected, _this));
            LuckGame.Event.RegistEvent("socket_connectfail", new FuntionCall(_this.OnConnectFail, _this));
            LuckGame.Event.RegistEvent("socket_disconnect", new FuntionCall(_this.OnDisConntect, _this));
            return _this;
        }
        NetManager.prototype._OnInit = function () {
            // let info = JsonManager.Instance.getJsonMap("config")
            // // let json = Laya.loader.getRes("config/config.json");
            // this.mDefaultGateWayIp = info.ip;
            // this.mDefaultGateWayPort = info.port;
        };
        NetManager.prototype.getIpProt = function () {
            var info = LuckGame.JsonManager.Instance.getJsonMap("IpPort");
            // let json = Laya.loader.getRes("config/config.json");
            this.mDefaultGateWayIp = info.accip;
            this.mDefaultGateWayPort = info.accport;
        };
        NetManager.prototype.OnConnected = function (args) {
            this.mBConnecting = true;
            if (args == null) {
                Debugger.log("connected args error");
                return;
            }
            if (this.isregister) {
                LuckGame.LoginService.Instance.ReqRegister();
                return;
            }
            if (args == "accountTcp") {
                Debugger.log("登录服连接成功");
                LuckGame.LoginService.Instance.ReqLoginGame();
            }
            else if (args == "logicTcp") {
                Debugger.log("游戏服连接成功");
                //关闭账号服务器
                this.DisConnectLoginServer();
                LuckGame.LoginService.Instance.ReqPlayetInfoList();
                //20秒 发送心跳
                // Laya.timer.loop(20000,this,this.PingGatewayRequest);
            }
            // else if(args == "chatTcp")
            // {
            //     ChatService.Instance.loginChat();
            //     Laya.timer.loop(20000,this,this.PingGatewayRequest);
            // }
        };
        NetManager.prototype.OnConnectFail = function () {
            Debugger.log("连接服务器失败");
            this.mBConnecting = false;
            // Laya.timer.clear(this,this.PingGatewayRequest);
        };
        NetManager.prototype.OnDisConntect = function () {
            this.mBConnecting = false;
            // Laya.timer.clear(this,this.PingGatewayRequest);
        };
        NetManager.prototype.PingGatewayRequest = function (currentTime) {
        };
        //逻辑服socket
        NetManager.prototype.GetLogicNet = function () {
            return this.mLogicClient;
        };
        //登录服socket
        NetManager.prototype.GetAccountNet = function () {
            return this.mAccountTcpClient;
        };
        //连接账号服务器
        NetManager.prototype.ConnectLoginServer = function () {
            if (this.mBConnecting) {
                LuckGame.LoginService.Instance.ReqLoginGame();
                return;
            }
            this.mBConnecting = true;
            this.getIpProt();
            this.mAccountTcpClient.Connect(this.mDefaultGateWayIp, this.mDefaultGateWayPort);
        };
        //关闭账号服务器
        NetManager.prototype.DisConnectLoginServer = function () {
            this.mAccountTcpClient.CloseConnect();
        };
        NetManager.prototype.isLoginConnected = function () {
            return this.mBConnecting;
        };
        //获取登录服状态
        NetManager.prototype.GetLoginState = function () {
            return this.mAccountTcpClient.GetConnectState();
        };
        //连接游戏服务器
        NetManager.prototype.ConnectGameServer = function (_ip, _port) {
            if (this.mBConnecting) {
                return;
            }
            this.mBConnecting = true;
            this.mLogicClient.Connect(_ip, _port);
        };
        //连接聊天服务器
        NetManager.prototype.ConnectChatServer = function () {
            if (this.mBConnecting) {
                return;
            }
            this.mBConnecting = true;
            this.mChatClient.Connect(this.mDefaultGateWayIp, "8071");
        };
        NetManager.prototype.GetHttpUrl = function (ip, port) {
            var str = "http://";
            str += ip;
            str += ":";
            str += port;
            str += "/Binary";
            Debugger.log(str);
            return str;
        };
        //处理连接
        NetManager.prototype._HandlerConnect = function (adapter) {
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
        };
        //发送消息
        NetManager.prototype.SendMessage = function (msg) {
            var toTerminal = this.ToTerminal(msg.GetMessageId());
            if (toTerminal == Terminal.Account) {
                _super.prototype.SendMessage.call(this, this._accountAdapterId, msg);
            }
            else if (toTerminal == Terminal.Logic) {
                _super.prototype.SendMessage.call(this, this._logicAdapterId, msg);
            }
            // else if(toTerminal == Terminal.Chat)
            // {
            //     super.SendMessage(this._chatAdapterId,msg);
            // }
        };
        NetManager.prototype.FromTerminal = function (msgId) {
            var t1 = Math.floor(msgId / 16777216);
            return t1;
        };
        //根据消息Id获取消息终端
        NetManager.prototype.ToTerminal = function (msgId) {
            var a = (msgId / 16777216).toString();
            var b = a.split(".");
            var t1 = parseInt(b[0]);
            var t2 = parseInt(b[1]);
            t1 = t1 * 16777216;
            t1 = msgId - t1;
            t1 = Math.floor(t1 / 65536);
            return t1;
        };
        //心跳
        NetManager.prototype._OnHeartBeat = function () {
        };
        NetManager.Instance = null;
        return NetManager;
    }(LuckGame.MessageManage));
    LuckGame.NetManager = NetManager;
    __reflect(NetManager.prototype, "LuckGame.NetManager");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=NetManager.js.map
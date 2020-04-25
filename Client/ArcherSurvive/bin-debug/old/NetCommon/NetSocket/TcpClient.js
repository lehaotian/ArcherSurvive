var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* tcp websocket连接
*/
var LuckGame;
(function (LuckGame) {
    var TcpClient = (function () {
        function TcpClient() {
            this.mNetHandler = null;
            this.mSocketClient = null;
            this.mConnectState = 0;
            this.mHost = "";
            this.mSendMessageQueue = new Common.Queue();
        }
        TcpClient.prototype.Init = function (netHandler, name) {
            this.mNetHandler = netHandler;
            this.mHost = name;
            Debugger.log("开启服务器===========" + name);
            this.mSocketClient = new LuckGame.SocketClient();
            this.mSocketClient.serverName = name;
            //创建一个计时器对象
            var timer = new egret.Timer(200, 0);
            //注册事件侦听器
            timer.addEventListener(egret.TimerEvent.TIMER, this.HeartBeat, this);
            //计时结束
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
            timer.start();
        };
        TcpClient.prototype.timerComFunc = function () {
            console.log("计时结束");
        };
        TcpClient.prototype.Connect = function (ip, port) {
            this.mSocketClient.Connect(ip, port);
        };
        TcpClient.prototype.HeartBeat = function () {
            if (this.mSocketClient != null) {
                var state = this.mSocketClient.GetConnectState();
                switch (state) {
                    case LuckGame.SocKetState.CONNECTED:
                        //连接成功状态
                        if (this.mConnectState <= LuckGame.SocKetState.CONNECTIING) {
                            this.HandleConnect();
                        }
                        break;
                    case LuckGame.SocKetState.CLOSE:
                        //连接关闭状态
                        if (this.mConnectState <= LuckGame.SocKetState.CONNECTED) {
                            this.HandleDisConnect();
                        }
                        break;
                }
            }
            //接收消息
            if (this.mConnectState >= LuckGame.SocKetState.CONNECTIING) {
                this.HandlerReceive();
            }
        };
        //连接成功回调
        TcpClient.prototype.HandleConnect = function () {
            this.mConnectState = LuckGame.SocKetState.CONNECTED;
            var object = this.mNetHandler.GetObject();
            var fun = this.mNetHandler.GetConnectFunction();
            if (object == null || fun == null) {
                return;
            }
            fun.call(object, this, NetType.TcpClent);
        };
        //请求数据
        TcpClient.prototype.RequestData = function (data) {
            this.mSendMessageQueue.Enqueue(data);
            this.StartRequest();
        };
        //开始请求
        TcpClient.prototype.StartRequest = function () {
            if (this.mSendMessageQueue.Size() == 0) {
                return;
            }
            var data = this.mSendMessageQueue.Dequeue();
            this.mSocketClient.Send(data);
        };
        //接收回调
        TcpClient.prototype.HandlerReceive = function () {
            var queue = this.mSocketClient.GetReceiveMessageQueue();
            if (queue.Size() == 0) {
                return;
            }
            var data = queue.Dequeue();
            var object = this.mNetHandler.GetObject();
            var fun = this.mNetHandler.GetReceiveFunction();
            if (object == null || fun == null) {
                return;
            }
            fun.call(object, this, data);
        };
        // /取消连接
        TcpClient.prototype.HandleDisConnect = function () {
            this.mConnectState = LuckGame.SocKetState.CLOSE;
            var object = this.mNetHandler.GetObject();
            var fun = this.mNetHandler.GetDisConnectFunction();
            if (object == null || fun == null) {
                return;
            }
            //回调
            fun.call(object, this, NetType.TcpClent);
        };
        //关闭连接
        TcpClient.prototype.CloseConnect = function () {
            if (this.mSocketClient != null) {
                Debugger.error("关闭服务器：" + this.mHost);
                this.mSocketClient.Close();
            }
        };
        //获取当前服务器状态
        TcpClient.prototype.GetConnectState = function () {
            return this.mConnectState;
        };
        return TcpClient;
    }());
    LuckGame.TcpClient = TcpClient;
    __reflect(TcpClient.prototype, "LuckGame.TcpClient");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=TcpClient.js.map
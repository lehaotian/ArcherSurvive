var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 网络套接字 封装
*/
var LuckGame;
(function (LuckGame) {
    var SocKetState;
    (function (SocKetState) {
        SocKetState[SocKetState["NONE"] = 0] = "NONE";
        SocKetState[SocKetState["CONNECTIING"] = 1] = "CONNECTIING";
        SocKetState[SocKetState["CONNECTED"] = 2] = "CONNECTED";
        SocKetState[SocKetState["CLOSE"] = 3] = "CLOSE";
        SocKetState[SocKetState["CONNECT_FAIL"] = 4] = "CONNECT_FAIL";
    })(SocKetState = LuckGame.SocKetState || (LuckGame.SocKetState = {}));
    var MESSAGE_LENGTH = 1;
    var SocketClient = (function () {
        function SocketClient() {
            //远程主机 ip
            this.mHost = "";
            //远程端口
            this.mPort = 0;
            //发送消息队列
            this.mReceiveMessageQueue = new Common.Queue();
            //套接字
            this.mSocket = null;
            //状态
            this.mConnectState = SocKetState.NONE;
            this._endian = "";
            this.serverName = "";
        }
        SocketClient.prototype.Close = function () {
            if (this.mSocket == null) {
                return;
            }
            try {
                if (this.mSocket.connected == true)
                    // this.mSocket.cleanSocket();
                    this.mSocket.close();
            }
            catch (e) {
            }
            finally {
                this.mSocket = null;
                this.SetSocketState(SocKetState.CLOSE);
            }
        };
        //状态
        SocketClient.prototype.IsConnected = function () {
            return this.mConnectState == SocKetState.CONNECTED;
        };
        //获取连接状态
        SocketClient.prototype.GetConnectState = function () {
            return this.mConnectState;
        };
        //获取接受消息队列
        SocketClient.prototype.GetReceiveMessageQueue = function () {
            return this.mReceiveMessageQueue;
        };
        SocketClient.prototype.Connect = function (ip, port) {
            this.mHost = ip;
            this.mPort = port;
            // this._endian = Laya.Byte.getSystemEndian();
            this.mSocket = new egret.WebSocket();
            var strUrl = "ws://";
            strUrl += this.mHost;
            strUrl += ":";
            strUrl += this.mPort.toString();
            strUrl += "/ws";
            this.mSocket.connectByUrl(strUrl);
            this.mSocket.type = egret.WebSocket.TYPE_BINARY;
            //添加收到数据侦听，收到数据会调用此方法
            this.mSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceive, this); //(Laya.Event.MESSAGE,this,this.OnReceive);
            //添加链接打开侦听，连接成功会调用此方法
            this.mSocket.addEventListener(egret.Event.CONNECT, this.OnConnected, this); //(Laya.Event.OPEN,this,this.OnConnected);
            //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
            this.mSocket.addEventListener(egret.Event.CLOSE, this.OnDisconnected, this);
            //添加异常侦听，出现异常会调用此方法
            this.mSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnConnectFail, this);
            // let strUrl:string = "ws://";
            // strUrl += this.mHost;
            // strUrl += ":";
            // strUrl += this.mPort.toString();
            // strUrl += "/ws";
            // this.mSocket.connectByUrl(strUrl);
            this.SetSocketState(SocKetState.CONNECTIING);
            Debugger.log("开始连接到服务器" + this.mHost + ":" + this.mPort);
        };
        SocketClient.prototype.Send = function (buffer) {
            try {
                // var arraybuffer: ArrayBuffer = data.toArrayBuffer();
                var len = buffer.byteLength;
                var btyearray = new egret.ByteArray(buffer);
                if (len > 0) {
                    this.mSocket.writeBytes(btyearray);
                    this.mSocket.flush();
                }
                // this.mSocket.send(buffer);
            }
            catch (e) {
                this.SetSocketState(SocKetState.CLOSE);
            }
        };
        SocketClient.prototype.OnReceive = function (data) {
            var btyearray = new egret.ByteArray();
            this.mSocket.readBytes(btyearray);
            this.mReceiveMessageQueue.Enqueue(btyearray.buffer);
            Debugger.log(this.serverName + "接收到信息");
            // var msg = this.mSocket.readUTF();
            // this.mReceiveMessageQueue.Enqueue(data);
        };
        //连接成功
        SocketClient.prototype.OnConnected = function () {
            this.SetSocketState(SocKetState.CONNECTED);
            Debugger.error("连接服务器" + this.mHost + ":" + this.mPort + "成功");
        };
        //连接失败
        SocketClient.prototype.OnConnectFail = function () {
            this.SetSocketState(SocKetState.CONNECT_FAIL);
            //todo
            Debugger.error("连接服务器" + this.mHost + ":" + this.mPort + "失败");
        };
        //取消连接
        SocketClient.prototype.OnDisconnected = function () {
            Debugger.log("取消连接");
            //todo
            this.SetSocketState(SocKetState.CLOSE);
        };
        SocketClient.prototype.SetSocketState = function (_socket) {
            Debugger.log("SetSocketState socketState = " + _socket);
            this.mConnectState = _socket;
            var _oldState = this.mConnectState;
            if (_oldState == SocKetState.CONNECTED && _socket == SocKetState.CLOSE)
                this.Close();
        };
        return SocketClient;
    }());
    LuckGame.SocketClient = SocketClient;
    __reflect(SocketClient.prototype, "LuckGame.SocketClient");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=SocketClient.js.map
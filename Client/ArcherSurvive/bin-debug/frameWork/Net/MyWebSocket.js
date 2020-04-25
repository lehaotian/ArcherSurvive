var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MyWebSocket = (function () {
    function MyWebSocket(ip, port, name, _onReceiveMessage, _onSocketOpen, _onSocketClose, _onSocketError) {
        this.socket = null;
        this.version = 1;
        this.encoderType = 0;
        this.state = MyWebSocket.CONNECT_BREAK;
        this.timeout = 0;
        this.ip = ip;
        this.port = port;
        this.name = name;
        this._onReceiveMessage = _onReceiveMessage;
        this._onSocketOpen = _onSocketOpen;
        this._onSocketClose = _onSocketClose;
        this._onSocketError = _onSocketError;
    }
    MyWebSocket.prototype.getState = function () {
        return this.state;
    };
    MyWebSocket.prototype.init = function () {
        this.state = MyWebSocket.CONNECTING;
        this.timeout = 0;
        this.connect();
    };
    MyWebSocket.prototype.addTime = function (time) {
        this.timeout += time;
    };
    MyWebSocket.prototype.isTimeout = function () {
        var res = false;
        if (this.timeout >= MyWebSocket.CONNECT_TIMEOUT) {
            res = true;
        }
        return res;
    };
    MyWebSocket.prototype.connect = function () {
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect(this.ip, this.port);
    };
    MyWebSocket.prototype.disConnect = function () {
        this.state = MyWebSocket.CONNECT_BREAK;
        this.socket.close();
    };
    MyWebSocket.prototype.onReceiveMessage = function (e) {
        console.log("收到消息");
        var byte = new egret.ByteArray();
        this.socket.readBytes(byte);
        var version = byte.readInt();
        var eventId = byte.readInt();
        var encoderType = byte.readInt();
        var len = byte.readInt();
        var pb = new egret.ByteArray();
        byte.readBytes(pb);
        var gameMsg = new GameMsg(version, eventId, encoderType, len, pb);
        this._onReceiveMessage.call(this.name, gameMsg);
    };
    MyWebSocket.prototype.onSocketOpen = function (e) {
        this.state = MyWebSocket.CONNECTED;
        this._onSocketOpen.call(this.name, e);
    };
    MyWebSocket.prototype.onSocketClose = function (e) {
        this.state = MyWebSocket.CONNECT_BREAK;
        this.socket.close();
        this._onSocketClose.call(this.name, e);
    };
    MyWebSocket.prototype.onSocketError = function (e) {
        this.state = MyWebSocket.CONNECT_BREAK;
        this.socket.close();
        this._onSocketError.call(this.name, e);
    };
    MyWebSocket.prototype.sendMsg = function (msgId, pb) {
        var byte = new egret.ByteArray();
        byte.writeInt(this.version);
        byte.writeInt(msgId);
        byte.writeInt(this.encoderType);
        byte.writeInt(pb.byteLength);
        byte._writeUint8Array(pb);
        byte.position = 0;
        this.socket.writeBytes(byte, 0, byte.bytesAvailable);
        this.socket.flush();
    };
    MyWebSocket.CONNECT_BREAK = 0;
    MyWebSocket.CONNECTING = 1;
    MyWebSocket.CONNECTED = 2;
    MyWebSocket.CONNECT_TIMEOUT = 10000;
    return MyWebSocket;
}());
__reflect(MyWebSocket.prototype, "MyWebSocket");
//# sourceMappingURL=MyWebSocket.js.map
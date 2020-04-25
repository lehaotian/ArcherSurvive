var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetManager = (function () {
    function NetManager() {
        this.netConnectMap = {};
        this.netConnectNameMap = {};
        this.netHandlerMap = {};
        this.eventClzMap = {};
    }
    NetManager.instance = function () {
        if (NetManager._instance == null) {
            NetManager._instance = new NetManager();
        }
        return NetManager._instance;
    };
    NetManager.prototype.init = function () {
        this.timer();
    };
    NetManager.prototype.timer = function () {
        setTimeout(this._heartBeat, 5000);
    };
    NetManager.prototype._heartBeat = function () {
        NetManager.instance().heartBeat();
    };
    NetManager.prototype.heartBeat = function () {
        try {
            console.log("heartBeat");
            for (var key in this.netConnectNameMap) {
                var connect = this.netConnectNameMap[key];
                if (connect.getState() == MyWebSocket.CONNECTED) {
                    //发心跳
                    this.sendHeartBeat(key);
                }
                if (connect.getState() == MyWebSocket.CONNECTING) {
                    //连接超时
                    connect.addTime(5000);
                    if (connect.isTimeout) {
                        connect.disConnect();
                    }
                }
                if (connect.getState() == MyWebSocket.CONNECT_BREAK) {
                    //重连
                    connect.init();
                }
            }
            ;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.timer();
        }
    };
    NetManager.prototype.connect = function (ip, port, connectName) {
        var connect = this.netConnectMap[ip + ":" + port];
        if (connect == null) {
            connect = new MyWebSocket(ip, port, connectName, new CallBack(this, this.onReceiveMessage), new CallBack(this, this.onSocketOpen), new CallBack(this, this.onSocketClose), new CallBack(this, this.onSocketError));
            connect.init();
            this.netConnectMap[ip + ":" + port] = connect;
            this.netConnectNameMap[connectName] = connect;
        }
    };
    NetManager.prototype.onReceiveMessage = function (argArray) {
        var connectName = argArray[0];
        var gameMsg = argArray[1];
        var clz = this.eventClzMap[gameMsg.eventId];
        if (clz != null) {
            var resp = clz.decode(gameMsg.pb.bytes);
            if (resp != null) {
                this.onHandler(connectName, gameMsg.eventId, resp);
            }
        }
    };
    NetManager.prototype.onHandler = function (connectName, eventId, resp) {
        var handlerMap = this.netHandlerMap[connectName];
        if (handlerMap != null) {
            var handler = handlerMap[eventId];
            if (handler != null && handler instanceof Function) {
                handler(resp);
            }
        }
    };
    NetManager.prototype.onSocketOpen = function (connectName) {
        console.log("与 " + connectName + " 连接成功!!");
        NetManager.instance().testBindEvent();
        NetManager.instance().sendTest();
    };
    NetManager.prototype.sendHeartBeat = function (connectName) {
        // let heartBeatReq:luck.protobuf.HeartBeatReq = luck.protobuf.HeartBeatReq.create();
        // let sendByte:Uint8Array = luck.protobuf.HeartBeatReq.encode(heartBeatReq).finish();
        // NetManager.instance().sendMsg(connectName,luck.protobuf.EnumType.HEARTBEATREQ.valueOf(),sendByte);
    };
    NetManager.prototype.sendTest = function () {
        // let logInReq:luck.protobuf.LogInReq = luck.protobuf.LogInReq.create();
        // logInReq.LogInKey = "abc";
        // let sendByte:Uint8Array = luck.protobuf.LogInReq.encode(logInReq).finish();
        // NetManager.instance().sendMsg("logic",luck.protobuf.EnumType.LOGINREQ.valueOf(),sendByte);
    };
    NetManager.prototype.testBindEvent = function () {
        // NetManager.instance().bindEvent("logic",luck.protobuf.EnumType.LOGINRESP.valueOf(),this.loginResp,luck.protobuf.LogInResp);
    };
    // private loginResp(resp:luck.protobuf.LogInResp){
    //     console.log(" 登录成功!!  "+resp.result);
    // }
    NetManager.prototype.onSocketClose = function (connectName, e) {
    };
    NetManager.prototype.onSocketError = function (connectName, e) {
    };
    NetManager.prototype.bindEvent = function (connectName, eventId, handler, clz) {
        var handlerMap = this.netHandlerMap[connectName];
        if (handlerMap == null) {
            handlerMap = {};
            this.netHandlerMap[connectName] = handlerMap;
        }
        handlerMap[eventId] = handler;
        this.eventClzMap[eventId] = clz;
    };
    NetManager.prototype.sendMsg = function (connectName, msgId, pb) {
        var connect = this.netConnectNameMap[connectName];
        if (connect == null) {
            console.log("connectName:" + connectName + " 不存在");
            return;
        }
        connect.sendMsg(msgId, pb);
    };
    return NetManager;
}());
__reflect(NetManager.prototype, "NetManager");
//# sourceMappingURL=NetManager.js.map
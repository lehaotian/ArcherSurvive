class MyWebSocket {

    public static CONNECT_BREAK = 0;
    public static CONNECTING = 1;
    public static CONNECTED = 2;
    public static CONNECT_TIMEOUT = 10000;

    private socket:egret.WebSocket = null;

    private version:number = 1;

    private encoderType:number = 0;

    private name:string;

    private _onReceiveMessage:CallBack;
    private _onSocketOpen:CallBack;
    private _onSocketClose:CallBack;
    private _onSocketError:CallBack;

    private state:number=MyWebSocket.CONNECT_BREAK;

    private ip:string;
    private port:number;

    private timeout:number=0;
    public constructor(ip: string,port: number,name:string,_onReceiveMessage:CallBack,_onSocketOpen:CallBack,_onSocketClose:CallBack,_onSocketError:CallBack){
        this.ip = ip;
        this.port = port;
        this.name = name;
        this._onReceiveMessage = _onReceiveMessage;
        this._onSocketOpen = _onSocketOpen;
        this._onSocketClose = _onSocketClose;
        this._onSocketError = _onSocketError;
    }

    public getState(){
        return this.state;
    }

    public init(){
        this.state = MyWebSocket.CONNECTING;
        this.timeout = 0;
        this.connect();
    }

    public addTime(time:number){
        this.timeout+=time;
    }

    public isTimeout():boolean{
        let res:boolean = false;
        if(this.timeout>=MyWebSocket.CONNECT_TIMEOUT){
            res = true;
        }
        return res;
    }

    private connect(){
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,   this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect(this.ip, this.port);
    }

    public disConnect(){
        this.state = MyWebSocket.CONNECT_BREAK;
        this.socket.close();
    }

    private onReceiveMessage(e: egret.Event){
        console.log("收到消息");
        let byte:egret.ByteArray = new egret.ByteArray();
        this.socket.readBytes(byte);
        let version = byte.readInt();
        let eventId = byte.readInt();
        let encoderType = byte.readInt();
        let len = byte.readInt();
        let pb:egret.ByteArray = new egret.ByteArray();
        byte.readBytes(pb);
        let gameMsg:GameMsg = new GameMsg(version,eventId,encoderType,len,pb);
        this._onReceiveMessage.call(this.name,gameMsg);
    }

    private onSocketOpen(e: egret.Event){
        this.state = MyWebSocket.CONNECTED;
        this._onSocketOpen.call(this.name,e);
    }

    private onSocketClose(e: egret.Event){
        this.state = MyWebSocket.CONNECT_BREAK;
        this.socket.close();
        this._onSocketClose.call(this.name,e);
    }

    private onSocketError(e: egret.Event){
        this.state = MyWebSocket.CONNECT_BREAK;
        this.socket.close();
        this._onSocketError.call(this.name,e);
    }

    public sendMsg(msgId :number,pb){
        var byte:egret.ByteArray = new egret.ByteArray();
        byte.writeInt(this.version);
        byte.writeInt(msgId);
        byte.writeInt(this.encoderType);
        byte.writeInt(pb.byteLength);
        byte._writeUint8Array(pb);
        byte.position = 0;
        this.socket.writeBytes(byte, 0, byte.bytesAvailable);
        this.socket.flush();
    }

}
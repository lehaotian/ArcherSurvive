/*
* 网络套接字 封装
*/
module LuckGame
{
    export enum SocKetState{NONE,CONNECTIING,CONNECTED,CLOSE,CONNECT_FAIL}
    const MESSAGE_LENGTH:number = 1;

    export class SocketClient{
        //远程主机 ip
        private mHost:string = "";

        //远程端口
        private mPort:number = 0;

        //发送消息队列
        private mReceiveMessageQueue = new Common.Queue();

        //套接字
        private mSocket:egret.WebSocket = null;

        //状态
        private mConnectState:SocKetState = SocKetState.NONE;

        private _endian:string = "";

        public serverName = "";

        constructor(){

        }

        public Close():void
        {
            if(this.mSocket == null)
            {
                return;
            }

            try
            {
                if(this.mSocket.connected == true)
                    // this.mSocket.cleanSocket();

                this.mSocket.close();
            }catch(e)
            {

            }
            finally
            {
                this.mSocket = null;
                this.SetSocketState(SocKetState.CLOSE);
            }
        }

        //状态
        public IsConnected():boolean
        {
            return this.mConnectState == SocKetState.CONNECTED
        }

        //获取连接状态
        public GetConnectState():SocKetState
        {
            return this.mConnectState;
        }

        //获取接受消息队列
        public GetReceiveMessageQueue()
        {
            return this.mReceiveMessageQueue;
        }

        public Connect(ip,port):void
        {
            this.mHost = ip;

            this.mPort = port;

            // this._endian = Laya.Byte.getSystemEndian();

            this.mSocket = new egret.WebSocket();
            let strUrl:string = "ws://";
            strUrl += this.mHost;
            strUrl += ":";
            strUrl += this.mPort.toString();
            strUrl += "/ws";
            this.mSocket.connectByUrl(strUrl);
            this.mSocket.type = egret.WebSocket.TYPE_BINARY;
            //添加收到数据侦听，收到数据会调用此方法
            this.mSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceive, this)//(Laya.Event.MESSAGE,this,this.OnReceive);
             //添加链接打开侦听，连接成功会调用此方法
            this.mSocket.addEventListener(egret.Event.CONNECT, this.OnConnected, this)//(Laya.Event.OPEN,this,this.OnConnected);
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
        }

        public Send(buffer:any):void
        {
            try
            {
                // var arraybuffer: ArrayBuffer = data.toArrayBuffer();
                var len: number = buffer.byteLength;
                var btyearray:egret.ByteArray=new egret.ByteArray(buffer);
                if(len > 0)
                { 
                    this.mSocket.writeBytes(btyearray);
                    this.mSocket.flush();
                }
                // this.mSocket.send(buffer);
            }catch(e)
            {
                this.SetSocketState(SocKetState.CLOSE);
            }
        }

        private OnReceive(data:any):void
        {
            var btyearray: egret.ByteArray = new egret.ByteArray();
            this.mSocket.readBytes(btyearray);

            this.mReceiveMessageQueue.Enqueue(btyearray.buffer);

            Debugger.log(this.serverName+"接收到信息");
            // var msg = this.mSocket.readUTF();
            // this.mReceiveMessageQueue.Enqueue(data);
        }

        //连接成功
        private OnConnected():void
        {
            this.SetSocketState(SocKetState.CONNECTED);

            Debugger.error("连接服务器" + this.mHost + ":" + this.mPort + "成功");
        }

        //连接失败
        private OnConnectFail():void
        {
            this.SetSocketState(SocKetState.CONNECT_FAIL);
            //todo
            Debugger.error("连接服务器" + this.mHost + ":" + this.mPort + "失败");
        }

        //取消连接
        private OnDisconnected():void
        {
            Debugger.log("取消连接");
            //todo
            this.SetSocketState(SocKetState.CLOSE);
        }
        
        private SetSocketState(_socket:SocKetState):void
        {
            Debugger.log("SetSocketState socketState = " + _socket);
            this.mConnectState = _socket;
            let _oldState:SocKetState = this.mConnectState;

            if(_oldState == SocKetState.CONNECTED && _socket == SocKetState.CLOSE)
                this.Close();
        }
    }
}
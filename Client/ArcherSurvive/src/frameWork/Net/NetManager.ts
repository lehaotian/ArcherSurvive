/** 
 * webSoket网络管理器
 */
class NetManager {

    private static _instance:NetManager;

    public static get instance():NetManager{
        if(NetManager._instance==null){
            NetManager._instance = new NetManager();
        }
        return NetManager._instance;
    }

    private netConnectMap = {};
    private netConnectNameMap = {};
    private netHandlerMap = {};
    private eventClzMap = {};

    public init(){
        this.timer();
    }
    public timer(){
        setTimeout(this.heartBeat,5000);
    }
    public heartBeat(){
        try {
            console.log("heartBeat");
            for(let key in this.netConnectNameMap) {
                let connect:MyWebSocket = this.netConnectNameMap[key];
                if(connect.getState()==MyWebSocket.CONNECTED){
                    //发心跳
                    this.sendHeartBeat(key);
                }
                if(connect.getState()==MyWebSocket.CONNECTING){
                    //连接超时
                    connect.addTime(5000);
                    if(connect.isTimeout){
                        connect.disConnect();
                    }
                }
                if(connect.getState()==MyWebSocket.CONNECT_BREAK){
                    //重连
                    connect.init();
                }
            };
        } catch (error) {
            console.log(error);
        }finally{
            this.timer();
        }
    }
    public sendHeartBeat(connectName:string){
        // let heartBeatReq:luck.protobuf.HeartBeatReq = luck.protobuf.HeartBeatReq.create();
        // let sendByte:Uint8Array = luck.protobuf.HeartBeatReq.encode(heartBeatReq).finish();
        // NetManager.instance.sendMsg(connectName,luck.protobuf.EnumType.HEARTBEATREQ.valueOf(),sendByte);
    }

    public connect(ip: string,port: number,connectName: string){
         let connect:MyWebSocket = this.netConnectMap[ip+":"+port];
         if(connect==null){
             connect = new MyWebSocket(ip,port,connectName,
             new CallBack(this,this.onReceiveMessage),
             new CallBack(this,this.onSocketOpen),
             new CallBack(this,this.onSocketClose),
             new CallBack(this,this.onSocketError));
             connect.init();
             this.netConnectMap[ip+":"+port] = connect;
             this.netConnectNameMap[connectName] = connect;
         }
    }

    public onReceiveMessage(argArray){
        let connectName:string = argArray[0];
        let gameMsg:GameMsg = argArray[1];
        let clz = this.eventClzMap[gameMsg.eventId];
        if(clz!=null){
            let resp = clz.decode(gameMsg.pb.bytes);
            if(resp!=null){
                this.onHandler(connectName,gameMsg.eventId,resp);
            }
        }
    }

    private onHandler(connectName:string,eventId,resp){
        let handlerMap = this.netHandlerMap[connectName];
        if(handlerMap!=null){
            let handler = handlerMap[eventId];
            if(handler!=null&&handler instanceof Function){
                handler(resp);
            }
        }
    }

    private onSocketOpen(connectName:string){
        console.log("与 "+connectName+" 连接成功!!");
    }

    

    private onSocketClose(connectName:string,e: egret.Event){
        
    }

    private onSocketError(connectName:string,e: egret.Event){
        
    }

    public bindEvent(connectName:string,eventId:number,handler:Function,clz){
        let handlerMap = this.netHandlerMap[connectName];
        if(handlerMap==null){
            handlerMap={};
            this.netHandlerMap[connectName] = handlerMap;
        }
        handlerMap[eventId] =handler;
        this.eventClzMap[eventId] =clz;
    }
    /** 发送消息 */
    public sendMsg(connectName: string,msgId :number,pb){
        let connect:MyWebSocket = this.netConnectNameMap[connectName];
        if(connect==null){
            console.log("connectName:"+connectName+" 不存在");
            return;
        }
        connect.sendMsg(msgId,pb);
    }
}
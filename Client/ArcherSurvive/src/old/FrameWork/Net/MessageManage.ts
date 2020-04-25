/*
*  消息管理 
*/
module LuckGame
{
     export class MessageManage extends GamePart{
        

        public _allAdapterMap:Common.Dictionary;
        protected _allAdapterbyIdMap:Common.Dictionary;
        protected _adapterIndex = 0;

        protected _handler:NetHandler = null;
        protected _receiveMessage:Message;
        protected _sendMessage:Message;

        public constructor(){
            super();
            this._adapterIndex = 0;
            this._receiveMessage = new Message();

            this._sendMessage = new Message();
            //网络适配器
            this._allAdapterMap = new Common.Dictionary();

            this._allAdapterbyIdMap = new Common.Dictionary();

            this._handler = new NetHandler();
            this._handler.SetObject(this);
            this._handler.SetConnectFunction(this._OnConnect);
            this._handler.SetDisConnectFunction(this._OnDisconnect);
            this._handler.SetReceiveFunction(this._OnReceive);
        }
        //分配索引
        public _AllocAdapterId(){
            if(this._adapterIndex == 2147483647){
                this._adapterIndex = 10000;
            }
            var adapterId = this._adapterIndex;
            this._adapterIndex = this._adapterIndex + 1;
            return adapterId;
        }
        //根据连接查找适配器
        public _FindAdapterByContent(content){
            if(content == null){
                return null;
            }
            return this._allAdapterMap.GetItem(content.mHost);
        }
        //连接上
        public _OnConnect(content,netType){
            if(content == null) return;
            var adapter = this._allAdapterMap.GetItem(content.mHost);
            if(adapter == null){
                adapter = this._CreateAdapter(content,netType);
            }
            Event.DispatchEvent("socket_connectsuccess",[content.mHost]);

            return adapter.GetAdapterId();
        }
        //断开连接
        public _OnDisconnect(content){
            let adapter = this._FindAdapterByContent(content);
            if(adapter == null)
            return;

            this._HandleDisconnect(adapter);
        }
        //处理断开连接
        public _HandleDisconnect(adapter){
            
        }
        
        public _OnReceive(content,data,offset){
            if(data.byteLength < 16){
                Debugger.error("receive length error");
                return;
            }

            var adapter = this._FindAdapterByContent(content);
            if(adapter == null){
                return;
            }
            this._HandleReceiveMessage(adapter,data);
        }
        //接收到消息
        public _HandleReceiveMessage(adapter,block){
            if(adapter == null){
                return;
            }
            var msg = this._DeserialMessage(block);
            if(msg == null){
                return;
            }

            msg.SetAdapterId(adapter.GetAdapterId());
            FrameWork.MessageService.Instance.ReceiveMessage(msg);
        }

        public _DeserialMessage(block){
            this._receiveMessage.Clear();
            this._receiveMessage.SetArrayBuffer(block);
            let length = this._receiveMessage.ReadInt();
            let msgId = this._receiveMessage.ReadInt();

            let msg = FrameWork.MessageService.Instance.CreatMessage(msgId);
            if(msg == null){
                Debugger.error("真邪门  消息id 错误" + msgId);
            }
            msg.SetMessageId(msgId);
            msg.SetByteArray(this._receiveMessage);
            msg.Deserialize();

            return msg;
        }
        //创建适配器
        public _CreateAdapter(content,netType){
            var adapter = this._NewAdapter(netType);
            var adapterId = this._AllocAdapterId();
            adapter.Init(adapterId,content);

            this._allAdapterMap.Add(content.mHost,adapter);
            this._allAdapterbyIdMap.Add(adapterId,adapter);
            return adapter;
        }
        //创建适配器
        public _NewAdapter(netType){
            if(netType == NetType.HttpClient){
                return new HttpClientAdapter();
            }else if(netType == NetType.TcpClent){
                return new WebSocketClientAdapter();
            }
            return null;
        }
        //发送消息
        public SendMessage(adapterId,msg){
            var adapter = this._allAdapterbyIdMap.GetItem(adapterId);
            if(adapter == null){
                return;
            }
            var block = this._SerialMessage(msg);
            adapter.AddSendBlock(block);
            adapter.SendMessage();
        }

        public _SerialMessage(msg){
            msg.SetByteArray(this._sendMessage);
            msg.Serial();

            return this._sendMessage.Buffer;
        }



    }
}

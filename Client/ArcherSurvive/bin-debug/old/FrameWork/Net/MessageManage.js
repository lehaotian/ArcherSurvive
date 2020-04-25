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
*  消息管理
*/
var LuckGame;
(function (LuckGame) {
    var MessageManage = (function (_super) {
        __extends(MessageManage, _super);
        function MessageManage() {
            var _this = _super.call(this) || this;
            _this._adapterIndex = 0;
            _this._handler = null;
            _this._adapterIndex = 0;
            _this._receiveMessage = new LuckGame.Message();
            _this._sendMessage = new LuckGame.Message();
            //网络适配器
            _this._allAdapterMap = new Common.Dictionary();
            _this._allAdapterbyIdMap = new Common.Dictionary();
            _this._handler = new NetHandler();
            _this._handler.SetObject(_this);
            _this._handler.SetConnectFunction(_this._OnConnect);
            _this._handler.SetDisConnectFunction(_this._OnDisconnect);
            _this._handler.SetReceiveFunction(_this._OnReceive);
            return _this;
        }
        //分配索引
        MessageManage.prototype._AllocAdapterId = function () {
            if (this._adapterIndex == 2147483647) {
                this._adapterIndex = 10000;
            }
            var adapterId = this._adapterIndex;
            this._adapterIndex = this._adapterIndex + 1;
            return adapterId;
        };
        //根据连接查找适配器
        MessageManage.prototype._FindAdapterByContent = function (content) {
            if (content == null) {
                return null;
            }
            return this._allAdapterMap.GetItem(content.mHost);
        };
        //连接上
        MessageManage.prototype._OnConnect = function (content, netType) {
            if (content == null)
                return;
            var adapter = this._allAdapterMap.GetItem(content.mHost);
            if (adapter == null) {
                adapter = this._CreateAdapter(content, netType);
            }
            LuckGame.Event.DispatchEvent("socket_connectsuccess", [content.mHost]);
            return adapter.GetAdapterId();
        };
        //断开连接
        MessageManage.prototype._OnDisconnect = function (content) {
            var adapter = this._FindAdapterByContent(content);
            if (adapter == null)
                return;
            this._HandleDisconnect(adapter);
        };
        //处理断开连接
        MessageManage.prototype._HandleDisconnect = function (adapter) {
        };
        MessageManage.prototype._OnReceive = function (content, data, offset) {
            if (data.byteLength < 16) {
                Debugger.error("receive length error");
                return;
            }
            var adapter = this._FindAdapterByContent(content);
            if (adapter == null) {
                return;
            }
            this._HandleReceiveMessage(adapter, data);
        };
        //接收到消息
        MessageManage.prototype._HandleReceiveMessage = function (adapter, block) {
            if (adapter == null) {
                return;
            }
            var msg = this._DeserialMessage(block);
            if (msg == null) {
                return;
            }
            msg.SetAdapterId(adapter.GetAdapterId());
            FrameWork.MessageService.Instance.ReceiveMessage(msg);
        };
        MessageManage.prototype._DeserialMessage = function (block) {
            this._receiveMessage.Clear();
            this._receiveMessage.SetArrayBuffer(block);
            var length = this._receiveMessage.ReadInt();
            var msgId = this._receiveMessage.ReadInt();
            var msg = FrameWork.MessageService.Instance.CreatMessage(msgId);
            if (msg == null) {
                Debugger.error("真邪门  消息id 错误" + msgId);
            }
            msg.SetMessageId(msgId);
            msg.SetByteArray(this._receiveMessage);
            msg.Deserialize();
            return msg;
        };
        //创建适配器
        MessageManage.prototype._CreateAdapter = function (content, netType) {
            var adapter = this._NewAdapter(netType);
            var adapterId = this._AllocAdapterId();
            adapter.Init(adapterId, content);
            this._allAdapterMap.Add(content.mHost, adapter);
            this._allAdapterbyIdMap.Add(adapterId, adapter);
            return adapter;
        };
        //创建适配器
        MessageManage.prototype._NewAdapter = function (netType) {
            if (netType == NetType.HttpClient) {
                return new HttpClientAdapter();
            }
            else if (netType == NetType.TcpClent) {
                return new WebSocketClientAdapter();
            }
            return null;
        };
        //发送消息
        MessageManage.prototype.SendMessage = function (adapterId, msg) {
            var adapter = this._allAdapterbyIdMap.GetItem(adapterId);
            if (adapter == null) {
                return;
            }
            var block = this._SerialMessage(msg);
            adapter.AddSendBlock(block);
            adapter.SendMessage();
        };
        MessageManage.prototype._SerialMessage = function (msg) {
            msg.SetByteArray(this._sendMessage);
            msg.Serial();
            return this._sendMessage.Buffer;
        };
        return MessageManage;
    }(GamePart));
    LuckGame.MessageManage = MessageManage;
    __reflect(MessageManage.prototype, "LuckGame.MessageManage");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=MessageManage.js.map
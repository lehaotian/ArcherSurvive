/*
* 游戏消息派发相关
*/

//消息派发 接口
class MessagePart extends GamePart{

    private _allMessageHandlerMap = {};
    private _allMessageMap = {};
    private _allMessageObjectMap = {};
    private _allNoticeMap = {};
    
    public constructor(){
        super();
    }

    //初始化
    public Init()
    {
        
    }

    //心跳
    public _OnHeartBeat()
    {
        
    }

    //停止的时候处理
    public _OnStop()
    {
        
    }

    public RegisterMessage(msgId,msgFun,msg,object)
    {
        this._allMessageHandlerMap[msgId] = msgFun;
        this._allMessageMap[msgId] = msg;
        this._allMessageObjectMap[msgId] = object;
    }

    //创建消息
    public CreateMessage(msgId)
    {
        let msg = this._allMessageMap[msgId];
        if(msgId == null)
            return;

        return msg;    
    }

    //查找消息回调
    public FindMessageFun(msgId)
    {
        return this._allMessageHandlerMap[msgId];
    }

    //查找消息处理对象
    public FindMessageObject(msgId)
    {
        return this._allMessageObjectMap[msgId];
    }

    //注册事件
    public RegisterNotice(msgId,obj,fun)
    {
        if(msgId == null || obj == null ||fun == null)
        {
            return;
        }

        var msgIdCallBack = this._allNoticeMap[msgId];
        if(msgIdCallBack == null)
        {
            msgIdCallBack = {};
            this._allNoticeMap[msgId] = msgIdCallBack;
        }

        this._allNoticeMap[msgId] = fun;
    }

    //派发通知
    public DispatchNotice(msgId)
    {
        if(msgId == null)
        {
            return;
        }

        var msgIdCallBack = this._allNoticeMap[msgId];
        if(msgIdCallBack == null)
        {
            return null;
        }
    }

    //删除派发
    public RemoveNotice(msgId,obj)
    {
        if(msgId == null)
        {
            return;
        }

        var msgIdCallBack = this._allNoticeMap[msgId];
        if(msgIdCallBack == null)
        {
            return null;
        }

        msgIdCallBack[obj] = null;
    }
}
/*
* WebSocket适配器
*/
class WebSocketClientAdapter extends NetAdapter{

    private _content = null;

    //构造函数
    public constructor(){
        super();
    }

    //初始化
    public Init(adapterId:number,objectParam)
    {
        super.Init(adapterId,objectParam);
        this._adapterId = adapterId;
        this._content = objectParam;
    }

    //添加发送队列
    public AddSendBlock(block)
    {
        super.AddSendBlock(block);
    }

    //发送消息
    public SendMessage()
    {
        var count = this._allMemMesssageQueue.Size();
        for(let i = 0;i < count;i++)
        {
            var sendData = this._allMemMesssageQueue.Dequeue();
            this.SendData(sendData);
        }
    }

    public SendData(data)
    {
        this._content.RequestData(data);
    }
}
/*
* name;
*/
class NetAdapter{

    protected _adapterId:number = 0;
    protected _objectCache = null;
    protected _allMemMesssageQueue = new Common.Queue();

    public constructor(){

    }

    //适配器id
    public GetAdapterId()
    {
        return this._adapterId;
    }

    //对象缓存
    public GetObjectCache()
    {
        return this._objectCache;
    }

    //初始化
    public Init(adapterId,objectParam)
    {
        this._adapterId = adapterId;
        this._objectCache = objectParam;
    }

    //添加发送队列
    public AddSendBlock(block)
    {
        this._allMemMesssageQueue.Enqueue(block);
    }

    //发送消息
    public SendMessage(block)
    {

    }

    //发送消息
    public SendData(block)
    {

    }
}
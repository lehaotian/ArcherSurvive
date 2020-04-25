/*
* name;
*/
//定义类
class GamePart extends IGamePart{

    //构造函数
    public constructor(){
        super();
    }

    //初始化
    public Init()
    {
        this._OnInit();
    }

    //心跳
    public HeartBeat()
    {
        this._OnHeartBeat();
    }

    //停止的时候处理
    public Stop()
    {
        this._OnStop();
    }

    //清空
    public Clear()
    {

    }
}
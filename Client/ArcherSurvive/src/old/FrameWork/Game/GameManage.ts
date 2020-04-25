/*
* 游戏管理的基类
*/
module FrameWork
{
    export class GameManage extends IGameManage{

        private _allGameServiceList:Common.Dictionary = new Common.Dictionary ();

        //构造函数
        public constructor(){
            super();
        }

        //启动游戏
        public StartGame(main)
        {
            this._RegisterCommonService();
            this._RegisterAllService();
            this._OnInit();
            //创建一个计时器对象
            let timer:egret.Timer = new egret.Timer(50,0);
            //注册事件侦听器
            timer.addEventListener(egret.TimerEvent.TIMER,this.HeartBeat,this);
            //计时结束
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        }

        timerComFunc(){

        }

        //注册服务
        public _RegisterService(service)
        {
            if(service == null)
            {
                return;
            }

            var size = this._allGameServiceList.Size();

            this._allGameServiceList.Add(size + 1,service);
        }

        //注册通用服务
        public _RegisterCommonService()
        {
            this._RegisterService(new MessageService());
        }

        //初始化
        public _OnInit()
        {
            for(let key in this._allGameServiceList.GetArray())
            {
                if(this._allGameServiceList.ConstainsKey(key))
                {
                    var service = this._allGameServiceList.GetArray()[key];
                    if(service != null)
                    {
                        service.Init();
                    }
                }
            }
        }

        //此函数是一个接口
        public _RegisterAllService()
        {

        }

        //心跳
        public HeartBeat()
        {
            if(this._allGameServiceList != null)
            {
                for(let key in this._allGameServiceList.GetArray())
                {
                    if(this._allGameServiceList.ConstainsKey(key))
                    {
                        var service = this._allGameServiceList.GetArray()[key];
                        if(service != null)
                        {
                            service.HeartBeat();
                        }
                    }
                }
            }
        }
    }
}


module LuckGame{
    export class GameApplication extends FrameWork.GameManage{
        private static _inst:GameApplication;

        public static Inst(){
            if(GameApplication._inst == null){
                GameApplication._inst = new GameApplication();
            }
            return GameApplication._inst;
        }


        constructor(){
            super();
        }

        //注册所有模块的服务
        public _RegisterAllService(){
            this._RegisterService(new NetSetvice());
            this._RegisterService(new LoginService());
            this._RegisterService(new PlayerService());
            this._RegisterService(new ShopService());
            this._RegisterService(new BagService());
            this._RegisterService(new ComBatService());
            
        }

        public StartGame(main){
            //初始化游戏逻辑框架
            //TODO

            super.StartGame(main);

            SingletonBase.Get(LayerManager).Init(main);
            // let layer = new LayerManager();
            // layer.Init(main);
            SingletonBase.Get(JsonManager).loadAllJson();
            // let jsonmanage = new JsonManager();
            // jsonmanage.loadAllJson();
            // 开启对象池
            new HintManage();
            //开启游戏状态，打开界面 
            // ViewManager.Inst.Init();
            this.openLoginView();
            this.openHintView();
        }

        //打开登陆界面
        openLoginView(){
            // ViewManager.Inst.OpenView("LoginView",false,function(ui){
            //     this.mPreUI = ui;
            // },null,TierType.viewRoot);
            SingletonBase.Get(ui.LoginView).open();
        }

        //打开登陆界面
        openHintView(){
            // ViewManager.Inst.OpenView("HintView",false,function(ui){
            //     this.mPreUI = ui;
            // },null,TierType.superRoot);
        }
    }
}
    
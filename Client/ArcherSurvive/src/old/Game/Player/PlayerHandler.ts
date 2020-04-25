/*
* name;
*/
module LuckGame{
    export class PlayerHandler extends FrameWork.IOHandler{
    constructor(){
        super();
    }

    //注册所有消息
    public RegisterAllMessage(){
        this.RegisterMessage(L2C_Player.ReturnPlayerInfo,this.getPlayerInfo,new Player.ReturnPlayerInfo());

        this.RegisterMessage(L2C_Player.ReturnPlayerInfoAnimaRoot,this.getPlayerAnimaRoot,new Player.ReturnPlayerPro());

        this.RegisterMessage(L2C_Player.returnPlayerInfoAnimaPro,this.getPlayerAnimaPro,new Player.ReturnPlayerPro());

        this.RegisterMessage(L2C_Player.returnPlayerLvInfo,this.getPlayerLvInfo,new MessgeInfoIII());
    }

    private getPlayerInfo(msg){
        PlayerManage.Instance.playerId = msg.playerInfo.DbId;
        PlayerManage.Instance.playerName = msg.playerInfo.playerName;
        PlayerManage.Instance.playerSex = msg.playerInfo.sex;
        PlayerManage.Instance.playerLv = msg.playerInfo.Lv;

        //请求背包信息
        BagService.Instance.reqBagInfo();
        //进入游戏大厅
        this.openPlayerInfoView();
    }
    
    openPlayerInfoView(){
        SingletonBase.Get(LayerManager).closeView(ui.CreatePlayer);
        SingletonBase.Get(LayerManager).closeView(ui.PlayerInfoListView);
        // ViewManager.Inst.HideView("CreatePlayer");
        // ViewManager.Inst.HideView("PlayerInfoListView");
        // ViewManager.Inst.OpenView("WorldLobbyView",false,function(ui){
        //     this.mPreUI = ui;
        // },null,TierType.viewRoot);
        // ViewManager.Inst.OpenView("MainView",false,function(ui){
        //     this.mPreUI = ui;
        //     this.mPreUI.openView();
        // },null,TierType.viewRoot);
    }

    private getPlayerAnimaRoot(msg){
        for(let key in msg.proResultMap){
            let val = msg.proResultMap[key];
            this._logicManage.addRoot(key,val);
        }
    }

    private getPlayerAnimaPro(msg){
        for(let key in msg.proResultMap){
            let val = msg.proResultMap[key];
            this._logicManage.addPro(key,val);
        }
    }

    private getPlayerLvInfo(msg){
        PlayerManage.Instance.playerLv = msg.Lv;
        PlayerManage.Instance.currExp = msg.currExp;
        PlayerManage.Instance.nextNeedExp = msg.nextNeedExp;
        // UIRefreshManage.Instance.runCall("updatePlayerLvInfo");
    }

    
}
}
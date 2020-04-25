module LuckGame{
    export class LoginHandler extends FrameWork.IOHandler{
        constructor(){
            super();
        }

        //注册所有消息
        public RegisterAllMessage(){
            /**
             * 提示信息
             */
            this.RegisterMessage(A2C_Login.TipMsgCode,this.handlerTipMsgCode,new Login.TipMsgCode());

            this.RegisterMessage(A2C_Login.ReturnAccountInfo,this.loginSuccee,new Login.AccountInfo());

            this.RegisterMessage(L2C_Account.PlayerInfoList,this.loginPlayerInfoList,new LogicAccount.PlayerInfoList());

            
        }

        private handlerTipMsgCode(msg){
            Debugger.log("服务器发来的消息");
        }

        private loginSuccee(msg){
            //把用户名本地保存起来
            LocalStorage.SetNameString("userInfo",LoginService.Instance.userName+"_"+LoginService.Instance.userPswd);

            //获取玩家账号信息
            LoginManage.Instance.accountId = msg.accountId;
            //连接逻辑服务器请求角色信息
            NetManager.Instance.mBConnecting = false;

            let info = JsonManager.Instance.getJsonMap("IpPort")
            //TODO 选服务器连接游戏服
            NetManager.Instance.ConnectGameServer(info.logicip,info.logicport);
        }

        //获取角色信息
        private loginPlayerInfoList(msg){
            for(let index in msg.playerInfoList){
                let info = msg.playerInfoList[index];
                this._logicManage.addPlayerInfo(info);
            }
            // SingletonBase.Get(LayerManager).closeView(LoginView);
            this.openPlayerListView();
        }
        openPlayerListView(){
            SingletonBase.Get(ui.PlayerInfoListView).open();
        }
        

    }
}
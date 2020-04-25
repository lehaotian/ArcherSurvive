/*
* name;
*/
module LuckGame{
    export class PlayerService extends FrameWork.GameService{
        public static Instance:PlayerService;
        constructor(){
            super(new PlayerManage(),new PlayerHandler());
            PlayerService.Instance = this;
            // new UIRefreshManage();
        }


        public createPlayerInfo(name,sex){
            let _msg = new LogicAccount.CreatePlayerInfo();
            
            _msg.SetMessageId(C2L_Player.CreatePlayerInfo);
            _msg.accountId = LoginManage.Instance.accountId;
            _msg.playerName = name;
            _msg.sex = sex;
            NetManager.Instance.SendMessage(_msg);
        }

        //请求角色信息
        public ReqPlayetInfo(){
            let _msg = new LogicAccount.RequestPlayerInfo();
            _msg.SetMessageId(C2L_Player.RequestPlayerInfo);
            _msg.SetRelationId(PlayerManage.Instance.playerId);
            NetManager.Instance.SendMessage(_msg);
        }


        //请求觉醒
        public ReqAwakenPro(){
            let _msg = new MessgeInfoNone();
            _msg.SetMessageId(C2L_Player.ReqAwakenPro);
            _msg.SetRelationId(PlayerManage.Instance.playerId);
            NetManager.Instance.SendMessage(_msg);
        }

}
}
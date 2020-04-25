module LuckGame{
    export class LoginService extends FrameWork.GameService{

        public static Instance:LoginService;
        constructor(){
            super(new LoginManage(),new LoginHandler());
            LoginService.Instance = this;
        }

        public userName = "";
        public userPswd = "";

        /**
         * 请求注册
         */
        public ReqRegisterGame(username,userpswd){
            this.userName = username;
            this.userPswd = userpswd;
            //判断有没有连接服务器
            NetManager.Instance.isregister= true;
            if(!NetManager.Instance.isLoginConnected()){
                NetManager.Instance.ConnectLoginServer();
            }else{
                this.ReqRegister();
            }
        }

        public ReqLogin(username,userpswd){
            this.userName = username;
            this.userPswd = userpswd;
            //判断有没有连接服务器
            
            if(!NetManager.Instance.isLoginConnected()){
                NetManager.Instance.ConnectLoginServer();
            }else{
                this.ReqLoginGame();
            }
        }
        /**
         * 请求登陆
         */
        public ReqLoginGame(){
            let _msg = new Login.RequestLogin();
            
            _msg.SetMessageId(C2A_Login.RequestLogin);
            _msg.userName = this.userName;
            _msg.userPswd = this.userPswd;
            NetManager.Instance.SendMessage(_msg);
        }

        /**
         * 请求注册
         */
        public ReqRegister(){
            NetManager.Instance.isregister= false;
            let _msg = new Login.RequestLogin();
            
            _msg.SetMessageId(C2A_Login.RequestRegistry);
            _msg.userName = this.userName;
            _msg.userPswd = this.userPswd;
            NetManager.Instance.SendMessage(_msg);
        }

        /**
         * 请求验证
         */
        public ReqVerfiy(){

        }

        //连接逻辑服务器成功 请求角色list信息
        public ReqPlayetInfoList(){
            let _msg = new LogicAccount.RequestPlayerInfo();
            
            _msg.SetMessageId(C2L_Account.RequestPlayerInfo);
            _msg.accountId = LoginManage.Instance.accountId;
            NetManager.Instance.SendMessage(_msg);
        }

        
        

        

    }
}
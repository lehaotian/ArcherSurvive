module LuckGame{
    export class LoginManage extends GamePart{

        public static Instance:LoginManage;
        constructor(){
            super();
            LoginManage.Instance = this;
        }

        public accountId = 0;

        public playerListArr = [];

        public addPlayerInfo(info){
            this.playerListArr.push(info);
        }

        public getPlayerList(){
            return this.playerListArr;
        }
    }
}
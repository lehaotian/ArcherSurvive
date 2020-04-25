

module Login{
    export class RequestLogin extends Common.GameMessage{

        public constructor(){
            super();
        }

        public playerId = 0;
        public userName = "";
        public userPswd = "";

        public _OnSerial(){
            this.WriteInt64(this.playerId);
            this.WriteString(this.userName);
            this.WriteString(this.userPswd);
        }

        public _OnDeserialize(){
            this.playerId = this.ReadInt32();
        }
        

    }
}
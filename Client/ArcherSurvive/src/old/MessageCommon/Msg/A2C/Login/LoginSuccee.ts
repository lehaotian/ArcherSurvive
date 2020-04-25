module Login{
    export class LoginSuccee extends Common.GameMessage{

        public constructor(){
            super();
        }

        public playerId = 0;

        public _OnSerial(){
            this.WriteInt32(this.playerId);
        }

        public _OnDeserialize(){
            this.playerId = this.ReadInt32();
        }
        

    }
}
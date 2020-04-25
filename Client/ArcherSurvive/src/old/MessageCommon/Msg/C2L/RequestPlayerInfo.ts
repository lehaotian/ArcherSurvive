/*
* name;
*/
module LogicAccount{
    export class RequestPlayerInfo extends Common.GameMessage{

        public constructor(){
            super();
        }

        public accountId = 0;

        public _OnSerial(){
            this.WriteInt64(this.accountId);
        }

        public _OnDeserialize(){
        }
        

    }
}
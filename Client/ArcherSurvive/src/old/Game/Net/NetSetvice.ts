/*
* name;
*/
module LuckGame
{
    export class NetSetvice extends FrameWork.GameService{

        public static Instance:NetSetvice;
        constructor(){
            super(new NetManager(),new DefaultHandler());

            NetSetvice.Instance = this;
        }

        //发送消息
        public SendMessage(msg)
        {
            if(msg == null || msg.GetMessageId() == null)
            {
                return
            }

            this._logic.SendMessage(msg);
        }
    }
}

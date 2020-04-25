/*
* name;
*/
module LuckGame {
    export class ShopHandler extends FrameWork.IOHandler {
        constructor() {
            super();
        }

        //注册所有消息
        public RegisterAllMessage(){
            this.RegisterMessage(L2C_Shop.ResponseBuyItems,this.BuyItemsHandler,new ResponseBuyItems());
        }
        
        //购买物品的回调函数
        BuyItemsHandler(_msg:ResponseBuyItems)
        {
            ShopManage.Instance.buy(_msg.mItemId,_msg.mItemNum);
            //刷新界面
            
        }
    }
}

/*
* name;
*/
module LuckGame
{
    export class ShopService extends FrameWork.GameService{
        public static Instance:ShopService;
        constructor(){
            super(new ShopManage(),new ShopHandler());
            ShopService.Instance = this;
        }

        //请求角色信息
        public RequestBuyItems(_Id:number,_itemNum:number){
            let _msg = new RequestBuyItems();
            _msg.SetMessageId(C2L_Shop.RequestBuyItems);
            _msg.SetRelationId(PlayerManage.Instance.playerId);
            _msg.mItemId = _Id;
            _msg.mItemNum = _itemNum;
            NetManager.Instance.SendMessage(_msg);
        }
    }
}

/*
* name;
*/
module LuckGame{
    export class BagService extends FrameWork.GameService{
    
    public static Instance:BagService;

    constructor(){
        super(new BagManage(),new BagHandler());
        BagService.Instance = this;
    }

   
    
    



    reqBagInfo(){
        //获取玩家的id 
        let playerId = PlayerManage.Instance.playerId;

        let _msg = new MessgeInfoNone();
        _msg.SetMessageId(C2L_Bag.getBagInfo);
        _msg.SetRelationId(playerId);
        
        NetManager.Instance.SendMessage(_msg);
    }

    reqUseItem(dbid,num){
        //获取玩家的id 
        let playerId = PlayerManage.Instance.playerId;

        let _msg = new MessgeInfoLI();
        _msg.SetMessageId(C2L_Bag.useItem);
        _msg.SetRelationId(playerId);
        _msg.itemDbId = dbid;
        _msg.num = num;
        NetManager.Instance.SendMessage(_msg);
    }


     //材料map
    public pos = 0;
    public recipeId = 0;
    public mainMaterDbId = 0;
    public materMap = {};
    public createMaterMap = {};
    public addMater(pos,itemId){
        let olditemId = this.materMap[pos];
        if(olditemId == null || olditemId <= 0){
            this.materMap[pos] = itemId;
        }else{
            this.jcreateMaterMap(itemId);
        }
        this.addcreateMaterMap(itemId);
    }
    public addcreateMaterMap(itemId){
        let num = this.createMaterMap[itemId];
            if(num == null){
                this.createMaterMap[itemId] = 1;
            }else{
                num++;
                this.createMaterMap[itemId] = num;
            }
    }
    public jcreateMaterMap(itemId){
        let num = this.createMaterMap[itemId];
        if(num == null){
            return;
        }else{
            num--;
            this.createMaterMap[itemId] = num;
        }
        if(num <= 0){
            delete this.createMaterMap[itemId];
        }
    }
    //请求炼器
    reqSelfCreateEquip(){
        
        //获取玩家的id 
        let playerId = PlayerManage.Instance.playerId;
        let _msg = new SelfCreateEquip();
        _msg.SetMessageId(C2L_Bag.selfCreateEquip);
        _msg.SetRelationId(playerId);

        _msg.recipeId = this.recipeId;
        _msg.mainMaterDbId = this.mainMaterDbId;
        _msg.assistMaterMap = this.createMaterMap;

        NetManager.Instance.SendMessage(_msg);
        SingletonBase.Get(ui.CareerSkillView).clearMaterData();
    }



}
}
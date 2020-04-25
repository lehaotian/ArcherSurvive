/*
* name;
*/
module LuckGame {
    export class BagHandler extends FrameWork.IOHandler {
        constructor() {
            super();
        }

        //注册所有消息
        public RegisterAllMessage() {
            this.RegisterMessage(L2C_Bag.BagInfo, this.getBagInfo, new Bag.BagInfo());
            this.RegisterMessage(L2C_Bag.BagNewItemInfo, this.getBagNewItemInfo, new UpdateBagInfo());
            this.RegisterMessage(L2C_Bag.BagReduceItemInfo, this.getBagReduceItemInfo, new Bag.BagReduceItemInfo());
            this.RegisterMessage(L2C_Bag.MsgTip, this.getMsgTip, new Bag.MsgTip());
        }

        getBagInfo(msg) {
            for (let itemDbId in msg.itemMap) {
                let info = msg.itemMap[itemDbId];
                this._logicManage.addNewItem(itemDbId, info);
            }
        }

        getBagNewItemInfo(msg) {
            this._logicManage.bagSize = msg.bagSize;
            this._logicManage.useSize = msg.useSize;
            let arr = [];
            let num = 0;
            for (let itemDbId in msg.newitemMap) {
                let info:StorageItemInfo = msg.newitemMap[itemDbId];
                let oldInfo = BagManage.Instance.getItemInfo(itemDbId);
                num = 0;
                if(oldInfo != null){
                    num = info.num - oldInfo.num;
                }
                let changeInfo = new AwardInfo();
                changeInfo.itemId = info.itemId;
                changeInfo.num = info.num;

                arr.push(changeInfo);
                BagManage.Instance.addNewItem(itemDbId, info);
            }

            // for (let itemDbId in msg.newAddNumMap) {
            //     let num = msg.newAddNumMap[itemDbId];
            //     this._logicManage.addItemNum(itemDbId, num);
            //     let info = new ItemInfo();
            //     info.DbId = parseInt(itemDbId);
            //     info.num = num;
            //     arr.push(info);
            // }
            //
            // UIRefreshManage.Instance.runCall("updateBagViewInfo");
            // HintManage.instan.showGetItem(arr);
            //刷新界面
            SingletonBase.Get(ui.BagView).refresh();
        }

        getBagReduceItemInfo(msg) {
            this._logicManage.bagSize = msg.bagSize;
            this._logicManage.useSize = msg.useSize;
            for (let itemDbId in msg.reduceItemMap) {
                let num = msg.reduceItemMap[itemDbId];
                this._logicManage.reduceItemNum(itemDbId, num);
            }
            //
            // UIRefreshManage.Instance.runCall("updateBagViewInfo");
            SingletonBase.Get(ui.BagView).refresh();
        }

        getMsgTip(msg) {
            switch (msg.id) {
                case MsgTipType.createEquipFail://
                    //刷新界面
                    SingletonBase.Get(ui.CareerSkillView).createEquipFail();
                    break;
                case MsgTipType.createEquipSucc://
                    //刷新界面
                    SingletonBase.Get(ui.CareerSkillView).createEquipSucc();
                    break;
                default:
                    let str = GetDictionaryStr.getStrById(msg.id);
                    Event.DispatchEvent("showWaveHintView", str);
                    break;
            }

        }



    }
}
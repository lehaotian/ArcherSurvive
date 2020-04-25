var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*
* name;
*/
var LuckGame;
(function (LuckGame) {
    var BagHandler = (function (_super) {
        __extends(BagHandler, _super);
        function BagHandler() {
            return _super.call(this) || this;
        }
        //注册所有消息
        BagHandler.prototype.RegisterAllMessage = function () {
            this.RegisterMessage(L2C_Bag.BagInfo, this.getBagInfo, new Bag.BagInfo());
            this.RegisterMessage(L2C_Bag.BagNewItemInfo, this.getBagNewItemInfo, new UpdateBagInfo());
            this.RegisterMessage(L2C_Bag.BagReduceItemInfo, this.getBagReduceItemInfo, new Bag.BagReduceItemInfo());
            this.RegisterMessage(L2C_Bag.MsgTip, this.getMsgTip, new Bag.MsgTip());
        };
        BagHandler.prototype.getBagInfo = function (msg) {
            for (var itemDbId in msg.itemMap) {
                var info = msg.itemMap[itemDbId];
                this._logicManage.addNewItem(itemDbId, info);
            }
        };
        BagHandler.prototype.getBagNewItemInfo = function (msg) {
            this._logicManage.bagSize = msg.bagSize;
            this._logicManage.useSize = msg.useSize;
            var arr = [];
            var num = 0;
            for (var itemDbId in msg.newitemMap) {
                var info = msg.newitemMap[itemDbId];
                var oldInfo = LuckGame.BagManage.Instance.getItemInfo(itemDbId);
                num = 0;
                if (oldInfo != null) {
                    num = info.num - oldInfo.num;
                }
                var changeInfo = new AwardInfo();
                changeInfo.itemId = info.itemId;
                changeInfo.num = info.num;
                arr.push(changeInfo);
                LuckGame.BagManage.Instance.addNewItem(itemDbId, info);
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
        };
        BagHandler.prototype.getBagReduceItemInfo = function (msg) {
            this._logicManage.bagSize = msg.bagSize;
            this._logicManage.useSize = msg.useSize;
            for (var itemDbId in msg.reduceItemMap) {
                var num = msg.reduceItemMap[itemDbId];
                this._logicManage.reduceItemNum(itemDbId, num);
            }
            //
            // UIRefreshManage.Instance.runCall("updateBagViewInfo");
            SingletonBase.Get(ui.BagView).refresh();
        };
        BagHandler.prototype.getMsgTip = function (msg) {
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
                    var str = GetDictionaryStr.getStrById(msg.id);
                    LuckGame.Event.DispatchEvent("showWaveHintView", str);
                    break;
            }
        };
        return BagHandler;
    }(FrameWork.IOHandler));
    LuckGame.BagHandler = BagHandler;
    __reflect(BagHandler.prototype, "LuckGame.BagHandler");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=BagHandler.js.map
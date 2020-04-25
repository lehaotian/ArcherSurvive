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
    var BagService = (function (_super) {
        __extends(BagService, _super);
        function BagService() {
            var _this = _super.call(this, new LuckGame.BagManage(), new LuckGame.BagHandler()) || this;
            //材料map
            _this.pos = 0;
            _this.recipeId = 0;
            _this.mainMaterDbId = 0;
            _this.materMap = {};
            _this.createMaterMap = {};
            BagService.Instance = _this;
            return _this;
        }
        BagService.prototype.reqBagInfo = function () {
            //获取玩家的id 
            var playerId = LuckGame.PlayerManage.Instance.playerId;
            var _msg = new MessgeInfoNone();
            _msg.SetMessageId(C2L_Bag.getBagInfo);
            _msg.SetRelationId(playerId);
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        BagService.prototype.reqUseItem = function (dbid, num) {
            //获取玩家的id 
            var playerId = LuckGame.PlayerManage.Instance.playerId;
            var _msg = new MessgeInfoLI();
            _msg.SetMessageId(C2L_Bag.useItem);
            _msg.SetRelationId(playerId);
            _msg.itemDbId = dbid;
            _msg.num = num;
            LuckGame.NetManager.Instance.SendMessage(_msg);
        };
        BagService.prototype.addMater = function (pos, itemId) {
            var olditemId = this.materMap[pos];
            if (olditemId == null || olditemId <= 0) {
                this.materMap[pos] = itemId;
            }
            else {
                this.jcreateMaterMap(itemId);
            }
            this.addcreateMaterMap(itemId);
        };
        BagService.prototype.addcreateMaterMap = function (itemId) {
            var num = this.createMaterMap[itemId];
            if (num == null) {
                this.createMaterMap[itemId] = 1;
            }
            else {
                num++;
                this.createMaterMap[itemId] = num;
            }
        };
        BagService.prototype.jcreateMaterMap = function (itemId) {
            var num = this.createMaterMap[itemId];
            if (num == null) {
                return;
            }
            else {
                num--;
                this.createMaterMap[itemId] = num;
            }
            if (num <= 0) {
                delete this.createMaterMap[itemId];
            }
        };
        //请求炼器
        BagService.prototype.reqSelfCreateEquip = function () {
            //获取玩家的id 
            var playerId = LuckGame.PlayerManage.Instance.playerId;
            var _msg = new SelfCreateEquip();
            _msg.SetMessageId(C2L_Bag.selfCreateEquip);
            _msg.SetRelationId(playerId);
            _msg.recipeId = this.recipeId;
            _msg.mainMaterDbId = this.mainMaterDbId;
            _msg.assistMaterMap = this.createMaterMap;
            LuckGame.NetManager.Instance.SendMessage(_msg);
            SingletonBase.Get(ui.CareerSkillView).clearMaterData();
        };
        return BagService;
    }(FrameWork.GameService));
    LuckGame.BagService = BagService;
    __reflect(BagService.prototype, "LuckGame.BagService");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=BagService.js.map
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
var ui;
(function (ui) {
    var materRender = (function (_super) {
        __extends(materRender, _super);
        function materRender() {
            var _this = _super.call(this) || this;
            _this.skinName = "materRender";
            return _this;
        }
        materRender.prototype.ComponentCreate = function () {
            this.bindEvent();
        };
        materRender.prototype.bindEvent = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this);
        };
        materRender.prototype.useItem = function () {
            LuckGame.BagService.Instance.pos = this.data.pos;
            // ViewManager.Inst.OpenView("MaterView",false,Laya.Handler.create(this,function(ui){
            //     this.mPreUI = ui;
            //     this.mPreUI.openView();
            // }),null,TierType.dialogRoot);
            SingletonBase.Get(ui.MaterView).open();
        };
        materRender.prototype.dataChanged = function () {
            if (this.data.id <= 0) {
                // this.itemName.visible = false;
                // this.itemIcon.skin = "UI/bag/UI3_9.png";
                // this.frameIcon.skin = ImgUrl.getQualityFrame(1);
                this.itemInfoView.noItem();
                this.addImg.visible = true;
                return;
            }
            this.itemInfoView.showItem(this.data.id);
            this.addImg.visible = false;
            // this.itemName.visible = true;
            // //设置名称
            // let info = JsonManager.Instance.getJsonMap("Item")[this.dataSource.id];
            // this.itemName.text = info.ItemName;
            // this.itemIcon.skin = ImgUrl.getSkin(ImgUrl.itemImgUrl, info.Icon);
            // this.frameIcon.skin = ImgUrl.getQualityFrame(info.quality);
        };
        return materRender;
    }(RenderBaseUI));
    ui.materRender = materRender;
    __reflect(materRender.prototype, "ui.materRender");
})(ui || (ui = {}));
//# sourceMappingURL=materRender.js.map
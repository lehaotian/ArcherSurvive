var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 骨骼管理器
 */
var DragonBonesManager = (function () {
    function DragonBonesManager() {
        this.egretFactory = dragonBones.EgretFactory.factory;
    }
    Object.defineProperty(DragonBonesManager, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new DragonBonesManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    DragonBonesManager.prototype.createDragonBones = function (name) {
        var dragonbonesData = RES.getRes(name + "_ske_json");
        var textureData = RES.getRes(name + "_tex_json");
        var texture = RES.getRes(name + "_tex_png");
        this.egretFactory.parseDragonBonesData(dragonbonesData);
        this.egretFactory.parseTextureAtlasData(textureData, texture);
    };
    DragonBonesManager.prototype.getDragonBones = function (name) {
        var armatureDisplay = this.egretFactory.buildArmatureDisplay(name);
        return armatureDisplay;
    };
    DragonBonesManager._instance = null;
    return DragonBonesManager;
}());
__reflect(DragonBonesManager.prototype, "DragonBonesManager");
//# sourceMappingURL=DragonBonesManager.js.map
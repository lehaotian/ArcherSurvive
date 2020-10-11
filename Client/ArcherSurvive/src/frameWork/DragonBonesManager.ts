/**
 * 骨骼管理器
 */
class DragonBonesManager{
    private static _instance:DragonBonesManager = null;
    public static get Instance():DragonBonesManager{
        if(!this._instance){
            this._instance = new DragonBonesManager();
        }
        return this._instance;
    }
    private egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
    /** 创建龙骨 */
    public createDragonBones(name:string): dragonBones.EgretArmatureDisplay{
        var dragonbonesData = RES.getRes(name + "_ske_json");  
        var textureData = RES.getRes(name + "_tex_json");  
        var texture = RES.getRes(name + "_tex_png");
        this.egretFactory.parseDragonBonesData(dragonbonesData);  
        this.egretFactory.parseTextureAtlasData(textureData, texture);
        return this.egretFactory.buildArmatureDisplay(name);
    }
    /** 得到一个龙骨 */
    public getDragonBones(name:string): dragonBones.EgretArmatureDisplay{
        let armatureDisplay: dragonBones.EgretArmatureDisplay = this.egretFactory.buildArmatureDisplay(name);
        if(armatureDisplay == null){
            this.createDragonBones(name);
        }
        return armatureDisplay;
    }
}
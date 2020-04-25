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
    public createDragonBones(name:string){
        var dragonbonesData = RES.getRes(name + "_ske_json");  
        var textureData = RES.getRes(name + "_tex_json");  
        var texture = RES.getRes(name + "_tex_png");
        this.egretFactory.parseDragonBonesData(dragonbonesData);  
        this.egretFactory.parseTextureAtlasData(textureData, texture);
    }
    public getDragonBones(name:string): dragonBones.EgretArmatureDisplay{
        let armatureDisplay: dragonBones.EgretArmatureDisplay = this.egretFactory.buildArmatureDisplay(name);
        return armatureDisplay;
    }
}
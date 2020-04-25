/**
 * View基类
 */
abstract class ViewBase extends eui.Component{
    constructor(skinName:string){
        super();
        this.skinName = skinName;
    }
    private args:any[] = [];
    abstract open(...args);
    abstract close();
}
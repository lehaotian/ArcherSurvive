/**
 * 组件基类
 */
abstract class ComponentBase extends eui.Component{
    constructor(skinName:string){
        super();
        this.skinName = skinName;
    }
    abstract init(...args);
    
}
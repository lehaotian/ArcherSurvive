/**
 * 弹窗基类
 */
class PopBase extends eui.Component{
    constructor(skinName:string){
        super();
        this.skinName = skinName;
    }
    public args:any[] = [];
    public open(...args){
        this.args = args;
    };
    public close(obj){
        LayerManager.Instance.closePop(obj);
    };

}
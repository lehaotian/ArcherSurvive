/**
 * 层级管理器
 */
class LayerManager{
    public init(statge:egret.Stage){
        this.view = new eui.Group;
        statge.addChild(this.view);
        statge.addChild(this.pop);
        this.pop.touchThrough = true;
    }
    private static _instance:LayerManager = null;
    public static get Instance():LayerManager{
        if(!this._instance){
            this._instance = new LayerManager();
        }
        return this._instance;
    }
    private view:eui.Group = new eui.Group;
    private pop:eui.Group = new eui.Group;
    /** 界面MAP */
    private viewMap:{[nanme:string]:ViewBase} = {};
    private viewList:string[] = [];
    /** 弹窗MAP */
    private popMap:{[nanme:string]:PopBase} = {};

    public openView<V extends ViewBase>(target:{new():V},...args):void{
        if(this.viewList.length>0){
            let lastView = this.viewMap[this.viewList.pop()];
            lastView.visible = false;
            lastView.close();
        }
        let view = this.viewMap[target.toString()];
        if(view){
            view.visible = true;
        }else{
            view = new target();
            this.view.addChild(view);
            this.viewMap[target.toString()] = view;
        }
        view.open(args);
        this.viewList.push(target.toString());
    }
    public closeView<V extends ViewBase>(target:{new():V}):void{
        let view = this.viewMap[target.toString()];
        view.visible = false;
        view.close();
    }
    public getView<V extends ViewBase>(target:{new():V}):V{
        let view = <V>this.viewMap[target.toString()]
        return view;
    }
    public openPop<V extends PopBase>(target:{new():V},...args):void{
        let pop = this.popMap[target.toString()];
        if(pop){
            pop.visible = true;
        }else{
            pop= new target();
            this.popMap[target.toString()] = pop;
        }
        pop.open(args);
        this.pop.addChild(pop);
    }
    public getPop<V extends PopBase>(target:{new():V}):V{
        let pop = <V>this.popMap[target.toString()];
        if(!pop){
            pop= new target();
        }
        return pop;
    }
    public closePop<V extends PopBase>(target:{new():V}):void{
        let pop = <V>this.popMap[target.toString()];
        if(pop){
            this.pop.removeChild(pop);
        }
    }
}
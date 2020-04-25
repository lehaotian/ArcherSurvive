

/*
* name;
*/
namespace LuckGame{
    export class HintManage{
    public static instan:HintManage = null;
    constructor(){
        HintManage.instan = this; 
    }

    //所有对象的map
    private map = {};

    //获取对象
    public getObj(model){
        let arr:Array<any> = this.map[model];
        if(arr == null || arr.length <= 0){
            return null;
        }else{
            return arr.shift();
        }
    }

    //回收对象
    public recycleObj(model,obj){
        let arr = this.map[model];
        if(arr == null){
            arr = [];
            arr.push(obj);
            this.map[model] = arr;
        }else{
            arr.push(obj);
            
        }
    }

    public addNewMsg(msg){

    }


    public showGetItem(arr){
        // ViewManager.Inst.OpenView("GetItemView",false,Laya.Handler.create(this,function(ui){
        //     this.mPreUI = ui;
        //     this.mPreUI.openView(arr);
        // }),null,TierType.superRoot);
    }

}
}
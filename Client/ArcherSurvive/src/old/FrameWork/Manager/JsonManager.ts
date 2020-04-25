/*
* name;
*/
module LuckGame
{
    export class JsonManager{
    public static Instance:JsonManager;
    constructor(){
        JsonManager.Instance = this;
    }

    private jsonMap = {};
    private url = "config/";
    private nameEnd = "_json";

    loadAllJson(){
        let allJsonName = RES.getRes("includ_json");
        let arr = allJsonName["jsonconfig"];
        for(let key in arr){
            let info = arr[key];
            RES.getResAsync(info+this.nameEnd,this.loadJson,this);
        }
        
    }
    private jsonUrlArr = [];
    private onLoaded() {
        
    }

    private currJsonName = "";
    loadJson(json,jsonName:string){
        let arr = jsonName.split("_");
        this.jsonMap[arr[0]] = json;
    }

    public getJsonMap(name){
        return this.jsonMap[name];
    }


}
}
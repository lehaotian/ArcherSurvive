/*
* name;
*/
class GetDictionaryStr{
    constructor(){

    }

    public static getStrById(id){
        let info = LuckGame.JsonManager.Instance.getJsonMap("Dictionary")[id];
        if(info == null){
            return "";
        }
        return info.des;
    }
}
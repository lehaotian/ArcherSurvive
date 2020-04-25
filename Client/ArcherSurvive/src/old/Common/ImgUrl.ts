/*
* name;
*/

enum QualityType{

}
class ImgUrl{
    constructor(){

    }
    //物品路径
    public static itemImgUrl = "UI/item/";
    //配方路径
    public static recipeImgUrl = "UI/recipe/";

    public static getSkin(url,name){
        return url+name+".png";
    }

    public static getQualityFrame(num){
        let url = "";
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                url = this.itemImgUrl+"frame_"+num+".png";
                return url;
            default:
                return "";
        }

    }
}
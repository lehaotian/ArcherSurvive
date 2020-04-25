/*
* 本地存储
*/

class LocalStorage{

    //example
    private mName:string = "Name";
    constructor(){

    }

    //example
    public static SetNameNumber(_key:string,_value:number)
    {
        window.localStorage.setItem(_key,_value.toString());
    }

    public static SetNameString(_key:string,_value:string)
    {
        window.localStorage.setItem(_key,_value);
    }

    //example
    public static GetName(_key:string)
    {
        return window.localStorage.getItem(_key);
    }
}
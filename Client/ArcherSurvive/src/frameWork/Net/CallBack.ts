class CallBack{
    private obj;
    private fun:Function;

    public constructor(obj,fun:Function){
        this.obj = obj;
        this.fun = fun;
    }

    public call(...argArray: any[]){
        this.fun.call(this.obj,argArray);
    }
}
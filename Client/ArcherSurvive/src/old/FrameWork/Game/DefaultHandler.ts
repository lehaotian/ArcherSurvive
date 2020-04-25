/*
* name;
*/
class DefaultHandler extends IIOHandler{

    private _logicManage = null;

    //构造函数
    public constructor(){
        super();
    }

    public Init(part)
    {
        this._logicManage = part;
    }
}
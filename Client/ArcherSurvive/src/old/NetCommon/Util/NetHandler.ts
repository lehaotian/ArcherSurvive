/*
* 网络接收器
*/
class NetHandler{
    private _object = null;

    private _onConnectFunction = null;

    private _onDisConnectFunction = null;

    private _onReceiveFunction = null;

    public SetObject(value)
    {
        this._object = value;
    }

    public GetObject()
    {
        return this._object;
    }

    public SetConnectFunction(value)
    {
        this._onConnectFunction = value;
    }

    public GetConnectFunction()
    {
        return this._onConnectFunction;
    }

    public SetDisConnectFunction(value)
    {
        this._onDisConnectFunction = value;
    }

    public GetDisConnectFunction()
    {
        return this._onDisConnectFunction;
    }

    public SetReceiveFunction(value)
    {
        this._onReceiveFunction = value;
    }

    public GetReceiveFunction()
    {
        return this._onReceiveFunction;
    }
}
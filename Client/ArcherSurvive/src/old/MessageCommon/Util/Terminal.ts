enum Terminal{
    System = 0,
    Client = 1,
    Account = 2,
    Logic = 3,
}

class TerminalTool{
    public FromTerminal(msgId,number){
        var t1 = Math.floor(msgId / 16777216);
        return t1;
    }

    public ToTerminal(msgId){
        var a:string = ((msgId / 16777216)).toString();

        var b = a.split(".");
        var t1 = parseInt(b[0]);
        var t2 = parseInt(b[1]);
        t1 = t1 * 16777216;
        t1 = msgId - t1;
        t1 = Math.floor(t1 / 65536);
        return t1;
    }
}
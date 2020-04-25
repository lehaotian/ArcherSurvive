class GameMsg{
    public version:number;
    public eventId:number;
    public encoderType:number;
    public len:number;
    public pb:egret.ByteArray;
    
    public constructor(version:number,eventId:number,encoderType:number,len:number,pb:egret.ByteArray){
        this.version = version;
        this.eventId = eventId;
        this.encoderType = encoderType;
        this.len = len;
        this.pb = pb;
    }

}
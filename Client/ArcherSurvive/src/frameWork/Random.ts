/** 随机数工具类 */
class Random{
    constructor() {
    }
    /** 根据种子生成随机数 */     
    public randBySeed(seed:number):number{
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }
    /** 根据当前时间生成随机数 */     
    public randByTime():number{
        return this.randBySeed(new Date().getMilliseconds());
    }
    
}
/*
* name;
基本属性（1：普通伤害，2：真实伤害，3：护甲，4：破甲，5：穿甲，6：血量，7：回血，8：炼丹成功几率，9：炼器成功几率，10：制符成功几率）
*/
enum ProType{
    //普通伤害
    commHurt = 1,
    //真实伤害
    realHurt = 2,
    //护甲
    shield = 3,
    //破甲
    brokenShield = 4,
    //穿甲
    penetrateShield = 5,
    //血量
    Hp = 6,
    //回血
    replyHp = 7,
    //炼丹成功几率
    pharmacy = 8,
    //炼器成功几率
    forge = 9,
    //制符成功几率
    draw = 10,
    //灵力
    wakan = 11,
    //灵力回复
    wakanRegain = 12,
	
	speed = 13,
	//基本回复
	HPRegain = 14,
}
/*
* name;
基本属性（1：普通伤害，2：真实伤害，3：护甲，4：破甲，5：穿甲，6：血量，7：回血，8：炼丹成功几率，9：炼器成功几率，10：制符成功几率）
*/
var ProType;
(function (ProType) {
    //普通伤害
    ProType[ProType["commHurt"] = 1] = "commHurt";
    //真实伤害
    ProType[ProType["realHurt"] = 2] = "realHurt";
    //护甲
    ProType[ProType["shield"] = 3] = "shield";
    //破甲
    ProType[ProType["brokenShield"] = 4] = "brokenShield";
    //穿甲
    ProType[ProType["penetrateShield"] = 5] = "penetrateShield";
    //血量
    ProType[ProType["Hp"] = 6] = "Hp";
    //回血
    ProType[ProType["replyHp"] = 7] = "replyHp";
    //炼丹成功几率
    ProType[ProType["pharmacy"] = 8] = "pharmacy";
    //炼器成功几率
    ProType[ProType["forge"] = 9] = "forge";
    //制符成功几率
    ProType[ProType["draw"] = 10] = "draw";
    //灵力
    ProType[ProType["wakan"] = 11] = "wakan";
    //灵力回复
    ProType[ProType["wakanRegain"] = 12] = "wakanRegain";
    ProType[ProType["speed"] = 13] = "speed";
    //基本回复
    ProType[ProType["HPRegain"] = 14] = "HPRegain";
})(ProType || (ProType = {}));
//# sourceMappingURL=ProType.js.map
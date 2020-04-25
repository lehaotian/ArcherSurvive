/*
* name;
*/
var ProcessType;
(function (ProcessType) {
    ProcessType[ProcessType["None"] = 0] = "None";
    /**
     * 回合开始
     */
    ProcessType[ProcessType["boutStart"] = 1] = "boutStart";
    /**
     *释放技能
     */
    ProcessType[ProcessType["releaseSkill"] = 2] = "releaseSkill";
    /**
     *攻击结束
     */
    ProcessType[ProcessType["attackEnd"] = 3] = "attackEnd";
    ProcessType[ProcessType["end"] = 4] = "end";
})(ProcessType || (ProcessType = {}));
//# sourceMappingURL=ProcessType.js.map
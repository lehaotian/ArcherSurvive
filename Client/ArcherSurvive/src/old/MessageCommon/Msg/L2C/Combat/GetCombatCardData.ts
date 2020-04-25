/*
* name;
*/
module Combat {
    export class GetCombatCardData extends Common.GameMessage {
        constructor() {
            super();
        }

        public cardDataMap = {};

        public _OnDeserialize() {
            this.cardDataMap = {};
            let count = this.ReadInt32();
            for (let i = 0; i < count; i++) {
                let cardInfo = new CombatCardData();
                cardInfo.playerId = this.ReadInt64();
                cardInfo.pos = this.ReadInt32();
                cardInfo.baseHP = this.ReadInt32();
                cardInfo.currHP = this.ReadInt32();
                this.cardDataMap[cardInfo.playerId] = cardInfo;
            }
        }

    }
}
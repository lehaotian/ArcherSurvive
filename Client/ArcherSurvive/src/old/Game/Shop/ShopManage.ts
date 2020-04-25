/*
* name;
*/
module LuckGame {
    export class ShopManage extends GamePart {

        public static Instance: ShopManage;

        constructor() {
            super();
            ShopManage.Instance = this;
        }

        public itemMap = {};

        public buy(id,num){
            let old = this.itemMap[id];
            if(old != null){
                old += num;
            }
            this.itemMap[id] = old;
        }

        public BtnId = 1;


    }
}

/*
* name;
*/
module LuckGame {
    export class ComBatService extends FrameWork.GameService {
        public static Instance: ComBatService;

        constructor() {
            super(new ComBatManage(), new ComBatHandler());
            ComBatService.Instance = this;
        }
    }
}
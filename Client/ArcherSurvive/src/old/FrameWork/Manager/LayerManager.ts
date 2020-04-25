module LuckGame{
    export var sceneRoot:egret.Sprite;
    export var lowerRoot:egret.Sprite;
    export var viewRoot:egret.Sprite;
    export var mainRoot:egret.Sprite;
    export var dialogRoot:egret.Sprite;
    export var superRoot:egret.Sprite;
    export var effectRoot:egret.Sprite;
    
    export class LayerManager extends Common.Singleton{

        private mIsInit = false;

        private mainStage = null;
        public Init = function(main){
            if(this.mIsInit){return;}
            this.mIsInit = true;

            this.mainStage = main;
            sceneRoot = new egret.Sprite();
            sceneRoot.name = "SceneRoot";
            this.mainStage.stage.addChild(sceneRoot);

            // this.mMap = new Map();
            // this.mMap.Init();
            // Laya.stage.addChild(this.mMap);

            lowerRoot = new egret.Sprite();
            lowerRoot.name = "LowerRoot";
            this.mainStage.stage.addChild(lowerRoot);

            viewRoot = new egret.Sprite();
            viewRoot.name = "ViewRoot";
            this.mainStage.stage.addChild(viewRoot);

            mainRoot = new egret.Sprite();
            mainRoot.name = "mainRoot";
            this.mainStage.stage.addChild(mainRoot);

            dialogRoot = new egret.Sprite();
            dialogRoot.name = "dialogRoot";
            this.mainStage.stage.addChild(dialogRoot);


            superRoot = new egret.Sprite();
            superRoot.name = "SuperRoot";
            this.mainStage.stage.addChild(superRoot);

            effectRoot = new egret.Sprite();
            effectRoot.name = "effectRoot";
            this.mainStage.stage.addChild(effectRoot);
           

            Debugger.log("层级管理器启动成功");
        }


        private stageView = [];
        private stageHideView = [];
        public addView(view,layer = viewRoot){
            let type =eval(view.__proto__.__class__);
            let viewinfo:any = SingletonBase.Get(type);
            layer.addChild(viewinfo);
            this.showView(type);
        }

        private showView(view){
            let viewinfo:any = SingletonBase.Get(view);
            viewinfo.visible = true;
            this.removeHide(view);
            this.addStageView(view);
            
        }

        /**
         * 隐藏界面
         */
        public hideView(view){
            let viewinfo:any = SingletonBase.Get(view);
            this.removeStageView(view);
            this.addHideView(view);
            viewinfo.visible = false;
        }

        public closeView(view,isDelete = false){
            //从父节点移除
            let viewinfo = SingletonBase.Get(view);
            this.removeSelf(viewinfo);
            this.removeHide(view);
            this.removeStageView(view);
            if(isDelete){
                SingletonBase.DeleteByKey(view);
            }
        }

        /**
         * 关闭  并销毁界面
         */
        public closeView2(viewthis,isDelete = false){
            let view =eval(viewthis.__proto__.__class__);
            //从父节点移除
            let viewinfo = SingletonBase.Get(view);
            this.removeSelf(viewinfo);
            this.removeHide(view);
            this.removeStageView(view);
            if(isDelete){
                SingletonBase.DeleteByKey(view);
            }
            
        }
        /**
         * 从父节点移除自己
         */
        public removeSelf(viewinfo){
            if(viewinfo.parent){
                viewinfo.parent.removeChild(viewinfo);
            }
        }

        private removeHide(view){
            let index = this.stageHideView.indexOf(view);
            if(index != -1){
                this.stageHideView.splice(index,1);
            }
        }

        private addHideView(view){
            let index = this.stageHideView.indexOf(view);
            if(index == -1){
                this.stageHideView.push(view);
            }
        }

        private removeStageView(view){
            let index = this.stageView.indexOf(view);
            if(index != -1){
                this.stageView.splice(index,1);
            }
        }

        private addStageView(view){
            let index = this.stageView.indexOf(view);
            if(index == -1){
                this.stageView.push(view);
            }
        }

        public isExitStage(viewthis):boolean{
            let view =eval(viewthis.__proto__.__class__);
            let index = this.stageView.indexOf(view);
            if(index == -1){
                return false;
            }
            return true;
        }

    }
    
}
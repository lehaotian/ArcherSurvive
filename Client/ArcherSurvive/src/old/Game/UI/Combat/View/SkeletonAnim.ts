namespace ui {
	export class SkeletonAnim extends BaseUI {
		public constructor() {
			super("SkeletonAnimSkin");
		}

		private armatureDisplay:dragonBones.EgretArmatureDisplay = null;
		public loadRes(name) {
			var dragonbonesData = RES.getRes(name+"_ske_json");
			var textureData = RES.getRes(name+"_tex_json");
			var texture = RES.getRes(name+"_tex_png");

			let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
			egretFactory.parseDragonBonesData(dragonbonesData);
			egretFactory.parseTextureAtlasData(textureData, texture);
			this.armatureDisplay = egretFactory.buildArmatureDisplay(name);
			this.armatureDisplay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
			this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
			this.addChild(this.armatureDisplay);
			// this.armatureDisplay.x = 200;
			// this.armatureDisplay.y = 300;
			this.armatureDisplay.scaleX = 0.3;
			this.armatureDisplay.scaleY = 0.3;
			// this.play("steady");
			this.armatureDisplay.animation.play("steady");
		}

		private wring = false;
		loopAnimationEventHandler(){
			this.wring = false;
			if(this.animArr.length > 0){
				let animInfo:AnimInfo = this.animArr.shift();
				this.callFun = animInfo.call;
				this.armatureDisplay.animation.play(animInfo.animName,animInfo.animTimes);
			}
		}

		private animArr = [];
		private callFun:FuntionCall = null;
		public play(name,times = 0,_callFun:FuntionCall = null){
			if(this.wring){
				let animInfo = new AnimInfo();
				animInfo.animName = name;
				animInfo.animTimes = times;
				animInfo.call = _callFun;
				this.animArr.push(animInfo);
				return;
			}
			this.callFun = _callFun;
			this.armatureDisplay.animation.play(name,times);
		}

		animationEventHandler(){
			this.wring = true;
			if(this.callFun != null){
				this.callFun.runCall();
			}
			
			this.armatureDisplay.animation.play("steady");

		}

	}
}
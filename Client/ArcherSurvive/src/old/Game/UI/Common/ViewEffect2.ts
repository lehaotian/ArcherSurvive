namespace ui {
	export class ViewEffect2 extends BaseUI {
		public constructor() {
			super("ViewEffect2");
		}

		private armatureDisplay: dragonBones.EgretArmatureDisplay = null;
		public loadRes(name, times = 0) {
			var dragonbonesData = RES.getRes(name + "_ske_json");
			var textureData = RES.getRes(name + "_tex_json");
			var texture = RES.getRes(name + "_tex_png");

			let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
			egretFactory.parseDragonBonesData(dragonbonesData);
			egretFactory.parseTextureAtlasData(textureData, texture);
			this.armatureDisplay = egretFactory.buildArmatureDisplay(name);
			this.armatureDisplay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loopAnimationEventHandler, this);
			this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
			this.addChild(this.armatureDisplay);
			// this.armatureDisplay.scaleX = 0.3;
			// this.armatureDisplay.scaleY = 0.3;
			this.armatureDisplay.animation.play("steady", times);
		}

		loopAnimationEventHandler() {

		}



		animationEventHandler() {

		}
	}
}
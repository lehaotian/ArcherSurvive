class SingletonBase {
	public constructor() {
	}
	// private static _instance = null;

	// public static get Instance():SingletonBase{
	// 	if(SingletonBase._instance == null){
	// 		SingletonBase._instance = new SingletonBase();
	// 	}
	// 	return SingletonBase._instance;
	// }

	private static map:DictionaryT<any,any> = new DictionaryT<any,any>();

	public static Get<U>(target:{new():U}):U{
		let t = this.map.GetValueByKey(target);
		if(t == null){
			t = new target();
			this.map.Add(target,t);
		}
		return t;
	}

	public static DeleteByVal(view){
		this.map.DeleteDataByVal(view);
	}

	public static DeleteByKey(type){
		this.map.DeleteDataByKey(type);
	}
	
}
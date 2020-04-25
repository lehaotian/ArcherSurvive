class DictionaryT<K,V> {
	public constructor() {
	}

	private keyArr:K[] = [];
	private valArr:V[] = [];

	public Add(key,val){
		this.keyArr.push(key);
		this.valArr.push(val);
	}

	public ContainsKey(key){
		return this.keyArr.indexOf(key) != -1;
	}

	public GetValueByKey(key){
		let index = this.keyArr.indexOf(key)
		if(index == -1){
			return null;
		}
		return this.valArr[index];
	}

	public GetKeyByValue(val){
		let index = this.valArr.indexOf(val)
		if(index == -1){
			return null;
		}
		return this.keyArr[index];
	}

	public DeleteDataByKey(key){
		let index = this.keyArr.indexOf(key)
		if(index == -1){
			return;
		}
		this.keyArr.splice(index,1);
		this.valArr.splice(index,1);
	}

	public DeleteDataByVal(val){
		let index = this.valArr.indexOf(val)
		if(index == -1){
			return;
		}
		this.keyArr.splice(index,1);
		this.valArr.splice(index,1);
	}
}
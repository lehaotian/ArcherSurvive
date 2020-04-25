class IntMapMsg extends Common.GameMessage{
	public constructor() {
		super();
	}

	public intMap = {};

	public _OnSerial(){
	}

	public _OnDeserialize(){

		let count = this.ReadInt32();
        for(let i = 0 ; i < count ; i++){
            let key = this.ReadInt32();
            let num = this.ReadInt32();
            this.intMap[key] = num;
        }
	}


}
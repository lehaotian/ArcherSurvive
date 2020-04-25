/*
* 存储的键值对
*/
module Common
{
    export class Dictionary{

        private items = {};
        
        //检查某个key是否存在
        public ConstainsKey(key):boolean
        {
            return key in this.items;
        }

        //检查某个值是否存在
        public ContainsValue(value):boolean
        {
            for(let key in this.items)
            {
                if(this.items[key] == value) return true;
            }
            return false;
        }

        //添加元素
        public Add(key,value)
        {
            this.items[key] = value;
        }

        //移出元素
        public Remove(key):boolean
        {
            if(!this.ContainsKey(key)) return false;
            delete this.items[key];
            return true;
        }

        //获取值
        public GetItem(key)
        {
            return this.ContainsKey(key) ? this.items[key] : null;
        }

        ContainsKey(key){
            let val = this.items[key];
            if(val == null){
                return false;
            }
            return true;
        }

        //值以数组形式返回
        public GetValuesArray()
        {
            let values = [];
            for(let key in this.items)
            {
                if(this.ContainsKey(key)) { values.push(this.items[key]); }
            }
            return values;
        }

        //键以数组形式返回
        public GetKeyArray()
        {
            let values = [];
            for(let key in this.items)
            {
                if(this.ContainsKey(key)) { values.push(key); }
            }
            return values;
        }

        
        public GetArray()
        {
            return this.items;
        }
        //返回Map
        public GetMap()
        {
            return this.items;
        }

        //长度
        public Size():number
        {
            return Object.keys(this.items).length;
        }

        //清空
        public Clear()
        {
            this.items = [];
        }
    }
}

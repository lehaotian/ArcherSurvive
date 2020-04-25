/*
* 队列遵循先进先出原则的一组有序的项,队列在尾部添加新元素,并从顶部移除元素,新添加的元素必须排在队列的末尾
*/
module Common
{
    export class Queue<T>
    {
        private items:Array<T> = [];

        //入列
        public Enqueue(element):void
        {
            this.items.push(element);
        }

        //移出队列第一项,并返回移除的元素
        public Dequeue():T
        {
            return this.items.shift();
        }

        //返回队列最前项
        public Front():T
        {
            return this.items[0];
        }

        //是否为空
        public IsEmpty():boolean
        {
            return this.items.length === 0;
        }

        //长度
        public Size():number
        {
            return this.items.length;
        }

        //清空队列
        public Clear():void
        {
            this.items = [];
        }
    }
}
/*
* 字节流处理
*/
module LuckGame
{
    export class Message{

        public static SIZE_OF_BOLLEAN:number = 1;
        public static SIZE_OF_INT8:number = 1;
        public static SIZE_OF_INT16:number = 2;
        public static SIZE_OF_INT32:number = 4;
        public static SIZE_OF_UINT8:number = 1;
        public static SIZE_OF_UINT16:number = 2;
        public static SIZE_OF_UINT32:number = 4;
        public static SIZE_OF_FLOAT32:number = 4;
        public static SIZE_OF_FLOAT64:number = 8;

        public endian:string;
        private data:DataView;
        private position:number;

        constructor(buffer?:ArrayBuffer){
            this.SetArrayBuffer(buffer || new ArrayBuffer(0));
            this.endian = Endian.LITTLE_ENDIAN;
        }

        public get Data():DataView  { return this.data; }
        public set Data(value:DataView) { this.data = value; }

        //剩余字节数量
        public get ByteAvailable():number {return this.data.byteLength - this.position;}

        //数据buffer
        public get Buffer():ArrayBuffer  { return this.data.buffer; }
        public get BufferOffset():number { return this.data.byteOffset; }
        //数据长度
        public get Length():number { return this.data.byteLength; }
        public set Length(value:number)
        {
            if(this.Length == value) return;
            let temp:Uint8Array = new Uint8Array(new ArrayBuffer(value));
            //todo
            temp.set(new Uint8Array(this.Buffer,0 + this.BufferOffset,Math.min(this.Length,value)));
            this.data = new DataView(temp.buffer);
            this.position = Math.min(this.position,value);
        }

        //缓存当前获取位置
        public get Postion():number { return this.position; }
        public set Postion(value:number)
        {
            this.position = Math.max(0,Math.min(value,this.Length));
        }

        //字符转换
        public EnCodeUTF8(str:string):Uint8Array { return Utf8Bytes.EnCode(str); }
        public DeCodeUTF8(data:Uint8Array):string { return Utf8Bytes.DeCode(data); }

        //bool
        public ReadBoolean():boolean
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            return this.data.getUint8(this.position++) != 0;
        }

        //byte
        public ReadByte():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            return this.data.getInt8(this.position++);
        }
        //double
        public ReadDouble():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let value:number = this.data.getFloat64(this.position,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT64;
            return value;
        }

        //float
        public ReadFloat():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let value:number = this.data.getFloat32(this.position,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT32;
            return value;
        }

        //int
        public ReadInt():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let value:number = this.data.getInt32(this.position,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT32;
            return value;
        }

        //short
        public ReadShort():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let value:number = this.data.getInt16(this.position,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT16;
            return value;
        }

        //unsigned int
        public ReadUint():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let value:number = this.data.getUint32(this.position,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT32;
            return value;
        }

        //unsigned short
        public ReadUShort():number
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let value:number = this.data.getUint16(this.position,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT16;
            return value;
        }

        //utf
        public ReadUTF():string
        {
            let length:number = this.ReadInt();
            if(length == 0) return "";
            return this.ReadUTFBytes(length);
        }

        //utf8bytes
        public ReadUTFBytes(length:number):string
        {
            console.assert(this.ByteAvailable >= 1,"out of range");
            let bytes:Uint8Array = new Uint8Array(this.Buffer,this.BufferOffset + this.position,length);
            this.position += length;
            return this.DeCodeUTF8(bytes);
        }

        //bytes
        public ReadBytes(bytes:Message,offset:number = 0,length:number = 0)
        {
            length = length || this.ByteAvailable;
            console.assert(this.ByteAvailable >= 1,"out of range");
            bytes.position = offset;
            bytes.WriteUint8Array(new Uint8Array(this.Buffer,this.position + this.BufferOffset,length));
            this.position += length;
        }

        public GetBuff()
        {
            return this.data.buffer;
        }

        public WriteBoolean(value:boolean):void
        {
            this.CheckSize(Message.SIZE_OF_BOLLEAN);
            this.data.setUint8(this.position++,value?1:0);
        }

        public WriteByte(value:number)
        {
            this.CheckSize(Message.SIZE_OF_INT8);
            this.data.setUint8(this.position++,value?1:0);
        }

        public WriteBytes(bytes:Message,offset:number = 0,length :number = 0)
        {
            if(offset < 0 || length < 0) return;
            let Total = bytes.Length - offset;
            length = length || Total;
            let WriteLength:number = Math.min(Total,length);
            if(WriteLength == 0) return;
            this.CheckSize(WriteLength);

            new Uint8Array(this.Buffer,this.position + this.BufferOffset,WriteLength).set(new Uint8Array(bytes.Buffer,offset + bytes.BufferOffset,WriteLength));
            this.position += WriteLength;
        }

        public WriteDouble(value:number):void
        {
            this.CheckSize(Message.SIZE_OF_FLOAT64);
            this.data.setFloat64(this.position,value,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT64;
        }

        public WriteFloat(value:number):void
        {
            this.CheckSize(Message.SIZE_OF_FLOAT32);
            this.data.setFloat32(this.position,value,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT32;
        }

        public WriteInt(value:number):void
        {
            this.CheckSize(Message.SIZE_OF_INT32);
            this.data.setInt32(this.position,value,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT32;
        }

        public WriteShort(value:number):void
        {
            this.CheckSize(Message.SIZE_OF_INT16);
            this.data.setInt16(this.position,value,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT16;
        }

        public WriteUint(value:number):void
        {
            this.CheckSize(Message.SIZE_OF_UINT32);
            this.data.setUint32(this.position,value,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT32;
        }

        public WriteUShort(value:number):void
        {
            this.CheckSize(Message.SIZE_OF_UINT16);
            this.data.setUint16(this.position,value,this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT16;
        }

        public WriteUTF(value:string):void
        {
            let utf8Bytes:Uint8Array = this.EnCodeUTF8(value);
            let length:number = utf8Bytes.length;
            this.WriteInt(length);
            this.WriteUint8Array(utf8Bytes);
        }

        public WriteUTF8Array(value:string):void
        {
            this.WriteUint8Array(this.EnCodeUTF8(value));
        }

        public WriteUint8Array(bytes:Uint8Array):void
        {
            this.CheckSize(bytes.byteLength);
            new Uint8Array(this.Buffer,this.position + this.BufferOffset).set(bytes);
            this.position += bytes.byteLength;
        }

        public ToString():string
        {
            return "[ByteArray]len" + this.Length + ",ByteAvailable:" + this.ByteAvailable;
        }

        public Clear():void
        {
            this.SetArrayBuffer(new ArrayBuffer(0));
        }

        public SetArrayBuffer(buffer:ArrayBuffer)
        {
            this.position = 0;
            this.data = new DataView(buffer);
        }

        private CheckSize(len:number):void
        {
            this.Length = Math.max(len + this.position,this.Length);
        }
    }

    export class Endian
    {
        public static LITTLE_ENDIAN:string = "littleEndian";
        public static BIG_ENDIAN:string = "bigEndian";
    }
}
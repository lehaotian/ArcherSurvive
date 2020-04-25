/*
* 网络消息基类
*/
module Common
{
    export class GameMessage{
        protected _adapterId:number = 0;
        protected _relationId:number = 0;
        protected _msgId:number = 0;
        public _byteArray:LuckGame.Message = null;

        public headLength = 4 + 4 + 8;
        constructor(){

        }

        //sendbuffer recbuffer
        public SetByteArray(_byteArray:LuckGame.Message)
        {
            this._byteArray = _byteArray;
        }

        //获取消息id
        public GetMessageId()
        {
            return this._msgId;
        }

        public SetMessageId(_msgId:number)
        {
            this._msgId = _msgId;
        }

        public SetAdapterId(_adapterId:number)
        {
            this._adapterId = _adapterId;
        }

        //获取关系id
        public GetRelationId()
        {
            return this._relationId;
        }

        public SetRelationId(_relationId:number)
        {
            this._relationId = _relationId;
        }

        //反序列化
        public Deserialize()
        {
            this._relationId = this.ReadInt64();
            this._OnDeserialize();
        }

        //序列化
        public Serial()
        {
            this._byteArray.Clear();
            var length = 0;
            this.WriteInt32(length);
            this.WriteInt32(this._msgId);
            this.WriteInt64(this._relationId);
            this._OnSerial();
        }

        public _OnDeserialize()
        {

        }

        public _OnSerial()
        {

        }

        public WriteString(value)
        {
            this._byteArray.WriteUTF(value);
        }

        public WriteBytes(value)
        {
            this._byteArray.WriteBytes(value);
        }

        public WriteBytesEx(value,offset,length)
        {
            this._byteArray.WriteBytes(value,offset,length);
        }

        public WriteBoolean(value)
        {
            this._byteArray.WriteBoolean(value);
        }

        public WriteInt8(value)
        {
            this._byteArray.WriteByte(value);
        }

        public WriteInt16(value)
        {
            this._byteArray.WriteShort(value);
        }

        public WriteInt32(value)
        {
            this._byteArray.WriteInt(value);
        }

        public WriteInt64(value)
        {
            this._byteArray.WriteDouble(value);
        }

        public ReadBoolean()
        {
            return this._byteArray.ReadBoolean();
        }

        public ReadInt8()
        {
            return this._byteArray.ReadByte();
        }

        public ReadInt16()
        {
            return this._byteArray.ReadShort();
        }

        public ReadInt32()
        {
            return this._byteArray.ReadInt();
        }

        public ReadInt64()
        {
            return this._byteArray.ReadDouble();
        }

        public ReadString()
        {
            return this._byteArray.ReadUTF();
        }

        public ReadBytes()
        {
            return this._byteArray.ReadByte();
        }

        public ReadBytesEx(value,offset,length)
        {
            this._byteArray.ReadBytes(value,offset,length);
        }

        /**
         * 写内存块
         */
        public ReadBlock():ArrayBuffer
        {
            let length = this.ReadInt32();
            let a = new LuckGame.Message();
            this.ReadBytesEx(a,0,length);

            return a.GetBuff();
        }
    }
}

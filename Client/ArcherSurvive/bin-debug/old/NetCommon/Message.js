var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 字节流处理
*/
var LuckGame;
(function (LuckGame) {
    var Message = (function () {
        function Message(buffer) {
            this.SetArrayBuffer(buffer || new ArrayBuffer(0));
            this.endian = Endian.LITTLE_ENDIAN;
        }
        Object.defineProperty(Message.prototype, "Data", {
            get: function () { return this.data; },
            set: function (value) { this.data = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "ByteAvailable", {
            //剩余字节数量
            get: function () { return this.data.byteLength - this.position; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "Buffer", {
            //数据buffer
            get: function () { return this.data.buffer; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "BufferOffset", {
            get: function () { return this.data.byteOffset; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "Length", {
            //数据长度
            get: function () { return this.data.byteLength; },
            set: function (value) {
                if (this.Length == value)
                    return;
                var temp = new Uint8Array(new ArrayBuffer(value));
                //todo
                temp.set(new Uint8Array(this.Buffer, 0 + this.BufferOffset, Math.min(this.Length, value)));
                this.data = new DataView(temp.buffer);
                this.position = Math.min(this.position, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Message.prototype, "Postion", {
            //缓存当前获取位置
            get: function () { return this.position; },
            set: function (value) {
                this.position = Math.max(0, Math.min(value, this.Length));
            },
            enumerable: true,
            configurable: true
        });
        //字符转换
        Message.prototype.EnCodeUTF8 = function (str) { return Utf8Bytes.EnCode(str); };
        Message.prototype.DeCodeUTF8 = function (data) { return Utf8Bytes.DeCode(data); };
        //bool
        Message.prototype.ReadBoolean = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            return this.data.getUint8(this.position++) != 0;
        };
        //byte
        Message.prototype.ReadByte = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            return this.data.getInt8(this.position++);
        };
        //double
        Message.prototype.ReadDouble = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var value = this.data.getFloat64(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT64;
            return value;
        };
        //float
        Message.prototype.ReadFloat = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var value = this.data.getFloat32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT32;
            return value;
        };
        //int
        Message.prototype.ReadInt = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var value = this.data.getInt32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT32;
            return value;
        };
        //short
        Message.prototype.ReadShort = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var value = this.data.getInt16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT16;
            return value;
        };
        //unsigned int
        Message.prototype.ReadUint = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var value = this.data.getUint32(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT32;
            return value;
        };
        //unsigned short
        Message.prototype.ReadUShort = function () {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var value = this.data.getUint16(this.position, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT16;
            return value;
        };
        //utf
        Message.prototype.ReadUTF = function () {
            var length = this.ReadInt();
            if (length == 0)
                return "";
            return this.ReadUTFBytes(length);
        };
        //utf8bytes
        Message.prototype.ReadUTFBytes = function (length) {
            console.assert(this.ByteAvailable >= 1, "out of range");
            var bytes = new Uint8Array(this.Buffer, this.BufferOffset + this.position, length);
            this.position += length;
            return this.DeCodeUTF8(bytes);
        };
        //bytes
        Message.prototype.ReadBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            length = length || this.ByteAvailable;
            console.assert(this.ByteAvailable >= 1, "out of range");
            bytes.position = offset;
            bytes.WriteUint8Array(new Uint8Array(this.Buffer, this.position + this.BufferOffset, length));
            this.position += length;
        };
        Message.prototype.GetBuff = function () {
            return this.data.buffer;
        };
        Message.prototype.WriteBoolean = function (value) {
            this.CheckSize(Message.SIZE_OF_BOLLEAN);
            this.data.setUint8(this.position++, value ? 1 : 0);
        };
        Message.prototype.WriteByte = function (value) {
            this.CheckSize(Message.SIZE_OF_INT8);
            this.data.setUint8(this.position++, value ? 1 : 0);
        };
        Message.prototype.WriteBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (offset < 0 || length < 0)
                return;
            var Total = bytes.Length - offset;
            length = length || Total;
            var WriteLength = Math.min(Total, length);
            if (WriteLength == 0)
                return;
            this.CheckSize(WriteLength);
            new Uint8Array(this.Buffer, this.position + this.BufferOffset, WriteLength).set(new Uint8Array(bytes.Buffer, offset + bytes.BufferOffset, WriteLength));
            this.position += WriteLength;
        };
        Message.prototype.WriteDouble = function (value) {
            this.CheckSize(Message.SIZE_OF_FLOAT64);
            this.data.setFloat64(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT64;
        };
        Message.prototype.WriteFloat = function (value) {
            this.CheckSize(Message.SIZE_OF_FLOAT32);
            this.data.setFloat32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_FLOAT32;
        };
        Message.prototype.WriteInt = function (value) {
            this.CheckSize(Message.SIZE_OF_INT32);
            this.data.setInt32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT32;
        };
        Message.prototype.WriteShort = function (value) {
            this.CheckSize(Message.SIZE_OF_INT16);
            this.data.setInt16(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_INT16;
        };
        Message.prototype.WriteUint = function (value) {
            this.CheckSize(Message.SIZE_OF_UINT32);
            this.data.setUint32(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT32;
        };
        Message.prototype.WriteUShort = function (value) {
            this.CheckSize(Message.SIZE_OF_UINT16);
            this.data.setUint16(this.position, value, this.endian == Endian.LITTLE_ENDIAN);
            this.position += Message.SIZE_OF_UINT16;
        };
        Message.prototype.WriteUTF = function (value) {
            var utf8Bytes = this.EnCodeUTF8(value);
            var length = utf8Bytes.length;
            this.WriteInt(length);
            this.WriteUint8Array(utf8Bytes);
        };
        Message.prototype.WriteUTF8Array = function (value) {
            this.WriteUint8Array(this.EnCodeUTF8(value));
        };
        Message.prototype.WriteUint8Array = function (bytes) {
            this.CheckSize(bytes.byteLength);
            new Uint8Array(this.Buffer, this.position + this.BufferOffset).set(bytes);
            this.position += bytes.byteLength;
        };
        Message.prototype.ToString = function () {
            return "[ByteArray]len" + this.Length + ",ByteAvailable:" + this.ByteAvailable;
        };
        Message.prototype.Clear = function () {
            this.SetArrayBuffer(new ArrayBuffer(0));
        };
        Message.prototype.SetArrayBuffer = function (buffer) {
            this.position = 0;
            this.data = new DataView(buffer);
        };
        Message.prototype.CheckSize = function (len) {
            this.Length = Math.max(len + this.position, this.Length);
        };
        Message.SIZE_OF_BOLLEAN = 1;
        Message.SIZE_OF_INT8 = 1;
        Message.SIZE_OF_INT16 = 2;
        Message.SIZE_OF_INT32 = 4;
        Message.SIZE_OF_UINT8 = 1;
        Message.SIZE_OF_UINT16 = 2;
        Message.SIZE_OF_UINT32 = 4;
        Message.SIZE_OF_FLOAT32 = 4;
        Message.SIZE_OF_FLOAT64 = 8;
        return Message;
    }());
    LuckGame.Message = Message;
    __reflect(Message.prototype, "LuckGame.Message");
    var Endian = (function () {
        function Endian() {
        }
        Endian.LITTLE_ENDIAN = "littleEndian";
        Endian.BIG_ENDIAN = "bigEndian";
        return Endian;
    }());
    LuckGame.Endian = Endian;
    __reflect(Endian.prototype, "LuckGame.Endian");
})(LuckGame || (LuckGame = {}));
//# sourceMappingURL=Message.js.map
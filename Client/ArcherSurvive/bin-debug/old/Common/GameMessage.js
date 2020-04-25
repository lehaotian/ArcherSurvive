var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 网络消息基类
*/
var Common;
(function (Common) {
    var GameMessage = (function () {
        function GameMessage() {
            this._adapterId = 0;
            this._relationId = 0;
            this._msgId = 0;
            this._byteArray = null;
            this.headLength = 4 + 4 + 8;
        }
        //sendbuffer recbuffer
        GameMessage.prototype.SetByteArray = function (_byteArray) {
            this._byteArray = _byteArray;
        };
        //获取消息id
        GameMessage.prototype.GetMessageId = function () {
            return this._msgId;
        };
        GameMessage.prototype.SetMessageId = function (_msgId) {
            this._msgId = _msgId;
        };
        GameMessage.prototype.SetAdapterId = function (_adapterId) {
            this._adapterId = _adapterId;
        };
        //获取关系id
        GameMessage.prototype.GetRelationId = function () {
            return this._relationId;
        };
        GameMessage.prototype.SetRelationId = function (_relationId) {
            this._relationId = _relationId;
        };
        //反序列化
        GameMessage.prototype.Deserialize = function () {
            this._relationId = this.ReadInt64();
            this._OnDeserialize();
        };
        //序列化
        GameMessage.prototype.Serial = function () {
            this._byteArray.Clear();
            var length = 0;
            this.WriteInt32(length);
            this.WriteInt32(this._msgId);
            this.WriteInt64(this._relationId);
            this._OnSerial();
        };
        GameMessage.prototype._OnDeserialize = function () {
        };
        GameMessage.prototype._OnSerial = function () {
        };
        GameMessage.prototype.WriteString = function (value) {
            this._byteArray.WriteUTF(value);
        };
        GameMessage.prototype.WriteBytes = function (value) {
            this._byteArray.WriteBytes(value);
        };
        GameMessage.prototype.WriteBytesEx = function (value, offset, length) {
            this._byteArray.WriteBytes(value, offset, length);
        };
        GameMessage.prototype.WriteBoolean = function (value) {
            this._byteArray.WriteBoolean(value);
        };
        GameMessage.prototype.WriteInt8 = function (value) {
            this._byteArray.WriteByte(value);
        };
        GameMessage.prototype.WriteInt16 = function (value) {
            this._byteArray.WriteShort(value);
        };
        GameMessage.prototype.WriteInt32 = function (value) {
            this._byteArray.WriteInt(value);
        };
        GameMessage.prototype.WriteInt64 = function (value) {
            this._byteArray.WriteDouble(value);
        };
        GameMessage.prototype.ReadBoolean = function () {
            return this._byteArray.ReadBoolean();
        };
        GameMessage.prototype.ReadInt8 = function () {
            return this._byteArray.ReadByte();
        };
        GameMessage.prototype.ReadInt16 = function () {
            return this._byteArray.ReadShort();
        };
        GameMessage.prototype.ReadInt32 = function () {
            return this._byteArray.ReadInt();
        };
        GameMessage.prototype.ReadInt64 = function () {
            return this._byteArray.ReadDouble();
        };
        GameMessage.prototype.ReadString = function () {
            return this._byteArray.ReadUTF();
        };
        GameMessage.prototype.ReadBytes = function () {
            return this._byteArray.ReadByte();
        };
        GameMessage.prototype.ReadBytesEx = function (value, offset, length) {
            this._byteArray.ReadBytes(value, offset, length);
        };
        /**
         * 写内存块
         */
        GameMessage.prototype.ReadBlock = function () {
            var length = this.ReadInt32();
            var a = new LuckGame.Message();
            this.ReadBytesEx(a, 0, length);
            return a.GetBuff();
        };
        return GameMessage;
    }());
    Common.GameMessage = GameMessage;
    __reflect(GameMessage.prototype, "Common.GameMessage");
})(Common || (Common = {}));
//# sourceMappingURL=GameMessage.js.map
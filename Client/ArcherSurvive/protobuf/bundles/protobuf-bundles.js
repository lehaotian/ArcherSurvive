var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lht = (function() {

    /**
     * Namespace lht.
     * @exports lht
     * @namespace
     */
    var lht = {};

    lht.PlayerPB = (function() {

        /**
         * Properties of a PlayerPB.
         * @memberof lht
         * @interface IPlayerPB
         * @property {lht.IPlayerBasePB} playerBasePB PlayerPB playerBasePB
         */

        /**
         * Constructs a new PlayerPB.
         * @memberof lht
         * @classdesc Represents a PlayerPB.
         * @implements IPlayerPB
         * @constructor
         * @param {lht.IPlayerPB=} [properties] Properties to set
         */
        function PlayerPB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerPB playerBasePB.
         * @member {lht.IPlayerBasePB} playerBasePB
         * @memberof lht.PlayerPB
         * @instance
         */
        PlayerPB.prototype.playerBasePB = null;

        /**
         * Creates a new PlayerPB instance using the specified properties.
         * @function create
         * @memberof lht.PlayerPB
         * @static
         * @param {lht.IPlayerPB=} [properties] Properties to set
         * @returns {lht.PlayerPB} PlayerPB instance
         */
        PlayerPB.create = function create(properties) {
            return new PlayerPB(properties);
        };

        /**
         * Encodes the specified PlayerPB message. Does not implicitly {@link lht.PlayerPB.verify|verify} messages.
         * @function encode
         * @memberof lht.PlayerPB
         * @static
         * @param {lht.IPlayerPB} message PlayerPB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.lht.PlayerBasePB.encode(message.playerBasePB, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerPB message, length delimited. Does not implicitly {@link lht.PlayerPB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.PlayerPB
         * @static
         * @param {lht.IPlayerPB} message PlayerPB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerPB message from the specified reader or buffer.
         * @function decode
         * @memberof lht.PlayerPB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.PlayerPB} PlayerPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.PlayerPB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerBasePB = $root.lht.PlayerBasePB.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerBasePB"))
                throw $util.ProtocolError("missing required 'playerBasePB'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerPB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.PlayerPB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.PlayerPB} PlayerPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerPB message.
         * @function verify
         * @memberof lht.PlayerPB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerPB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.lht.PlayerBasePB.verify(message.playerBasePB);
                if (error)
                    return "playerBasePB." + error;
            }
            return null;
        };

        return PlayerPB;
    })();

    lht.PlayerBasePB = (function() {

        /**
         * Properties of a PlayerBasePB.
         * @memberof lht
         * @interface IPlayerBasePB
         * @property {number|Long} playerId PlayerBasePB playerId
         * @property {string} name PlayerBasePB name
         * @property {number|Long} gold PlayerBasePB gold
         * @property {number} lv PlayerBasePB lv
         * @property {number} exp PlayerBasePB exp
         */

        /**
         * Constructs a new PlayerBasePB.
         * @memberof lht
         * @classdesc Represents a PlayerBasePB.
         * @implements IPlayerBasePB
         * @constructor
         * @param {lht.IPlayerBasePB=} [properties] Properties to set
         */
        function PlayerBasePB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerBasePB playerId.
         * @member {number|Long} playerId
         * @memberof lht.PlayerBasePB
         * @instance
         */
        PlayerBasePB.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerBasePB name.
         * @member {string} name
         * @memberof lht.PlayerBasePB
         * @instance
         */
        PlayerBasePB.prototype.name = "";

        /**
         * PlayerBasePB gold.
         * @member {number|Long} gold
         * @memberof lht.PlayerBasePB
         * @instance
         */
        PlayerBasePB.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerBasePB lv.
         * @member {number} lv
         * @memberof lht.PlayerBasePB
         * @instance
         */
        PlayerBasePB.prototype.lv = 0;

        /**
         * PlayerBasePB exp.
         * @member {number} exp
         * @memberof lht.PlayerBasePB
         * @instance
         */
        PlayerBasePB.prototype.exp = 0;

        /**
         * Creates a new PlayerBasePB instance using the specified properties.
         * @function create
         * @memberof lht.PlayerBasePB
         * @static
         * @param {lht.IPlayerBasePB=} [properties] Properties to set
         * @returns {lht.PlayerBasePB} PlayerBasePB instance
         */
        PlayerBasePB.create = function create(properties) {
            return new PlayerBasePB(properties);
        };

        /**
         * Encodes the specified PlayerBasePB message. Does not implicitly {@link lht.PlayerBasePB.verify|verify} messages.
         * @function encode
         * @memberof lht.PlayerBasePB
         * @static
         * @param {lht.IPlayerBasePB} message PlayerBasePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBasePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.gold);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lv);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.exp);
            return writer;
        };

        /**
         * Encodes the specified PlayerBasePB message, length delimited. Does not implicitly {@link lht.PlayerBasePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.PlayerBasePB
         * @static
         * @param {lht.IPlayerBasePB} message PlayerBasePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBasePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerBasePB message from the specified reader or buffer.
         * @function decode
         * @memberof lht.PlayerBasePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.PlayerBasePB} PlayerBasePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBasePB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.PlayerBasePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.gold = reader.int64();
                    break;
                case 4:
                    message.lv = reader.int32();
                    break;
                case 5:
                    message.exp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("gold"))
                throw $util.ProtocolError("missing required 'gold'", { instance: message });
            if (!message.hasOwnProperty("lv"))
                throw $util.ProtocolError("missing required 'lv'", { instance: message });
            if (!message.hasOwnProperty("exp"))
                throw $util.ProtocolError("missing required 'exp'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerBasePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.PlayerBasePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.PlayerBasePB} PlayerBasePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBasePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerBasePB message.
         * @function verify
         * @memberof lht.PlayerBasePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerBasePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                return "gold: integer|Long expected";
            if (!$util.isInteger(message.lv))
                return "lv: integer expected";
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
            return null;
        };

        return PlayerBasePB;
    })();

    /**
     * EnumType enum.
     * @name lht.EnumType
     * @enum {string}
     * @property {number} LOGIN_REQ=1001 LOGIN_REQ value
     * @property {number} LOGIN_RESP=1002 LOGIN_RESP value
     * @property {number} CREATE_PLAYER_REQ=1003 CREATE_PLAYER_REQ value
     * @property {number} CREATE_PLAYER_RESP=1004 CREATE_PLAYER_RESP value
     * @property {number} HEARTBEAT_REQ=1005 HEARTBEAT_REQ value
     * @property {number} HEARTBEAT_RESP=1006 HEARTBEAT_RESP value
     * @property {number} PING_REQ=1007 PING_REQ value
     * @property {number} PING_RESP=1008 PING_RESP value
     * @property {number} CREATE_ACCOUNT_REQ=1009 CREATE_ACCOUNT_REQ value
     * @property {number} CREATE_ACCOUNT_RESP=1010 CREATE_ACCOUNT_RESP value
     */
    lht.EnumType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1001] = "LOGIN_REQ"] = 1001;
        values[valuesById[1002] = "LOGIN_RESP"] = 1002;
        values[valuesById[1003] = "CREATE_PLAYER_REQ"] = 1003;
        values[valuesById[1004] = "CREATE_PLAYER_RESP"] = 1004;
        values[valuesById[1005] = "HEARTBEAT_REQ"] = 1005;
        values[valuesById[1006] = "HEARTBEAT_RESP"] = 1006;
        values[valuesById[1007] = "PING_REQ"] = 1007;
        values[valuesById[1008] = "PING_RESP"] = 1008;
        values[valuesById[1009] = "CREATE_ACCOUNT_REQ"] = 1009;
        values[valuesById[1010] = "CREATE_ACCOUNT_RESP"] = 1010;
        return values;
    })();

    lht.LogInReq = (function() {

        /**
         * Properties of a LogInReq.
         * @memberof lht
         * @interface ILogInReq
         * @property {string} LogInKey LogInReq LogInKey
         */

        /**
         * Constructs a new LogInReq.
         * @memberof lht
         * @classdesc Represents a LogInReq.
         * @implements ILogInReq
         * @constructor
         * @param {lht.ILogInReq=} [properties] Properties to set
         */
        function LogInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogInReq LogInKey.
         * @member {string} LogInKey
         * @memberof lht.LogInReq
         * @instance
         */
        LogInReq.prototype.LogInKey = "";

        /**
         * Creates a new LogInReq instance using the specified properties.
         * @function create
         * @memberof lht.LogInReq
         * @static
         * @param {lht.ILogInReq=} [properties] Properties to set
         * @returns {lht.LogInReq} LogInReq instance
         */
        LogInReq.create = function create(properties) {
            return new LogInReq(properties);
        };

        /**
         * Encodes the specified LogInReq message. Does not implicitly {@link lht.LogInReq.verify|verify} messages.
         * @function encode
         * @memberof lht.LogInReq
         * @static
         * @param {lht.ILogInReq} message LogInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.LogInKey);
            return writer;
        };

        /**
         * Encodes the specified LogInReq message, length delimited. Does not implicitly {@link lht.LogInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.LogInReq
         * @static
         * @param {lht.ILogInReq} message LogInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogInReq message from the specified reader or buffer.
         * @function decode
         * @memberof lht.LogInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.LogInReq} LogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.LogInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LogInKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("LogInKey"))
                throw $util.ProtocolError("missing required 'LogInKey'", { instance: message });
            return message;
        };

        /**
         * Decodes a LogInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.LogInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.LogInReq} LogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogInReq message.
         * @function verify
         * @memberof lht.LogInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.LogInKey))
                return "LogInKey: string expected";
            return null;
        };

        return LogInReq;
    })();

    lht.HeartBeatReq = (function() {

        /**
         * Properties of a HeartBeatReq.
         * @memberof lht
         * @interface IHeartBeatReq
         * @property {number} result HeartBeatReq result
         */

        /**
         * Constructs a new HeartBeatReq.
         * @memberof lht
         * @classdesc Represents a HeartBeatReq.
         * @implements IHeartBeatReq
         * @constructor
         * @param {lht.IHeartBeatReq=} [properties] Properties to set
         */
        function HeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatReq result.
         * @member {number} result
         * @memberof lht.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.result = 0;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @function create
         * @memberof lht.HeartBeatReq
         * @static
         * @param {lht.IHeartBeatReq=} [properties] Properties to set
         * @returns {lht.HeartBeatReq} HeartBeatReq instance
         */
        HeartBeatReq.create = function create(properties) {
            return new HeartBeatReq(properties);
        };

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link lht.HeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof lht.HeartBeatReq
         * @static
         * @param {lht.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link lht.HeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.HeartBeatReq
         * @static
         * @param {lht.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof lht.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.HeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatReq message.
         * @function verify
         * @memberof lht.HeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            return null;
        };

        return HeartBeatReq;
    })();

    lht.PingReq = (function() {

        /**
         * Properties of a PingReq.
         * @memberof lht
         * @interface IPingReq
         * @property {number} result PingReq result
         */

        /**
         * Constructs a new PingReq.
         * @memberof lht
         * @classdesc Represents a PingReq.
         * @implements IPingReq
         * @constructor
         * @param {lht.IPingReq=} [properties] Properties to set
         */
        function PingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingReq result.
         * @member {number} result
         * @memberof lht.PingReq
         * @instance
         */
        PingReq.prototype.result = 0;

        /**
         * Creates a new PingReq instance using the specified properties.
         * @function create
         * @memberof lht.PingReq
         * @static
         * @param {lht.IPingReq=} [properties] Properties to set
         * @returns {lht.PingReq} PingReq instance
         */
        PingReq.create = function create(properties) {
            return new PingReq(properties);
        };

        /**
         * Encodes the specified PingReq message. Does not implicitly {@link lht.PingReq.verify|verify} messages.
         * @function encode
         * @memberof lht.PingReq
         * @static
         * @param {lht.IPingReq} message PingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified PingReq message, length delimited. Does not implicitly {@link lht.PingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.PingReq
         * @static
         * @param {lht.IPingReq} message PingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingReq message from the specified reader or buffer.
         * @function decode
         * @memberof lht.PingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.PingReq} PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.PingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a PingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.PingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.PingReq} PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingReq message.
         * @function verify
         * @memberof lht.PingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            return null;
        };

        return PingReq;
    })();

    lht.LogInResp = (function() {

        /**
         * Properties of a LogInResp.
         * @memberof lht
         * @interface ILogInResp
         * @property {number} result LogInResp result
         */

        /**
         * Constructs a new LogInResp.
         * @memberof lht
         * @classdesc Represents a LogInResp.
         * @implements ILogInResp
         * @constructor
         * @param {lht.ILogInResp=} [properties] Properties to set
         */
        function LogInResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogInResp result.
         * @member {number} result
         * @memberof lht.LogInResp
         * @instance
         */
        LogInResp.prototype.result = 0;

        /**
         * Creates a new LogInResp instance using the specified properties.
         * @function create
         * @memberof lht.LogInResp
         * @static
         * @param {lht.ILogInResp=} [properties] Properties to set
         * @returns {lht.LogInResp} LogInResp instance
         */
        LogInResp.create = function create(properties) {
            return new LogInResp(properties);
        };

        /**
         * Encodes the specified LogInResp message. Does not implicitly {@link lht.LogInResp.verify|verify} messages.
         * @function encode
         * @memberof lht.LogInResp
         * @static
         * @param {lht.ILogInResp} message LogInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogInResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified LogInResp message, length delimited. Does not implicitly {@link lht.LogInResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.LogInResp
         * @static
         * @param {lht.ILogInResp} message LogInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogInResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogInResp message from the specified reader or buffer.
         * @function decode
         * @memberof lht.LogInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.LogInResp} LogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogInResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.LogInResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a LogInResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.LogInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.LogInResp} LogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogInResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogInResp message.
         * @function verify
         * @memberof lht.LogInResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogInResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            return null;
        };

        return LogInResp;
    })();

    lht.HeartBeatRsep = (function() {

        /**
         * Properties of a HeartBeatRsep.
         * @memberof lht
         * @interface IHeartBeatRsep
         * @property {number} result HeartBeatRsep result
         */

        /**
         * Constructs a new HeartBeatRsep.
         * @memberof lht
         * @classdesc Represents a HeartBeatRsep.
         * @implements IHeartBeatRsep
         * @constructor
         * @param {lht.IHeartBeatRsep=} [properties] Properties to set
         */
        function HeartBeatRsep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatRsep result.
         * @member {number} result
         * @memberof lht.HeartBeatRsep
         * @instance
         */
        HeartBeatRsep.prototype.result = 0;

        /**
         * Creates a new HeartBeatRsep instance using the specified properties.
         * @function create
         * @memberof lht.HeartBeatRsep
         * @static
         * @param {lht.IHeartBeatRsep=} [properties] Properties to set
         * @returns {lht.HeartBeatRsep} HeartBeatRsep instance
         */
        HeartBeatRsep.create = function create(properties) {
            return new HeartBeatRsep(properties);
        };

        /**
         * Encodes the specified HeartBeatRsep message. Does not implicitly {@link lht.HeartBeatRsep.verify|verify} messages.
         * @function encode
         * @memberof lht.HeartBeatRsep
         * @static
         * @param {lht.IHeartBeatRsep} message HeartBeatRsep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatRsep message, length delimited. Does not implicitly {@link lht.HeartBeatRsep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.HeartBeatRsep
         * @static
         * @param {lht.IHeartBeatRsep} message HeartBeatRsep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatRsep message from the specified reader or buffer.
         * @function decode
         * @memberof lht.HeartBeatRsep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.HeartBeatRsep} HeartBeatRsep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.HeartBeatRsep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartBeatRsep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.HeartBeatRsep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.HeartBeatRsep} HeartBeatRsep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatRsep message.
         * @function verify
         * @memberof lht.HeartBeatRsep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatRsep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            return null;
        };

        return HeartBeatRsep;
    })();

    lht.PingResp = (function() {

        /**
         * Properties of a PingResp.
         * @memberof lht
         * @interface IPingResp
         * @property {number} result PingResp result
         */

        /**
         * Constructs a new PingResp.
         * @memberof lht
         * @classdesc Represents a PingResp.
         * @implements IPingResp
         * @constructor
         * @param {lht.IPingResp=} [properties] Properties to set
         */
        function PingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResp result.
         * @member {number} result
         * @memberof lht.PingResp
         * @instance
         */
        PingResp.prototype.result = 0;

        /**
         * Creates a new PingResp instance using the specified properties.
         * @function create
         * @memberof lht.PingResp
         * @static
         * @param {lht.IPingResp=} [properties] Properties to set
         * @returns {lht.PingResp} PingResp instance
         */
        PingResp.create = function create(properties) {
            return new PingResp(properties);
        };

        /**
         * Encodes the specified PingResp message. Does not implicitly {@link lht.PingResp.verify|verify} messages.
         * @function encode
         * @memberof lht.PingResp
         * @static
         * @param {lht.IPingResp} message PingResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified PingResp message, length delimited. Does not implicitly {@link lht.PingResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lht.PingResp
         * @static
         * @param {lht.IPingResp} message PingResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResp message from the specified reader or buffer.
         * @function decode
         * @memberof lht.PingResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lht.PingResp} PingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lht.PingResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a PingResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lht.PingResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lht.PingResp} PingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResp message.
         * @function verify
         * @memberof lht.PingResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            return null;
        };

        return PingResp;
    })();

    return lht;
})();
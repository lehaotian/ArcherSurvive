type Long = protobuf.Long;

/** Namespace lht. */
declare namespace lht {

    /** Properties of a PlayerPB. */
    interface IPlayerPB {

        /** PlayerPB playerBasePB */
        playerBasePB: lht.IPlayerBasePB;
    }

    /** Represents a PlayerPB. */
    class PlayerPB implements IPlayerPB {

        /**
         * Constructs a new PlayerPB.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.IPlayerPB);

        /** PlayerPB playerBasePB. */
        public playerBasePB: lht.IPlayerBasePB;

        /**
         * Creates a new PlayerPB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerPB instance
         */
        public static create(properties?: lht.IPlayerPB): lht.PlayerPB;

        /**
         * Encodes the specified PlayerPB message. Does not implicitly {@link lht.PlayerPB.verify|verify} messages.
         * @param message PlayerPB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.IPlayerPB, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerPB message, length delimited. Does not implicitly {@link lht.PlayerPB.verify|verify} messages.
         * @param message PlayerPB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.IPlayerPB, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerPB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.PlayerPB;

        /**
         * Decodes a PlayerPB message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.PlayerPB;

        /**
         * Verifies a PlayerPB message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerBasePB. */
    interface IPlayerBasePB {

        /** PlayerBasePB playerId */
        playerId: (number|Long);

        /** PlayerBasePB name */
        name: string;

        /** PlayerBasePB gold */
        gold: (number|Long);

        /** PlayerBasePB lv */
        lv: number;

        /** PlayerBasePB exp */
        exp: number;
    }

    /** Represents a PlayerBasePB. */
    class PlayerBasePB implements IPlayerBasePB {

        /**
         * Constructs a new PlayerBasePB.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.IPlayerBasePB);

        /** PlayerBasePB playerId. */
        public playerId: (number|Long);

        /** PlayerBasePB name. */
        public name: string;

        /** PlayerBasePB gold. */
        public gold: (number|Long);

        /** PlayerBasePB lv. */
        public lv: number;

        /** PlayerBasePB exp. */
        public exp: number;

        /**
         * Creates a new PlayerBasePB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerBasePB instance
         */
        public static create(properties?: lht.IPlayerBasePB): lht.PlayerBasePB;

        /**
         * Encodes the specified PlayerBasePB message. Does not implicitly {@link lht.PlayerBasePB.verify|verify} messages.
         * @param message PlayerBasePB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.IPlayerBasePB, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerBasePB message, length delimited. Does not implicitly {@link lht.PlayerBasePB.verify|verify} messages.
         * @param message PlayerBasePB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.IPlayerBasePB, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerBasePB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerBasePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.PlayerBasePB;

        /**
         * Decodes a PlayerBasePB message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerBasePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.PlayerBasePB;

        /**
         * Verifies a PlayerBasePB message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** EnumType enum. */
    enum EnumType {
        LOGIN_REQ = 1001,
        LOGIN_RESP = 1002,
        CREATE_PLAYER_REQ = 1003,
        CREATE_PLAYER_RESP = 1004,
        HEARTBEAT_REQ = 1005,
        HEARTBEAT_RESP = 1006,
        PING_REQ = 1007,
        PING_RESP = 1008,
        CREATE_ACCOUNT_REQ = 1009,
        CREATE_ACCOUNT_RESP = 1010
    }

    /** Properties of a LogInReq. */
    interface ILogInReq {

        /** LogInReq LogInKey */
        LogInKey: string;
    }

    /** Represents a LogInReq. */
    class LogInReq implements ILogInReq {

        /**
         * Constructs a new LogInReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.ILogInReq);

        /** LogInReq LogInKey. */
        public LogInKey: string;

        /**
         * Creates a new LogInReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogInReq instance
         */
        public static create(properties?: lht.ILogInReq): lht.LogInReq;

        /**
         * Encodes the specified LogInReq message. Does not implicitly {@link lht.LogInReq.verify|verify} messages.
         * @param message LogInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.ILogInReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LogInReq message, length delimited. Does not implicitly {@link lht.LogInReq.verify|verify} messages.
         * @param message LogInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.ILogInReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LogInReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.LogInReq;

        /**
         * Decodes a LogInReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.LogInReq;

        /**
         * Verifies a LogInReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq result */
        result: number;
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.IHeartBeatReq);

        /** HeartBeatReq result. */
        public result: number;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: lht.IHeartBeatReq): lht.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link lht.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link lht.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PingReq. */
    interface IPingReq {

        /** PingReq result */
        result: number;
    }

    /** Represents a PingReq. */
    class PingReq implements IPingReq {

        /**
         * Constructs a new PingReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.IPingReq);

        /** PingReq result. */
        public result: number;

        /**
         * Creates a new PingReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingReq instance
         */
        public static create(properties?: lht.IPingReq): lht.PingReq;

        /**
         * Encodes the specified PingReq message. Does not implicitly {@link lht.PingReq.verify|verify} messages.
         * @param message PingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.IPingReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PingReq message, length delimited. Does not implicitly {@link lht.PingReq.verify|verify} messages.
         * @param message PingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.IPingReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PingReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.PingReq;

        /**
         * Decodes a PingReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.PingReq;

        /**
         * Verifies a PingReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LogInResp. */
    interface ILogInResp {

        /** LogInResp result */
        result: number;
    }

    /** Represents a LogInResp. */
    class LogInResp implements ILogInResp {

        /**
         * Constructs a new LogInResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.ILogInResp);

        /** LogInResp result. */
        public result: number;

        /**
         * Creates a new LogInResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogInResp instance
         */
        public static create(properties?: lht.ILogInResp): lht.LogInResp;

        /**
         * Encodes the specified LogInResp message. Does not implicitly {@link lht.LogInResp.verify|verify} messages.
         * @param message LogInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.ILogInResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LogInResp message, length delimited. Does not implicitly {@link lht.LogInResp.verify|verify} messages.
         * @param message LogInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.ILogInResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LogInResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.LogInResp;

        /**
         * Decodes a LogInResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.LogInResp;

        /**
         * Verifies a LogInResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeartBeatRsep. */
    interface IHeartBeatRsep {

        /** HeartBeatRsep result */
        result: number;
    }

    /** Represents a HeartBeatRsep. */
    class HeartBeatRsep implements IHeartBeatRsep {

        /**
         * Constructs a new HeartBeatRsep.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.IHeartBeatRsep);

        /** HeartBeatRsep result. */
        public result: number;

        /**
         * Creates a new HeartBeatRsep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatRsep instance
         */
        public static create(properties?: lht.IHeartBeatRsep): lht.HeartBeatRsep;

        /**
         * Encodes the specified HeartBeatRsep message. Does not implicitly {@link lht.HeartBeatRsep.verify|verify} messages.
         * @param message HeartBeatRsep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.IHeartBeatRsep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatRsep message, length delimited. Does not implicitly {@link lht.HeartBeatRsep.verify|verify} messages.
         * @param message HeartBeatRsep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.IHeartBeatRsep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatRsep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatRsep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.HeartBeatRsep;

        /**
         * Decodes a HeartBeatRsep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatRsep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.HeartBeatRsep;

        /**
         * Verifies a HeartBeatRsep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PingResp. */
    interface IPingResp {

        /** PingResp result */
        result: number;
    }

    /** Represents a PingResp. */
    class PingResp implements IPingResp {

        /**
         * Constructs a new PingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: lht.IPingResp);

        /** PingResp result. */
        public result: number;

        /**
         * Creates a new PingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResp instance
         */
        public static create(properties?: lht.IPingResp): lht.PingResp;

        /**
         * Encodes the specified PingResp message. Does not implicitly {@link lht.PingResp.verify|verify} messages.
         * @param message PingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lht.IPingResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PingResp message, length delimited. Does not implicitly {@link lht.PingResp.verify|verify} messages.
         * @param message PingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lht.IPingResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lht.PingResp;

        /**
         * Decodes a PingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lht.PingResp;

        /**
         * Verifies a PingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

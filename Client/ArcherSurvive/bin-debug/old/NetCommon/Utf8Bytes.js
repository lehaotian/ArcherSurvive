var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* 字节流转换
*/
var Utf8Bytes = (function () {
    function Utf8Bytes() {
        this.EofByte = -1;
        this.EofCodePoint = -1;
    }
    Utf8Bytes.EnCode = function (str) { return new Utf8Bytes().EnCode(str); };
    Utf8Bytes.DeCode = function (data) { return new Utf8Bytes().uint8ArrayToString(data); };
    Utf8Bytes.prototype.EncoderError = function (CodePoint) {
        console.error("UTF8 encodeError", CodePoint);
    };
    Utf8Bytes.prototype.DeCodeError = function (Fatal, OptCodePoint) {
        if (Fatal)
            console.error("UTF8 encodeError", OptCodePoint);
        return OptCodePoint || 0XFFFD;
    };
    Utf8Bytes.prototype.IsRange = function (a, min, max) { return min <= a && a <= max; };
    Utf8Bytes.prototype.Div = function (n, d) { return Math.floor(n / d); };
    Utf8Bytes.prototype.StringToCodePoints = function (string) {
        var cps = [];
        var i = 0, n = string.length;
        while (i < string.length) {
            var c = string.charCodeAt(i);
            if (!this.IsRange(c, 0xD800, 0xDFFF)) {
                cps.push(c);
            }
            else if (this.IsRange(c, 0xDc00, 0xDFFF)) {
                cps.push(0xFFFD);
            }
            else {
                if (i == n - 1) {
                    cps.push(0xFFFD);
                }
                else {
                    var d = string.charCodeAt(i + 1);
                    if (this.IsRange(d, 0xDC00, 0xDFFF)) {
                        var a = c & 0x3FF;
                        var b = d & 0x3FF;
                        i += 1;
                        cps.push(0x10000 + (a << 10) + b);
                    }
                    else {
                        cps.push(0xFFFD);
                    }
                }
            }
            i += 1;
        }
        return cps;
    };
    Utf8Bytes.prototype.uint8ArrayToString = function (fileData) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = fileData.length;
        i = 0;
        while (i < len) {
            c = fileData[i++];
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    out += String.fromCharCode(c);
                    break;
                case 12:
                case 13:
                    char2 = fileData[i++];
                    out += String.fromCharCode(((c & 0x1F) << 6 | (char2 & 0x3F)));
                    break;
                case 14:
                    char2 = fileData[i++];
                    char3 = fileData[i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    };
    Utf8Bytes.prototype.EnCode = function (str) {
        var pos = 0;
        var CodePoint = this.StringToCodePoints(str);
        var OutPutBytes = [];
        while (CodePoint.length > pos) {
            var code = CodePoint[pos++];
            if (this.IsRange(code, 0xD800, 0xDFFF)) {
                this.EncoderError(code);
            }
            else if (this.IsRange(code, 0x0000, 0x007f)) {
                OutPutBytes.push(code);
            }
            else {
                var count = 0, offset = 0;
                if (this.IsRange(code, 0x0080, 0x07FF)) {
                    count = 1;
                    offset = 0xC0;
                }
                else if (this.IsRange(code, 0x0800, 0xFFFF)) {
                    count = 2;
                    offset = 0xE0;
                }
                else if (this.IsRange(code, 0x10000, 0x10FFFF)) {
                    count = 3;
                    offset = 0xF0;
                }
                OutPutBytes.push(this.Div(code, Math.pow(64, count)) + offset);
                while (count > 0) {
                    var temp = this.Div(code, Math.pow(64, count - 1));
                    OutPutBytes.push(0x80 + (temp % 64));
                    count -= 1;
                }
            }
        }
        return new Uint8Array(OutPutBytes);
    };
    Utf8Bytes.prototype.DeCode = function (data) {
        var Fatal = false;
        var Pos = 0;
        var Result = "";
        var CodePoint;
        var Utf8CodePoint = 0;
        var Utf8BytesNeeded = 0;
        var Utf8BytesSeen = 0;
        var Utf8LowerBounDary = 0;
        while (data.length > Pos) {
            var temp_type = data[Pos++];
            if (temp_type == this.EofByte) {
                if (Utf8BytesNeeded != 0) {
                    CodePoint = this.DeCodeError(Fatal);
                }
                else {
                    CodePoint = this.EofCodePoint;
                }
            }
            else {
                if (Utf8BytesNeeded == 0) {
                    if (this.IsRange(temp_type, 0x00, 0x7F)) {
                        CodePoint = temp_type;
                    }
                    else {
                        if (this.IsRange(temp_type, 0xC2, 0xDF)) {
                            Utf8BytesNeeded = 1;
                            Utf8LowerBounDary = 0x80;
                            Utf8CodePoint = temp_type - 0xC0;
                        }
                        else if (this.IsRange(temp_type, 0xE0, 0xEF)) {
                            Utf8BytesNeeded = 2;
                            Utf8LowerBounDary = 0x800;
                            Utf8CodePoint = temp_type - 0xE0;
                        }
                        else if (this.IsRange(temp_type, 0xF0, 0xF4)) {
                            Utf8BytesNeeded = 3;
                            Utf8LowerBounDary = 0x10000;
                            Utf8CodePoint = temp_type - 0xF0;
                        }
                        else {
                            this.DeCodeError(Fatal);
                        }
                        Utf8CodePoint = Utf8CodePoint * Math.pow(64, Utf8BytesNeeded);
                        CodePoint = null;
                    }
                }
                else if (this.IsRange(temp_type, 0x80, 0xBF)) {
                    Utf8CodePoint = 0;
                    Utf8BytesNeeded = 0;
                    Utf8BytesSeen = 0;
                    Utf8LowerBounDary = 0;
                    Pos--;
                    CodePoint = this.DeCodeError(Fatal);
                }
                else {
                    Utf8BytesSeen += 1;
                    Utf8CodePoint = Utf8CodePoint + (temp_type - 0x80) * Math.pow(64, Utf8BytesNeeded - Utf8BytesSeen);
                    if (Utf8BytesSeen !== Utf8BytesNeeded) {
                        CodePoint = null;
                    }
                    else {
                        var cp = Utf8CodePoint;
                        var LowerBounDary = Utf8LowerBounDary;
                        Utf8CodePoint = 0;
                        Utf8BytesNeeded = 0;
                        Utf8BytesSeen = 0;
                        Utf8LowerBounDary = 0;
                        if (this.IsRange(cp, LowerBounDary, 0x10FFFF) && !this.IsRange(cp, 0x800, 0xDFFF)) {
                            CodePoint = cp;
                        }
                        else {
                            CodePoint = this.DeCodeError(Fatal, temp_type);
                        }
                    }
                }
            }
            if (CodePoint != null && CodePoint !== this.EofCodePoint) {
                if (CodePoint <= 0xFFFF) {
                    if (CodePoint > 0) {
                        Result += String.fromCharCode(CodePoint);
                    }
                }
                else {
                    CodePoint -= 0x10000;
                    Result += String.fromCharCode(0xD800 + ((CodePoint >> 10) & 0x3ff));
                    Result += String.fromCharCode(0xDC00 + (CodePoint & 0x3ff));
                }
            }
        }
        return Result;
    };
    return Utf8Bytes;
}());
__reflect(Utf8Bytes.prototype, "Utf8Bytes");
//# sourceMappingURL=Utf8Bytes.js.map
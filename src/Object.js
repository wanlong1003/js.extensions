/*
  对Object进行扩展
*/
(function (Object) {
    Object.defineProperties(Object.prototype, {
        IsFunction: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "function";
            }
        },
        IsArray: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "object" && this instanceof Array;
            }
        },
        IsNumber: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return (typeof this === "number" || this instanceof Number) && !isNaN(this);
            }
        },
        IsString: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "string" || this instanceof String;
            }
        },
        IsBoolean: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "boolean";
            }
        },
        IsObject: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "object" && this.IsArray() === false;
            }
        },
        Clone: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                if (this.IsString() || this.IsNumber() || this.IsBoolean()) {
                    return obj.constructor(obj);
                }
                if (this.IsArray()) {
                    return this.Clone();
                }
                var props = Object.getOwnPropertyNames(this);
                if (props && props.length === 0) {
                    return new Object(this);
                }
                var obj = {};
                for (var i = 0; i < props.length; i++) {
                    var prop = props[i];
                    var value = this[prop];
                    if (value.IsObject()) {
                        value.Clone();
                    }
                    obj[prop] = value;
                }
                return obj;
            }
        },
        ToString: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return JSON.stringify(this);
            }
        },
        Extend: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (o) {
                var names = Object.getOwnPropertyNames(o);
                for (var i = 0; i < names.length; i++) {
                    if (names[i] in this) {
                        continue;
                    }
                    var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                    Object.defineProperty(this, names[i], desc);
                }
            }
        }
    });
})(window.Object);
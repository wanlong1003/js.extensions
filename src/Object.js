(function (Object) {
    Object.defineProperties(Object.prototype, {
        //是否为函数
        IsFunction: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "function";
            }
        },
        //是否为数组
        IsArray: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "object" && this instanceof Array;
            }
        },
        //是否为数字
        IsNumber: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return (typeof this === "number" || this instanceof Number) && !isNaN(this);
            }
        },
        //是否为字符串
        IsString: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "string" || this instanceof String;
            }
        },
        //是否为布尔类型
        IsBoolean: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "boolean";
            }
        },
        //是否为object
        IsObject: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return typeof this === "object" && this.IsArray() === false;
            }
        },
        //返回对象副本
        Clone: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                if (this.IsString() || this.IsNumber() || this.IsBoolean()) {
                    return this.constructor(this);
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
        //转化为json字符串
        ToJson: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return JSON.stringify(this);
            }
        },
        //合并对象
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
                return this;
            }
        }
    });
})(window.Object);
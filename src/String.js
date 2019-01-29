(function (String) {
    Object.defineProperties(String.prototype, {
        //是否为空
        IsNullOrEmpty: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return this === null || this.length === 0;
            }
        },
        //是否为空或空字符串
        IsNullOrWhitespace: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return this === null || this.replace(/\s/g, '').length === 0;
            }
        },
        //是否为Email
        IsEmail: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)$/i.test(this);
            }
        },
        //是否为Url字符串
        IsURL: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return /^(?:\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])$/i.test(this);
            }
        },
        //Json字符串转化为js对象
        ToObject: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return JSON.parse(this);
            }
        }
    });
})(window.String);

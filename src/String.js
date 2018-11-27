(function (String) {
    Object.defineProperties(String.prototype, {
        IsNullOrEmpty: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return this === null || this.length === 0;
            }
        },
        IsNullOrWhitespace: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return this === null || this.replace(/\s/g, '').length === 0;
            }
        },
        IsEmail: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)$/i.test(this);
            }
        },
        IsURL: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                return /^(?:\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])$/i.test(this);
            }
        },
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

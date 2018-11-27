(function (Date) {
    Object.defineProperties(Date.prototype, {
        ToString: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (fmt) {
                if (!fmt) {
                    fmt = "yyyy-MM-dd HH:mm:ss.fff";
                }
                var o = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "H+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "f+": this.getMilliseconds()
                };

                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(String(o[k]).length)));
                    }
                }
                return fmt;
            }
        },
        AddYears: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                var year = this.getFullYear();
                year = year + value;
                this.setFullYear(year);
                return this;
            }
        },
        AddMonths: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                value = Math.floor(value);
                var year = this.getFullYear();
                var month = this.getMonth();

                year = year + value / 12;
                month = (value % 12) + month;
                if (month > 12) {
                    year = year + 1;
                    month = month % 12;
                }
                this.setFullYear(year);
                this.setMonth(month);
                return this;
            }
        },
        AddDays: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                var millisec = this.getTime();
                millisec = millisec + (value * 86400000);
                this.setTime(millisec);
                return this;
            }
        },
        AddHours: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                var millisec = this.getTime();
                millisec = millisec + (value * 3600000);
                this.setTime(millisec);
                return this;
            }
        },
        AddMinutes: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                var millisec = this.getTime();
                millisec = millisec + (value * 60000);
                this.setTime(millisec);
                return this;
            }
        },
        AddSeconds: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                var millisec = this.getTime();
                millisec = millisec + (value * 1000);
                this.setTime(millisec);
                return this;
            }
        },
        AddMilliseconds: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (value) {
                var millisec = this.getTime();
                millisec = millisec + value;
                this.setTime(millisec);
                return this;
            }
        }
    });
})(window.Date);

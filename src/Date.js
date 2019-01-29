(function (Date) {
    Object.defineProperties(Date.prototype, {
        //转化为指定格式的字符串
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
        //年份数加上指定值
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
        //月份数加上指定值
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
        //日期加上指定天数
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
        //小时数加上指定值
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
        //分钟数加上指定值
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
        //秒数加上指定值
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
        //毫秒数加上指定值
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

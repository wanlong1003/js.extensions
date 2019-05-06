(function (Array) {
    Object.defineProperties(Array.prototype, {
        //数组中所有元素是否都满足条件
        // Array.prototype.every()
        All: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                for (var i = 0; i < this.length; i++) {
                    if (!clause.apply(this[i], [this[i]])) {
                        return false;
                    }
                }
                return true;
            }
        },
        //数组中是否有满足条件的项
        // Array.prototype.some()
        Any: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                for (var i = 0; i < this.length; i++) {
                    if (clause.apply(this[i], [this[i]])) {
                        return true;
                    }
                }
                return false;
            }
        },
        //创建一个数组副本
        // Array.prototype.concat()
        Clone: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function () {
                var arr = [];
                for (var i = 0; i < this.length; i++) {
                    arr.push(this[i].Clone());
                }
                return arr;
            }
        },
        //删除数组中匹配的元素
        Remove: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                for (var i = 0; i < this.length; i++) {
                    if (clause.apply(this[i], [this[i]])) {
                        this.splice(i, 1);
                        i--;
                    }
                }
                return this;
            }
        },
        //返回数组中的第一个匹配元素
        First: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                if (this.length <= 0) {
                    return null;
                }
                if (!clause) {
                    return this[0];
                }
                for (var i = 0; i < this.length; i++) {
                    if (clause.apply(this[i], [this[i]])) {
                        return this[i];
                    }
                }
                return null;
            }
        },
        //返回数组中的最后一个匹配元素
        Last: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                if (this.length <= 0) {
                    return null;
                }
                if (!clause) {
                    return this[this.length - 1];
                }
                for (var i = this.length - 1; i >= 0; i--) {
                    if (clause.apply(this[i], [this[i]])) {
                        return this[i];
                    }
                }
                return null;
            }
        },
        //返回所有符合条件的元素
        // Array.prototype.filter()
        Where: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                var arr = [];
                for (var i = 0; i < this.length; i++) {
                    if (clause.apply(this[i], [this[i], i])) {
                        arr[arr.length] = this[i];
                    }
                }
                return arr;
            }
        },
        //对数组进行升序排序
        //Array.prototype.sort()
        OrderBy: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                this.sort(function (a, b) {
                    var x = clause.apply(a, [a]);
                    var y = clause.apply(b, [b]);
                    return x < y ? -1 : (x > y ? 1 : 0);
                });
                return this;
            }
        },
        //对数组进行降序排序
        //Array.prototype.sort()
        OrderByDescending: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                this.sort(function (a, b) {
                    var x = clause.apply(a, [a]);
                    var y = clause.apply(b, [b]);
                    return x > y ? -1 : (x < y ? 1 : 0);
                });
                return this;
            }
        },
        //将数组中的每个元素投影到数组中
        // Array.prototype.map()
        Select: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                var arr = [];
                for (var i = 0; i < this.length; i++) {
                    item = clause.apply(this[i], [this[i]]);
                    arr[arr.length] = item;
                }
                return arr;
            }
        },
        //跳过数组中指定数量的元素，然后返回剩余的元素
        Skip: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (count) {
                var arr = [];
                for (var i = count; i < this.length; i++) {
                    arr.push(this[i]);
                }
                return arr;
            }
        },
        //从数组的开头返回指定数量的元素
        Take: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (count) {
                var arr = [];
                for (var i = 0; i < count; i++) {
                    arr.push(this[i]);
                }
                return arr;
            }
        },
        //返回数组中的最大值
        Max: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                if (this.length <= 0) {
                    return null;
                }
                if (!clause) {
                    clause = function (item) {
                        return item;
                    };
                }
                var max = clause.apply(this[0], [this[0]]);
                for (i = 0; i < this.length; i++) {
                    var value = clause.apply(this[i], [this[i]]);
                    if (value && max < value) {
                        max = value;
                    }
                }
                return max;
            }
        },
        //返回数组中的最小值
        Min: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                if (this.length <= 0) {
                    return null;
                }
                if (!clause) {
                    clause = function (item) {
                        return item;
                    };
                }
                var min = clause.apply(this[0], [this[0]]);
                for (i = 0; i < this.length; i++) {
                    var value = clause.apply(this[i], [this[i]]);
                    if (value && min > value) {
                        min = value;
                    }
                }
                return min;
            }
        },
        //返回指定属性的总和
        Sum: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                var sum = 0;
                for (var i = 0; i < this.length; i++) {
                    var value = clause.apply(this[i], [this[i], i]);
                    if (value) {
                        if (!value.IsNumber()) {
                            value = new Number(value);
                            if (isNaN(value)) {
                                value = 0;
                            }
                        }
                        sum += value;
                    }
                }
                return sum;
            }
        },
        //返回指定属性的平均值
        Average:{
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                var sum = 0;
                for (var i = 0; i < this.length; i++) {
                    var value = clause.apply(this[i], [this[i], i]);
                    if (value) {
                        if (!value.IsNumber()) {
                            value = new Number(value);
                            if (isNaN(value)) {
                                value = 0;
                            }
                        }
                        sum += value;
                    }
                }
                return sum/this.length;
            }
        }
    });
})(window.Array);




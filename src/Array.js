(function (Array) {
    Object.defineProperties(Array.prototype, {
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
        Contains: {
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
        Delete: {
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
                for (var i = this.length - 1; i >= 0; i++) {
                    if (clause.apply(this[i], [this[i]])) {
                        return this[i];
                    }
                }
                return null;
            }
        },
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
        Select: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                var arr = [];
                for (var i = 0; i < this.length; i++) {
                    item = clause.apply(this[i], [this[i]]);
                    if (item) {
                        arr[arr.length] = item;
                    }
                }
                return arr;
            }
        },
        Single: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: function (clause) {
                for (var i = 0; i < this.length; i++) {
                    if (clause.apply(this[i], [this[i], i])) {
                        return this[i];
                    }
                }
                return null;
            }
        },
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
        }
    });
})(window.Array);




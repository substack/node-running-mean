var exports = module.exports = function () {
    var res = {
        length : 0,
        mean : undefined,
        inspect : function () {
            return '<Mean[' + res.length + '] ' + res.mean + '>';
        },
        push : function (x) {
            var i = ++ res.length;
            var m = res.mean || 0;
            res.mean = m - m / i + x / i;
            return res.mean;
        }
    };
    return res;
};

exports.fromList = function (xs) {
    return xs.length === 0
        ? undefined
        : xs.reduce(function (mean, x, i) {
            return mean - mean / (i + 1) + x / (i + 1);
        })
    ;
};

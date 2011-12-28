var exports = module.exports = function () {
    var res = {
        length : 0,
        mean : 0,
        inspect : function () {
            return '<Mean[' + res.length + '] ' + res.mean + '>';
        },
        push : function (x) {
            var i = ++ res.length;
            res.mean = res.mean - res.mean / i + x / i;
            return res.mean;
        }
    };
    return res;
};

exports.fromList = function (xs) {
    return xs.reduce(function (mean, x, i) {
        return mean - mean / (i + 1) + x / (i + 1);
    });
};

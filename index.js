module.exports = function (xs) {
    if (Array.isArray(xs)) {
        return xs.reduce(function (mean, x, i) {
            return mean - mean / (i + 1) + x / (i + 1);
        });
    }
    else {
        var res = {
            length : 0,
            mean : 0,
            push : function (x) {
                var i = ++ res.length;
                res.mean = res.mean - res.mean / i + x / i;
                return res.mean;
            }
        };
        return res;
    }
};

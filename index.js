var Transform = require('stream').Transform
    || require('readable-stream').Transform;

module.exports = Mean;

function Mean () {
    if (!(this instanceof Mean)) return new Mean();
    this.length = 0;
    this.mean = undefined;
}

Mean.prototype.inspect = function () {
    return '<Mean[' + this.length + '] ' + this.mean + '>';
};

Mean.prototype.push = function (x) {
    var i = ++ this.length;
    var m = this.mean || 0;
    this.mean = m - m / i + x / i;
    return this.mean;
};

Mean.prototype.createStream = function () {
    var self = this;
    var tr = Transform({ objectMode : true });
    tr._transform = function (chunk, _, done) {
        tr.push(self.push(chunk));
        done();
    };
    return tr;
};

Mean.fromList = function (xs) {
    return xs.length === 0
        ? undefined
        : xs.reduce(function (mean, x, i) {
            return mean - mean / (i + 1) + x / (i + 1);
        })
    ;
};

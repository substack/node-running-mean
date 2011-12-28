var test = require('tap').test;
var mean = require('../');

test('rounding in list', function (t) {
    var xs = [];
    for (var i = 0; i < 1e6; i++) xs.push(1e28)
    t.equal(mean.fromList(xs), 1e28);
    t.end();
});

test('rounding in push', function (t) {
    var xs = [];
    var m = mean();
    for (var i = 0; i < 1e6; i++) m.push(1e28)
    t.equal(m.mean, 1e28);
    t.end();
});

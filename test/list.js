var test = require('tap').test;
var mean = require('../');

test('mean from a list', function (t) {
    t.equal(mean.fromList([ 2 ]), 2);
    t.equal(mean.fromList([ 8, 9 ]), 8.5);
    t.equal(mean.fromList([ 3, -2, 4, 5 ]), 2.5);
    t.equal(mean.fromList([]), undefined);
    t.end();
});

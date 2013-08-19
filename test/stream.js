var test = require('tap').test;
var mean = require('../');

test('streaming mean', function (t) {
    t.plan(1);

    var s = mean().createStream();
    var res = [];

    s.on('data', function (d) { res.push(d) });
    s.on('end', function () {
      t.deepEqual(res, [7, 7.5, 8]);
    });

    s.write(7);
    s.write(8);
    s.write(9);
    s.end();
});

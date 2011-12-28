var test = require('tap').test;
var mean = require('../');

test('push the mean around', function (t) {
    var m = mean();
    t.equal(m.mean, undefined);
    t.equal(m.length, 0);
    
    m.push(7);
    t.equal(m.mean, 7);
    t.equal(m.length, 1);
    
    m.push(8);
    t.equal(m.mean, 7.5);
    t.equal(m.length, 2);
    
    m.push(9);
    t.equal(m.mean, 8);
    t.equal(m.length, 3);
    
    t.end();
});

var mean = require('..');
var r = mean();
[ 8, 4, 2, 3, 9, 5, 4, 8 ].forEach(function (n) {
    r.push(n);
    console.log(r.mean);
});

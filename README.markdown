running-mean
============

Compute the mean incrementally in constant space.

examples
========

from a list
-----------

list.js:

``` js
var mean = require('running-mean');
var avg = mean.fromList([ 3, 4, 8 ]);
console.log(avg);
```

output:

```
5
```

incremental update
------------------

run.js:

``` js
var mean = require('running-mean');
var r = mean();
[ 8, 4, 2, 3, 9, 5, 4, 8 ].forEach(function (n) {
    r.push(n);
    console.log(r.mean);
});
```

output:

```
8
6
4.666666666666667
4.25
5.2
5.166666666666667
5
5.375
```

conserving bits
---------------

```
> var r = require('running-mean')()
> for (var i = 0; i < 1e6; i++) r.push(12345678 + 1/3)
> r.mean
12345678.333333334
```

versus

```
> for (var i = 0, sum = 0; i < 1e6; i++) sum += 12345678 + 1/3
> sum / 1e6
12345678.333427748
```

methods
=======

var mean = require('running-mean')

var r = mean()
--------------

Create a new running mean.

r.push(n)
---------

Push a new number onto the running mean.

r.mean
------

Current value of the running mean

r.length
---------

Number of values pushed onto the running mean

mean.fromList(xs)
-----------------

Return the mean computed incrementally from a list `xs`.

install
=======

With [npm](http://npmjs.org) do:

    npm install running-mean

license
=======

MIT/X11

"use strict";
function foo() {
    console.log('foo()');
    return new Promise(function (resolve, reject) {
        console.log('in foo promise callback');
        setTimeout(function () {
            console.log('resolving foo promise');
            resolve();
            console.log('resolved foo promise');
        }, 0);
        console.log('end of foo promise callback');
    });
}
console.log('Calling foo()');
var p = foo();
console.log('Done foo()');
console.log(p);
console.log('setting timeout to then promise');
setTimeout(function () {
    console.log('Then-ing promise');
    p.then(function () {
        console.log('Promise complete');
    });
}, 10);

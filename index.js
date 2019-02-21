"use strict";
function foo() {
    console.log('foo()');
    return new Promise(function (resolve, reject) {
        console.log('foo() promise');
        resolve();
    });
}
console.log('Calling foo()');
var p = foo();
console.log('Done foo()');
console.log(p);
console.log('Then-ing promise');
p.then(function () {
    console.log('Promise complete');
});

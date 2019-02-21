Tests basic call order of a function that returns a promise.

Output is
```
Calling foo()
foo()
foo() promise
Done foo()
Promise { undefined }
Then-ing promise
Promise complete
```

Expected output is
```
Calling foo()
foo()
Done foo()
Promise { <pending> }
Then-ing promise
foo() promise
Promise complete
```

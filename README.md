Tests basic call order of a function that returns a promise.

Output is
```
Calling foo()
foo()
in foo promise callback
end of foo promise callback
Done foo()
Promise { <pending> }
setting timeout to then promise
resolving foo promise
resolved foo promise
Then-ing promise
Promise complete
```

Expected output is
<!-- FIXME -->
```
Calling foo()
foo()
Done foo()
Promise { <pending> }
Then-ing promise
foo() promise
Promise complete
```

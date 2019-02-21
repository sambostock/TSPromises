function foo(): Promise<void> {
	console.log('foo()');

	return new Promise<void>((resolve: () => void, reject: () => void) => {
		console.log('foo() promise');
		resolve();
	});
}

console.log('Calling foo()');
const p = foo();
console.log('Done foo()');

console.log(p);

console.log('Then-ing promise')
p.then(() => {
	console.log('Promise complete');
});

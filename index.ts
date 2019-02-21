function foo(): Promise<void> {
	console.log('foo()');

	return new Promise<void>((resolve: () => void, reject: () => void) => {
		console.log('in foo promise callback');
		setTimeout(
			() => {
				 console.log('resolving foo promise');
				 resolve();
				 console.log('resolved foo promise');
			},
			0,
		);
		console.log('end of foo promise callback');
	});
}

console.log('Calling foo()');
const p = foo();
console.log('Done foo()');

console.log(p);

console.log('setting timeout to then promise');
setTimeout(
	  () => {
		console.log('Then-ing promise')
		p.then(() => {
			console.log('Promise complete');
		});
	},
	10,
);

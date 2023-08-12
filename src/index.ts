// CALLBACK

console.log(11111, globalThis);

console.time('Time: ');

console.log(1);

const arr = [1, 5, 3, 9, 5];

console.log(2);

const callback = (element: number) => element ** 2;

console.log(3);

function map(arr: any[], callback: (item: any) => any) {
	const result = [];

	console.log(5);

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
		queueMicrotask(() => console.log('SOY EL CALLBACK'));
	}

	console.log(6);

	return result;
}

console.log(4);

const squares = map(arr, callback);

console.log(7);

console.log(squares);

console.timeEnd('Time: ');

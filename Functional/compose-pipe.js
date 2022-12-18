// Compose
// Pipe

const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
const multiplyBy3AndAbsolute = pipe(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50));

// fn1(fn2(fn3(50)));
// compose(fn1, fn2, fn3)(50);
// pipe(fn3, fn2, fn1)(50);

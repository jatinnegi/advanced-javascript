// HOF
const hof = (fn) => fn(5);
// console.log(
//   hof(function a(x) {
//     return x;
//   })
// );

// Closures
const closure = function () {
  let count = 55;
  return function getCounter() {
    // count++;
    return count;
  };
};

const getCounter = closure();
console.log(getCounter());

// const incrementFn = closure();
// console.log(incrementFn());
// console.log(incrementFn());
// console.log(incrementFn());

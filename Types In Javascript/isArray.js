// var array = ["1", "2", "3"];

// var array = {
//   0: "1",
//   1: "2",
//   2: "3",
// };

// console.log(typeof []);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("not array"));
console.log(
  Array.isArray({
    0: "1",
    1: "2",
    2: "3",
  })
);

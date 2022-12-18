// No Side Effects
// Input -> Output

const array = [1, 2, 3];

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);

console.log(array);
console.log(array2);
console.log(array3);

function sum(num1, num2) {
  return num1 + num2;
}

function square(num) {
  return num * num;
}

console.log(square(sum(3, 4)));

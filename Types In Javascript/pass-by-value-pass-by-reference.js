var a = 5;
var b = a;

b += 1;

// console.log(a);
// console.log(b);

let obj1 = {
  name: "Yao",
  password: "123",
};

let obj2 = obj1; // Pass by reference

obj2.password = "easypeasy";

// console.log(obj1.password);
// console.log(obj2.password);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(18284324);

// console.log(d);
// console.log(c);

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
  d: "d",
};

// Shallow Clone
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
// Deep Clone
let superClone = JSON.parse(JSON.stringify(obj));

// obj.c = 5;
obj.c.deep = "hahahaha";
clone2.a = 1;

console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

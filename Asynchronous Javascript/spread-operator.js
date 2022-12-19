const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

// const { tiger, ...rest } = animals;

// console.log(tiger);
// console.log(rest);

const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest);

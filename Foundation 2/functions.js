// Function Expression
var canada = () => {
  console.log("cold");
};

// Function Declartion
function india() {
  console.log(arguments);
  console.log("warm");
}

// Function Invocation/Call/Execution
// canada();
india();

// function marry(person1, person2) {
//   console.log(arguments);
//   console.log(Array.from(arguments));
//   return `${person1} is now married to ${person2}`;
// }

// function marry2(person1, person2, ...args) {
//   //   console.log(args);
//   //   console.log(Array.from(arguments));
//   if (args.length > 0)
//     return `${person1} is now married to ${person2}. Location ${args[0]}`;
//   return `${person1} is now married to ${person2}.`;
// }

// console.log(marry2("Tim", "Tina", "Canada"));
// console.log(marry2("John", "Jane"));

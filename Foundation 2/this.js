// 1: Gives methods access to their object
// 2: Execute the same code for multiple objects

function importantPerson() {
  console.log(`${this.name}!`);
}

const name = "Sunny";
const obj1 = {
  name: "Cassy",
  importantPerson,
};
const obj2 = {
  name: "Jacob",
  importantPerson,
};

importantPerson();
// obj1.importantPerson();
// obj2.importantPerson();

// const obj = {
//   name: "Billy",
//   sing() {
//     return `lalala ${this.name}`;
//   },
//   singAgain() {
//     return `${this.sing()}!`;
//   },
// };
// console.log(obj.singAgain());

// var x = "x";

// function findName() {
//   console.log(x);
//   var b = "b";
//   return printName();
// }

// function printName() {
//   var c = "c";
//   return "Jatin";
// }

// function sayMyName() {
//   var a = "a";
//   return findName();
// }

// console.log(sayMyName());

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(c);
    return function printName() {
      var c = "c";
      return "Jatin";
    };
  };
}

console.log(sayMyName()()());

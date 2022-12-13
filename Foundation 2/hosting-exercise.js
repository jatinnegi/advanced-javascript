// let favouriteFood = "grapes";

// let foodThoughts = function () {
//   console.log("Original favourite food: " + favouriteFood);
//   let favouriteFood = "sushi";

//   console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts();

function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();
  function littleBrother() {
    return "no me!";
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());

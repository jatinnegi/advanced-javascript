// inline caching
// function findUser(user) {
//   return `found ${user.firstName} ${user.lastName}`;
// }

// const userData = {
//   firstName: "Johnson",
//   lastName: "Junior",
// };

// console.log(findUser(userData));

function cupcake(frosting, sprinkles) {
  this.frosting = frosting;
  this.sprinkles = sprinkles;
}

let chocCupcake = new cupcake("chocolate", "jimmies");
let lemonCupcake = new cupcake("lemon", "sandingSugar");

chocCupcake.syrup = "chocolate";
chocCupcake.topping = "cookie";

lemonCupcake.topping = "cherry";
lemonCupcake.syrup = "caramel";

console.log(chocCupcake);
console.log(lemonCupcake);

const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    this.health += num1 + num2;
    return this.health;
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

// console.log(wizard.heal());
// console.log(archer);
// console.log(wizard.heal.call(archer, 50, 30));
// console.log(wizard.heal.apply(archer, [100, 30]));
// console.log(archer);

// wizard.heal.bind(archer, 100, 30)();
// console.log(archer);

const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));

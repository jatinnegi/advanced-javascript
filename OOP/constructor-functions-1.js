// Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return "attack with " + this.weapon;
};

const peter = new Elf("Peter", "stones");
const sam = new Elf("Sam", "fire");

// console.log(sam.name);
console.log(peter.attack());
console.log(sam.attack());

const Elf1 = new Function(
  "name",
  "weapon",
  `
  this.name = name;
  this.weapon = weapon;
`
);

const sarah = new Elf1("Sarah", "fireworks");
// console.log(sarah);
// console.log(sarah.attack());

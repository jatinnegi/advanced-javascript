// Abstractation
// Encapsulation
// Inheritance
// Polymorphism

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }

  attack(cry) {
    if (cry) return `attack with ${cry}`;
    return `attack with ${this.weapon}`;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  attack() {
    return "arghhhhh";
  }

  makeFort() {
    return `strongest fort in the world made`;
  }
}

const dolby = new Elf("Dolby", "cloth", "house");
const shrek = new Ogre("Shrek", "club", "green");

console.log(dolby.attack());
console.log(dolby.attack("weeeeee"));

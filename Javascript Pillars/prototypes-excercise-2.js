Function.prototype.bind = function (context) {
  return () => this.apply(context, arguments);
};

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    return `I am ${this.name}, the breather of fire`;
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

singForLizard = dragon.sing.bind(lizard);
console.log(singForLizard());

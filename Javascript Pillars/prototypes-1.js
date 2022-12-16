let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) return `I am ${this.name}, the breather of fire`;
    return "I don't breath fire";
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) console.log(prop);
}

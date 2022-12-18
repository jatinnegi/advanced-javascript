// new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xavier", 55);

// Implicit binding
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log(`hi ${this.name}`);
  },
};

// Explicit binding
const person3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log(
      `hi ${this.setTimeout(() => {
        return person3.name;
      }, 1000)}`
    );
  }.bind(window),
};

// Arrow functions
const person4 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = () => {
      console.log(this);
      console.log(`hi ${this.name}`);
    };
    return inner();
  },
};

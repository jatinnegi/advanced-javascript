class Employee {
  constructor(name) {
    this.#setName(name);
  }

  #setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const emp = new Employee("New");
console.log(emp.getName());

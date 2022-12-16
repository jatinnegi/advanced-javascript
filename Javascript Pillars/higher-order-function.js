const giveAccessTo = (name) => `Access Granted to ${name}`;

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function sing(person) {
  return "la la la my name is " + person.name;
}

function letPerson(person, fn) {
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
}

console.log(
  letPerson(
    {
      level: "admin",
      name: "Sally",
    },
    sing
  )
);

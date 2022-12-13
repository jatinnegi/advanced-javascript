var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };

// console.log(user1 == user2);
console.log(JSON.stringify(user1) === JSON.stringify(user2));
console.log(_.isEqual(obj1, obj2));

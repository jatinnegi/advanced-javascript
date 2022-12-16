function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

const one = a();
console.log(one()());

const boo = (string) => (name) => (name2) => `${string} ${name} ${name2}`;
const booString = boo("hi");
const booStringName = booString();

// Excercise
function callMeMaybe() {
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}

callMeMaybe();

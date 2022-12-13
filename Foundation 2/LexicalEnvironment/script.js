function printMyName() {
  return "Jatin";
}

function findMyName() {
  function a() {}
  return printMyName();
}

function sayMyName() {
  return findMyName();
}

console.log(window.sayMyName());

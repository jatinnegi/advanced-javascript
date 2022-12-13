function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
one();

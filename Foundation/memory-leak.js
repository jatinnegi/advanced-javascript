// Memory Leak

// Global Variable
var a = 1;
var b = 1;
var c = 1;

// Event listeners
var element = document.getElementById("button");
element.addEventListener("click", onClick);
element.removeEventListener(onClick);

// Set Interval
const timer = setInterval(() => {
  // referencing objects...
}, 1000);

clearInterval(timer);

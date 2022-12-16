let view;
function initialize() {
  let called = 0;

  return function () {
    if (called > 0) return;
    else {
      view = "⛰️";
      called++;
      console.log("view has been set!");
    }
  };
}

const startOnce = initialize();

startOnce();
startOnce();
startOnce();
startOnce();
startOnce();

console.log(view);

(function () {
  try {
    throw new Error();
  } catch (err) {
    // Variables with 'var' keywords get's hoisted
    var err = 5;
    var boo = 10;
    console.log(err);
  }

  console.log(err);
  console.log(boo);
})();

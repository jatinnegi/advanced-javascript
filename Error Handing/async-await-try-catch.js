// IIFE
(async function () {
  try {
    await Promise.resolve("Oopsie #1");
    await Promise.reject("Oopsie #2");
  } catch (error) {
    console.log(error);
  }
  console.log("Is this still good?");
})();

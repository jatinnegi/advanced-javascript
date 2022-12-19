function fail() {
  try {
    console.log("this works");
    throw new Error("Oopsie!!!");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      console.log(error.stack);
    } else console.log(error);
  }
}

// fail();

// try {
//   try {
//     something();
//   } catch (error) {
//     throw new Error(error);
//   }
// } catch (error) {
//   console.log("Got it");
//   console.log(error.message);
// }

try {
  setTimeout(function () {
    fakeVariable;
  }, 1000);
} catch (error) {
  console.log(error.message);
}

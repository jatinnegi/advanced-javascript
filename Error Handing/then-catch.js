Promise.resolve("asyncfail")
  .then((response) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch((err) => {
        console.log(err.message);
      });
    return 5;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });

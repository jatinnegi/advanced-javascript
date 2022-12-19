// Finally

const urls = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(urls.map((url) => fetch(url).then((people) => people.json())))
  .then((array) => {
    throw Error;
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
  })
  .catch((err) => console.log("ughhh fix it!", err))
  .finally(() => {
    console.log("This is the end");
  });

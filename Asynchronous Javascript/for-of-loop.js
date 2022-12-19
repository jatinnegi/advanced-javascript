const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    console.log("users ", users);
    console.log("posts ", posts);
    console.log("albums ", albums);
  } catch (error) {
    console.log("Something went wrong!");
  }
};

const getData2 = async function () {
  const arrayOfPromises = await Promise.all(urls.map((url) => fetch(url)));

  for (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

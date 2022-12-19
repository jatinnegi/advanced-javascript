// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   console.log(users);
// }

// fetchUsers();

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

getData();

import get, {getUser, createPost}from "./ulti.js";

const POST_PER_PAGE = 10;

const listPosts = document.getElementById("list-posts");

let postUrl = new URL("https://jsonplaceholder.typicode.com/posts");
postUrl.searchParams.set("_limit", POST_PER_PAGE);


let userUrl = "https://jsonplaceholder.typicode.com/users";

let request = Promise.all([
  get({
    method: "GET",
    url: postUrl,
  }),
  get({
    method: "GET",
    url: userUrl,
  }),
]);

request
  .then((data) => {
    let [posts, users] = data;

    posts.forEach((post) => {
      let user = getUser(users, post.userId);
      listPosts.insertAdjacentHTML("beforeend", createPost(post, user));
    });
  })
  .catch((e) => console.log(e));
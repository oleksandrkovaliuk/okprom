import { fetchData } from "./helpers.js";

const allComment = [];
const allPhoto = [];
let allUsers = [];

const generateRandomNumber = (size = 500) => {
  return Math.floor(Math.random() * size + 1);
};

const fetchUsers = async () => {
  try {
    const urlUsers = "https://jsonplaceholder.typicode.com/users";
    const users = await fetchData(urlUsers);
    allUsers = users;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
const fetchUserPhoto = async () => {
  for (let i = 0; i < 10; i++) {
    try {
      const randomNum = generateRandomNumber();
      const urlPhoto = `https://jsonplaceholder.typicode.com/photos/${randomNum}`;
      const avatar = await fetchData(urlPhoto);
      allPhoto.push(avatar);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
};
const getComments = async () => {
  for (let i = 0; i < 10; i++) {
    try {
      const randomNum = generateRandomNumber();
      const urlComment = `https://jsonplaceholder.typicode.com/comments/${randomNum}`;

      const comment = await fetchData(urlComment);
      allComment.push(comment);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
};

const commentWraper = document.querySelector(".comments-wrap");

const renderedComment = (data) => {
  let markUpComment = "";

  data.forEach((user, index) => {
    const marginLeft = 20 + index * 20;

    markUpComment += `<div class="comments ${user.postId}" style="margin-left:${marginLeft}px">
    <img src="${user.url}">
    <div class="text-wrap">
    <div class="user-info">
      <span class="name">${user.name}</span>
      <span class="email">${user.email}</span>
      <span class="nick">${user.username}</span>
      <span class="phone">${user.phone}</span>
    </div>
      <p class="comment-text">${user.body}</p>
  </div>
  </div>`;
  });
  return markUpComment;
};

commentWraper.innerHTML = "Loading ...";



Promise.all([fetchUsers(), getComments(), fetchUserPhoto()])
  .then(() => {
    const resultArray = allComment.map((elem, index) => ({
      ...elem,
      ...allUsers[index],
      url: allPhoto[index].url,
    }));

    commentWraper.innerHTML = renderedComment(resultArray);
  })
  .catch((err) => {
    console.log(err, "failed fetching data!");
    commentWraper.innerHTML = "Loading is failed";
  })
  .finally(() => {});

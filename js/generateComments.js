
const allComment = [];
const allPhoto = [];

const fetchData = async (url) => {
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
}
const fetchUsers = async () => {
  const urlUsers = "https://jsonplaceholder.typicode.com/users";
  const users = await fetchData(urlUsers);
  allUsers = users;
}
const fetchUserPhoto = async () => {
  for(let i = 0; i < 10; i++){
    const randomNum = Math.floor((Math.random() * 500) + 1);
    const urlPhoto = `https://jsonplaceholder.typicode.com/photos/${randomNum}`;
    const avatar = await fetchData(urlPhoto);
    allPhoto.push(avatar);

  }
}
const getTenNumber = async () => {
  for(let i = 0; i < 10; i++){
    const randomNum = Math.floor((Math.random() * 500) + 1);
    const urlComment = `https://jsonplaceholder.typicode.com/comments/${randomNum}`;

    const comment = await fetchData(urlComment);
    allComment.push(comment);
  }
}


 Promise.all([fetchUsers() , getTenNumber() , fetchUserPhoto() ]).then(() => {
  const resultArray = allComment.map((elem , index) => ({
    ...elem , ...allUsers[index] , url:allPhoto[index].url
  }));
  let markUpComment = '';
  const commentWraper = document.querySelector(".comments-wrap")
  const renderedComment = () => {
    resultArray.forEach((user , index) => {
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
    })
    return markUpComment;
  }
  commentWraper.innerHTML = renderedComment();
})

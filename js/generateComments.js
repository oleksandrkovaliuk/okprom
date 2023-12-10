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
  data.forEach((user) => {
    markUpComment += ` <div class="wrapper"> <div class="comments ${user.id} top">
    <div class="text-and-img">
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
  </div>
  </div>
  <div class="all-comment">`;
    data.forEach((user, index) => {
      markUpComment += `<div class="comments ${user.postId} Allcomm">
    <div class="text-and-img">
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
    </div>
  </div>`;
    });
    markUpComment += `</div>
        <button class="show-more-comm"><span>Показать еще</span>
  
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
        
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M725 4477 c-96 -32 -162 -90 -204 -177 -21 -44 -26 -70 -26 -130 0
        -149 -52 -89 972 -1111 1016 -1013 947 -953 1093 -954 147 0 82 -57 1102 963
        1019 1019 963 955 963 1102 0 90 -30 162 -91 224 -62 61 -134 91 -224 91 -145
        -1 -91 46 -967 -829 l-783 -781 -782 781 c-702 700 -789 783 -838 804 -66 27
        -160 35 -215 17z"/>
        <path d="M683 3012 c-138 -49 -222 -180 -211 -326 11 -125 -28 -82 972 -1083
        1035 -1036 968 -978 1116 -978 147 0 83 -56 1102 963 1019 1019 963 955 963
        1102 0 90 -30 162 -91 224 -62 61 -134 91 -224 91 -145 -1 -91 46 -968 -829
        l-782 -781 -793 791 c-646 645 -801 795 -842 814 -69 32 -173 37 -242 12z"/>
        </g>
        </svg>
        </button>
          </div>`;
  });
  return markUpComment;
};

commentWraper.innerHTML = `<div class="loader"></div>`;

Promise.all([fetchUsers(), getComments(), fetchUserPhoto()])
  .then(() => {
    const resultArray = allComment.map((elem, index) => ({
      ...elem,
      ...allUsers[index],
      url: allPhoto[index].url,
    }));
    commentWraper.innerHTML = renderedComment(resultArray);
    const showMoreBtn = document.querySelectorAll(".show-more-comm");

    const mainComment = document.querySelectorAll(".comments.top");
    mainComment.forEach((com) => {
      const topheight = com.offsetHeight + 40;
      const findClosestAllCom = com
        .closest(".wrapper")
        .querySelector(".all-comment");
      const elementInsideAllCom = Array.from(
        findClosestAllCom.querySelectorAll(".comments")
      );
      let startValue = topheight;
      for (const element of elementInsideAllCom) {
        element.style.transform = `translateY(-${startValue}px)`;
        startValue += topheight;
      }
    });
    showMoreBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const findcommentsInAllComm = btn
          .closest(".wrapper")
          .querySelectorAll(".comments.Allcomm");
        const closestAllComment = btn
          .closest(".wrapper")
          .querySelector(".all-comment");
        if (!btn.classList.contains("active")) {
          btn.classList.add("active");
          btn.querySelector('span').textContent = 'Скрыть';
          closestAllComment.classList.add("active");
          findcommentsInAllComm.forEach((elem, index) => {
            elem.classList.add("active");
            if(window.innerWidth < 768){
              elem.style.marginLeft = 5 * (index + 1) + "px";
            }else{
              elem.style.marginLeft = 10 * (index + 1) * 2 + "px";
            }
          });
        } else {
          btn.classList.remove("active");
         btn.querySelector('span').textContent = 'Показать еще';
          setTimeout(() => closestAllComment.classList.remove("active"), 255);
          findcommentsInAllComm.forEach((elem) => {
            elem.classList.remove("active");
            elem.style.marginLeft = 0 + "px";
          });
        }
      });
    });
  })
  .catch((err) => {
    console.log(err, "failed fetching data!");
    commentWraper.innerHTML = "Loading is failed";
  });

const userInfo = [];
const numberCart = document.querySelector("#number");
const emailCart = document.querySelector("#email");
const inputNameCart = document.querySelector("#name");
const cityCart = document.querySelector("#city");
const cartform = document.querySelector(".send-message-form");
function getAllInfo(event) {
  event.preventDefault();
  const data = new FormData(cartform);
  for (const [fieldCart, fieldValueCart] of data) {
    if (fieldCart === "name" && fieldValueCart.length <= 3) {
      inputNameCart.style.borderBottom = "2px solid red";
      allCondition = false;
    } else if (fieldCart === "name" && fieldValueCart.length >= 3) {
      inputNameCart.style.borderBottom = "2px solid var(--text-white)";
    }

    if (fieldCart === "number" && !fieldValueCart.match(validationNumber)) {
      numberCart.style.borderBottom = "2px solid red";
      allCondition = false;
    } else if (
      fieldCart === "number" &&
      fieldValueCart.match(validationNumber)
    ) {
      numberCart.style.borderBottom = "2px solid var(--text-white)";
    }

    if (fieldCart === "email" && !fieldValueCart.match(validationEmail)) {
      emailCart.style.borderBottom = "2px solid red";
      allCondition = false;
    } else if (fieldCart === "email" && fieldValueCart.match(validationEmail)) {
      emailCart.style.borderBottom = "2px solid var(--text-white)";
    }
    if (fieldCart === "city" && fieldValueCart <= 1) {
      cityCart.style.borderBottom = "2px solid red";
      allCondition = false;
    } else if (fieldCart === "city" && fieldValueCart >= 1) {
      cityCart.style.borderBottom = "2px solid var(--text-white)";
    }
    const userTypeAndValueOfInfo = `${fieldCart}: ${fieldValueCart}`;
    if (!userInfo.some((item) => item.includes(userTypeAndValueOfInfo))) {
      userInfo.push(userTypeAndValueOfInfo);
    }
    if (fieldValueCart.trim().length > 0) {
      localStorage.setItem("userOrderInf", JSON.stringify(userInfo));
    }
  }
}

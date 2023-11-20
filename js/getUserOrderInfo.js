import { validateEmail, validateNumber } from "./validationHelp.js";

const userInfo = [];
const orderForm = document.querySelector("#order-form");
const numberCart = document.querySelector("#number");
const emailCart = document.querySelector("#email");
const inputNameCart = document.querySelector("#name");
const cityCart = document.querySelector("#city");
const submitOrder = document.querySelector("#submit-order");

submitOrder.onclick = () => {
  const formData = new FormData(orderForm);

  // let allCondition = false;

  for (const [fieldCart, fieldValueCart] of formData) {
    if (fieldCart === "name" && fieldValueCart.length <= 3) {
      inputNameCart.style.borderBottom = "2px solid red";
      // allCondition = false;
    } else if (fieldCart === "name" && fieldValueCart.length >= 3) {
      inputNameCart.style.borderBottom = "2px solid var(--text-white)";
    }

    if (fieldCart === "number" && !validateNumber(fieldValueCart)) {
      numberCart.style.borderBottom = "2px solid red";
      // allCondition = false;
    } else if (fieldCart === "number" && validateNumber(fieldValueCart)) {
      numberCart.style.borderBottom = "2px solid var(--text-white)";
    }

    if (fieldCart === "email" && !validateEmail(fieldValueCart)) {
      emailCart.style.borderBottom = "2px solid red";
      // allCondition = false;
    } else if (fieldCart === "email" && validateEmail(fieldValueCart)) {
      emailCart.style.borderBottom = "2px solid var(--text-white)";
    }
    if (fieldCart === "city" && fieldValueCart <= 1) {
      cityCart.style.borderBottom = "2px solid red";
      // allCondition = false;
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
};

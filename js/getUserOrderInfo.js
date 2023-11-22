import { validateEmail, validateNumber } from "./validationHelp.js";
import { countTottalPrice, finallSum } from "./totalItemInCart.js";
const userInfo = [];
const orderForm = document.querySelector("#order-form");
const numberCart = document.querySelector("#number");
const emailCart = document.querySelector("#email");
const inputNameCart = document.querySelector("#name");
const cityCart = document.querySelector("#city");
const submitOrder = document.querySelector("#submit-order");
const deliver = document.querySelector("#deliver");
const courier = document.querySelector("#courier");
const courierValue = document.querySelector("#courierDelivery");
const deliveryValue = document.querySelector("#regularDelivery");
let courierNum = +courierValue.textContent.match(/\b\d+\b/);
let deliveryNum = +deliveryValue.textContent.match(/\b\d+\b/);
const deliverySum = document.querySelector(".delivery-sum span");

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
    // console.log(userTypeAndValueOfInfo);
    if (!userInfo.some((item) => item.includes(userTypeAndValueOfInfo))) {
      if (fieldValueCart.trim().length > 0)
        userInfo.push(userTypeAndValueOfInfo);
    }
    if (fieldValueCart.trim().length > 0) {
      localStorage.setItem("userOrderInf", JSON.stringify(userInfo));
    }
  }
};

deliver.addEventListener("change", () => {
  if (courier.checked) {
    alert("Выберите только один метод доставки");
    deliver.checked = false;
    return;
  }
  if (deliver.checked) {
    finallSum.textContent = countTottalPrice() + 275;
    deliverySum.textContent = deliveryNum;
    let UpdatedStorage = JSON.parse(localStorage.getItem("userOrderInf")) || [];
    let pushingSum = `сумма: ${finallSum.textContent}`;
    // let UpdatedStorageWithSum = UpdatedStorage.concat(pushingSum);
let found = false;
    for(let i = 0 ; i < UpdatedStorage.length; i++ ){
      if(UpdatedStorage[i].startsWith(pushingSum)){
        UpdatedStorage[i] = pushingSum;
        found = true;
        break;
      }
    }
    if(!found){
      UpdatedStorage.push(pushingSum)
      localStorage.setItem(
        "userOrderInf",
        JSON.stringify(UpdatedStorage)
      )
    }
    // if (!UpdatedStorage.includes(pushingSum) && UpdatedStorage.length > 0) {
    //   localStorage.setItem(
    //     "userOrderInf",
    //     JSON.stringify(UpdatedStorageWithSum)
    //   );
    // }
  } else {
    finallSum.textContent = countTottalPrice();
    deliverySum.textContent = 0;
  }
  if (deliver.checked && courier.checked) {
    alert("выберите один спосод оплаты");
    deliver.checked = false;
  }
});
courier.addEventListener("change", () => {
  if (deliver.checked) {
    alert("Выберите только один метод доставки");
    courier.checked = false;
    return;
  }
  if (courier.checked) {
    finallSum.textContent = countTottalPrice() + 400;
    deliverySum.textContent = courierNum;
    let UpdatedStorage = JSON.parse(localStorage.getItem("userOrderInf")) || [];
    let pushingSum = `сумма: ${finallSum.textContent}`;
    let UpdatedStorageWithSum = UpdatedStorage.concat(pushingSum);

    if (!UpdatedStorage.includes(pushingSum) && UpdatedStorage.length > 0) {
      localStorage.setItem(
        "userOrderInf",
        JSON.stringify(UpdatedStorageWithSum)
      );
    }
  } else {
    finallSum.textContent = countTottalPrice();
    deliverySum.textContent = 0;
  }
  if (deliver.checked && courier.checked) {
    alert("Выберите один метод доставки");
    courier.checked = false;
  }
});

countTottalPrice();

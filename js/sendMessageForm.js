import { validateEmail, validateNumber } from "./validationHelp.js";

const form = document.querySelector(".send-message-form");
const number = document.querySelector("#number");
const email = document.querySelector("#email");
const inputName = document.querySelector("#name");
const submitForm = document.querySelector("#submit-user-feedback");

submitForm.onclick = () => {
  const dataStorage = new FormData(form);
  for (const [field, fieldValue] of dataStorage) {
    if (field === "name" && fieldValue.length <= 3) {
      inputName.style.borderBottom = "2px solid red";
    } else if (field === "name" && fieldValue.length >= 3) {
      inputName.style.borderBottom = "2px solid var(--text-white)";
    }

    if (field === "number" && !validateNumber(fieldValue)) {
      number.style.borderBottom = "2px solid red";
    } else if (field === "number" && validateNumber(fieldValue)) {
      number.style.borderBottom = "2px solid var(--text-white)";
    }

    if (field === "email" && !validateEmail(fieldValue)) {
      email.style.borderBottom = "2px solid red";
    } else if (field === "email" && validateEmail(fieldValue)) {
      email.style.borderBottom = "2px solid var(--text-white)";
    }
  }
};

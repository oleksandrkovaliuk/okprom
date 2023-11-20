const email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/;
const number = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const validateEmail = (field) => {
  return field.match(email);
};

const validateNumber = (field) => {
  return field.match(number);
};

export { validateEmail, validateNumber };

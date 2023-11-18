const storedOurProduct = JSON.parse(localStorage.getItem("cart")) || [];

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const finallSum = document.querySelector(".sum");

// implement count of all total price

plus.forEach((element) => {
  const productItem = element.closest(".product");
  const productId = productItem.id;
  const inputValue = element
    .closest(".plus-number")
    .querySelector(".total-item");
  const totalPrice = productItem.querySelector(".total-price");

  const productPrice = storedOurProduct.find(
    (item) => item.id === Number(productId)
  ).price;

  element.addEventListener("click", () => {
    const count = Number(inputValue.value) + 1;
    const total = productPrice * count;
    inputValue.value = count;
    totalPrice.textContent = total;
    finallSum.textContent = `Total: ${total} ₽`;
  });
});

minus.forEach((element) => {
  element.addEventListener("click", () => {
    const productItem = element.closest(".product");
    const productId = productItem.id;
    const inputValue = element
      .closest(".plus-number")
      .querySelector(".total-item");

    const totalPrice = productItem.querySelector(".total-price");

    const productPrice = storedOurProduct.find(
      (item) => item.id === Number(productId)
    ).price;

    if (inputValue.value >= 2) {
      inputValue.value = parseInt(inputValue.value) - 1;
    } else {
      inputValue.value = 1;
    }

    const total = Math.abs(productPrice - Number(totalPrice.textContent));

    totalPrice.textContent = total;
    finallSum.textContent = `Total: ${total} ₽`;
  });
});

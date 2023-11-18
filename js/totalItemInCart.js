const storedOurProduct = JSON.parse(localStorage.getItem("cart")) || [];

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const finallSum = document.querySelector(".sum span");
const allTotalPrice = document.querySelectorAll(".total-price span");

const hashmapProducts = storedOurProduct.reduce(
  (acc, current) => ({
    ...acc,
    [current.id]: current,
  }),
  {}
);

function countTottalPrice() {
  const totalSum = Array.from(allTotalPrice).reduce(
    (acc, current) => acc + Number(current.textContent),
    0
  );

  finallSum.textContent = totalSum;
}

plus.forEach((element) => {
  const productItem = element.closest(".product");
  const productId = productItem.id;
  const inputValue = element
    .closest(".plus-number")
    .querySelector(".total-item");
  const totalPrice = productItem.querySelector(".total-price span");
  const productPrice = hashmapProducts[productId].price;

  element.addEventListener("click", () => {
    const count = Number(inputValue.value) + 1;
    const total = productPrice * count;
    inputValue.value = count;
    totalPrice.textContent = total;

    countTottalPrice();
  });
});

minus.forEach((element) => {
  element.addEventListener("click", () => {
    const productItem = element.closest(".product");
    const productId = productItem.id;
    const inputValue = element
      .closest(".plus-number")
      .querySelector(".total-item");
    const totalPrice = productItem.querySelector(".total-price span");
    const productPrice = hashmapProducts[productId].price;
    const total = Math.abs(productPrice - Number(totalPrice.textContent));

    if (inputValue.value > 1) {
      inputValue.value = parseInt(inputValue.value) - 1;

      totalPrice.textContent = total;

      countTottalPrice();
    }
  });
});

countTottalPrice();

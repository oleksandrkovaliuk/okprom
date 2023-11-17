const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
// const price = document.querySelectorAll('.price');

plus.forEach((element) => {
  element.addEventListener("click", () => {
    const closestInput = element
      .closest(".plus-number")
      .querySelector(".total-item");
    const price = element.closest(".product").querySelector(".price");
    const totalPrice = element.closest(".product").querySelector(".total-price");
    const totalOfPrice = parseFloat(totalPrice.textContent.replace(/[^\d.-]/g, ""));
    const total = totalOfPrice * 2;
    totalPrice.textContent = `${total} ₽`;
    closestInput.value = parseInt(closestInput.value) + 1;
  });
});
minus.forEach((element) => {
  element.addEventListener("click", () => {
    const closestInput = element
      .closest(".plus-number")
      .querySelector(".total-item");
    if (closestInput.value >= 2) {
      closestInput.value = parseInt(closestInput.value) - 1;
    } else {
      closestInput.value = 1;
    }
  });
});

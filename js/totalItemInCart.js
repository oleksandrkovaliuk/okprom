const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const sum = [];
const finallSum = document.querySelector('.sum');
let totalSum = 0;

function updatedSum(){
  finallSum.textContent = `ИТОГИ: ${totalSum} ₽`;
}

plus.forEach((element) => {
  const closestInput = element
  .closest(".plus-number")
  .querySelector(".total-item");
    const totalPrice = element.closest(".product").querySelector(".total-price");
    const totalOfPrice = parseFloat(totalPrice.textContent.replace(/[^\d.-]/g, ""));
    sum.push(totalOfPrice);
    finallSum.textContent = `ИТОГИ: ${totalSum} ₽`
  element.addEventListener("click", () => {
    const total = totalOfPrice * 2;
    totalPrice.textContent = `${total} ₽`;
    sum.push(total);
    closestInput.value = parseInt(closestInput.value) + 1;
    totalSum = sum.reduce((sum , currentValue) => sum + currentValue , 0)
    updatedSum();
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

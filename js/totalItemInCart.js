const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

plus.forEach((element) => {
  element.addEventListener("click", () => {
    const closestInput = element
      .closest(".plus-number")
      .querySelector(".total-item");

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

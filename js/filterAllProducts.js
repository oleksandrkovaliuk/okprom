const filterBtns = document.querySelectorAll(".filter-list button");
const showMore = document.querySelector(".show-more");

import { filterCards, bindEventOnBuyBtn } from "./main.js";
import { ourProduct } from "./arrayWithProducts.js";
import { generateMarkupProducts } from "./markupFunctions.js";

filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterItem);
});

function filterItem(event) {
  const dataInfo = event.target.dataset["f"];

  filterCards.setUpType(dataInfo);

  toggleActiveButtonCls(event.target);

  document.querySelector(".product-block-wrap").innerHTML =
    generateMarkupProducts(filterCards.getFilteredItems());

  bindEventOnBuyBtn(document.querySelectorAll(".buyBtn"));
}

function toggleActiveButtonCls(activeBtn) {
  filterBtns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
  activeBtn.classList.add("active");
}

showMore.addEventListener("click", () => {
  showMore.classList.toggle("active");

  if (showMore.classList.contains("active")) {
    filterCards.setUpLimit(9);
  } else {
    filterCards.setUpLimit(ourProduct.length);
  }
  document.querySelector(".product-block-wrap").innerHTML =
    generateMarkupProducts(filterCards.getFilteredItems());

  bindEventOnBuyBtn(document.querySelectorAll(".buyBtn"));
});

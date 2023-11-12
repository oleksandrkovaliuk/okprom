const filterBtns = document.querySelectorAll(".filter-list button");
const showMore = document.querySelector(".show-more");

import { FilterCards } from "./FilterCards.js";
import { ourProduct } from "./arrayWithProducts.js";
import { generateMarkupProducts } from "./markupFunctions.js";

const filterCards = new FilterCards(null, 3, ourProduct);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterItem);
});

function filterItem(event) {
  const dataInfo = event.target.dataset["f"];

  filterCards.setUpType(dataInfo);

  toggleActiveButtonCls(event.target);

  document.querySelector(".product-block-wrap").innerHTML = generateMarkupProducts(
    filterCards.getFilteredItems()
  );
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
    filterCards.setUpLimit(3);
  } else {
    filterCards.setUpLimit(ourProduct.length);
  }

  document.querySelector(".product-block-wrap").innerHTML = generateMarkupProducts(
    filterCards.getFilteredItems()
  );
});

// initial call
document.querySelector(".product-block-wrap").innerHTML = generateMarkupProducts(
  filterCards.getFilteredItems()
);

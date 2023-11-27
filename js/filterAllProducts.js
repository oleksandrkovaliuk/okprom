const filterBtns = document.querySelectorAll(".filter-list button");
const showMore = document.querySelector(".show-more");

import {
  filterCards,
  bindEventOnBuyBtn,
  checkItemInCart,
} from "./catalogMain.js";
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
  checkItemInCart();
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
  checkItemInCart();
});

const html = document.querySelector('html');
const mobileFilterBtn = document.querySelector(".filter-btn");
const background = document.querySelector(".blur-background");
const filterBtnsContainer = document.querySelector(".left-filter-list");

mobileFilterBtn.addEventListener("click", () => {
  if (filterBtnsContainer.classList.contains("active")) {
    html.classList.remove('active');
    background.classList.remove("active");
    filterBtnsContainer.classList.remove("active");
    mobileFilterBtn.classList.remove("active");
  } else {
    html.classList.add('active');
    background.classList.add("active");
    filterBtnsContainer.classList.add("active");
    mobileFilterBtn.classList.add("active");
  }
});

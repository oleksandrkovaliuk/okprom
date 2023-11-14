const filterBtns = document.querySelectorAll(".filter-list button");
const showMore = document.querySelector(".show-more");

// import { FilterCards } from "./FilterCards.js";
import { ourProduct } from "./arrayWithProducts.js";
import { updatedProductBlock } from "./countItems.js";
// import { Cart } from "./Cart.js";

// const filterCards = new FilterCards(null, 9, ourProduct);
// const Carts = new Cart();

filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterItem);
});

function filterItem(event) {
  const dataInfo = event.target.dataset["f"];

  filterCards.setUpType(dataInfo);

  toggleActiveButtonCls(event.target);
  updatedProductBlock();
  // document.querySelector(".product-block-wrap").innerHTML =
  //   generateMarkupProducts(filterCards.getFilteredItems());
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
  updatedProductBlock();
  // document.querySelector(".product-block-wrap").innerHTML =
  //   generateMarkupProducts(filterCards.getFilteredItems());
});

// initial call


updatedProductBlock();

import { Cart } from "./Cart.js";
import { FilterCards } from "./FilterCards.js";
import { ourProduct } from "./arrayWithProducts.js";
import { generateMarkupProducts } from "./markupFunctions.js";

const counter = document.querySelector("#counter");
const productBlockWrap = document.querySelector(".product-block-wrap");
const cart = new Cart();
const filterCards = new FilterCards(null, 9, ourProduct);
const localStorageItem = [];
function bindEventOnBuyBtn(productBuyBtn) {
  productBuyBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dataId = btn.getAttribute("data-id");
      cart.addItemInCounter(dataId);
      counter.textContent = cart.countItems;
      btn.setAttribute("disabled", true);
      const filtered = ourProduct.filter(
        (item) => item.id === parseInt(dataId, 10)
      );
      if (!localStorageItem.some((item) => item.id === filtered[0].id)) {
        localStorageItem.push(filtered[0]);
      }
      localStorage.setItem("product", JSON.stringify(localStorageItem));
    });
  });
}
// initial load
if (productBlockWrap) {
  productBlockWrap.innerHTML = generateMarkupProducts(
    filterCards.getFilteredItems()
  );
}
counter.textContent = cart.countItems;

bindEventOnBuyBtn(document.querySelectorAll(".buyBtn"));

export { filterCards, bindEventOnBuyBtn };

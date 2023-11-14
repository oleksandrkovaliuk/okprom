
// import { Cart  } from "./Cart.js";
// const counter = document.querySelector('#counter');

// const Carts = new Cart();
// function showCurrentCartValue(){
//     console.log(productBuyBtn)
//     productBuyBtn.forEach((element) => {
//         console.log(element)
//         element.addEventListener('click' , () => {
//                 const dataId = element.getAttribute('data-id');
//                 Carts.addItemInCounter(dataId);
//                 counter.textContent = Carts.countitem;
//         })
//     })
//     counter.textContent = Carts.countitem;
// };

// export { showCurrentCartValue};
import { Cart } from "./Cart.js";
import { FilterCards } from "./FilterCards.js";
import { generateMarkupProducts } from "./markupFunctions.js";
import { ourProduct } from "./arrayWithProducts.js";
const Carts = new Cart();
const filterCards = new FilterCards(null, 9, ourProduct);
const counter = document.querySelector("#counter");
function updatedProductBlock() {
    const productBlockWrap = document.querySelector(".product-block-wrap");
    const markupUp = generateMarkupProducts(filterCards.getFilteredItems());
  
    productBlockWrap.innerHTML = markupUp
  
    const productBuyBtn = document.querySelectorAll(".buyBtn");
  
    productBuyBtn.forEach((element) => {
              console.log(element)
              element.addEventListener('click' , () => {
                      const dataId = element.getAttribute('data-id');
                      Carts.addItemInCounter(dataId);
                      counter.textContent = Carts.countitem;
              })
          })
          counter.textContent = Carts.countitem;
  }

  export {updatedProductBlock};
import { Cart } from "./Cart.js";
import { FilterCards } from "./FilterCards.js";
import { ourProduct } from "./arrayWithProducts.js";
import { generateMarkupProducts } from "./markupFunctions.js";

const counter = document.querySelector("#counter");
const productBlockWrap = document.querySelector(".product-block-wrap");

const cart = new Cart();
const filterCards = new FilterCards(null, 9, ourProduct);

function bindEventOnBuyBtn(productBuyBtn) {
  productBuyBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dataId = btn.getAttribute("data-id");
      btn.setAttribute("disabled", true);
      const item = ourProduct.find((item) => item.id === Number(dataId));
      cart.addItem(item);
      counter.textContent = cart.countItems;
    });
  });
}
// console.log(localStorage);z
function checkItemInCart() {
  const clickedBtn = document.querySelectorAll(".buyBtn");
  clickedBtn.forEach((elem) => {
    const elemId = elem.getAttribute("data-id");
    const currentLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    const id = currentLocalStorage.find((item) => item.id === +elemId);
    if (id) {
      elem.setAttribute("disabled", true);
    }
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

export { filterCards, bindEventOnBuyBtn, checkItemInCart };
checkItemInCart();

// set product in product Page

const searchProduct = window.location.search;
const searchPar = new URLSearchParams(searchProduct);
const searchProductId = parseInt(searchPar.get("productId"));

const correctProduct = ourProduct.filter((item) => item.id === searchProductId);

function renderCorrectProductForePare(){
  let markUp = "";
  markUp += ` <div class="main-product-wrap ${correctProduct[0].type}">
  <div class="img-and-info-wrap">
      <div class="card-left-block">
          <h2 class="main-text">
              ${correctProduct[0].name}
          </h2>
          <ul class="list-with-discription">
              <li>
                  <h2 class="discription-for-product">
                      Диаметр обработки
                  </h2>
                  <h3 class="discription-for-product-numbers"> ${correctProduct[0].diametrDiscription}</h3>
              </li>
              <li>
                  <h2 class="discription-for-product">Размеры</h2>
                  <h3 class="discription-for-product-numbers">${correctProduct[0].diametrDiscription}</h3>
              </li>
              <li>
                  <h2 class="discription-for-product">Мощность</h2>
                  <h3 class="discription-for-product-numbers">${correctProduct[0].engineDiscription}</h3>
              </li>
          </ul>
          <div class="price">
          <h3>${correctProduct[0].price} ${correctProduct[0].currency}</h3>
          <a href="#">${correctProduct[0].discount} ${correctProduct[0].currency}</a>
      </div>
      </div>
      <div class="card-left-img">
          <img src="${correctProduct[0].img}" alt="machine" />
          <div class="article-for-block">
              <button class="sale">-10%</button>
              <button class="type">Броня</button>
              <button class="press">Пресс</button>
          </div>
      </div>
  </div>
  <div class="numbers-and-help">
      <div class="more-info-btn">
          <button class="more">Проконсультироваться</button>
          <button class="add-to-cart">Добавить в корзину</button>
      </div>
      <div class="connect-with-support">
          <h2 class="connect">Связаться со специалистом</h2>
          <div class="numbers-for-connect">
              <span class="left-number">+7 (800) 707-31-01</span>
              <span>+7 (963) 656-66-26</span>
          </div>
      </div>
  </div>
</div>`
return markUp;
}
const mainProductContainer = document.querySelector('.main-product');
if(mainProductContainer){
  mainProductContainer.innerHTML = renderCorrectProductForePare();
}

// function checkMainProduct(){
//   const productPageAddToCart = document.querySelector('.add-to-cart');
//   const currentStorage = JSON.parse(localStorage.getItem('cart')) ||  [];
//   const checkIfProductIdIncludec = currentStorage.find((item) => item.id === correctProduct[0]);
//   if(!checkIfProductIdIncludec){
//     productPageAddToCart.addEventListener('click' , () => {
//       cart.addItem(correctProduct[0]);
//     })
//   }else{
//     productPageAddToCart.setAttribute("disabled", true);
//   }
// }
// productPageAddToCart.addEventListener('click' , () => {

// })
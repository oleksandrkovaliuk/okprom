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

checkItemInCart();

// set product in product Page

const searchProduct = window.location.search;
const searchPar = new URLSearchParams(searchProduct);
const searchProductId = parseInt(searchPar.get("productId"));

const correctProduct = ourProduct.filter((item) => item.id === searchProductId);


function renderCorrectProductForePare() {
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
</div>`;
  return markUp;
}
function renderDescriptionForProduct(){
  let desMarkUp = '';
  desMarkUp += ` <div class="main-information">
  <p class="discription">${correctProduct[0].description}</p>
  <ul class="specs">
      <li class="specs-title">
          <h2 class="main-text">Характеристики</h2>
      </li>
      <li class="specs-info">
          <div class="specs-text">
              <h2 class="specs-type">Диапазон входа</h2>
              <h3 class="specs-type info">${correctProduct[0].diametrDiscription}</h3>
          </div>
      </li>
      <li class="specs-info">
          <div class="specs-text">
              <h2 class="specs-type">Вес изделия</h2>
              <h3 class="specs-type info">${correctProduct[0].weightDiscription}</h3>
          </div>
      </li>
      <li class="specs-info">
          <div class="specs-text">
              <h2 class="specs-type">Мощность двигателя</h2>
              <h3 class="specs-type info">${correctProduct[0].engineDiscription}</h3>
          </div>
      </li>
      <li class="specs-info">
          <div class="specs-text">
              <h2 class="specs-type">Напряжение</h2>
              <h3 class="specs-type info">${correctProduct[0].engineDiscription}</h3>
          </div>
      </li>
  </ul>
</div>
<div class="right-side-info">
  <div class="block">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#E9E9E9" />
          <g clip-path="url(#clip0_108_3207)">
              <path
                  d="M26.965 36C26.8461 36.8343 26.4302 37.5977 25.7937 38.1499C25.1571 38.7022 24.3427 39.0063 23.5 39.0063C22.6573 39.0063 21.8429 38.7022 21.2063 38.1499C20.5698 37.5977 20.1539 36.8343 20.035 36H19V24C19 23.7348 19.1054 23.4804 19.2929 23.2929C19.4804 23.1054 19.7348 23 20 23H34C34.2652 23 34.5196 23.1054 34.7071 23.2929C34.8946 23.4804 35 23.7348 35 24V26H38L41 30.056V36H38.965C38.8461 36.8343 38.4302 37.5977 37.7937 38.1499C37.1571 38.7022 36.3427 39.0063 35.5 39.0063C34.6573 39.0063 33.8429 38.7022 33.2063 38.1499C32.5698 37.5977 32.1539 36.8343 32.035 36H26.965ZM33 25H21V33.05C21.3946 32.6472 21.8806 32.3457 22.4168 32.1711C22.9529 31.9966 23.5233 31.9541 24.0794 32.0474C24.6355 32.1407 25.1608 32.3669 25.6106 32.7069C26.0604 33.0469 26.4215 33.4905 26.663 34H32.337C32.505 33.647 32.73 33.326 33 33.05V25ZM35 31H39V30.715L36.992 28H35V31ZM35.5 37C35.898 37 36.2796 36.8419 36.561 36.5605C36.8424 36.2791 37.0005 35.8975 37.0005 35.4995C37.0005 35.1015 36.8424 34.7199 36.561 34.4385C36.2796 34.1571 35.898 33.999 35.5 33.999C35.102 33.999 34.7204 34.1571 34.439 34.4385C34.1576 34.7199 33.9995 35.1015 33.9995 35.4995C33.9995 35.8975 34.1576 36.2791 34.439 36.5605C34.7204 36.8419 35.102 37 35.5 37ZM25 35.5C25 35.303 24.9612 35.108 24.8858 34.926C24.8104 34.744 24.6999 34.5786 24.5607 34.4393C24.4214 34.3001 24.256 34.1896 24.074 34.1142C23.892 34.0388 23.697 34 23.5 34C23.303 34 23.108 34.0388 22.926 34.1142C22.744 34.1896 22.5786 34.3001 22.4393 34.4393C22.3001 34.5786 22.1896 34.744 22.1142 34.926C22.0388 35.108 22 35.303 22 35.5C22 35.8978 22.158 36.2794 22.4393 36.5607C22.7206 36.842 23.1022 37 23.5 37C23.8978 37 24.2794 36.842 24.5607 36.5607C24.842 36.2794 25 35.8978 25 35.5Z"
                  fill="#161616" />
          </g>
          <defs>
              <clipPath id="clip0_108_3207">
                  <rect width="24" height="24" fill="white" transform="translate(18 18)" />
              </clipPath>
          </defs>
      </svg>
      <div class="text-in-block">
          <h2 class="block-name">Доставка по всей России</h2>
          <h3 class="bonus-discription">
              Отправим товар транспортной компанией или почтовым
              отправлением (оплата при получении)
          </h3>
      </div>
  </div>
  <div class="block">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="59" height="59" rx="7.5" stroke="#E9E9E9" />
          <g clip-path="url(#clip0_108_3192)">
              <path
                  d="M35 33.246V40.118C35 40.2064 34.9766 40.2933 34.932 40.3697C34.8875 40.4462 34.8235 40.5094 34.7465 40.5531C34.6696 40.5967 34.5824 40.6191 34.4939 40.618C34.4055 40.6169 34.3189 40.5924 34.243 40.547L30 38.001L25.757 40.547C25.681 40.5925 25.5944 40.617 25.5058 40.618C25.4173 40.6191 25.33 40.5965 25.253 40.5528C25.176 40.5091 25.112 40.4457 25.0676 40.3691C25.0231 40.2925 24.9998 40.2055 25 40.117V33.247C23.7061 32.211 22.766 30.7988 22.3095 29.2055C21.8529 27.6121 21.9026 25.9163 22.4515 24.3524C23.0004 22.7885 24.0216 21.4337 25.3738 20.4752C26.726 19.5168 28.3425 19.002 30 19.002C31.6575 19.002 33.274 19.5168 34.6262 20.4752C35.9784 21.4337 36.9996 22.7885 37.5485 24.3524C38.0974 25.9163 38.1471 27.6121 37.6905 29.2055C37.234 30.7988 36.2939 32.211 35 33.247V33.246ZM27 34.419V37.469L30 35.669L33 37.469V34.419C32.0468 34.8044 31.0282 35.0021 30 35.001C28.9718 35.0021 27.9532 34.8044 27 34.419ZM30 33.001C31.5913 33.001 33.1174 32.3688 34.2426 31.2436C35.3679 30.1184 36 28.5922 36 27.001C36 25.4097 35.3679 23.8835 34.2426 22.7583C33.1174 21.6331 31.5913 21.001 30 21.001C28.4087 21.001 26.8826 21.6331 25.7574 22.7583C24.6321 23.8835 24 25.4097 24 27.001C24 28.5922 24.6321 30.1184 25.7574 31.2436C26.8826 32.3688 28.4087 33.001 30 33.001Z"
                  fill="#161616" />
          </g>
          <defs>
              <clipPath id="clip0_108_3192">
                  <rect width="24" height="24" fill="white" transform="translate(18 18)" />
              </clipPath>
          </defs>
      </svg>
      <div class="text-in-block">
          <h2 class="block-name">Гарантия на всё</h2>
          <h3 class="bonus-discription">
              Предоставляется гарантия сроком до 1 года со дня приобретения
              товара
          </h3>
      </div>
  </div>
</div>`;
return desMarkUp;

}
const informationContainer = document.querySelector('.information-wrap');
const mainProductContainer = document.querySelector(".main-product");
if (mainProductContainer || informationContainer) {
  mainProductContainer.innerHTML = renderCorrectProductForePare();
  informationContainer.innerHTML = renderDescriptionForProduct();
}
const productPageAddToCart = document.querySelector(".add-to-cart");
function checkItemOnProductPage(){
  const currentStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const checkIfProductIdIncluded = currentStorage.find(
    (item) => item.id === correctProduct[0].id
  );
  
  if (productPageAddToCart) {
  
    if(checkIfProductIdIncluded){
      productPageAddToCart.setAttribute("disabled", true);
    }
    productPageAddToCart.addEventListener("click", () => {
      if (!checkIfProductIdIncluded) {
        cart.addItem(correctProduct[0]);
        counter.textContent = cart.countItems;
        productPageAddToCart.setAttribute("disabled", true);
      }
    });
  }
}
if(productPageAddToCart){
  checkItemOnProductPage();
}

export { filterCards, bindEventOnBuyBtn, checkItemInCart };
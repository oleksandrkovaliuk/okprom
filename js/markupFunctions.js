// generate slider products cards
function renderingSliderProductCards(sliderProduct) {
  let markUp = "";
  sliderProduct.forEach((element) => {
    markUp += ` <li class="glide__slide">
        <div class="card-left-block">
        <h2 id="title" class="main-text">
          ${element.title}
        </h2>
        <ul class="list-with-discription">
          <li>
            <h2 class="discription-for-product">
              Диаметр обработки
            </h2>
            <h3 class="discription-for-product-numbers">${element.diametrDiscription}</h3>
          </li>
          <li>
            <h2 class="discription-for-product">Размеры</h2>
            <h3 class="discription-for-product-numbers">${element.sizeDiscription}</h3>
          </li>
          <li>
            <h2 class="discription-for-product">Мощность</h2>
            <h3 class="discription-for-product-numbers">${element.powerDiscription}</h3>
          </li>
        </ul>
        <h3 class="price">${element.price}</h3>
      </div>
      <div class="card-left-img">
        <img src=${element.img} alt="machine" />
      </div>
      </li>`;
  });
  return markUp;
}

// generate markup products cards
function generateMarkupProducts(ourProduct) {
  let allMarkUp = "";
  ourProduct.forEach((element) => {
    allMarkUp += `<div class="products-block ${element.type}">
          <a href="./productPage.html?productId=${element.id}">
          <div class="img-block">
              <img src="${element.img}">
              <div class="article-for-block">
                  <button class="sale">-10%</button>
                  <button class="type">Броня</button>
                  <button class="press">Пресс</button>
              </div>
              </div>
          </a>
          <h2 class="name-of-the-product">${element.name}</h2>
          <ul>
              <li>
                <h2 class="discription-for-product">
                  Вес
                </h2>
                <h3 class="discription-for-product-numbers">${element.weightDiscription}</h3>
              </li>
              <li>
                <h2 class="discription-for-product">Двигатель</h2>
                <h3 class="discription-for-product-numbers">${element.engineDiscription}</h3>
              </li>
              <li>
                <h2 class="discription-for-product">Диам. обраб.</h2>
                <h3 class="discription-for-product-numbers">${element.diametrDiscription}</h3>
              </li>
            </ul>
            <div class="price">
              <h3>${element.price} ${element.currency}</h3>
              <a href="#">${element.discount} ${element.currency}</a>
          </div>
          <div class="buy">
              <button class="buyBtn" data-id="${element.id}" >Купить</button>
          </div>
      </div>`;
  });
  return allMarkUp;
}
// generate product in cart
// function generateProductInCart(ourProduct){
//   let cartMarkUp = '';

//   ourProduct.forEach((element) => {
//     cartMarkUp += `<tr class="product">
//     <td class="img"><img src="${element.img}"></img></td>
//     <td>${element.name}</td>
//     <td class="id">${element.id}</td>
//     <td class="plus-number">
//       <input type="text" value="1" class="total-item"/>
//       <div class="plus-minus">
//           <span class="plus">+</span>
//           <span class="minus">-</span>
//       </div>
//   </td>
//   <td class="cart-price">${element.price}</td>
//   <td class="total-price">${element.price}</td>
//   </tr>`
//   })
// }
export { renderingSliderProductCards, generateMarkupProducts};

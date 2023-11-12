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

// generate  all products cards
function generateALlProducts(ourProduct) {
  let allMarkUp = "";
  ourProduct.forEach((element) => {
    allMarkUp += `<div class="products-block ${element.type}">
          <div class="img-block">
              <img src="${element.img}">
              <div class="article-for-block">
                  <button class="sale">-10%</button>
                  <button class="type">Броня</button>
                  <button class="press">Пресс</button>
              </div>
          </div>
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
              <h3>${element.price}</h3>
              <a href="#">${element.priceBefore}</a>
          </div>
          <div class="buy">
              <button>Купить</button>
          </div>
      </div>`;
  });
  return allMarkUp;
}

export { renderingSliderProductCards, generateALlProducts };

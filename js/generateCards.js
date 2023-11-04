const cardTitle = document.querySelector('#title');
const listWithDiscription = document.querySelector('.list-with-discription');
const productPrice = document.querySelector('.price');
const glideSlidesContainer = document.querySelector('.glide__slides');

function renderingSliderProductCards(products){
    let markUp = "";
    products.forEach((element) => {
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
      </li>`
    });
    return markUp;
}

const rendered = renderingSliderProductCards(products);
glideSlidesContainer.innerHTML = rendered;
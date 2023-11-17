
const storedOurProduct = JSON.parse(localStorage.getItem('product'));
const relocateToCart = document.querySelector('#cart');
relocateToCart.addEventListener('click', () => {
    window.location.href = "./cart.html";
  })
    let markUpCart = `   <th>Изображение</th>
    <th>Название товара</th>
    <th>Артикул</th>
    <th>Количество</th>
    <th>Цена за шт.</th>
    <th>Сумма</th>`;

const containerForSavedProducts = document.querySelector('.table-product');
const localStorageInfo = JSON.parse(localStorage.getItem("cart"));
for(let item of localStorageInfo){
    const filtered = storedOurProduct.filter(blocks => blocks.id === parseInt(item , 10));
    for(let obj of filtered){
        markUpCart += `<tr class="product">
        <td class="img"><img src="${obj.img}"></img></td>
        <td>${obj.name}</td>
        <td class="id">${obj.id}</td>
        <td class="plus-number">
          <input type="text" value="1" class="total-item"/>
          <div class="plus-minus">
              <span class="plus">+</span>
              <span class="minus">-</span>
          </div>
      </td>
      <td class="price">${obj.price}</td>
      <td class="total-price">${obj.price}</td>
      </tr>`
    }
}
if(containerForSavedProducts){
    containerForSavedProducts.innerHTML = markUpCart;
}


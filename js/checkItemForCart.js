
const relocateToCart = document.querySelector('#cart');
relocateToCart.addEventListener('click', () => {
    window.location.href = "./cart.html";
  })
    let markUpCart = `<th>Изображение</th>
    <th>Название товара</th>
    <th>Артикул</th>
    <th>Количество</th>
    <th>Цена за шт.</th>
    <th>Сумма</th>`;

const containerForSavedProducts = document.querySelector('.table-product');
const storedOurProduct = JSON.parse(localStorage.getItem('cart'));
for(let item of storedOurProduct){
    // const filtered = storedOurProduct.filter(blocks => blocks.id === parseInt(item , 10));
    // console.log(blocks)
    // console.log(filtered);
    // for(let obj of filtered){
        markUpCart += `<tr class="product">
        <td class="img"><img src="${item.img}"></img></td>
        <td>${item.name}</td>
        <td class="id">${item.id}</td>
        <td class="plus-number">
          <input type="text" value="1" class="total-item"/>
          <div class="plus-minus">
              <span class="plus">+</span>
              <span class="minus">-</span>
          </div>
      </td>
      <td class="price">${item.price}</td>
      <td class="total-price">${item.price}</td>
      </tr>`
    }
if(containerForSavedProducts){
    containerForSavedProducts.innerHTML = markUpCart;
}
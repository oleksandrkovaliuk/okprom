let markUpCart = `<th>Изображение</th>
    <th>Название товара</th>
    <th>Артикул</th>
    <th>Количество</th>
    <th>Цена за шт.</th>
    <th>Сумма</th>`;

const containerForSavedProducts = document.querySelector(".table-product");
const storedOurProduct = JSON.parse(localStorage.getItem("cart"));
for (let item of storedOurProduct) {
  markUpCart += `<tr class="product" id=${item.id}>
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
      <td class="price"><span>${item.price}</span>$</td>
      <td class="total-price"><span>${item.price}</span> $</td>
      </tr>`;
}
if (containerForSavedProducts) {
  containerForSavedProducts.innerHTML = markUpCart;
}


import { CounterItems } from "./renderItemsInCart.js";

const productBuyBtn = document.querySelectorAll('#buyBtn');
const counter = document.querySelector('#counter');
const arrayId = [];
productBuyBtn.forEach((element) => {
    console.log(productBuyBtn);
    element.addEventListener('click' , () => {
        console.log(element)
            const dataId = element.getAttribute('data-id');
            arrayId.push(dataId);
            counter.textContent = counterItems.addItemInCounter();
    })
})

const counterItems = new CounterItems(arrayId , counter);
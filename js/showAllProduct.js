const showAllBtn = document.querySelector('.show-more');
const allProductContainer = document.querySelector('.product-block-wrap');

showAllBtn.addEventListener('click' , (event) => {
    if(!allProductContainer.classList.contains("notAll")){
        allProductContainer.classList.add('notAll');
        event.preventDefault();
    }else{
        allProductContainer.classList.remove('notAll');
        event.preventDefault();
    }
})
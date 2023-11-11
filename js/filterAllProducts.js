const allProducts = document.querySelectorAll('.products-block');
const filterBtns = document.querySelectorAll('.filter-list');

filterBtns.forEach((btn) => {
    const dataInfo = btn.dataset["f"];
    btn.addEventListener(('click') , (event) => {
        allProducts.forEach((element) => {
            if(!element.classList.contains(dataInfo)){
                element.classList.add('hide');
            }else{
                element.classList.remove('hide');
            }
        })
    })
})
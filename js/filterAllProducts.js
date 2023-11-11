const allProducts = document.querySelectorAll(".products-block");
const filterBtns = document.querySelectorAll(".filter-list button");
const showMore = document.querySelector(".show-more");

const shows = document.querySelector(".show-more");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterItem);
  filters.filterItems()
});

function filterItem(event) {
  const dataInfo = event.target.dataset["f"];
  let items = ourProduct;
  if (dataInfo) {
    items = generateALlProducts(
      items.filter((item) => item.type === dataInfo).slice(0, maxItems)
    );
  } else {
    console.log(ourProduct, ourProduct.slice(0, maxItems), " ourProduct");
    items = generateALlProducts(ourProduct.slice(0, maxItems));
  }

  toggleActiveButtonCls(event.target);

  document.querySelector(".product-block-wrap").innerHTML = items;
}

function toggleActiveButtonCls(activeBtn) {
  filterBtns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
  activeBtn.classList.add("active");
}

showMore.addEventListener("click", () => {
  showMore.classList.toggle("active");

  if (showMore.classList.contains("active")) {
    maxItems = 6;
  } else {
    maxItems = ourProduct.length;
  }
});

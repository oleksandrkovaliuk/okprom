const filterBtns = document.querySelectorAll(".filter-list button");
const showMore = document.querySelector(".show-more");

import {
  filterCards,
  bindEventOnBuyBtn,
  checkItemInCart,
} from "./catalogMain.js";
import { ourProduct } from "./arrayWithProducts.js";
import { generateMarkupProducts } from "./markupFunctions.js";

filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterItem);
});

function filterItem(event) {
  const dataInfo = event.target.dataset["f"];

  filterCards.setUpType(dataInfo);

  toggleActiveButtonCls(event.target);

  document.querySelector(".product-block-wrap").innerHTML =
    generateMarkupProducts(filterCards.getFilteredItems());

  bindEventOnBuyBtn(document.querySelectorAll(".buyBtn"));
  checkItemInCart();
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
    filterCards.setUpLimit(9);
  } else {
    filterCards.setUpLimit(ourProduct.length);
  }
  document.querySelector(".product-block-wrap").innerHTML =
    generateMarkupProducts(filterCards.getFilteredItems());

  bindEventOnBuyBtn(document.querySelectorAll(".buyBtn"));
  checkItemInCart();
});
const mobileFilterBtn = document.querySelector(".filter-btn");
let isClosed = false;

function updateFilterButton() {
  const OffsetY = window.pageYOffset;
if(mobileFilterBtn && window.innerWidth < 500){
const filterBtnsContainer = document.querySelector('.left-filter-list');
const background = document.querySelector('.blur-background');
if (OffsetY < 380 || OffsetY > 4600) {
  mobileFilterBtn.style.pointerEvents = "none";
  mobileFilterBtn.innerHTML = `<svg class="filter-icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
  preserveAspectRatio="xMidYMid meet">
 
  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M3165 5105 c-141 -31 -257 -96 -366 -206 -70 -70 -95 -104 -133 -179
  -26 -51 -51 -113 -57 -136 l-11 -44 -1232 0 -1232 0 -44 -22 c-61 -31 -92 -86
  -87 -151 5 -54 27 -91 77 -124 l33 -23 1241 0 1241 0 22 -73 c63 -206 241
  -390 451 -467 203 -74 409 -60 605 42 172 90 326 284 372 471 l7 27 478 0 477
  0 33 23 c50 33 72 70 77 124 5 65 -26 120 -87 151 -44 22 -47 22 -512 22
  l-467 0 -11 43 c-20 75 -87 200 -145 270 -141 170 -357 269 -582 266 -48 -1
   -115 -7 -148 -14z m286 -324 c154 -48 263 -175 291 -340 47 -273 -202 -526
  -475 -483 -252 39 -417 287 -352 527 21 77 77 168 131 213 44 37 129 81 177
  92 61 15 164 10 228 -9z"/>
  <path d="M1615 3280 c-256 -67 -452 -252 -531 -502 l-17 -57 -483 -3 c-470 -3
   -483 -4 -510 -24 -53 -39 -69 -71 -69 -134 0 -63 16 -95 69 -134 27 -20 40
  -21 511 -24 l484 -3 16 -56 c48 -164 178 -330 329 -422 31 -18 95 -47 143 -64
  75 -26 107 -31 211 -35 152 -6 228 10 362 76 168 82 317 254 372 429 l23 73
  1247 2 c1241 3 1247 3 1274 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21
  -33 21 -1274 24 l-1247 2 -23 74 c-55 175 -206 349 -376 431 -50 24 -120 51
  -156 59 -91 22 -266 20 -355 -4z m318 -319 c246 -85 357 -366 238 -599 -46
  -91 -132 -163 -238 -202 -52 -19 -77 -22 -155 -18 -78 3 -104 9 -161 35 -213
  100 -305 358 -203 568 49 98 122 165 233 211 76 31 203 33 286 5z"/>
  <path d="M3195 1476 c-272 -53 -501 -252 -578 -503 l-22 -73 -1241 0 -1241 0
  -33 -22 c-50 -34 -72 -71 -77 -125 -5 -65 26 -120 87 -151 l44 -22 1232 0
  1232 0 11 -44 c6 -23 32 -85 58 -137 77 -155 218 -281 392 -352 278 -113 639
  -19 835 219 64 77 117 175 141 256 l16 58 468 0 c464 0 467 0 511 22 61 31 92
   86 87 151 -5 54 -27 91 -77 124 l-33 23 -477 0 -476 0 -18 58 c-37 119 -95
  211 -191 307 -101 102 -196 159 -325 194 -97 27 -235 34 -325 17z m225 -322
  c213 -48 358 -263 322 -475 -21 -122 -85 -223 -183 -288 -195 -130 -463 -75
  -589 121 -136 210 -58 499 164 608 101 50 177 59 286 34z"/>
  </g>
  </svg>`;
 background.style.transform = "translateX(100%)";
 filterBtnsContainer.style.transform = "translateX(-120%)";
} else {
  mobileFilterBtn.style.pointerEvents = "unset";
}
mobileFilterBtn.addEventListener("click", () => {
  if (!isClosed) {
    filterBtnsContainer.style.transform = "translateX(40px)";
    background.style.visibility = "visible";
    background.style.transform = "translateX(0)";
    mobileFilterBtn.innerHTML = `<svg class="filter-icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
         preserveAspectRatio="xMidYMid meet">
       
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188
        -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123
        1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163
        177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978
        c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97
        -127 119 -175 137 -71 27 -136 27 -202 2z"/>
        </g>
        </svg>`;
  } else {
    mobileFilterBtn.innerHTML = `<svg class="filter-icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
     preserveAspectRatio="xMidYMid meet">
    
     <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
     fill="#000000" stroke="none">
     <path d="M3165 5105 c-141 -31 -257 -96 -366 -206 -70 -70 -95 -104 -133 -179
     -26 -51 -51 -113 -57 -136 l-11 -44 -1232 0 -1232 0 -44 -22 c-61 -31 -92 -86
     -87 -151 5 -54 27 -91 77 -124 l33 -23 1241 0 1241 0 22 -73 c63 -206 241
     -390 451 -467 203 -74 409 -60 605 42 172 90 326 284 372 471 l7 27 478 0 477
     0 33 23 c50 33 72 70 77 124 5 65 -26 120 -87 151 -44 22 -47 22 -512 22
     l-467 0 -11 43 c-20 75 -87 200 -145 270 -141 170 -357 269 -582 266 -48 -1
      -115 -7 -148 -14z m286 -324 c154 -48 263 -175 291 -340 47 -273 -202 -526
     -475 -483 -252 39 -417 287 -352 527 21 77 77 168 131 213 44 37 129 81 177
     92 61 15 164 10 228 -9z"/>
     <path d="M1615 3280 c-256 -67 -452 -252 -531 -502 l-17 -57 -483 -3 c-470 -3
      -483 -4 -510 -24 -53 -39 -69 -71 -69 -134 0 -63 16 -95 69 -134 27 -20 40
     -21 511 -24 l484 -3 16 -56 c48 -164 178 -330 329 -422 31 -18 95 -47 143 -64
     75 -26 107 -31 211 -35 152 -6 228 10 362 76 168 82 317 254 372 429 l23 73
     1247 2 c1241 3 1247 3 1274 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21
     -33 21 -1274 24 l-1247 2 -23 74 c-55 175 -206 349 -376 431 -50 24 -120 51
     -156 59 -91 22 -266 20 -355 -4z m318 -319 c246 -85 357 -366 238 -599 -46
     -91 -132 -163 -238 -202 -52 -19 -77 -22 -155 -18 -78 3 -104 9 -161 35 -213
     100 -305 358 -203 568 49 98 122 165 233 211 76 31 203 33 286 5z"/>
     <path d="M3195 1476 c-272 -53 -501 -252 -578 -503 l-22 -73 -1241 0 -1241 0
     -33 -22 c-50 -34 -72 -71 -77 -125 -5 -65 26 -120 87 -151 l44 -22 1232 0
     1232 0 11 -44 c6 -23 32 -85 58 -137 77 -155 218 -281 392 -352 278 -113 639
     -19 835 219 64 77 117 175 141 256 l16 58 468 0 c464 0 467 0 511 22 61 31 92
      86 87 151 -5 54 -27 91 -77 124 l-33 23 -477 0 -476 0 -18 58 c-37 119 -95
     211 -191 307 -101 102 -196 159 -325 194 -97 27 -235 34 -325 17z m225 -322
     c213 -48 358 -263 322 -475 -21 -122 -85 -223 -183 -288 -195 -130 -463 -75
     -589 121 -136 210 -58 499 164 608 101 50 177 59 286 34z"/>
     </g>
     </svg>`;
    background.style.transform = "translateX(100%)";
    filterBtnsContainer.style.transform = "translateX(-120%)";
  }
  isClosed = !isClosed;
});
}
}
updateFilterButton();
window.addEventListener('scroll' , updateFilterButton);

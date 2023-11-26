const burgerOpenMenu = document.querySelector('.burger');
const closeBtnMenu = document.querySelector('.close-btn');
const blurManuBg = document.querySelector('.blur-background-black');
  const mobileMenu = document.querySelector('.mobile-menu-wrap');
  burgerOpenMenu.addEventListener('click' , () => {
mobileMenu.style.transform = "translateX(0)";
blurManuBg.style.visibility = "visible";
blurManuBg.style.transform = "translateX(0)";
})
closeBtnMenu.addEventListener('click' , () => {
  mobileMenu.style.transform = "translateX(100%)"
blurManuBg.style.transform = "translateX(100%)";
})
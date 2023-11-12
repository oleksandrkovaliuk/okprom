const glideSlidesContainer = document.querySelector(".glide__slides");

import { sliderProduct } from "./arrayWithProducts.js";
import { renderingSliderProductCards } from "./markupFunctions.js";

if (glideSlidesContainer) {
  glideSlidesContainer.innerHTML = renderingSliderProductCards(sliderProduct);

  const GlideCarousel = new Glide(".glide", {
    type: "carousel",
    startAt: 1,
    perView: 1,
    focusAt: "center",
    animationDuration: 600,
  });
  GlideCarousel.mount();
}

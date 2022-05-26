import Swiper, { Navigation } from "swiper";

export const swiper = new Swiper(".products__slider", {
  modules: [Navigation],
  navigation: {
    nextEl: ".products__button-next",
    prevEl: ".products__button-prev",
  },
});

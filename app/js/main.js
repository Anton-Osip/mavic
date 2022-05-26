import { swiper } from "./scripts/slider";
import fullpage from "../../node_modules/fullpage.js/dist/fullpage.js";

new fullpage("#fullPage", {
  autoScrolling: true,
  scrollHorizontally: true,
  scrollOverflow: true,
  anchors: [
    "top",
    "products",
    "benefits",
    "specification",
    "questions",
    "contacts",
  ],
  menu: "#header__navigation",
});

const itemsTitle = document.querySelectorAll(".questions__item-title");
const questionsItem = document.querySelectorAll(".questions__item");

itemsTitle.forEach((item) => {
  item.addEventListener("click", (event) => {
    questionsItem.forEach((item) => {
      item.classList.remove("questions__item--active");
    });
    event.target.parentNode.classList.add("questions__item--active");
  });
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuListLink = document.querySelectorAll(".menu__list-link");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu__btn--active");
  menuList.classList.toggle("menu__list--active");
});
menuListLink.forEach((item) => {
  item.addEventListener("click", () => {
    menuBtn.classList.remove("menu__btn--active");
    menuList.classList.remove("menu__list--active");
  });
});

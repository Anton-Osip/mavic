import { swiper } from "./scripts/slider";
import fullpage from "../../node_modules/fullpage.js";

new fullpage("#fullPage", {
  autoScrolling: true,
  scrollHorizontally: true,
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

const $el = document.querySelector(".loader");
// Loading finished
setTimeout(() => {
  $el.classList.remove("skeleton");
  $el
    .querySelectorAll(".hide-details")
    .forEach((el) => el.classList.remove("hide-details"));
}, 3000);

setTimeout(() => {
  $el.classList.remove("skeleton");
  $el
    .querySelectorAll(".hide-circle")
    .forEach((el) => el.classList.remove("hide-circle"));
}, 3000);
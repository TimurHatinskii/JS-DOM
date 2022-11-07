const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const sliderElements = document.querySelector("#items");

const minLeft = 0;
const maxRight = 500;
const step = 100;
var currentRight = 0;

sliderElements.style.right = currentRight;

rightArrow.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    sliderElements.style.right = currentRight + 'px';
  }
});

leftArrow.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minLeft) {
    currentRight -= step;
    sliderElements.style.right = currentRight + 'px';
  }
});
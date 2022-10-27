const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minLeft = 0;
const maxRight = 500;
const step = 100;
var currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + 'px';
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minLeft) {
    currentRight -= step;
    items.style.right = currentRight + 'px';
  }
});
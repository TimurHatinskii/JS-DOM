const openButton = document.querySelector("#openOverlay");
const successOverlay = createOverlay("Hello, <b>world</b>!");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});
/*создаем div с классом overlay, в который поместим нужные элементы*/
function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeElement.click();  /*при нажатии на пустое поле, элемент закрывается*/
    }
  });
  /*создаем контэйнер*/
  const containerElement = document.createElement("div"); 
  containerElement.classList.add("container");

  /* создаем контент в который помещаем наш Hello world */
  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  /* создаем в нашем контейнере ссылку в виде крестика, при нажатии на которую будем возвращаться на стартовую страницу */
  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}

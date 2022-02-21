const inputField = document.querySelector(".input-form");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const listItemText = inputField.value;
  if (listItemText.length == 0) return alert("please fill in the form");
  const liElement = document.createElement("li");
  liElement.innerHTML = listItemText;
  list.appendChild(liElement);

  let totalLiElements = document.getElementsByTagName("li");
  totalLiElements = Array.prototype.slice.call(totalLiElements);
  totalLiElements.forEach((li, index) => {
    if ((index + 1) % 3 === 0) {
      li.style.color = "red";
    }
  });
});
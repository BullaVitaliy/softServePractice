const addButton = document.querySelector(".addButton");
let input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.innerHTML = "| edit";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "| remove";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));

    removeButton.addEventListener("click", () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
    if (!input.disabled) {
      localStorage.setItem("item", input.value);
    }
  }

  remove(item) {
    container.removeChild(item);
    localStorage.removeItem("item");
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    localStorage.setItem("item", input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

setInterval(() => {
  const date = new Date();
  const [hour, minutes, second] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  let currentTime = document.querySelector(".currentTime");
  currentTime.innerHTML = `${hour}:${minutes}:${second}`;
}, 1000);

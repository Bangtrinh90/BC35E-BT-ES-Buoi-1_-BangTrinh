let listColor = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let colorContainer = document.querySelector("#colorContainer");
let house = document.querySelector("#house");
let buttons = "";
listColor.forEach((item) => {
  buttons += `<button class="color-button ${item}"></button>`;
});
colorContainer.innerHTML = buttons;
colorContainer.querySelector("button").classList.add("active");

let button = colorContainer.querySelectorAll("button");

button.forEach((item) => {
  item.addEventListener("click", () => {
    colorContainer.querySelector(".active").classList.remove("active");
    item.classList.add("active");
    let color = item.classList[1];
    house.className = "house " + color;
  });
});

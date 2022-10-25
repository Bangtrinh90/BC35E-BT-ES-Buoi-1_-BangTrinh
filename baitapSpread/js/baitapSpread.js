let letter = document.querySelector(".heading");
let text = letter.innerText;

let textArr = [...text];
let span = "";
textArr.forEach((item) => {
  span += `<span>${item}</span>`;
});
letter.innerHTML = span;

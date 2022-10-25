let sum = (...score) => {
  let result = 0;
  score.forEach((item) => (result += item));
  return result / score.length;
};

let btnKhoi1 = document.getElementById("btnKhoi1");
btnKhoi1.addEventListener("click", () => {
  let toan = Number(document.getElementById("inpToan").value);
  let ly = Number(document.getElementById("inpLy").value);
  let hoa = Number(document.getElementById("inpHoa").value);
  let result1 = sum(toan, ly, hoa);
  document.getElementById("tbKhoi1").innerText = result1;
});

let btnKhoi2 = document.getElementById("btnKhoi2");
btnKhoi2.addEventListener("click", () => {
  let van = Number(document.getElementById("inpVan").value);
  let su = Number(document.getElementById("inpSu").value);
  let dia = Number(document.getElementById("inpDia").value);
  let english = Number(document.getElementById("inpEnglish").value);
  let result2 = sum(van, su, dia, english);
  document.getElementById("tbKhoi2").innerText = result2;
});

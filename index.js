const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const restBtn = document.getElementById("btn-rest");
let inputFeild1 = document.getElementById("input-1");
let inputFeild2 = document.getElementById("input-2");

let plus1 = 0;
let plus2 = 0;
btn1.addEventListener("click", function () {
  plus1 += 1;

  inputFeild1.value = plus1;
});
btn2.addEventListener("click", function () {
  plus1 += 2;

  inputFeild1.value = plus1;
});
btn3.addEventListener("click", function () {
  plus1 += 3;

  inputFeild1.value = plus1;
});

btn4.addEventListener("click", function () {
  plus2 += 1;
  inputFeild2.value = plus2;
});
btn5.addEventListener("click", function () {
  plus2 += 2;
  inputFeild2.value = plus2;
});
btn6.addEventListener("click", function () {
  plus2 += 3;
  inputFeild2.value = plus2;
});
restBtn.addEventListener("click", function () {
  plus1 = 0;
  plus2 = 0;
  inputFeild1.value = plus1;
  inputFeild2.value = plus2;
});

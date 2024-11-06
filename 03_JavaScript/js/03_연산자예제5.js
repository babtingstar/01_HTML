const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const rst = document.getElementById("result");

function sum() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const total = v1 + v2;
  rst.innerText = total;
}
function mul() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const total = v1 * v2;
  rst.innerText = total;
}
function evenOdd() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const sumResult = Number(v1) + Number(v2);
  const isEven = Number(sumResult % 2);
  rst.innerText =
    isEven == 0
      ? "합 " + sumResult + " 은(는) 짝수입니다"
      : "합 " + sumResult + " 은(는) 홀수입니다";
}

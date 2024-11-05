// 두 수가 같은 지 비교
const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

const in3 = document.getElementById("number3");
const in4 = document.getElementById("number4");
const r2 = document.getElementById("result2");

// javascript의 꽃 삼항연산자
// (두개의 값 비교) ? "true일 때 return" : "false일 때 return"

function 비교하기1() {
  r1.innerText = v1.value == v2.value ? "같습니다." : "같지 않습니다.";
  r1.style.color = v1.value == v2.value ? "orange" : "red";
  r1.style.backgroundColor = v1.value == v2.value ? "black" : "white";
}
function 비교하기2() {
  r2.innerText =
    in3.value > in4.value ? "좌측이 더 큽니다." : "우측이 좌측 이상입니다.";
  r2.style.color = in3.value > in4.value ? "yellowgreen" : "lightblue";
}

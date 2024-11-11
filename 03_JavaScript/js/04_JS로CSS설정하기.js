// 버튼 클릭 시 body 태그안에 있는 글자색과 배경색 변경
// CSS에서는 자바스크립트 기능을 작성할 수 없지만
// 자바스크립트에선 CSS 기능을 작성할 수 있음 (권장 X)
const 바디 = document.getElementById("cssStyle");

function darkMode() {
  바디.style.color = "white";
  바디.style.backgroundColor = "black";
}
function lightMode() {
  바디.style.color = "black";
  바디.style.backgroundColor = "white";
}

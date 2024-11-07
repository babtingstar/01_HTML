/*if - 양수인지 검사하기 */
const input1 = document.getElementById("input1");

function check1() {
  const v1 = Number(input1.value);
  if (v1 > 0) {
    alert("양수"); // v1 > 0 일 경우 실행
  }
  if (v1 <= 0) {
    alert("0이하");
  }
}

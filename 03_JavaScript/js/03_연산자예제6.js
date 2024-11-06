const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

function checkPw() {
  const pw = inputPw.value;
  const pwConfirm = inputPwConfirm.value;
  const pwData = "pass1234!";

  pw == pwData && pwConfirm == pwData
    ? alert("일치합니다.")
    : alert("일치하지 않습니다.");
}

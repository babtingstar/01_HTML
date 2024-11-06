const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMP = document.getElementById("inputMP");
const inputTP = document.getElementById("inputTP");
const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");

function login() {
  const pw = inputPw.value;
  const pwConfirm = inputPwConfirm.value;
  const pwData = "pass1234!";

  pw == pwData && pwConfirm == pwData
    ? alert("일치합니다.")
    : alert("일치하지 않습니다.");
}

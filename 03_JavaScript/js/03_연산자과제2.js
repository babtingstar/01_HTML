const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMP = document.getElementById("inputMP");
const inputTP = document.getElementById("inputTP");
const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
let userId = null;
let userPw = null;

function signup() {
  const MP = inputMP.value;
  const TP = inputTP.value;

  /*userId = inputId.value;
  userPw = inputPw.value;*/

  const MSG = document.getElementById("msg");
  MP || TP
    ? ((userId = inputId.value),
      (userPw = inputPw.value),
      (MSG.style.display = "none"))
    : (MSG.style.display = "block");
}

function login() {
  const logId = loginId.value;
  const logPw = loginPw.value;
  logId == userId && logPw == userPw
    ? alert("로그인 성공")
    : alert("로그인 실패");
}

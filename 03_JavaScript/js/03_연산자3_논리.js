//document.get_ 태그나 클래스명을 가져오는 설정은 맨 위에 작성
//단, value 제외

const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {
  const id = inputId.value;
  const pw = inputPw.value;
  const success = "로그인 성공.";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";
  id == "member01" && pw == "pass01" ? alert(success) : alert(fail);
}

function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg");

  pn || tn ? (msg.style.display = "none") : (msg.style.display = "block");
  /*pn == null || tell == null
    ? (msg.style.display = inline)
    : (msg.style.display = none);*/
}

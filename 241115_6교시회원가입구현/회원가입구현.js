function AgreePage_signUp() {
  const checkbox1 = document.getElementById("checkbox1").checked;
  const checkbox2 = document.getElementById("checkbox2").checked;
  const checkbox3 = document.getElementById("checkbox3").checked;

  const totalCheck = checkbox1 && checkbox2 && checkbox3;

  if (!totalCheck) {
    alert("모든 필수 약관에 동의해야 합니다.");
    return false;
  }
  window.location.href = "회원가입.html";
}

function signUpPage_signUp() {
  const userId = document.getElementById("user_id").value;
  const userPw = document.getElementById("user_pw").value;
  const userEmail = document.getElementById("user_email").value;

  const idRegExp = /^[a-zA-Z0-9]{5,12}$/;
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  /*
  (?=.*[A-Za-z]) : 영문자 있음?
  (?=.*\d) : 숫자 있음?
  */
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!idRegExp.test(userId)) {
    alert("아이디는 5~12자의 영문자 및 숫자여야 합니다.");
    return false;
  }
  if (!pwRegExp.test(userPw)) {
    alert("비밀번호는 영문자 + 숫자를 포함하여 8자 이상이여야 합니다.");
    return false;
  }
  if (!emailRegExp.test(userEmail)) {
    alert("이메일 형식이 틀렸습니다.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
  window.location.href = "메인.html";
}

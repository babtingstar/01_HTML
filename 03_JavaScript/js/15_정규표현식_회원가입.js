function signUp() {
  const inputId = document.getElementById("inputId").value;
  const inputPw = document.getElementById("inputPw").value;
  const inputPwCheck = document.getElementById("inputPwCheck").value;
  const inputName = document.getElementById("inputName").value;
  const gender = document.getElementsByName("inputGender").value;

  const hintMsg_Id = document.getElementById("hintMsg_Id");
  const hintMsg_Pw = document.getElementById("hintMsg_Pw");
  const hintMsg_PwCheck = document.getElementById("hintMsg_PwCheck");
  const hintMsg_Name = document.getElementById("hintMsg_Name");

  const idRegex = /^[a-zA-Z0-9_-]{6,16}$/;
  const pwRegex = /^[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  const nameRegex = /^[가-힇]{2,15}$/;

  let alertText = "";

  if (idRegex.test(inputId)) {
    alertText += inputId + "\n";
    hintMsg_Id.className = "success-msg";
  } else {
    alertText += "아이디 형식 오류" + "\n";
    hintMsg_Id.className = "error-msg";
  }

  if (pwRegex.test(inputPw)) {
    alertText += inputPw + "\n";
  } else {
    alertText += "비밀번호 형식 오류" + "\n";
  }

  if (inputPw == inputPwCheck.trim) {
    alertText += inputPwCheck + "\n";
  } else {
    alertText += "비밀번호 확인 오류" + "\n";
  }

  if (nameRegex.test(inputName)) {
    alertText += inputName + "\n";
  } else {
    alertText += "이름 형식 오류" + "\n";
  }

  if (gender == "남") {
    alertText += gender + "\n";
  } else if (gender == "여") {
    alertText += gender + "\n";
  } else {
    alertText += "성별 오류";
  }
}

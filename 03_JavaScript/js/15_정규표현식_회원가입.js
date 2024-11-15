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

  if (idRegex.test(inputId)) {
    hintMsg_Id.innerText = "양식에 맞게 입력하였습니다.";
    hintMsg_Id.className = "success-msg";
  } else {
    hintMsg_Id.className = "error-msg";
  }

  if (pwRegex.test(inputPw)) {
    hintMsg_Pw.innerText = "양식에 맞게 입력하였습니다.";
    hintMsg_Pw.className = "success-msg";
  } else {
    hintMsg_Pw.className = "error-msg";
  }

  if (inputPw.trim === inputPwCheck.trim) {
    hintMsg_PwCheck.innerText = "비밀번호와 일치합니다";
    hintMsg_PwCheck.className = "success-msg";
  } else {
    hintMsg_PwCheck.className = "error-msg";
  }

  if (nameRegex.test(inputName)) {
    hintMsg_Name.innerText = "양식에 맞게 입력하였습니다.";
    hintMsg_Name.className = "success-msg";
  } else {
    hintMsg_Name.className = "error-msg";
  }
}

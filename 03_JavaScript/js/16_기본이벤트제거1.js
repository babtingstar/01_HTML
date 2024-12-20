/*
        button onclick="제출(event)"
        event = 사용자가 버튼이라는 행동을 감지했을 때 작동하는 설정

        제출(매개변수) 매개변수에 어떤 동작이 들어왔는지 담는 변수명이기 때문에
        굳이 위에 있 이름과 맞춰서 작성할 의무 x
        */
function 제출(e) {
  e.preventDefault();
  const name = document.getElementById("id-name").value;
  const age = document.getElementById("id-age").value;
  const email = document.getElementById("id-email").value;

  // 정규식 패턴 설정
  const nameRegExp = /^[가-힇a-zA-Z]{2,32}$/;
  const ageRegExp = /^\d{1,3}$/;
  const emailRegExp = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]\.[a-zA-Z]{2,}$/;

  //유효성 검사 - 이름이부합하지 않을 때만 if를 사용
  //1. 이름
  if (!nameRegExp.test(name)) {
    alert.log("name 이/가 정규식에 부합하지 않습니다.");
    return false;
  }
  //2. 나이
  if (!ageRegExp.test(age)) {
    alert.log("age 이/가 정규식에 부합하지 않습니다.");
    return false;
  } else {
    if (age > 105) {
      alert("존재할 수 없는 나이입니다.");
      return false;
    }
  }
  //3. 이메일
  if (!emailRegExp.test(email)) {
    alert.log("email 이/가 정규식에 부합하지 않습니다.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
}

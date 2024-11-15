function checkEmail() {
  const userEmail = document.getElementById("user-email").value;
  const errorMsg = doc.getElementById("error-msg");
  /*
    /^                  : 정규식 시작
    [a-zA-z0-9.-_]      : @(at) 이전 작성 부분(아이디), 영어 대소문자, 숫자, 특수문자(. /- / _) 포함해서 작성 가능
    +@                  : 아이디 표기 뒤에 @(at) 이 와야 함
    [a-zA-Z0-9.-가-힇]  : @(at) 이후 작성 부분(도메인명)
    +\.                 : 도메인명 이후 .(period, dot)
    [a-zA-z가-힇]{2,}   : .(dot) 뒹 kr/com 등의 도메인명 작성
    $/;                 : 모든 각각의 자리에서 2글자 이상

    
    */
  const emailPattern =
    /^ [a-zA-z0-9.-_]+@[a-zA-Z0-9.-가-힇]+\.[a-zA-z가-힇]{2,}$/;
  if (!emailPattern.test(userEmail)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}
function checkPhone() {
  const userPhone = document.getElementById("user-phone").value;
  const errorMsg = document.getElementById("err-msg");

  const phonePattern = /^010\-[0-9]{4}\-[0-9]{4}$/;
  const phonePattern2 = /^010\-\d{4}\-\d{4}$/;
  if (!phonePattern.test(userPhone)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}

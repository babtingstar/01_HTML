function 정보확인하기() {
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const number = document.getElementById("user-number").value;

  //입력된 정보 밑에 작서안 글자 표기하기
  //document.getElementById("info-name").innerText = document.getElementById("info-name").value

  document.getElementById("info-name").innerText = name;
  document.getElementById("info-email").innerText = email;
  document.getElementById("info-number").innerText = number;

  alert(
    "입력된 정보는" +
      "\n" +
      name +
      "\n" +
      email +
      "\n" +
      number +
      "\n" +
      " 입니다."
  );
}

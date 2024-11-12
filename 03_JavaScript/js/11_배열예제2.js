function selectMenu() {
  const menuResult = document.getElementById("menuResult");

  const 메뉴들 = [
    "돈까스",
    "깐풍기",
    "햄버거",
    "멸치국수",
    "마파두부",
    "샌드위치",
    "볶음밥",
    "순대국밥",
  ];
  /*
    Math.floor() : 소수점 이하 내림해서 정수를 반환
    Math.ceil() : 소수점 이하 올림해서 정수를 반환
    Math.round() : 소수점 이하 첫 째 자리에서 반올림해서 정수를 반환
    Math.random() : 0이상 1미만의 랜덤한 소수(실수) 반환 (0.00...01 ~ 0.999...9)
    */
  const 랜덤숫자 = Math.floor(Math.random() * 메뉴들.length);
  /* 
    random()*length : 랜덤 소수 x 메뉴 길이 = 메뉴 길이의 배수
    floor(r*l) : 이후후 소수점 버리기
    */
  console.log("메뉴들[" + 랜덤숫자 + "] = " + 메뉴들[랜덤숫자]);
  menuResult.innerText = 메뉴들[랜덤숫자];
}

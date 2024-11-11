function check1() {
  let val; // undefined = 값 없음

  /*
    while 문을 이용해서 취소를 누르기 전까지 반복
    취소를 누르면 반복하지 않겠다 설정
    prompt 버튼 확인 = 빈 값이 초기에 들어있음
    prompt 버튼 취소 null 값이 버튼안에 들어있음
  */
  while (val !== null) {
    // val 이 빈 값이 아닐때
    /*
        == 값과 자료형이 모두 다른 경우 true
        === 값과 자료형이 모두 같은 경우 true
    */
    val = prompt("입력 후 확인하기");
    // 확인 → 입력한 값
    // 취소 → null
    alert(val + " 값을 확인했습니다.");
  }
}

function check2() {
  let age;

  while (age !== null) {
    age = prompt("나이를 입력하세요.");
    if (age >= 18) {
      alert("성인입니다.");
    } else if (age >= 13) {
      alert("청소년입니다.");
    } else {
      alert("어린이입니다.");
    }
  }
}

function check3() {
  let gender;

  while (gender !== null) {
    gender = prompt("성별을 입력하세요");
    if (gender == "여자") {
      alert("여자입니다.");
    } else if (gender == "남자") {
      alert("남자입니다.");
    } else {
      alert("잘못 입력했습니다. 다시 입력해주세요.");
    }
  }
}

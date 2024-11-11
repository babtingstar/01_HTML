function selectMenu() {
  let choice;
  const result = document.getElementById("result");
  while (choice !== null) {
    choice = prompt("메뉴 번호를 입력해주세요. \n 1, 2, 3");

    switch (choice) {
      case "1":
      case "아메리카노": //input 입력은 text라 문자열로 취급해줘야함
        result.innerText = "아메리카노를 선택하셨습니다.";
        console.log("아메리카노 선택함");
        return;

      case "2":
      case "카페라떼":
        result.innerText = "카페라떼를 선택하셨습니다.";
        console.log("카페라떼 선택함");
        return;

      case "3":
      case "프라푸치노":
        result.innerText = "프라푸치노를 선택하셨습니다.";
        console.log("프라푸치노 선택함");
        return;

      case "종료":
        result.innerText = "주문을 종료합니다.";
        return;

      default:
        result.innerText = "잘못된 입력입니다. 다시 선택해주세요.";
        console.log("잘못 선택함");
        return;
    }
  }
}

function selectMenu2() {
  let choice2;
  const result2 = document.getElementById("result2");
  const selecting = document.getElementById("selecting").value;

  switch (selecting) {
    case "아메리카노":
      result2.innerText = "아메리카노2";
      return;
    case "카페라떼":
      result2.innerText = "카페라떼2";
      return;
    case "프라푸치노":
      result2.innerText = "프라푸치노2";
      return;
  }
}

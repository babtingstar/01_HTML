function gender() {
  let gdr = prompt("성별을 입력해주세요. (남성/여성 만 입력 가능)");

  switch (
    gdr //어떤 조건이 도착했을 때
  ) {
    case "남성": // 조건이 부합하는게 남성 일 때
      alert("남성을 입력했네요.");
      break; //break 작성
    /*
      case 뒤에 break나 return 문을 작성하지 않으면
      뒤의 case 들의 의미가 사라짐
      case "남성"에 부합하는 조건을 실행한 후 확인해보면
      case "남성"밑에 있는 case와 default의 구분 관계없이 모든 코드가 실행됨
     
      break나 return 으로 switch 문에서 탈출해야함
      */
    case "여성":
      alert("여성을 입력했네요.");
      break;
    default:
      alert("올바른 성별을 입력해주세요. 남성/여성");
      break;
  }
}

function order() {
  let menu;

  while (menu !== null) {
    menu = prompt(
      "메뉴를 입력해 주세요. \n 삼겹살, 부대찌개, 김치찌개, \n 만 입력가능\n 종료 작성하면 메뉴선택 종료됩니다."
    );
    switch (menu) {
      case "삼겹살":
        alert("삼겹살을 선택하셨습니다. \n가격은 12,000원 입니다.");
        break;
      case "부대찌개":
        alert("부대찌개를 선택하셨습니다. \n가격은 10,000원 입니다.");
        break;
      case "김치찌개":
        alert("김치찌개 선택하셨습니다. \n가격은 9,000원 입니다.");
        break;
      case "종료":
        alert("주문이 종료되었습니다.");
        return; // break 대신에 return 문 작성
      default:
        alert(
          "잘못 입력하셨습니다. \n올바른 메뉴를 서낵하세요. \n (예) 삼겹살"
        );
    }
  }
}

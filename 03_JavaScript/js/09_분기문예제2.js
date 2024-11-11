// let 값을 넣지 않고 선언 가능(변수)
// const 값을 넣지 않고 선언 불가능(상수)

function selectSeason() {
  let season;
  const result = document.getElementById("result");
  const bd = document.getElementById("bd");

  while (season != null) {
    season = prompt("1~12 숫자 입력");

    switch (season) {
      case "3":
      case "4":
      case "5":
        result.innerText = "봄";
        bd.style.backgroundColor = "lightpink";
        break;

      case "6":
      case "7":
      case "8":
        result.innerText = "여름";
        bd.style.backgroundColor = "lightyellow";

        break;

      case "9":
      case "10":
      case "11":
        result.innerText = "가을";
        bd.style.backgroundColor = "sandybrown";

        break;

      case "12":
      case "1":
      case "2":
        result.innerText = "겨울";
        bd.style.backgroundColor = "lightblue";

        break;

      case "종료":
        result.innerText = "종료";
        bd.style.backgroundColor = "white";
        return;

      default:
        result.innerText = "잘못입력";
        bd.style.backgroundColor = "";
        break;
    }
  }
}

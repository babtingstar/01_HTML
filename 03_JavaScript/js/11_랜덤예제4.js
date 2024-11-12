function pickFruit() {
  const arrF = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "딸기",
    "파인애플",
    "블루베리",
    "복숭아",
  ];

  // 과일 총 개수
  const result = document.getElementById("result");

  // index 5 에 있는 과일 이름 출력
  console.log("과일 총 갯수 : " + arrF.length);
  console.log("index 5에 위치한 과일 : " + arrF[5]);

  //floor를 주로 쓰는 이유 : 5.5 등에서 6이 나오면 빈 값이 출력되기 때문
  const randNum = Math.floor(Math.random() * arrF.length);
  result.innerText = randNum + "번째 arr : " + arrF[randNum];

  //"" 나 ''로 문자열과 변수명을 구분하지 않고 한 번에 작성하는 방법
  // `text ${변수명}`
  result.innerText = `${randNum}  번째 arr :   ${arrF[randNum]}`;
}

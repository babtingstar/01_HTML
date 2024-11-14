function selectFruit() {
  const result = document.getElementById("result");
  const fruitNumber = Number(document.getElementById("fruitNumber").value);
  const fruitArray = ["사과", "오렌지", "바나나", "체리", "망고"];

  if (fruitNumber >= 1 && fruitNumber <= 5) {
    switch (fruitNumber) {
      case 1:
        result.innerText = fruitArray[0];
        break;
      case 2:
        result.innerText = fruitArray[1];
        break;

      case 3:
        result.innerText = fruitArray[2];
        break;

      case 4:
        result.innerText = fruitArray[3];
        break;

      case 5:
        result.innerText = fruitArray[4];
        break;
    }
  } else {
    result.innerText = `숫자를 입력해주세요!`;
  }
}

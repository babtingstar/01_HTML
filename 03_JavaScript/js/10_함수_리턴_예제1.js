/*
      function 의 위치나 수서는 코딩을 실행하는데 있어 어디에 있든 상관이 없음
      const let으로 작성한 것은순서 상관이 있기 때문에 script 맨 위에 작성하는 것이 좋음
      */

//차의 가격을 확인하는 반환하는 함수
function 차가격(model) {
  if (model === "소나타") {
    return 1000;
  }
  if (model === "아반떼") {
    return 1100;
  }
  if (model === "제네시스") {
    return 1200;
  }
}
function 차구매(model) {
  const price = 차가격(model);
  document.getElementById("result").innerText =
    model + " 구매가 완료되었습니다. 가격은 " + price + " 입니다.";
}

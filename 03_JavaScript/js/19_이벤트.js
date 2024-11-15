// js에서 선언한 이름 - html에서 id로 작성된 요소 가져오기
const divBtn = document.getElementById("divBtn");

/*
이벤트 모델 작성 방법

요소.addEventListener("이벤트종류", 이벤트핸들러(함수));
*/

divBtn.addEventListener("click", function () {
  alert("클릭되었습니다.");
});

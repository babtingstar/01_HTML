function checkAge() {
  const age = Number(document.getElementById("age").value);
  const msg = document.getElementById("ageMsg");

  if (age >= 18) {
    msg.innerText = "관람 가능합니다.";
    // msg.style.color = "green";
    // msg.style.backgroundColor = "lightpink";
    msg.className = "success"; // <p>태그에 class=success 표기 추가
  } else {
    msg.innerText = "18세 이상만 관람 가능합니다.";
    // msg.style.color = "red";
    // msg.style.backgroundColor = "orange";
    msg.className = "fail"; // <p>태그에 class=fail 표기 추가
  }
}

/*
className과 style js 속성 차이점

변수명.className = css 스타일 태그 안에 작성된 css 클래스 속성 불러오기 실행

변수명.style.속성(bgc, color, fontsize ...) = 스타일 2순위
변수명.className 보다 스타일 적용 우선순위가 높기 때문에 사용 자제


조건문에서 변수명.className으로 시작했다면 다른 {} 안에도 className으로 맞춰줄 것
*/

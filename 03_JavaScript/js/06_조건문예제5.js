function checkSeason() {
  const number = Number(document.getElementById("month").value);
  const msg = document.getElementById("seasonMsg");
  if (number < 1 || number > 12) {
    msg.innerText = "1 에서 12 사이의 숫자를 입력하세요.";
  } else if (number >= 3 && number <= 5) {
    msg.innerText = "봄입니다.";
    msg.className = "spring";
  } else if (number >= 6 && number <= 8) {
    msg.innerText = "여름입니다.";
    msg.className = "summer";
  } else if (number >= 9 && number <= 11) {
    msg.innerText = "가을입니다.";
    msg.className = "fall";
  } else {
    msg.innerText = "겨울입니다.";
    msg.className = "winter";
  }
}

function reset() {
  const msg = document.getElementById("seasonMsg");
  msg.innerText = "";
  msg.className = "";
}

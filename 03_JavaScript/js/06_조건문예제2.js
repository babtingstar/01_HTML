function checkScore() {
  const score = Number(document.getElementById("score").value);
  const msg = document.getElementById("scoreMsg");
  if (score >= 60) {
    msg.innerText = "합격입니다.";
    msg.className = "success";
  } else {
    msg.innerText = "불합격입니다.";
    msg.className = "fail";
  }
}

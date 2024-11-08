function checkGrade() {
  const score = Number(document.getElementById("inputScore").value);
  const msg = document.getElementById("gradeMsg");

  msg.innerText = "성적 : ";
  if (score > 100) {
    msg.innerText += "error";
    msg.className = "Error";
  } else if (score >= 90) {
    msg.innerText += "A";
    msg.className = "A";
  } else if (score >= 80) {
    msg.innerText += "B";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText += "C";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText += "C";
    msg.className = "D";
  } else if (score >= 0) {
    msg.innerText += "F";
    msg.className = "F";
  } else {
    msg.innerText += "error";
    msg.className = "Error";
  }
}

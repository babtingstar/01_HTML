function check4() {
  const age = Number(document.getElementById("inputAge").value);

  if (age >= 0 && age <= 13) {
    alert("어린이 입니다.");
  } else if (age <= 120 && age >= 19) {
    alert("성인 입니다.");
  } else if (age >= 14 && age <= 18) {
    alert("청소년 입니다.");
  } else {
    // age < 0 || age > 120
    alert("잘못 입력했습니다.");
  }
}

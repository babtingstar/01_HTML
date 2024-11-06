//초기 값 설정하는 count 세팅
let count = 0;
const bd = document.getElementById("bd");

function 증가() {
  count += 1;
  document.getElementById("count").innerText = count;
  bd.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}

function 감소() {
  count -= 1;
  const cnt = document.getElementById("count");
  cnt.innerText = count;
  document.getElementById("count").innerText = count;
  cnt.style.color = count % 2 == 0 ? "orange" : "black";
}

function 초기화() {
  count = 0;
  document.getElementById("count").innerText = count;
}

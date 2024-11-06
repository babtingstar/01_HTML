//input에 작성한 값은 value라는 속성으로 작성된 값 가져오기를 할 수 있음
//javascript에서 가져오기 기능을 value 라는 이름으로 작성한 것

/*
변경이 되는 숫자를 담는 공간
변경이 되는 숫자를 담을 때는 const가 아니라 let을 사용
const는 상수야 병신아


const/new/let varname = value;
*/
const result = document.getElementById("result1");
const input = document.getElementById("input1");
let count = 0;

function minus() {
  const vl = Number(input.value);
  count -= vl;
  result.innerText = count;
}

function plus() {
  const vl = Number(input.value);
  count += vl;
  result.innerText = count;
}

function mul() {
  const vl = Number(input.value);
  count *= vl;
  result.innerText = count;
}

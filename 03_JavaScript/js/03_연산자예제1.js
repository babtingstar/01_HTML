//javascript로 설정한 ㄴ값을 확인하는 방법
/*
console.log(확인하고자 하는 변수명)

컴퓨터에서 콘솔에 괄호() 내부의 값을 기록(출력)

const 변수명 = 들어온 값;
*/
//1. 문서 내에 input1 2 3 calcresult 요소를 가져오기 const 설정

const number1 = document.getElementById("input1"); // input1
const number2 = document.getElementById("input2"); // input2
const number3 = document.getElementById("input3"); // input3
const result = document.getElementById("calcResult"); // calcResult

console.log(" ## function 이전 ## ");
console.log("값 1 : " + value1);
console.log("값 2 : " + value2);
console.log("값 3 : " + value3);

// 각 number 1 2 3 - input1 2 3 value를 가지고 오기
/*
const value1, 2, 3을 function() 밖에 작성하면 안되는 이유
function() 이 시작되기 전에 작성되면 안에 있는 값 0 할당
*/
const value1 = number1.value; // value1 = 0, 아무것도 적히지 않은 input값을 가져옴
const value2 = number2.value; // value2 = 0
const value3 = number3.value; // value3 = 0
//javascript로 설정한 값을 확인하는 방법

function plus() {
  // plus() 버튼을 누르면 input 안에 작성한 값을 새로 가져오기를 실행
  const value1 = number1.value; //plus() 버튼을 눌렀을 때 input에서 사용자가 작성한 값을 가져오기
  const value2 = number2.value;
  const value3 = number3.value;
  console.log(" ## plus function 이후 ##");
  console.log("값 1 : " + value1);
  console.log("값 2 : " + value2);
  console.log("값 3 : " + value3);
  result.innerText = Number(value1) + Number(value2) + Number(value3);
}
function multi() {
  const value1 = number1.value;
  const value2 = number2.value;
  const value3 = number3.value;
  console.log(" ## multi function 이후 ##");
  console.log("값 1 : " + value1);
  console.log("값 2 : " + value2);
  console.log("값 3 : " + value3);
  result.innerText = Number(value1) * Number(value2) * Number(value3);
}

//변수를 선언해서 기능 만들기
//document(html 파일 안에서) getElement(요소를 가져오다) ById(일치하는ID)
//= HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어온다
const 숫자1 = document.getElementById("input1");
const 숫자2 = document.getElementById("input2");
const 결과 = document.getElementById("계산결과");
//숫자1 숫자2에 더한 값을 보여주는 더하기 기능 설정
function 더하기() {
  //input 태그에 작성된 값 = value
  숫자1.value;
  숫자2.value;

  //두 수의 합을 아이디가 "계산결과"인 요소에
  //내부글자(innerText)로 넣어주기

  //숫자1의 값과 숫자2의 값을 더해줌
  /*
  input 에서 type을 number로 설저앻도
  input 태그 안에서 작성된 값은 무조건 글자 형식
  type = number는 가나다 ABC와 같은 문자작성을 못하게 막아주는 역할을 할 뿐
  
  [해결방법]
  문자 → 숫자로 변경하기 (데이터 파싱)
  

  */
  결과.innerText = Number(숫자1.value) + Number(숫자2.value);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@이거왜안됨@@@@@@@@@@@@@@@@@@@@@@@@@@@
function 빼기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = Number(value1) - Number(value2);
}

/*
function 빼기() {
  숫자1.value;
  숫자2.value;
  결과.innerText = Number(숫자1.value) - Number(숫자2.value);
}
*/
function 곱하기() {
  숫자1.value;
  숫자2.value;
  결과.innerText = Number(숫자1.value) * Number(숫자2.value);
}

function 몫() {
  숫자1.value;
  숫자2.value;
  결과.innerText = Number(숫자1.value) / Number(숫자2.value);
}
function 나머지() {
  숫자1.value;
  숫자2.value;
  결과.innerText = Number(숫자1.value) % Number(숫자2.value);
}

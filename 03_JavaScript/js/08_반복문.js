function check1() {
  /*
    for(초기식; 조건식; 증감식;)
    { 조건식이 true 인 경우 반복 수행하는 코드 }
    */
  let result = "";
  for (let numb = 1; numb <= 5; numb++) {
    console.log("결과 : " + numb);
    result += numb;
  }

  //numb++ 은 numb+=1 과 동일함
  console.log("====================");
  console.log("최종으로 출력되는 결과값은");
  console.log(result + " 입니다.");
}

function check2() {
  for (let a = 1; a <= 10; a++) {
    console.log("1~10 : " + a);
  }
}

function check3() {
  for (let c = 1; c <= 20; c++) {
    console.log(c);
  }
}

function check4() {
  let d_result = "";
  for (let d = 5; d <= 15; d++) {
    console.log(d);
    d_result += d;
  }
  alert(d_result);
}

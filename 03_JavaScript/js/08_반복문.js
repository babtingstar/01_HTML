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

function while1() {
  let a = 0;
  while (a <= 5) {
    alert(a);
    a++;
  }
}

function while2() {
  let abc = 0;
  let result = 0;
  while (abc <= 10) {
    abc++;
    console.log(abc);
    result += abc;
  }
}

function while3() {
  let abc = 0;
  let result = 0;
  while (1 <= 10) {
    abc++;
    console.log(abc);
    result += abc;
    if (abc == 5) {
      break;
    }
  }
}

function while4() {
  let xyz = 0;
  while (xyz <= 20) {
    xyz++;
    console.log(xyz);
  }
}

function while5() {
  let a = 5;
  while (a >= 20) {
    console.log(a);
    if (a == 15) {
      break;
    }
  }
}

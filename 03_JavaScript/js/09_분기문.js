function check1() {
  let result = 0;
  for (let a = 1; a <= 10; a++) {
    result += a;
  }
  alert(result);
}

function check2() {
  let result = 0;
  for (let a = 1; a <= 20; a++) {
    result += a;
    if (a == 15) {
      break;
    }
  }
  alert(result);
}

function check3() {
  for (let a = 1; a <= 20; a++) {
    console.log(a);
    if (a % 3 == 0) {
      break;
    }
  }
}

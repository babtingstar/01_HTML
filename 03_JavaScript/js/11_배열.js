function check1() {
  //배열 선언 방법 확인
  const arr1 = new Array();
  const arr2 = [];

  //arr1, arr2는 동일하게 빈 배열을 생성함
  //java에서는 arr1 js에서는 arr2 방법 선호

  const arr3 = new Array(3); // 비어있는 3칸짜리 배열 생성
  const arr4 = ["홍길동", "박철수", "강영식"];

  //배열명.length : 배열의 길이(배열의 칸 수 또는 배열에 저장된 데이터의 수 확인 가능)
  let num = arr4.length; // num = 3
  alert(num);

  /*
  const arr = new[]; → new x
  const arr = new Array();
  */

  /*
  배열의 index

  - 배열의 각 칸을 구분하는 번호
  - 0 부터 시작
  - 중간에 번호를 건너뛰거나 중간의 번호를 생략할 수 없다(연속적)
  - 마지막 index == 배열길이-1
  */

  const arr5 = ["A", "B", "C", "D", "E"];

  //index 사용하는 방법
  // "A" 는 index의 0번째

  console.log("arr5의 0번째 값은 : " + arr5[0]); // A
  console.log("arr5의 1번째 값은 : " + arr5[1]); // B
  console.log("arr5의 2번째 값은 : " + arr5[2]); // C
  console.log("arr5의 3번째 값은 : " + arr5[3]); // D
  console.log("arr5의 4번째 값은 : " + arr5[4]); // E
  console.log("arr5의 5번째 값은 : " + arr5[5]); // Error

  const arr6 = []; // 빈 공간 생성

  // 빈 배열에 값 집어넣기
  arr6[0] = 100;
  arr6[1] = "낙엽이 떨어진다.";
  arr6[2] = true;

  //JS 배열의 특징) 인덱스별로 자료형을 다르게 넣을 수 있다.

  const arr7 = [];
  arr7[1] = 200; // arr7[0] 은 undefined 생성
  // == arr7 = [ ___, 200];
  arr7[3] = "하늘색";
  // == arr7 = [ ___, 200, ___,"하늘색"]; 0번째와 2번재는 빈 공간
}

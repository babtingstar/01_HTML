function submitForm() {
  //필수 약관 동의 확인
  const serviceChecked = document.getElementById("service").checked;
  const privacyChecked = document.getElementById("privacy").checked;
  const marketingChecked = document.getElementById("marketing").checked;

  /*
    if(serviceChecked && privacyChecked){
        alert("두개다 선택하셨네요.")
    }
    else{ // !serviceChecked && !privacyChecked
        alert("모든 필수 약관에 동의해주세요.")
    }
    */

  // !serviceChecked : 서비스 약관에 동의하지 않음
  // !privacyChecked : 개인 정보 보호 약관에 동의하지 않음
  // && : 모든 필수 약관에 체크를 안해야지 alert 발생

  // || 둘 중 하나라도 필수 약관에 체크를 하지 않아싿면 모두 체크하라는 표기가 보여질 것
  // serviceChecked 가 false 인 경우 느낌표를 붙이면 true로 변경해줌

  if (!serviceChecked || !privacyChecked) {
    alert("모든 필수 약관에 동의해주세요.");
    return;
  }

  //선택된 취미를 배열로 저장하는 for문 사용
  let hchecked = document.querySelectorAll(".hobby");
  let hobbies = "";
  let count = 0;
  for (let i = 0; i < hchecked.length; i++) {
    hobbies += hchecked[i].value + " "; // 선택한 취미를 모두 이어 붙임
    count++; // 취미 개수가 증가
  }

  //결과 표시
  const result = document.getElementById("result");
  if (count > 0) {
    result.innerText = `선택된 취미 : ${hobbies} \n 선택된 취미 개수 : ${count}`;
  } else {
    result.innerText = `선택된 취미가 없습니다.`;
  }
}

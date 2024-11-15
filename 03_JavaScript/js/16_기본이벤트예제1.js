function 동의버튼() {
  const agree1 = document.getElementById("동의1").checked;
  const agree2 = document.getElementById("동의2").checked;
  const agree3 = document.getElementById("동의3").checked;

  const agreeAll = agree1 && agree2 && agree3;
  document.getElementById("signBtn").disabled = !agreeAll;
}

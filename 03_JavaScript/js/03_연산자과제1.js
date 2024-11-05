class(){

    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const result = document.getElementById("res");
    
    const comp = (n1>n2) ? "첫 번째 숫자가 더 큽니다." : "두 번째 숫자가 더 크거나 같습니다.";
    const add = n1 + n2;
    const mul = n1 * n2;
    const sub = n1 - n2;

    result.innerText = add + "\n" + mul + "\n" + sub;

    
}

//계산 결과를 result.innerText로 보여주기
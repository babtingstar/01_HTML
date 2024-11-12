function order(orderName) {
  const result = document.getElementById("result");
  const cost = orderCost(orderName);
  switch (orderName) {
    case "비빔밥":
      result.innerText =
        orderName + " 주문이 완료되었습니다." + "\n가격은 " + cost + "입니다.";
      break;
    case "김치찌개":
      result.innerText =
        orderName + " 주문이 완료되었습니다." + "\n가격은 " + cost + "입니다.";
      break;
    case "된장찌개":
      result.innerText =
        orderName + " 주문이 완료되었습니다." + "\n가격은 " + cost + "입니다.";
      break;
    case "청국장":
      result.innerText = orderName + "은 재료 소진으로 주문이 불가능합니다.";
      break;
  }
}
function orderCost(orderName) {
  switch (orderName) {
    case "비빔밥":
      return 8000;
    case "김치찌개":
      return 7000;
    case "된장찌개":
      return 7000;
    case "청국장":
      return 0;
  }
}

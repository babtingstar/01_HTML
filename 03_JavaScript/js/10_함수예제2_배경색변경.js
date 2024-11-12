function 색상변경(colorInput) {
  const bd = document.getElementById("bd");
  switch (colorInput) {
    case "lightblue":
      bd.style.backgroundColor = "lightblue";
      break;
    case "lightcoral":
      bd.style.backgroundColor = "lightcoral";
      break;
    case "lightyellow":
      bd.style.backgroundColor = "lightyellow";
      break;
    case "lightgreen":
      bd.style.backgroundColor = "lightgreen";
      break;
    case "lightgrey":
      bd.style.backgroundColor = "lightgrey";
      break;
  }
}

const result = document.getElementById("result");
const operation = document.getElementById("operators");
let calculate;

operation.addEventListener("click", (event) => {
  console.log(event.target.id);
  const btn = event.target.id;
  let val1 = parseFloat(document.getElementById("nr1").value);
  let val2 = parseFloat(document.getElementById("nr2").value);

  switch (btn) {
    case "btn-sum":
      calculate = val1 + val2;
      break;
    case "btn-sub":
      calculate = val1 - val2;
      break;
    case "btn-mul":
        calculate = val1 * val2;
      break;
    case "btn-div":
        calculate = val1 / val2;
      break;
    case "btn-mod":
        calculate = val1 % val2;
      break;
    case "btn-clear":
      document.getElementById("nr1").value = " ";
      document.getElementById("nr2").value = " ";
      break;
    default:
      text = "UPS🤔";
  }

  // if (btn === 'btn-sum'){
  //     calculate = val1 + val2
  // }
  // else if (btn === 'btn-sub'){
  //     calculate = val1 - val2
  // }
  // else if (btn === 'btn-mul'){
  //      calculate = val1 * val2
  // }
  // else if (btn === 'btn-div'){
  //      calculate = val1 / val2
  // }
  // else if (btn === 'btn-mod'){
  //      calculate = val1 % val2
  //  }
  // else (btn === 'btn-clear');{
  //     document.getElementById('nr1').value = ' '
  //     document.getElementById('nr2').value = ' '
  // }
  console.log(calculate);
  result.textContent = calculate;
});

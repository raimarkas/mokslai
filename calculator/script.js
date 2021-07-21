let val1 = parseFloat(document.getElementById('nr1').value)
let val2 = parseFloat(document.getElementById('nr2').value)
const data = document.getElementById('resultData')
const operation = document.querySelectorAll('#operators')
let calculate

operation.forEach(button => {
    button.addEventListener('click', event => {
    console.log( event.target.id );

    if (event.target.id === 'btn-sum'){
        calculate = val1 + val2
        console.log(calculate)}
    else if (event.target.id === 'btn-sub'){
        calculate.value = val1 - val2
        console.log(calculate)}
    else if (event.target.id === 'btn-mul'){
         calculate = val1 * val2
    }
    else if (event.target.id === 'btn-div'){
         calculate = val1 / val2
    }
    else if (event.target.id === 'btn-mod'){
         calculate = val1 % val2
     } 
    else (event.target.id === 'btn-clear');{
        document.getElementById('nr1').value = ' '
        document.getElementById('nr2').value = ' '
    }
    console.log(calculate)
   });
});
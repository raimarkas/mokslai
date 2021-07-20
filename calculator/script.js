let val1 = parseInt(document.getElementById('nr1').value)
let val2 = parseInt(document.getElementById('nr2').value)
const operation = document.getElementById('operators')
let calculate

const buttons = document.querySelectorAll('#operators')
buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log( event.target.id );
        resultData.appendChild(Calculation).value
   });
});

function Calculation(){
    if (buttons.target.id === 'btn-sum'){
        calculate = val1 + val2
    } else if (buttons.target.id === 'btn-sub'){
        calculate = val1 - val2
    } else if (buttons.target.id === 'btn-mul'){
        calculate = val1 * val2
    } else if (buttons.target.id === 'btn-div'){
        calculate = val1 / val2
    } else if (buttons.target.id === 'btn-mod'){
        calculate = val1 % val2
    } else (buttons.target.id === 'btn-clear');{
        document.getElementById('nr1, nr2').value = ''
}}

resultData.appendChild(calculate).value
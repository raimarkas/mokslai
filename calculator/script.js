let val1 = parseInt(document.getElementById('nr1').value)
let val2 = parseInt(document.getElementById('nr2').value)
const operation = document.getElementById('operators')
let calculate

const buttons = document.querySelectorAll('#operators')
buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log( event.target.id );
   });
});

function Calculation(){
    if (buttons.target === 'btn-sum'){
        calculate = val1 + val2
    } else if (buttons === 'btn-sub'){
        calculate = val1 - val2
    } else if (buttons === 'btn-mul'){
        calculate = val1 * val2
    } else if (buttons === 'btn-div'){
        calculate = val1 / val2
    } else if (buttons === 'btn-mod'){
        calculate = val1 % val2
    } else (buttons === 'btn-clear');{
        document.getElementById('result').value = ''
}}

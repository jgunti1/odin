// Variables
var numOne = 0;
var numTwo= 0;
var operator;
const buttons = document.querySelectorAll('button');
var total;
var calcScr = document.getElementById('calc-screen');

/* Math Functions*/
function add(numOne,numTwo) {
    return numOne + numTwo;
}
function subtract(numOne,numTwo) {
    return numOne - numTwo;
}
function multiply(numOne,numTwo) {
    return numOne * numTwo;
}
function divide(numOne,numTwo) {
    return numOne / numTwo;
}

//Operator function
function operate(numOne,numTwo,operator) {
    if (operator == '+'){
        add(numOne,numTwo);
    }
    if (operator == '-') {
        subtract(numOne,numTwo);
    }
    if (operator == '*') {
        multiply(numOne,numTwo);
    }
    if (operator == '/') {
        divide(numOne,numTwo);
    }
}

function clear() {
    calcScr.textContent = '0';
}

buttons.forEach(function (i){
    i.addEventListener('click',function(){
        if (numTwo == 0){
            numOne += i.value;
            calcScr.value = Number(numOne);
        }
        else if (operator != null && numOne != 0){
            numTwo += i.value;
            calcScr.value += operator;
            calcScr.value += numTwo;
        }
        
    })
})
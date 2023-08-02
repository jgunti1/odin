// Variables
var numOne = 0;
var numTwo= 0;
var operator;
const buttons = document.querySelectorAll('button');
var total;
var calcScr = document.getElementsByClassName('calculator-screen');
var displayValue = parseInt(calcScr[0].value);

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

buttons.forEach(function (i){
    i.addEventListener('click',function(){
        if (isNaN(i.value) == false){
            numOne = i.value;
            displayValue += numOne;
            calcScr.value = displayValue;
            
        }
        else if (i.value == '-' || i.value =='+' ||i.value =='/' || i.value == '*')
        {
            total = calcScr[0].value;
            operator = i.value;
            console.log(operator);
        }
        
    })
})
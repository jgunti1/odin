// Variables
var numOne = 0;
var numTwo= 0;
var operator = "";
const buttons = document.querySelectorAll('button');
var total;
var first = '';
var second = '';
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
console.log(add(1.2, 2));
//Operator function
function operate(numOne,numTwo,operator) {

    if (operator == '+'){
        return add(numOne,numTwo);
    }
    if (operator == '-') {
        return subtract(numOne,numTwo);
    }
    if (operator == '*') {
        console.log(numOne);
        console.log(numTwo);
        return multiply(numOne,numTwo);
    }
    if (operator == '/') {
        return divide(numOne,numTwo);
    }
}

function populateScreen(pop) {
    if (document.getElementById('calculator-screen').value == "0" && pop != 'all-clear' ){
        document.getElementById('calculator-screen').value = pop;
        first = pop;
    }
    else {
        if (pop == '+' || pop == '-' || pop == '/' || pop == '*' && operator == '') {
            document.getElementById('calculator-screen').value += pop;
            operator = pop;

        }
        else if (pop == '=') {
            total = operate(parseFloat(first), parseFloat(second), operator);
            document.getElementById('calculator-screen').value = total;
            first = total; 
            second = ''
            operator = '';

        }
        else if (pop == 'all-clear'){
            document.getElementById('calculator-screen').value = "0";
            first = "";
            second = "";
        }
        else if (pop == '.') {
            document.getElementById('calculator-screen').value += pop;
            document.getElementsByClassName("decimal")[0].disabled = true;
        }
        else if (operator == '') {
            document.getElementById('calculator-screen').value += pop;
            first += pop;
        }
        else {
            document.getElementById('calculator-screen').value = pop;
            second += pop;
            document.getElementsByClassName("decimal")[0].disabled = false;
        }
    }
}

function isNumber(value) {
    return !isNaN(value) && isFinite(value);
  }

buttons.forEach(function (i){
    i.addEventListener('click',function(){
        if (isNaN(i.value) == false){
            populateScreen(i.value);
        }
        else {
            populateScreen(i.value);
        }
    })
})
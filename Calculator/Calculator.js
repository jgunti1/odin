// Variables
var numOne = 0;
var numTwo= 0;
var operator = "";
const buttons = document.querySelectorAll('button');
var total;
var first = '';
var second = '';
var calcScreen = document.getElementById('calculator-screen').value;
var start = true; 
/* Math Functions*/
function add(numOne,numTwo) {
    return (numOne + numTwo).toPrecision(7);
}
function subtract(numOne,numTwo) {
    return (numOne - numTwo).toPrecision(7);
}
function multiply(numOne,numTwo) {
    return (numOne * numTwo).toPrecision(7);
}
function divide(numOne,numTwo) {
    return (numOne / numTwo).toPrecision(7);
}

//Operator function
function operate(numOne,numTwo,operator) {

    if (operator == '+'){
        return add(numOne,numTwo);
    }
    if (operator == '-') {
        return subtract(numOne,numTwo);
    }
    if (operator == '*') {
        return multiply(numOne,numTwo);
    }
    if (operator == '/') {
        return divide(numOne,numTwo);
    }
}

function populateScreen(pop) {
    if (start && pop != 'all-clear' ){
        document.getElementById('calculator-screen').value = pop;
        first = pop;
        start = false;
    }
    else {
        if (pop == '+' || pop == '-' || pop == '/' || pop == '*' && operator == '') {
            document.getElementById('calculator-screen').value += pop;
            operator = pop;
            document.getElementById("equals").disabled = false;

        }
        else if (pop == '=') {
            if (operator != '' && second == ''){
                total = operate(parseFloat(first), parseFloat(first), operator);
                document.getElementById('calculator-screen').value = total;
                first = total; 
                second = ''
                operator = '';
                document.getElementById("equals").disabled = true;
            }
            else if (operator == '') {

            }
            else { 
                total = operate(parseFloat(first), parseFloat(second), operator);
                document.getElementById('calculator-screen').value = total;
                first = total; 
                second = ''
                operator = '';
                document.getElementById("equals").disabled = true;
            }

        }
        else if (pop == 'all-clear'){
            document.getElementById('calculator-screen').value = "0";
            first = "";
            second = "";
            document.getElementsByClassName("decimal")[0].disabled = false;
            document.getElementById("equals").disabled = false;
            start = true;
        }
        else if (pop == '.') {
            if (second == '') {
                document.getElementById('calculator-screen').value += pop;
                document.getElementsByClassName("decimal")[0].disabled = true;
                first += pop;
            }
            else {
                document.getElementById('calculator-screen').value += pop;
                document.getElementsByClassName("decimal")[0].disabled = true;
                second +=  pop;
            }
            
        }
        else if (operator == '') {
            if (second == ''){
                document.getElementById('calculator-screen').value += pop;
                first += pop; 
            }
            else {
                first += pop;
                document.getElementById('calculator-screen').value = pop;
            }
            
            
        }
        else {
            if (document.getElementById("equals").disabled == true) {
                document.getElementById('calculator-screen').value = pop;
                second += pop;
                document.getElementsByClassName("decimal")[0].disabled = false;
            }
            else {
                second += pop;
                document.getElementById('calculator-screen').value = second;
                document.getElementsByClassName("decimal")[0].disabled = false;
            }
        }
    }
}

function isNumber(value) {
    return !isNaN(value) && isFinite(value);
  }

buttons.forEach(function (i){
    i.addEventListener('click',function(){
        populateScreen(i.value);
    })
})
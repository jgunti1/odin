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
    return (numOne + numTwo);
}
function subtract(numOne,numTwo) {
    return (numOne - numTwo);
}
function multiply(numOne,numTwo) {
    return (numOne * numTwo);
}
function divide(numOne,numTwo) {
    return (numOne / numTwo);
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
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function populateScreen(pop) {
    if (start && pop != 'all-clear' ){
        document.getElementById('calculator-screen').value = pop;
        first = pop;
        start = false;
    }
    else {
        if (pop == '+' || pop == '-' || pop == '/' || pop == '*' && operator == '') {
            //console.log("6");
            document.getElementById('calculator-screen').value += pop;
            operator = pop;
            document.getElementById("equals").disabled = false;

        }
        else if (pop == '=') {
            //console.log("5");
            if ((first == '0' && second == '0') || second == '0') {
                document.getElementById('calculator-screen').value = 'stop';
                console.log(first);
                console.log(second);
                console.log(operator);
            }
            else {
                if (operator != '' && second == ''){
                    //console.log('5.1');
                    total = operate(parseFloat(first), parseFloat(first), operator);
                    if (isFloat(total)) {
                        //console.log(total);
                        total = total.toPrecision(7);
                        document.getElementById('calculator-screen').value = total;
                    }
                    else {
                        document.getElementById('calculator-screen').value = total;
                    }
                    first = total; 
                    second = ''
                    operator = '';
                    document.getElementById("equals").disabled = true;
                }
                else if (operator == '') {
                    //console.log('5.2');
                }
                else { 
                    //console.log('5.3');
                    console.log(first, second);
                    total = operate(parseFloat(first), parseFloat(second), operator);
                    if (isFloat(total)) {
                        console.log(total);
                        total = total.toPrecision(7);
                        document.getElementById('calculator-screen').value = total;
                    }
                    else {
                        document.getElementById('calculator-screen').value = total;
                    }
                    first = total; 
                    second = ''
                    operator = '';
                    document.getElementById("equals").disabled = true;
                }
            }

        }
        else if (pop == 'all-clear'){
            //console.log("4");
            document.getElementById('calculator-screen').value = "0";
            first = '';
            second = '';
            document.getElementsByClassName("decimal")[0].disabled = false;
            document.getElementById("equals").disabled = false;
            start = true;
        }
        else if (pop == '.') {
            //console.log("3");
            if (second == '') {
                document.getElementById('calculator-screen').value += parseInt(pop);
                document.getElementsByClassName("decimal")[0].disabled = true;
                first += pop;
            }
            else {
                document.getElementById('calculator-screen').value += parseInt(pop);
                document.getElementsByClassName("decimal")[0].disabled = true;
                second +=  pop;
            }
            
        }
        else if (operator == '') {
            //console.log("1");
            if (second == '' && document.getElementById('equals').disabled == false){
                document.getElementById('calculator-screen').value += parseInt(pop);
                first += pop; 
            }
            else {
                document.getElementById('calculator-screen').value = parseInt(pop);
                first = '';
                first += pop;
            }
            
            
        }
        else {
            //console.log("2");
            if (second == '' && operator == '') {
                // After a user enters an equation, they click any number
                // we need to change the screen to be that number
                // Order of events: 7, +, 1, equals, 8, 9
                // 9 should clear the screen
                document.getElementById('calculator-screen').value = parseInt(pop);
                document.getElementsByClassName("decimal")[0].disabled = false;
            }
            else {
                second += pop;
                document.getElementById('calculator-screen').value = parseInt(second);
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
    });
    
})

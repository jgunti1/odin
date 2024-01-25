// Variables
var numOne = 0;
var strOne='';
var numTwo= 0;
var strTwo = '';
var operator='';
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
    calcScr.value = '0';
    numOne = 0;
    strOne = '';
    numTwo = 0;
    strTwo = '';
    operator = null;

}
var numButtons = document.getElementsByClassName("num");
for (var i = 0; i < numButtons.length; i ++) {
	numButtons[i].addEventListener('click',displayNumbers,false);
}
// This function displays each individual number when they are clicked on in the calculator screen
function displayNumbers() {
	var num =this.value;
	var display = document.getElementById('calc-screen'); 
	display.value += num;
	

}
//(i.value != '+' || i.value != '-' || i.value != '/' ||i.value != '*')
//&& operator ==null  //&& i.value != '='
buttons.forEach(function (i){
    i.addEventListener('click',function(){
      
        if (i.value == 'all-clear'){
            clear();
        }
        
         
        // else if (operator != null && i.value != '=') {
        //     numTwo = parseFloat(i.value);
        //     strTwo += i.value;
        //     calcScr.value = strTwo;
        // }
        
        
    })
})


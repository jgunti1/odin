// Variables
var numOne = '';
var strOne='';
var numTwo= '';
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

}
//(i.value != '+' || i.value != '-' || i.value != '/' ||i.value != '*')
//&& operator ==null  //&& i.value != '='
buttons.forEach(function (i){
    i.addEventListener('click',function(){
      
        if (i.value == 'all-clear'){
            clear();
            numOne = 0;
            numTwo = 0;
            operator = null;
        }
        else if ( !Number.isNaN(i.value)  ){
            numOne += parseInt(i.value);
            strOne += i.value;
            calcScr.value = strOne;
        }
        else if (i.value == '+' || i.value == '-' || i.value == '/' ||
        i.value == '*') {
            
            operator = i.value;
            calcScr.value += operator;
            
         }
         console.log(calcScr.value);
        // else if (operator != null && i.value != '=') {
        //     numTwo = parseFloat(i.value);
        //     strTwo += i.value;
        //     calcScr.value = strTwo;
        // }
        
        
    })
})


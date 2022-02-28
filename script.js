function operate(a, b, op){
    if(op === "add"){res =  a+b};
    if(op === "subtract"){res = a-b}
    if(op === "multiply"){res =  a*b}
    if(op === "divide"){res = a/b === Infinity ? "Get outta here!":a/b}

    currentResult = res;
    display.textContent = currentResult;
}


function clear(){
    display.textContent = "";
    currentNumber = "";
    currentOperands = [];
    currentOperation = "none";
}

function getNumber(e){
    this.classList.add('clicked');
    n = this.innerHTML;
    currentNumber += n;
    display.textContent += n;
}


function getOperation(e){
    op = this;
    op.classList.add('clicked');

    if(op.id === "clear"){
        clear();
        return
    }

    if(op.id != "equals"){
        display.textContent += op.innerHTML;
        currentOperation = op.id;
        console.log(currentOperands.length)
        
        // currentOperands[0] = Number(currentNumber);
        currentOperands.push(Number(currentNumber));
        currentNumber = "";

        // console.log(currentOperands)

        if(currentOperands.length == 2){
            display.textContent += op.innerHTML;
            operate(currentOperands[0], currentOperands[1], currentOperation);
            
        } 
    }

    if(op.id === "equals"){
        currentOperands[1] = Number(currentNumber); 
        if(currentOperands.length === 2 && currentOperation != "none"){
            operate(currentOperands[0], currentOperands[1], currentOperation);
            currentOperation = "none";
        } else {
            clear();
            display.textContent = "You missed something";
        }
    } 
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked')
}


const display = document.querySelector("#calcScreen p")
const buttons = document.querySelectorAll(".calcButton")
const numbers = document.querySelectorAll(".calcNo")
const equal = document.querySelector("equals")
let currentNumber = "";
let currentOperands = [];
let currentOperation = "none";
let currentResult = "";


numbers.forEach(number => number.addEventListener('click', getNumber))
numbers.forEach(number => number.addEventListener('transitionend', removeTransition))

buttons.forEach(button => button.addEventListener('click', getOperation))
buttons.forEach(button => button.addEventListener('transitionend', removeTransition))



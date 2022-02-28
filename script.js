function operate(a, b, op){
    if(op === "add"){return a+b};
    if(op === "subtract"){return a-b}
    if(op === "multiply"){return a*b}
    if(op === "divide"){
        return a/b === Infinity ? "Get outta here!":a/b}
}


function clear(){
    display.textContent = "";
    currentOperands = [];
    currentOperation = "none";
}

function getNumber(e){
    this.classList.add('clicked');
    n = Number(this.innerHTML);

    if(currentOperands.length == 1 && currentOperation === "none"){
        return
    }

    if(currentOperands.length == 2){
        return
    }
    
    currentOperands.push(n);
    display.textContent += n;
}


function getOperation(e){
    op = this;
    op.classList.add('clicked');
    if(op.id === "clear"){
        clear();
        return
    } else if(op.id === "equals"){
        if(currentOperands.length === 2 && currentOperation != "none"){
            res = operate(currentOperands[0], currentOperands[1], currentOperation);
            currentResult = res;
            display.textContent = currentResult;
            currentOperands = [currentResult];
        } else {
            clear();
            display.textContent = "You missed something";
        }
    } else{
        if(currentOperands.length == 2){
            res = operate(currentOperands[0], currentOperands[1], currentOperation);
            currentResult = res;
            display.textContent = currentResult;
            currentOperands = [currentResult];
            
        } 
        
        display.textContent += op.innerHTML;
        currentOperation = op.id;
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
let currentOperands = [];
let currentOperation = "none";
let currentResult = "";


numbers.forEach(number => number.addEventListener('click', getNumber))
numbers.forEach(number => number.addEventListener('transitionend', removeTransition))

buttons.forEach(button => button.addEventListener('click', getOperation))
buttons.forEach(button => button.addEventListener('transitionend', removeTransition))



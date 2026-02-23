function sum(num1,num2) {
    return num1 + num2
}

function subtract(num1,num2) {
    return num1 - num2
}

function multiply(num1,num2) {
    return num1 * num2
}

function divide(num1,num2) {
    return num1 / num2
}

let total = 0;
let nextNum = 0;
let selectedOperator = "";
let isResultDisplayed = false

function operate(operator,num1,num2) {
    if (operator == "+") {
        return sum(num1,num2)
    };
    if (operator == "-") return subtract(num1,num2);
    if (operator == "*") return multiply(num1,num2);
    if (operator == "/") return divide(num1,num2);
}

function operatorDecide(operator) {
    if (total === 0) {
    selectedOperator = operator;
    total = +display.value;
    } else {
    nextNum = +display.value;
    total = operate(selectedOperator, total, nextNum);
    isResultDisplayed = true;
    selectedOperator = "+";
    }

    display.placeholder = total;
    display.value = "";
    nextNum = 0;
}

let display = document.getElementById("display-screen");
const numbersPad = document.querySelectorAll(".nmbr");
const clearNums = document.getElementById("clear");
const operatorAdd = document.getElementById("plus");
const operatorMinus = document.getElementById("minus");
const operatorMultiply = document.getElementById("multiply");
const operatorDivide = document.getElementById("divide");
const equalOperator = document.getElementById("result");

operatorAdd.addEventListener("click", () => {operatorDecide("+")})
operatorMinus.addEventListener("click", () => {operatorDecide("-")})
operatorMultiply.addEventListener("click", () => {operatorDecide("*")})
operatorDivide.addEventListener("click", () => {operatorDecide("/")})
equalOperator.addEventListener("click", () => {
    if (nextNum == "") {
        nextNum = +display.value
    };
    total = operate(selectedOperator,total,nextNum)
    display.placeholder = total
    display.value = ""
})

clearNums.addEventListener("click", () => {
    display.value = "";
    display.placeholder = 0
    total = 0;
    tempNum = 0;
})

numbersPad.forEach(pad => pad.addEventListener("click", () => {
    if (isResultDisplayed === true) {
        display.value = "0";
        isResultDisplayed = false;
    }
    if (display.value.length === 1 && display.value == 0) {
        display.value = ""
        display.value += +pad.textContent    
    } else {
        display.value += pad.textContent
    }
    
    
}))
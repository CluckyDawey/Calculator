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

let display = document.getElementById("display-screen");
const numbersPad = document.querySelectorAll(".nmbr");
const clearNums = document.getElementById("clear");
const operatorAdd = document.getElementById("plus");
const operatorMinus = document.getElementById("minus");
const operatorMultiply = document.getElementById("multiply");
const operatorDivide = document.getElementById("divide");
const equalOperator = document.getElementById("equal");

operatorAdd.addEventListener("click", () => {
    if (total == 0) {
        selectedOperator = "+";
        total = +display.textContent;
        display.textContent = "";
    } else if (selectedOperator != "+") {
        nextNum = +display.textContent
        total = operate(selectedOperator,total,nextNum);
        display.textContent = total;
        nextNum = 0;
        isResultDisplayed = true;
        selectedOperator = "+";
    } else if (selectedOperator == "+" && +display.textContent != total) {
        nextNum = +display.textContent;
        total = operate("+",total,nextNum);
        display.textContent = total;
        nextNum = 0;
        isResultDisplayed = true;
        selectedOperator = "+";
    }
})

clearNums.addEventListener("click", () => {
    display.textContent = "";
    total = 0;
    tempNum = 0;
})

numbersPad.forEach(pad => pad.addEventListener("click", () => {
    if (isResultDisplayed === true) {
        display.textContent = "";
        isResultDisplayed = false;
    }
    display.textContent += pad.textContent
}))
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

let firstNum = 0;
let secondNUm = 0;
let selectedOperator = "";

function operate(operator,num1,num2) {

}

let display = document.getElementById("display-screen");
const numbersPad = document.querySelectorAll(".nmbr")
const clearNums = document.getElementById("clear")
clearNums.addEventListener("click", () => display.textContent = "")

numbersPad.forEach(pad => pad.addEventListener("click", () => display.textContent += pad.textContent))
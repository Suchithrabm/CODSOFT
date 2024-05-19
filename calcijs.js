let displayValue = '0';
let operator = '';
let operand1 = null;
let operand2 = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    operator = op;
    operand1 = parseFloat(displayValue);
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    operand2 = parseFloat(displayValue);
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }
    displayValue = result.toString();
    updateDisplay();
}

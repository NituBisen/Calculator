let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
    if (currentInput === '0' && num !== '.') currentInput = '';
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    const lastChar = currentInput[currentInput.length - 1];
    if ('+-*/%'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += op;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
        currentInput = result.toString();
        updateDisplay();
    } catch {
        currentInput = 'Error';
        updateDisplay();
        currentInput = '';
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
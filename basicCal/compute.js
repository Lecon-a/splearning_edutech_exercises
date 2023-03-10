const displayResult = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');
const miniDisplay = document.querySelector('.mini--display');

let firstNumber = 0, secondNumber = 0;
let op;

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        if (e.target.textContent === 'C') {
            reset();
        } else if (e.target.textContent === '.') {
            displayResult.textContent.includes('.') ? displayResult.textContent : displayResult.textContent += '.';
        } else if (displayResult.textContent === '0' || displayResult.textContent === '') {
            displayResult.textContent = e.target.textContent;
        } else {
            displayResult.textContent += e.target.textContent;
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (displayResult.textContent === '') {
            return
        } else if (e.target.textContent === '=') {
            compute();
        }
        else {
            op = e.target.textContent;
            let v = displayResult.textContent += op;
            //check if an operator is present in the array
            let text = getDigit(v);
            firstNumber = parseFloat(text)
            miniDisplay.textContent = firstNumber + " " + op + " ";
            displayResult.textContent = '0';
        }
    })
})

const getDigit = (value) => {
    let text = "";
    for (const x of value) {
        if (!isNaN(x)) {
            text += x;
        } else if (x === '.') {
            text += x;
        }
    }
    return text;
}

const reset = () => {
    displayResult.textContent = '0';
    miniDisplay.textContent = '';
}

const compute = () => {
    let v = displayResult.textContent;
    let text = getDigit(v);
    secondNumber = parseFloat(text)
    miniDisplay.textContent += secondNumber;
    switch (op) {
        case '+':
            displayResult.textContent = firstNumber + secondNumber;
            break;
        case '-':
            displayResult.textContent = firstNumber - secondNumber;
            break;
        case '*':
            displayResult.textContent = firstNumber * secondNumber;
            break;
        case '/':
            displayResult.textContent = firstNumber / secondNumber;
            break;
        default:
            break;
    }
}























 if (display.innerHTML.length === 11) {
             if (digit.innerHTML === 'C') {
                display.innerHTML = '0';
                miniDisplay.innerHTML = '';
                dotIsClicked = false;
            }
            return;
        }
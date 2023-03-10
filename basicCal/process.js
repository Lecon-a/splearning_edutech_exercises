const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');
const miniDisplay = document.querySelector('.mini--display');

const body = document.querySelector('body');

let dotIsClicked = false;
let firstNumber, secondNumber, op;

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        // check the value clicked if it is C => clear
       
        if (digit.innerHTML === 'C') {
            display.innerHTML = '0';
            miniDisplay.innerHTML = '';
            dotIsClicked = false;
            console.log(dotIsClicked);
        } else {
            if (digit.innerHTML === '.') {
                if (!dotIsClicked) {
                    dotIsClicked = true;
                    console.log(dotIsClicked);
                    display.innerHTML += digit.textContent;
                }
            } else {
                 if (display.innerHTML === '0') {
                    display.innerHTML = digit.textContent;
                } else {
                    display.innerHTML += digit.textContent;
                }
            }
        }  
    });
});

operators.forEach((operator) => { 
    operator.addEventListener('click', () => {
        if (operator.innerHTML === '=') {
            let answer;
            secondNumber = display.innerHTML;
            miniDisplay.innerHTML += " " + secondNumber;
            if (op === '+') {
                answer = parseFloat(firstNumber) + parseFloat(secondNumber);
            } else if (op === '-') {
                answer = parseFloat(firstNumber) - parseFloat(secondNumber);
            } else if (op === '*') {
                answer = parseFloat(firstNumber) * parseFloat(secondNumber);
            } else if (op === '/') {
                answer = parseFloat(firstNumber) / parseFloat(secondNumber);
            }

            display.innerHTML = "" + answer.toFixed(3).substring(0, 11);
            dotIsClicked = true;
            
        } else {
            firstNumber = display.innerHTML;
            op = operator.innerHTML;
            miniDisplay.innerHTML = firstNumber + " " + op;
            display.innerHTML = '0';
            dotIsClicked = false;
        }
    })
});
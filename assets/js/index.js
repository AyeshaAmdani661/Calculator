const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        }
        else if (item.id == 'backspace') {
            let str = display.innerText.toString();
            display.innerText = str.substr(0, str.length - 1);
        }
        else if (display.innerHTML != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        else if (display.innerHTML == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        }
        else {
            display.innerText += item.id;
        }
    }
});
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
const body = document.querySelector('body');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    themeToggleBtn.innerText='Dark'
    isDark = !isDark;
}

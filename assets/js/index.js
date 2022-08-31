const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.value = '';
        }
        else if (item.id == 'backspace') {
            let str = display.value.toString();
            display.value = str.substr(0, str.length - 1);
        }
        else if (item.id == '%') {
            display.value = display.value / 100;
        }
        else if (item.id == '+/-') {
            display.value = -(display.value);
        }
        else if (display.value != '' && item.id == 'equal') {
            display.value = eval(display.value);
        }
        else if (display.value == '' && item.id == 'equal') {
            display.value = 'Empty!';
            setTimeout(() => (display.value = ''), 2000);
        }
        else {
            display.value += item.id;
        }
    }
});
const simCalc = document.querySelector('#simple');
const sciCalc = document.querySelector('#scientific');
simpleCalc = () => {
    simCalc.style.display = 'block';
    sciCalc.style.display = 'none';
    document.getElementById('sim').style.display='none';
    document.getElementById('sci').style.display='block';
}
scientificCalc = () => {    
    simCalc.style.display = 'none';
    sciCalc.style.display = 'block';
    document.getElementById('sci').style.display='none';
    document.getElementById('sim').style.display='block';
}


const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const darkThemeOfTogglerIcon = document.querySelector('.dark-theme');
const lightThemeOfTogglerIcon = document.querySelector('.light-theme');
const body = document.querySelector('body');
// let isDark = true;
darkThemeOfTogglerIcon.addEventListener('click', () => {
    lightThemeOfTogglerIcon.style.display = 'block';
    darkThemeOfTogglerIcon.style.display = 'none';
    body.style.backgroundColor = '#071115';
})
lightThemeOfTogglerIcon.addEventListener('click', () => {
    darkThemeOfTogglerIcon.style.display = 'block';
    lightThemeOfTogglerIcon.style.display = 'none';
    body.style.backgroundColor = 'white';
})
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
}

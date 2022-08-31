const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
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
        else if (item.id == 'power') {
            display.value = Math.pow(display.value,2);
        }
        else if (item.id == 'cube') {
            display.value = Math.pow(display.value,3);
        }
        else if (item.id == 'pi') {
            display.value = (display.value * 3.14159265359).toFixed(9);
        }
        else if (item.id == 'e') {
            display.value = (display.value * 2.71828182846).toFixed(9);
        }
        else if (item.id == 'log') {
            display.value = (Math.log(display.value)).toFixed(9);
        }
        else if (item.id == 'sin') {
            display.value = (Math.sin(display.value)).toFixed(9);
        }
        else if (item.id == 'cos') {
            display.value = (Math.cos(display.value)).toFixed(9);
        }
        else if (item.id == 'tan') {
            display.value = (Math.tan(display.value)).toFixed(9);
        }
        else if (item.id == 'square') {
            display.value = (Math.sqrt(display.value)).toFixed(9);
        }
        else if (item.id == 'half') {
            display.value = display.value / 2;

        }
        else if (item.id == 'fact') {
            var i, num, f;
            f = 1;
            num = display.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            i = i - 1;
            display.value = f;
            f.toFixed(9)
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
            display.value += item.innerHTML;
        }
    });
});

const simCalc = document.querySelector('#simple');
const sciCalc = document.querySelector('#scientific');
const sim = document.querySelector('#sim');
const sci = document.querySelector('#sci');

sim.addEventListener('click', () => {
    simpleCalc();
});

sci.addEventListener('click', () => {
    scientificCalc();
});

simpleCalc = () => {
    simCalc.style.display = 'block';
    sciCalc.style.display = 'none';
    sim.style.display = 'none';
    sci.style.display = 'block';
}

scientificCalc = () => {
    simCalc.style.display = 'none';
    sciCalc.style.display = 'block';
    sim.style.display = 'block';
    sci.style.display = 'none';
}

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const darkThemeOfTogglerIcon = document.querySelector('.dark-theme');
const lightThemeOfTogglerIcon = document.querySelector('.light-theme');
const body = document.querySelector('body');

darkThemeOfTogglerIcon.addEventListener('click', () => {
    lightThemeOfTogglerIcon.style.display = 'block';
    darkThemeOfTogglerIcon.style.display = 'none';
    body.style.backgroundColor = '#071115';
});

lightThemeOfTogglerIcon.addEventListener('click', () => {
    darkThemeOfTogglerIcon.style.display = 'block';
    lightThemeOfTogglerIcon.style.display = 'none';
    body.style.backgroundColor = 'white';
});

themeToggleBtn.addEventListener('click', () => {
    calculator.classList.toggle('dark');
});
document.addEventListener('DOMContentLoaded', () => {
    //Stage of calculation : 0 Init  1 Fnum  2 Operator  3 Snum  4 Result
    //pressCount Number of button presses
    const calcBody = document.getElementById('calculatorBody');
    const display = document.getElementById('display');
    let stage = 0;
    let pressCount = 0;
    let decimal = false;
    let fnum = '', operator = '', snum = '';
    
    //Function declarations
    function clear() {
        stage = 0;
        pressCount = 0;
        decimal = false;
        display.innerText = '';
        fnum = '', operator = '', snum = '';
    }

    function equal() {
        if (fnum === '') return;
        else if (snum === '') display.innerText = fnum;
        else {
            switch (operator) {
                case 'div':
                    display.innerText = (parseFloat(fnum) / parseFloat(snum)).toFixed(4);
                    break;
                case 'mult':
                    display.innerText = (parseFloat(fnum) * parseFloat(snum)).toFixed(4);
                    break;
                case 'sub':
                    display.innerText = (parseFloat(fnum) - parseFloat(snum)).toFixed(4);
                    break;
                case 'add':
                    display.innerText = (parseFloat(fnum) + parseFloat(snum)).toFixed(4);
                    break;
            }
        }
    }

    calcBody.addEventListener('click', (e) => {
        display.innerText = 'num';
        const button = e.target;
        switch (stage) {
            case 0:
                if (button.matches('.num')) {
                    fnum = button.value;
                    display.innerText = fnum;
                    pressCount++;
                    stage++;
                }
                break;
            case 1:
                if (button.matches('.num') || button.matches('.zero')) {
                    fnum.concat(button.value);
                    pressCount++;
                }
                else if (button.matches('.decimal') && !decimal) {
                    fnum = fnum.concat(button.value);
                    decimal = true;
                }
                else if (button.matches('#clear')) clear();
                else if (button.matches('#backspace')) backspace();
                else if (button.matches('#equal')) equal();
                else if (button.matches('.operator')) {
                    operator = button.value;
                    stage++;
                }
                break;
            case 2:
                if (button.matches('.operator')) {
                    operator = button.value();
                }
                else if (button.matches('.num')) {
                    snum = button.value;
                    pressCount++;
                    stage++;
                }
                else if (button.matches('#clear')) clear();
                else if (button.matches('#backspace')) backspace();
                else if (button.matches('#equal')) equal();
                break;
            case 3:
                if (button.matches('.num') || button.matches('.zero')) {
                    snum = snum.concat(button.value);
                    pressCount++;
                }
                else if (button.matches('.decimal') && !decimal) {
                    snum = snum.concat(button.value);
                    decimal = true;
                }
                else if (button.matches('#clear')) clear();
                else if (button.matches('#backspace')) backspace();
                else if (button.matches('#equal')) equal();
                break;
        }
    });
});
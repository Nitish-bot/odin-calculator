document.addEventListener('DOMContentLoaded', () => {
    const calcBody = document.getElementById('calculatorBody');
    let stage = 0;
    let pressCount = 0;
    let decimal = false;
    let fnum = '', operator = '', snum = '';
    //Stage of calculation : 0 Init  1 Fnum  2 Operator  3 Snum  4 Result
    //pressCount Number of button presses

    function clear() {

    }

    calcBody.addEventListener('click', (e) => {
        const button = e.target;
        switch (stage) {
            case 0:
                if (button.matches('.num')) {
                    fnum.concat(button.value);
                    pressCount++;
                    stage++;
                }
                break;
            case 1:
                if (button.matches('.num') || button.matchess('.zero')) {
                    fnum.concat(button.value);
                    pressCount++;
                }
                else if (button.matches('.decimal') && !decimal) {
                    fnum.concat(button.value);
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
                    snum.concat(button.value);
                    pressCount++;
                    stage++;
                }
                else if (button.matches('#clear')) clear();
                else if (button.matches('#backspace')) backspace();
                else if (button.matches('#equal')) equal();
                break;
            case 3:
                if (button.matches('.num') || button.matchess('.zero')) {
                    fnum.concat(button.value);
                    pressCount++;
                }
                else if (button.matches('.decimal') && !decimal) {
                    fnum.concat(button.value);
                    decimal = true;
                }
                else if (button.matches())
                else if (button.matches('#clear')) clear();
                else if (button.matches('#backspace')) backspace();
                else if (button.matches('#equal')) equal();
        }
    });
});
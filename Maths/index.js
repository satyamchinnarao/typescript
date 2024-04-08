var firstNumber = 0;
var secondNumber = 0;
// addition of 2 numbers
operation('plus', 100, 200);
// Multiplication of 2 numbers
operation('multiply', 100, 200);
// Division of 2 numbers
operation('divide', 100, 200);
// Division Round Down of 2 numbers
operation('dividerounddown', 100, 200);
// Division round up of 2 numbers
operation('divideroundup', 100, 200);
// Biggest Number of 2 numbers
operation('biggest', 100, 200);
// Biggest Number of 2 numbers
operation('biggest', 0, 0);
// invalid Operation
operation('biggestss', 10, 220);
function operation(flag, firstNumber, secondNumber) {
    if (firstNumber > 0 && secondNumber > 0) {
        switch (flag) {
            case 'plus':
                console.log((firstNumber + secondNumber), 'Addition of 2 Numbers');
                break;
            case 'multiply':
                console.log((firstNumber * secondNumber), 'Multiplication of 2 Numbers');
                break;
            case 'divide':
                console.log((firstNumber / secondNumber), 'Division of 2 Numbers');
                break;
            case 'dividerounddown':
                console.log(Math.round(firstNumber / secondNumber), 'Division round Down of 2 Numbers');
                break;
            case 'divideroundup':
                console.log(Math.floor(firstNumber / secondNumber), 'Division round UP of 2 Numbers');
                break;
            case 'biggest':
                console.log(Math.max(firstNumber, secondNumber), 'Biggest no from the 2 Numbers');
                break;
            default:
                console.log('Please provide a Valid Operation to perform');
        }
    }
    else {
        console.log('Both Numbers cant be Zero');
    }
}

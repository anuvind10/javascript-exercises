const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let startSum;
    let endSum;

    //Only allow positive numbers
    if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number" || firstNumber < 0 || secondNumber < 0)  {
        return "ERROR";
    }
    if (firstNumber < secondNumber) {
        startSum = firstNumber;
        endSum = secondNumber;
    }
    else{
        startSum = secondNumber;
        endSum = firstNumber;
    }

    for (let i = startSum; i <= endSum; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;

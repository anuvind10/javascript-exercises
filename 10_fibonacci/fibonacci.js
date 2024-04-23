const fibonacci = function(number) {
    let parsedNumber = parseInt(number);

    if (parsedNumber == 0) return 0;
    
    if (parsedNumber < 0) return "OOPS"
    
    //Create the fibonacci sequence
    let fibSequence = [1,1];
    
    for (let i = 2; i < parsedNumber; i++) {
        fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
    }

    return fibSequence[fibSequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
// fibonacci(5);

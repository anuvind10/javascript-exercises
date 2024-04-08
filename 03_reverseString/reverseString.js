const reverseString = function(sentence) {
    if (typeof(sentence) != "string") return "ERROR"

    sentence = sentence.split("").reverse().join("");
    return sentence;
};

// Do not edit below this line
module.exports = reverseString;

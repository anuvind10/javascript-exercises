const palindromes = function (sentence) {
    let reversedWord = '';
    let actualWord = '';

    //Split the sentence
    let splitSentence = sentence.split(/(\W+)/);

    //Extract just the words
    let words = splitSentence.filter(sentence => /[a-zA-Z]/.test(sentence));

    //Combine each words to form the new string
    for (let i = 0; i < words.length; i++) {
        actualWord += words[i];
    }

    //Create a new reversed string for comparison
    reversedWord = actualWord.split('').reverse().join('');

    return actualWord.toLowerCase() == reversedWord.toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

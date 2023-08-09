const palindromes = function (sentence) {
    let lower = sentence.toLowerCase().replace(/[^a-z0-9]/g,"");
    return lower.split("").reverse().join("")===lower;
};

// Do not edit below this line
module.exports = palindromes;

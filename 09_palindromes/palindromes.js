const palindromes = function (sentence) {
    let noPunc = "";
    for (const char of sentence){
        if (char!==' ' && (char.toLowerCase() != char.toUpperCase() || !isNaN(char))){
            noPunc+=char.toLowerCase();
        }
    }
    if (noPunc===noPunc.split("").reverse().join("")){
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;

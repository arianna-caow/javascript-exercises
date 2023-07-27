const removeFromArray = function(arr,...index) {
    return arr.filter(val => !index.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

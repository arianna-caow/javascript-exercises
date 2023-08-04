const getTheTitles = function(array) {
    arr=[]
    for(const char of array){
        arr.push(Object.values(char)[0]);
    }
    
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;

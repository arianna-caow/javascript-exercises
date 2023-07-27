const removeFromArray = function(arr,...index) {
    index.sort().reverse();
    stringArr=[]
    for (const i of index){
        if (typeof i === 'string'){
            if (arr.indexOf(i)!=-1){
                stringArr.push(i);
            }
        } else if (i <= arr.length) {
            arr.splice(i-1,1);
        }      
    }
    for (const i of stringArr){
        let remove=arr.indexOf(i);
        arr.splice(remove,1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

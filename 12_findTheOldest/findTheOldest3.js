//first edition
const findTheOldest = function(array){
    let age = 0;
    let oldestPerson = array[0];
    for (const person of array){
        let birth = Object.values(person)[1];
        let death = 0;
        if ("yearOfDeath" in person){
            death = Object.values(person)[2];  
        } else{
            death = new Date().getFullYear();
        }
        if (death-birth>age){
            oldestPerson = person;
            age = death-birth;
        }
    }
    return oldestPerson;
}


// Do not edit below this line
module.exports = findTheOldest;
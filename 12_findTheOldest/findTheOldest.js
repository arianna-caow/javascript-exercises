const findTheOldest = function(array) {
    return array.reduce((oldestPerson,curr)=>{
        const currAge = (!curr.yearOfDeath) ? 
            ((new Date).getFullYear() - curr.yearOfBirth)
            :(curr.yearOfDeath - curr.yearOfBirth);
        const oldAge = (oldestPerson.yearOfDeath) ? 
            (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) 
            : (oldestPerson.yearOfBirth) ? 
            ((new Date).getFullYear() - oldestPerson.yearOfBirth)
            :0;
        return (oldAge < currAge) ? curr : oldestPerson;
    },{});
};

// Do not edit below this line
module.exports = findTheOldest;

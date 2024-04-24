const findTheOldest = function(people) {
    let age = [];
    let oldest = 0;
    let index;
    let currentYear = new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {

        //If year of death is undefined for a person, get age at current year
        if (people[i].yearOfDeath == undefined) {
          age[i] = currentYear - people[i].yearOfBirth;
        }
        else {
          age[i] = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        //Find the oldest age
        if (age[i] > oldest) {
          oldest = age[i];
          index = i;
        }
    }

    return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;
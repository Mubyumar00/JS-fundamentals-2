const nameArray = [
    'Umar',
    'Mubarak',
    2037 - 1991,
    'Student',
    ['Michael', 'Peter', 'Steven']
];

const Umar = {
    firstName: 'Umar',
    lastName: 'Mubarak',
    age: 2037 - 1991,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(Umar);
console.log(Umar.lastName); // Dot notation to access properties
console.log(Umar['lastName']); // Bracket notation to access properties

const nameKey = 'Name';
console.log(Umar['first' + nameKey]); // This will work as expected
console.log(Umar['last' + nameKey]); // This will also work as expected
// console.log('first' + nameKey); // This will not work as expected

const interestedIn = prompt("What do you want to know about Umar? Choose between firstName, lastName, age, job, and friends");
if (Umar[interestedIn]) {
    console.log(Umar[interestedIn]);
}

if (Umar[interestedIn]) {
    console.log(Umar.interestedIn);
    
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Adding a new property to the object using dot notation
Umar.location = 'Nigeria';

// Adding a new property to the object using bracket notation
Umar['twitter'] = '@umar_mubarak';
console.log(Umar);
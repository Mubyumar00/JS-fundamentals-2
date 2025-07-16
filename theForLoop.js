// theForLoop.js loops through numbers from 1 to 10  and logs a message for each iteration using a for loop. 
for (let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}

const names = ['Jonas', 'Martha', 'Adam', 2037-1991, 'student', ['john', 'doe'], true];
// Looping through the names array and logging each name
for (let i = 0; i < names.length; i++) {
    console.log(names[i], typeof names[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i =0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


// Continue and break statements in loops
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < names.length; i++) {
    // Continue to the next iteration if the current element is not a string
    if (typeof names[i] !== 'string') continue;
    console.log(names[i], typeof names[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < names.length; i++) {
    // Break the loop if the current element is a number
    if (typeof names[i] === 'number') break;
    console.log(names[i], typeof names[i]);
}

// Looping backwards 
for(let i = names.length - 1; i >= 0; i--) {
    console.log(i, names[i]);
}

// Loops in Loops
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}
'use strict';

// function logger() {
//     console.log('my first Logger');
// }

// running, invoking or calling the logger function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
    
// }
// calling the function with arguments
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declaration vs Function Expression

// Function Declaration
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
// }
// console.log(age2(1991));

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// ARROW FUNCTION 
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};
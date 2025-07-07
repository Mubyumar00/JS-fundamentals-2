'use strict';

// const RETIREMENT_AGE = 65;

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

// Function Declaration // function calcAge1(birthYear) {
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
// const calculateAge = birthYear => 2025 - birthYear;
// const age3 = calculateAge(1991);
// console.log(age3);

// const getYearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = RETIREMENT_AGE - age;
//     return `${firstName} retires in ${retirement} years.`;
// };

// console.log(getYearsUntilRetirement(1991, 'John'));
// console.log(getYearsUntilRetirement(1980, 'Jane'));


// Function calling another function
// function cutFruitPieces(fruit) {
//     return fruit * 4;   
    
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// Another example of function calling another function. Making sandwich by slicing bread and cheese.

// function sliceIngredient(ingredient) {
//     return ingredient * 2; // Assuming each ingredient is sliced into 2 pieces
// }

// function makeSandwich(breadSlices, cheeseSlices) {
//     const slicedBread = sliceIngredient(breadSlices);
//     const slicedCheese = sliceIngredient(cheeseSlices);

//     const sandwich = `Sandwich with ${slicedBread} slices of bread and ${slicedCheese} slices of cheese.`;
//     return sandwich;
// }
// console.log(makeSandwich(2, 3)); // Example usage


// Another example of function calling another function.  building a salad by chopping vegetables into smaller pieces.
// function chopVegetable(vegetable) {
//     return vegetable * 3; // Assuming each vegetable is chopped into 3 pieces
// }

// function makeSalad(tomatoes, cucumbers) {
//     const choppedTomatoes = chopVegetable(tomatoes);
//     const choppedCucumbers = chopVegetable(cucumbers);

//     const salad = `Salad with ${choppedTomatoes} pieces of tomatoes and ${choppedCucumbers} pieces of cucumbers.`;
//     return salad;
// }
// console.log(makeSalad(2, 4)); // Example usage


// Example calculating retirement age, calling a function inside another function.
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const yearsUntilRetirement = function (_birthYear, _firstname) {
//     const age = calcAge(_birthYear)
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${_firstname} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${_firstname} has already retired 🎉.`);
//         return -1; // Indicating retirement has already occurred
//     }
// }
// console.log(yearsUntilRetirement(1991, 'John')); // John retires in 40 years.
// console.log(yearsUntilRetirement(1950, 'Jane')); // Jane has already retired 🎉.




// // Calculate average time for Student A and Student B
// const avgStudentA = calcAverageTime(2, 3, 4);
// const avgStudentB = calcAverageTime(3, 2, 5);

// console.log(`Average homework focus time of Student A: ${avgStudentA} hours`);
// console.log(`Average homework focus time of Student B: ${avgStudentB} hours`);

// Function to check who focused more on homework
// const checkFocusWinner = (avgStudentA, avgStudentB) => {
//     if (avgStudentA > avgStudentB) {
//         console.log(`Student A focused more on homework (${avgStudentA} hours vs ${avgStudentB} hours)`);
//     } else if (avgStudentB > avgStudentA) {
//         console.log(`Student B focused more on homework (${avgStudentB} hours vs ${avgStudentA} hours)`);
//     } else {
//         console.log(`Both students focused equally on homework (${avgStudentA} hours)`);
//     }
// }
// checkFocusWinner(avgStudentA, avgStudentB);


// Comparing Average Salary of Two Employees 
// const calcAverageSalary = (salary1, salary2, salary3) => (salary1 + salary2 + salary3) / 3;

// Calculate average salaries for two employees
// const avgSalaryA = calcAverageSalary(500, 550, 600);
// const avgSalaryB = calcAverageSalary(700, 680, 710);

// console.log(`average salary of Employee A: $${avgSalaryA}`);
// console.log(`average salary of Employee B: $${avgSalaryB}`);

// // Function to check who has a higher average salary
// const checkSalaryWinner = (avgSalaryA, avgSalaryB) => {
//     if (avgSalaryA > avgSalaryB) {
//         console.log(`Employee A has a higher average salary ($${avgSalaryA} vs $${avgSalaryB})`);
//     } else {
//         console.log(`Employee B has a higher average salary ($${avgSalaryB} vs $${avgSalaryA})`);
//     }
// }
// checkSalaryWinner(avgSalaryA, avgSalaryB);


// Comparing Average Speed of Two Cars
// const calcAverageSpeed = (speed1, speed2, speed3) => (speed1 + speed2 + speed3) / 3;

// // Calculate average speeds for two cars
// const avgSpeedCarA = calcAverageSpeed(60, 70, 80);
// const avgSpeedCarB = calcAverageSpeed(75, 85, 90);

// console.log(`Average speed of Car A: ${avgSpeedCarA} km/h`);
// console.log(`Average speed of Car B: ${avgSpeedCarB} km/h`);

// // Function to check which car is faster
// const checkSpeedWinner = (avgSpeedCarA, avgSpeedCarB) => {
//     if (avgSpeedCarA > avgSpeedCarB) {
//         console.log(`Car A is faster (${avgSpeedCarA} km/h vs ${avgSpeedCarB} km/h)`);
//     } else {
//         console.log(`Car B is faster (${avgSpeedCarB} km/h vs ${avgSpeedCarA} km/h)`);
//     }
// }
// checkSpeedWinner(avgSpeedCarA, avgSpeedCarB);

//  exercise

//  const testsAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//  avg for test scores
//  const testA = testsAvg(44, 23, 71);
//     const testB = testsAvg(65, 54, 49);

//     console.log(`Test A average: ${testA}`);
//     console.log(`Test B average: ${testB}`);

// // Function to check the winner based on average scores
// const checkWinner = (avgA, avgB) => {
//     if (avgA >= 2 * avgB) {
//         console.log(`Team A wins (${avgA} vs ${avgB})`);
//     } else if (avgB >= 2 * avgA) {
//         console.log(`Team B wins (${avgB} vs ${avgA})`);
//     } else {
//         console.log(`No team wins (${avgA} vs ${avgB})`);
//     }
// }
// checkWinner(testA, testB);


// INTRODUCTION TO ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
console.log(friend1, friend2, friend3);

 const friends = ['Michael', 'Steven', 'Peter'];
 console.log(friends);
 console.log(friends.length); // Length of the array
 console.log(friends[2]); // Accessing the third element
 console.log(friends[0]); // Accessing the first element

friends[2] = 'Jay'; // Changing the third element
console.log(friends[2]); // Now it should print 'Jay'

const firstName = 'Mubarak';
const mubarak = [firstName, 'Umar', 2025 - 1991, friends];
console.log(mubarak);
console.log(mubarak.length); // Length of the mubarak array

// Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [1991, 1995, 2000, 2005];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]); // Last element in the array
console.log(age1, age2, age3);

